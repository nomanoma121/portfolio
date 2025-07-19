---
title: DIコンテナをつかってみた
description: DIコンテナを使ってみた感想や学びをまとめます。
date: 2025-07-19
---

## はじめに

最近DIコンテナというものがあると知ったので、実際に使ってみて学んだことや感想をまとめていきたいと思います。

DI(Dependency Injection)については割愛します。

実装したリポジトリはこちらです  
[nomanoma121/di-container-tutorial](https://github.com/nomanoma121/di-container-tutorial)

## DIコンテナとは

DIコンテナは、クラスの依存関係を管理し、インスタンス化するときにいい感じに必要なクラスを注入してくれる仕組みです。これにより、依存関係が複雑な場合でも、手動で依存関係を解決する必要がなくなります。

### DIコンテナを使わない場合

たとえば以下のような簡易的な投稿サービスを考えてみます。この例だと`PostService`に`PostRepository`を注入しています。

```typescript
interface IPostRepository {
    findAll(): string[];
    add(post: string): void;
}

class PostService {
    // 依存関係を注入するためのコンストラクタ
    constructor(private postRepository: IPostRepository) {}

    getAllPosts(): string[] {
        return this.postRepository.findAll();
    }

    createPost(post: string): void {
        this.postRepository.add(post);
    }
}

class PostRepository implements IPostRepository {
    private posts: string[] = [];

    findAll(): string[] {
        return this.posts;
    }

    add(post: string): void {
        this.posts.push(post);
    }
}

// postServiceを使うときは、直接依存するインスタンスを渡す必要がある
const postRepository = new PostRepository();
// インスタンスを渡すことにより依存関係を注入
const postService = new PostService(postRepository);

// メソッドを呼び出す
postService.createPost('Hello, DI!');
postService.createPost('Hello, TypeScript!');
// 出力
console.log(postService.getAllPosts()); // ['Hello, DI!', 'Hello, TypeScript!']
```

このコードだと依存関係が複雑になってくると、`PostService`を使うたびに毎回手動で依存先を渡す必要があり、コードが冗長になってしまいます。

これから紹介するDIコンテナを使うと、依存関係を自動的に解決してくれるので、コードがすっきりします。

### DIコンテナの実装

さっきのコードをDIコンテナを使って書き直してみます。今回は[tsyringe](https://github.com/microsoft/tsyringe)というDIコンテナライブラリを使います。tsyringeはTypeScriptで書かれた軽量なDIコンテナで、デコレーターを使って依存関係を定義できます。

```typescript
import 'reflect-metadata';
import { container, injectable } from 'tsyringe';

interface IPostRepository {
    findAll(): string[];
    add(post: string): void;
}

@injectable()
class PostRepository implements IPostRepository {
    private posts: string[] = [];

    findAll(): string[] {
        return this.posts;
    }

    add(post: string): void {
        this.posts.push(post);
    }
}

@injectable()
class PostService {
    constructor(private postRepository: IPostRepository) {}

    getAllPosts(): string[] {
        return this.postRepository.findAll();
    }

    createPost(post: string): void {
        this.postRepository.add(post);
    }
}

// DIコンテナに依存関係を登録
container.register<IPostRepository>('IPostRepository', { useClass: PostRepository });
container.register<PostService>('PostService', { useClass: PostService });

// DIコンテナからインスタンスを取得
const postService = container.resolve<PostService>('PostService');
// 依存関係が自動的に解決される
postService.createPost('Hello, DI!');
console.log(postService.getAllPosts()); // ['Hello, DI!']
```

`@injectable()`と`@inject()`とあるのはTypeScriptのデコレータと呼ばれるもので、クラスやメソッドにメタデータを追加するための機能です。`@injectable()`で依存関係になりうるクラスに印をつけておき、`@inject()`で注入するクラスを指定します。TypeScriptでは実行時に型情報が失われるため、明示的に依存先を指定する必要があります。(具象クラスを型としている場合は実行時に失われないため省略できます)

また、メタデータを扱うために、reflect-metadataというライブラリを使用しています。これを使うことで、TypeScriptのコンパイル時に生成された型情報（例：コンストラクタ引数の型など）を実行時に取得できるようになります。
これにより、@injectable() や @inject() などのデコレーターを使って、依存関係を解決するための情報（メタデータ）をDIコンテナが利用できるようになります。

今回のようにデコレータを使う場合、`tsconfig.json`に以下のオプションを追加する必要があります。
```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    // 他のオプション...
  }
}
```

内部でどのようなことをやっているのかを簡単に説明すると、まず`container.register()`で依存関係を登録します。ここでは`IPostRepository`と`PostService`を登録しています。次に、`container.resolve()`で使いたいクラスをインスタンス化します。このときに、`@inject()`でこのクラスをインスタンス化するのに必要なクラスを、`@injectable()`で印をつけたクラスから必要なクラスを探すことで、このクラスに必要なクラスを自動でインスタンス化して渡します。このインスタンス化する際にも内部でresolveのような処理を行い、再帰的に必要なインスタンスを生成し、依存関係を解決してくれます。

以下の記事にあるDIコンテナの仕組みの説明がすごくわかりやすかったので、詳しくはそちらを参照してください。この記事では`tsyringe`ではなく、`InversifyJS`を使って解説していますが、基本的な考え方は同じです。

- [TypeScriptによるDependency Injection入門：DIコンテナを自作して内部構造を理解する](https://zenn.dev/spacemarket/articles/8ddba858aa09c2)

## DIコンテナを使うメリット

DIコンテナを使うことで、以下のようなメリットがあります。

- **依存関係の管理が容易**: 依存関係を明示的に定義できるため、コードの可読性が向上します。
- **テストが容易**: 依存関係をモックやスタブに置き換えることで、ユニットテストが容易になります。
- **コードの再利用性が向上**: 依存関係を注入することで、コードの再利用性が向上します。異なる実装を簡単に切り替えるため、柔軟な設計が可能です。

## useFactoryやuseToken

DIコンテナでは、依存関係を登録する際に`useFactory`や`useToken`といったオプションを使うことができます。これらは、依存関係の解決方法をカスタマイズするために使用されます。

- `useFactory`: 依存関係を生成するためのファクトリ関数を指定します。これにより、依存関係の生成ロジックをカスタマイズできます。
- `useToken`: すでに登録されている依存関係に対してエイリアスを付けることができます。これにより、同じインターフェースを持つ異なる実装を簡単に切り替えることができます。

今回は使い方を知るために無理やり`useFactory`と`useToken`を使ってみます。

```typescript
// 一部省略しているため、実装はリポジトリを参照してください。

@injectable()
class PostService {
  constructor(
    @inject("Repo") private repository: IPostRepository,
    @inject("CONFIG") private config: { appName: string; createdAt: string }
  ) {}

  createPost(post: string): void {
    console.log(`[${this.config.appName}] ${this.config.createdAt} - 新しい投稿を作成: ${post}`);
    this.repository.add(post);
  }

  getAllPosts(): string[] {
    console.log(`[${this.config.appName}] 投稿一覧を取得します...`);
    return this.repository.findAll();
  }
}

// 環境変数などを注入するために、useFactoryを使って設定情報を生成
container.register("CONFIG", {
  useFactory: () => {
    return {
      appName: "MiniBlog",
      createdAt: new Date().toLocaleString(),
    };
  },
});

container.register<IPostRepository>("IPostRepository", {
  useClass: InMemoryPostRepository,
});

// Repoを使って呼ばれたものは上のIPostRepositoryを参照する
container.register("Repo", {
  useToken: "IPostRepository",
});

const postService = container.resolve<PostService>("PostService");
postService.createPost("Hello, DI with Factory!");
postService.createPost("Hello, DI with Token!");
console.log(postService.getAllPosts());
```

このコードでは、`PostService`のコンストラクタに`@inject()`デコレーターを使って、`IPostRepository`と`CONFIG`を注入しています。`CONFIG`は環境変数などの設定情報を注入するために、`useFactory`を使って生成しています。また、`Repo`というトークンを使って、実際には`IPostRepository`を参照するようにしています。

## まとめ

今回はDIコンテナを使って依存関係を解決する方法を学びました。DIコンテナを使うことで複雑なコードだととても強力な手法ということはなんとなく感じることができました。まだまだOOPでの開発経験は少ないのですが、DIコンテナに触れてみて少しOOPの理解が深まったように感じます。

今後クラスの依存関係が複雑になってきたときなどには、選択肢の一つとしてDIコンテナを使ってみたいと思います。
