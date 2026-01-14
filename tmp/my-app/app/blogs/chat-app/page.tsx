import { Navigation } from "@/components/navigation"
import { MarkdownContent } from "@/components/markdown-content"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ChatAppBlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blogs
        </Link>

        <article>
          <header className="mb-12 pb-8 border-b border-border">
            <time className="text-sm text-muted-foreground font-mono">2025/12/26</time>
            <h1 className="text-4xl font-bold mt-4 mb-6 text-balance text-foreground">チャットアプリを作ってみた</h1>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Go</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">WebSocket</Badge>
              <Badge variant="secondary">gRPC</Badge>
            </div>
          </header>

          <MarkdownContent>
            <section className="mb-12">
              <h2>はじめに</h2>
              <p>最近チャットアプリを作成した（作成途中）ので、その機能や特徴について紹介したいと思います。</p>
              <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg border border-border not-prose">
                <Github className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium mb-1">実装したリポジトリ</p>
                  <a
                    href="https://github.com/nomanoma121/chat-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    nomanoma121/chat-app
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2>アプリの概要</h2>
              <p>このチャットアプリは、簡単に言うとDiscordのようなものです。UIなどもかなりDiscordに似せています。</p>
              <div className="bg-muted/30 p-4 rounded-lg border border-border mb-6 not-prose">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  動画を貼れるのが一番良いのですが、まだ動画貼り付けがこのサイトではできないので画像で紹介します。もし動いているものが見たい場合は、直接サイトにアクセスしてみてください。
                </p>
              </div>

              <h3>主な機能</h3>
              <ul>
                <li>サーバーの作成・参加・招待</li>
                <li>チャンネル、カテゴリの作成</li>
                <li>リアルタイムでのメッセージ送受信</li>
                <li>アイコン画像のアップロード・表示</li>
              </ul>

              <div className="space-y-6 not-prose">
                <div>
                  <p className="text-sm text-muted-foreground mb-3">
                    画像での簡単な紹介です。下が一番メインとなるチャット画面です。Discordを知っていればどこに何が表示しているかがわかると思います。
                  </p>
                  <div className="rounded-lg overflow-hidden border border-border bg-muted/20">
                    <Image
                      src="/discord-like-chat-interface-with-sidebar--channels.jpg"
                      alt="チャット画面"
                      width={800}
                      height={400}
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-3">
                    左のサイドバーでチャンネルの作成を選択するとこのような画面がでて、チャンネルであったりカテゴリの作成ができます。
                  </p>
                  <div className="rounded-lg overflow-hidden border border-border bg-muted/20">
                    <Image
                      src="/channel-creation-modal-dialog-with-form-inputs.jpg"
                      alt="チャンネル作成画面"
                      width={600}
                      height={400}
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-3">
                    サーバーへの招待も行うことができて、期限であったり、使用回数も制限できます。発行した招待リンクを踏むことでサーバーに参加できます。
                  </p>
                  <div className="rounded-lg overflow-hidden border border-border bg-muted/20">
                    <Image
                      src="/server-invitation-interface-with-expiration-and-us.jpg"
                      alt="招待画面"
                      width={600}
                      height={300}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2>技術スタック</h2>

              <h3>フロントエンド</h3>
              <ul>
                <li>
                  <strong>TypeScript:</strong> 開発言語
                </li>
                <li>
                  <strong>ParkUI:</strong> Panda CSSをベースにしたUIライブラリ
                </li>
                <li>
                  <strong>WebSocket:</strong> チャットのリアルタイム通信に使用
                </li>
                <li>
                  <strong>Orval:</strong> OpenAPIからReactのHooksを生成
                </li>
              </ul>

              <h3>バックエンド</h3>
              <ul>
                <li>
                  <strong>Go:</strong> 開発言語
                </li>
                <li>
                  <strong>gRPC Gateway:</strong> protoからGatewayのコードを一部生成
                </li>
                <li>
                  <strong>WebSocket:</strong> チャットのリアルタイム通信に使用
                </li>
                <li>
                  <strong>PostgreSQL:</strong> データベース
                </li>
                <li>
                  <strong>Sqlc:</strong> SQLからデータベースを操作するコードを生成
                </li>
                <li>
                  <strong>Protocol Buffers:</strong> API定義
                </li>
                <li>
                  <strong>chi:</strong> API GatewayのJWT認証用のミドルウェアを定義する際に使用
                </li>
              </ul>
              <p className="text-sm italic">基本的にバックエンドを力を入れて開発していたのでバックエンド多めです。</p>

              <h3>その他</h3>
              <ul>
                <li>
                  <strong>Grafana:</strong> メトリクスの可視化
                </li>
                <li>
                  <strong>Prometheus:</strong> メトリクスの収集
                </li>
                <li>
                  <strong>Tempo:</strong> トレーシングツール
                </li>
                <li>
                  <strong>Loki:</strong> ログ収集ツール
                </li>
                <li>
                  <strong>Alloy:</strong> メトリクスを監視するツール。データの保存はしない。
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2>アーキテクチャ</h2>
              <p>
                アーキテクチャ図を書いてみたかったので一通り現状を書いてみました。図が複雑になりそうだったので書いていませんが、各サービス間はgRPCで通信しています。また一部はRedisのキャッシュを効かせていたりしています。
              </p>
              <div className="rounded-lg overflow-hidden border border-border bg-muted/20 mb-6 not-prose">
                <Image
                  src="/microservices-architecture-diagram-with-api-gatewa.jpg"
                  alt="アーキテクチャ図"
                  width={800}
                  height={600}
                  className="w-full"
                />
              </div>

              <h3>アプリケーション</h3>
              <h4>API Gateway</h4>
              <p>JWTの検証を行ったり、HTTPリクエストを受け付けて、各サービスにgRPCでリクエストを送信します。</p>

              <h4>User Service</h4>
              <p>ユーザー登録・管理、JWTの発行を行っています。</p>

              <h4>Guild Service</h4>
              <p>サーバーの作成、メンバの管理、チャンネル・カテゴリの管理、招待リンクの発行などを行っています。</p>

              <h4>Message Service</h4>
              <p>
                メッセージの作成などを行っています。作成したメッセージはRedisにPublishするだけで、リアルタイムにはここでは配信しません。RestAPIでのメッセージの取得などはここで行えます。
              </p>

              <h4>Realtime Service</h4>
              <p>Message ServiceからのメッセージをSubscribeし、WebSocketでクライアントに配信します。</p>

              <h4>Media Service</h4>
              <p>
                署名付きURLの発行などを行います。配信自体はMinioなどのオブジェクトストレージ自体で行うので、現状だとすることは署名のみです。時間があれば画像のリサイズなどもできるといいなと思っています。
              </p>

              <h3>モニタリング</h3>
              <p>
                ちょっとまえにMinecraftサーバーをGrafanaでモニタリングするのをやって、そのときにかなりダッシュボードは気に入っていたので、今回作ったアプリでもやってみたいということで導入しました。
              </p>
              <p>
                特にk6などの負荷テストで遊んでいるときに、各サービスの推移が見れて楽しかったです。一番監視しててびっくりしたのが、User
                Serviceが想像以上にCPUを使っていることです。いろいろ原因を探していると、JWTの生成にかなりCPUを使っていたのが原因で、負荷テストをしてみて初めて知ることも多く面白かったです。
              </p>
            </section>

            <section className="mb-12">
              <h2>大変だったこと</h2>
              <p>
                一番大変だったのはやはり初めのバックエンドの設計でした。Goでの開発もそこまで経験もなく、gRPCを使ったマイクロサービスの設計も初めてだったので、どのレベルでサービスを切り分けるか、DBはサービスごとに分けるかなど、いろいろ悩んだ記憶があります。
              </p>
              <p>
                そして、フレームワークやライブラリの選定などもなかなか迷うことが多く、決まらないときには最終的には自分の思想というか、直感を信じて選定しました。特にORMを使うか迷ったのですが、最終的にはSqlcというライブラリを使うことにしました。型安全にDBを操作して、かつボイラーテンプレートコードを自動生成できてかなり開発体験がよかったです。
              </p>
              <p>
                また、WebSocketでの認証の方式もどうしようか迷いました。URLにJWTを付与して送信する方法などはよくありますが、URLにできればトークンは含めたくないと思っていたので、なにかいい方法がないかなといろいろ探した記憶があります。WebSocketの初回接続時のHTTPのヘッダーにはAutorizationヘッダーを含めることができないので、最終的にはWebSocket接続確立時の初回メッセージでJWTを送信して、一定時間以内に認証が成功しなければ接続を切断するという方法を取りました。
              </p>
              <p>
                そしてかなり長いこと開発をしているのでモチベの維持も大変でした。開発のモチベが上がらないときもありましたが、定期的に友達に使ってもらったりすることで、やる気を引き出せた気がします。
              </p>
            </section>

            <section>
              <h2>まとめ</h2>
              <p>
                今回作成したチャットアプリは、自分にとってかなり大きなプロジェクトでした。バックエンドの設計からフロントエンドの実装、インフラの構築まで、一通り経験できたのは非常に良い経験になりました。
              </p>
              <p>まだまだ実装したい機能はたくさんあるので、今後も継続的に開発していきたいと思います。</p>
            </section>
          </MarkdownContent>
        </article>
      </main>
    </div>
  )
}
