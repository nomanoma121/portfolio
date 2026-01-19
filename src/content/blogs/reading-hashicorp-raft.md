---
title: hashicorp/raftを読んだ時のメモ
description: hashicorp/raftを少しだけ読んだので気づいたことを簡単に書きます
date: 2026-01-19
---

# はじめに

最近分散システムに興味があるということでRaftを実装するみたいなことをやっていて、実際のOSSではどうなっているのか気になったので思ったことを簡単にメモしていきます。

以下のリポジトリの`raft.go`を少し読んだだけなので簡単なメモ程度です

https://github.com/hashicorp/raft

# 気づいたこと

## アーキテクチャ

まだ簡単に読んだだけなので完全には理解していませんが、メインループで各状態を監視していました。
```go
// run the main thread that handles leadership and RPC requests.
func (r *Raft) run() {
	for {
		// Check if we are doing a shutdown
		select {
		case <-r.shutdownCh:
			// Clear the leader to prevent forwarding
			r.setLeader("", "")
			return
		default:
		}

		switch r.getState() {
		case Follower:
			r.runFollower()
		case Candidate:
			r.runCandidate()
		case Leader:
			r.runLeader()
		}
	}
}
```

Raftではリーダー、候補者、そしてフォロワが存在し、状態をよく行き来することがあります。状態を変化させたい時に`setState(Leader)`のようにすることで自動で処理を切り替えてくれるようになっていて面白いなと思いました。

## Prevoteについて

自分は以下の記事を読んでRaftについて勉強をしたのですが、今回コードを読んでいる中でPrevoteという存在を知りました。

https://eli.thegreenplace.net/2020/implementing-raft-part-0-introduction/

普通のRaftだと、自分が候補者になる際に自分のタームを一つ進めてRequestVoteしますが、このせいで本来クラスタとして正常にリーダーが動作しているのにも関わらず、タームが進んだことでリーダーを変更され、全体のターム進めないといけなくなります。全体を同期させるのはクラスタに対して負荷を与え、リクエストの遅延などにつながります。

このような問題を回避するためにPrevoteというものがあります。Prevoteは実際に選挙をする前に自分が立候補するべきかどうかを確かめるたため、タームを進めずに周りに投票を求めます。これにより、自分が今選挙するべきかどうかを確認します。投票を求められた各ノードは直近でリーダーとの通信ができているかどうかを確認し、安定して通信を行なっている場合はNOを返します。これにより今クラスタが安定している場合の不要な立候補を防ぎ、クラスタの混乱を防ぐことができます。

実際のコードでは以下のような形になっていて、候補者になった場合、まずPrevoteを行なっていました。
```go
// runCandidate runs the main loop while in the candidate state.
func (r *Raft) runCandidate() {
	term := r.getCurrentTerm() + 1
	r.logger.Info("entering candidate state", "node", r, "term", term)
	metrics.IncrCounter([]string{"raft", "state", "candidate"}, 1)

	// Start vote for us, and set a timeout
	var voteCh <-chan *voteResult
	var prevoteCh <-chan *preVoteResult

	// check if pre-vote is active and that this is not a leader transfer.
	// Leader transfer do not perform prevote by design
	if !r.preVoteDisabled && !r.candidateFromLeadershipTransfer.Load() {
        // ここでPrevoteを行う
		prevoteCh = r.preElectSelf()
	} else {
		voteCh = r.electSelf()
	}

    // 以下続く...
```

Leader Transferはクラスタの構成を変更する際やシャットダウン前など、現在のリーダーが別のノードに対してリーダーを移譲する処理です。この場合は明示的に選挙を行うためPrevoteは行いません。

## Raftの構成変更時のリーダーの挙動

Raftのリーダー時のループは以下のようになっていました。

```go
func (r *Raft) leaderLoop() {
    // ...

    for r.getState() == Leader {
        select {
        case // ...


        case <-r.leaderState.commitCh:
            // コミットを行う処理

        case // ...
        // ...
        }
    }
}
```

ここで過半数のノードがコミット可能になった時に`<-r.leaderState.commitChan`に通知が来て処理行います。実際にcaseの中のコードを読んでいると面白いコードがありました。

```go
case <-r.leaderState.commitCh:
    r.mainThreadSaturation.working()
    // Process the newly committed entries
    oldCommitIndex := r.getCommitIndex()
    commitIndex := r.leaderState.commitment.getCommitIndex()
    r.setCommitIndex(commitIndex)

    // New configuration has been committed, set it as the committed
    // value.
    // ここ　↓
    if r.configurations.latestIndex > oldCommitIndex &&
        r.configurations.latestIndex <= commitIndex {
        r.setCommittedConfiguration(r.configurations.latest, r.configurations.latestIndex)
        if !hasVote(r.configurations.committed, r.localID) {
            stepDown = true
        }
    }
```

ここの条件をよく見ていると二つの条件があります。`oldCommitIndex`は前回まで確定させたコミットのインデックス、`commitIndex`はクラスタの過半数でコミットをすることができるコミットのインデックスです。

- `r.configuratiaons.latestIndex > oldCommitIndex`: 最新のクラスタの構成を変更したコミットのインデックスが前回のコミットインデックスより大きいか
    
    => 今回のコミットでクラスタの構成変更が行われたか
- `r.configurations.latestIndex <= commitIndex`: 最新のクラスタの構成を変更したコミットのインデックスが今回確定させるコミットインデックス以下か
    
    => 今回のコミットで確定させるコミットかどうか

つまり今回確定させるコミットに構成変更が含まれているかどうかを確認しています。そしてその中の`hasVote()`は指定したノードが投票権を持っているかどうかをチェックする関数です。投票権を持っていない場合、選挙に参加することができません。つまりRaftのクラスタから外れたことになります。(一応データのレプリケーションなどは行うかもしれないです)

ここで`!hasVote(r.configurations.committed, r.localID)`で自身に投票権を確認して、ない場合は`stepDown`をtrueにしています。コードの下の方を見ていくと、`stepDown`がtrueの場合、フォロワに降格する処理をしていました。

```go
if stepDown {
    if r.config().ShutdownOnRemove {
        r.logger.Info("removed ourself, shutting down")
        r.Shutdown()
    } else {
        r.logger.Info("removed ourself, transitioning to follower")
        r.setState(Follower)
    }
}
```

こうしてわかるのは、リーダー自身はクラスタの構成が変更された時に自身の名簿を確認し、自分がいないことを悟ったら自らリーダーを降りているということです。ここの自分が投票してコミットされる内容を確認したら自分がリストからいなくなっていて、その後に自分からこっそりいなくなるという挙動が少し悲しいというか面白いと思いました。

# まとめ

少しですが、OSSのRaftの実装を読んでみました。Raftの実装を一度自分でしていると意外とコードが読めて自分の実装との相違を見ていく感じが結構楽しかったです。自分のRaftではスナップショットなどが実装されていないので、まだ実装できていない機能がどのような実装になっているかなどこれから少しずつ読み進めて勉強していきたいと思います。