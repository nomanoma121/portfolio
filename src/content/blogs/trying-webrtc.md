---
title: WebRTCについてわからなかったことのメモ
description: WebRTCの仕組みについてのメモです。
date: 2026-01-27
---

# はじめに

今回はWebRTCについて勉強したのでわからなかったところを中心にまとめます。一部厳密には間違っている可能性もあるので参考程度にお願いします。

# WebRTC

WebRTCとは、音声や映像などをリアルタイムで通信するための仕組みのことです。一般にP2P(Peer to Peer)で行われます。

よく出てくる単語と簡単な意味

- シグナリングサーバー: P2P接続を張るための事前調整を中継するサーバー
- ICE Candidate: ICEはInteractive Connectivity Establishmentの略。送受信するための候補となる通信経路(IPアドレスとポート番号の組み合わせ)のこと。
- TURNサーバー: Traversal Using Relays around NATの略。P2Pを張れない時にTURNサーバーを経由してWebRTC接続を行う。
- STUNサーバー: STUNはSession Traversal Utilities for NATの略。自分のグローバルIPを知るためにリクエストするサーバーのこと。
- NAT越え: NAT Traversalとも呼ばれる。 NAT配下の端末に対して通信経路を確保させる手法のこと。

以下は自分が最初わからなかったことについてまとめました。

## ICE Candidateの検証はどうやって行うのか

シグナリングサーバーを経由してPeer間でICE Candidateを交換し合いますが、どれが最適なのか、繋がるか繋がらないかはどうやって検証しているかということです。
結論から言うと、ICE Candidateの候補ペアごとにSTUN Binding Requestで疎通確認を行い、成功した経路の中から優先度の高いものが選ばれます。
この疎通確認の過程で、それぞれのNATにホールパンチング（穴あけ）が発生し、Peer間の通信が通るようになります。
もう少し詳しく説明すると、NATは外向きに通信する際に対応するポートを一時的に開けます。NATはテーブルのような形式でNATに付与されたグローバルIPとポート番号の組み合わせと、プライベートアドレスを対応づけます。テーブルに追加されると、NAT外部からグローバルIPとポートを指定した時に宛先が見つかるため、適切に振り分けられて、通信したいPeerに通信を送ることが出来ます。

## NATトラバーサルはそもそもセキュリティとしてどうなのか

これは自分だけかもしれないですが、NATはセキュリティのためにあるものと思っていたため、NAT-Tのように無理やりNATを越えるみたいなことってセキュリティ的にできてしまって大丈夫なのかと思っていました。しかし調べてみると、NATはそもそもIPv4の枯渇問題に対応するために導入されたものということを知りました。NAT(Network Address Translation)は名前の通りグローバルIPとプライベートIPの紐付けが役割で、外部からの通信を弾いているように見えるのは紐付けられていないと宛先がわからず通信できないからということです。そのため、仕様としてNATは外部からの通信を弾くために設けられたわけではないため、想定通りの挙動というわけです。

## TURNサーバーとWebRTC接続するのか

TURNサーバーを経由すると聞くと、TURNサーバーとも各PeerがWebRTC接続するのかな？と自分は思っちゃったのですが、TURNサーバーはあくまで中継点で、Peer間の通信がTURN経由で流れる形になります。TURNサーバーでは認証やパーミッション制御などを行うこともできます。

## なぜTURNサーバーを経由すれば通信できるようになるのか

NATの中にSymmetric NATというものがあり、これは宛先IPアドレスによって対応づけされるポートが変更されるため、STUNサーバーで取得したポート番号と、実際に通信したい相手から送られてきたパケットが通れるポートが異なり、うまくNATを越えることが出来ないことがあります。TURNサーバー経由でデータをやり取りすることにより、各Peerは到達可能なTURNサーバーと通信し、TURNサーバーが中継することでNATを越えることができます。

## 参考文献

- [https://webrtcforthecurious.com/ja/](https://webrtcforthecurious.com/ja/)
- [https://imageflux.sakura.ad.jp/column/webrtc/](https://imageflux.sakura.ad.jp/column/webrtc/)
- [https://developer.mozilla.org/ja/docs/Glossary/ICE](https://developer.mozilla.org/ja/docs/Glossary/ICE)
