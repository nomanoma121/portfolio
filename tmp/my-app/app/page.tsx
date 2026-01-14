import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-6 py-16 max-w-5xl">
        {/* Hero Section */}
        <section className="mb-24 border-b border-border pb-24">
          <div className="flex items-start gap-6 mb-8">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-3xl font-bold border border-border">
              N
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2 text-balance">nomanoma121</h1>
              <p className="text-xl text-muted-foreground mb-3">Computer Science Student</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Saitama, Japan</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-20 border-b border-border pb-20">
          <h2 className="text-2xl font-bold mb-6">About me</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              埼玉大学工学部情報工学科2年生です。現在は埼玉に住んでいます。
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              高校のころに少しだけプログラミングを触ったことはありましたが、本格的に始めたのは大学に入ってからなので、プログラミング歴はだいたい1年くらいです。
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              大学ではプログラミングサークル
              <a
                href="https://maximum.vc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline mx-1"
              >
                Maximum
              </a>
              に所属しています。今年からは講師としても活動させていただいています。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              今までは主にWeb開発を行っていましたが、最近はインフラ分野にも興味があり、少しずつ学んでいけたらと思っています。
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20 border-b border-border pb-20">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="border-l-2 border-primary pl-6">
            <p className="text-muted-foreground leading-relaxed mb-8">
              主にWeb開発を行っており、TypeScript, Goなどをよく使用しています。
              個人開発ではありますが、フロントエンド、バックエンドの両方経験があります。
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Go</Badge>
                  <Badge variant="secondary">Echo</Badge>
                  <Badge variant="secondary">Hono.js</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                  Infrastructure
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Linux</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">Nginx</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Works */}
        <section className="mb-20 border-b border-border pb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Works</h2>
            <Link href="/works">
              <Button variant="ghost" size="sm" className="gap-2">
                See More
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="space-y-8">
            <Link
              href="https://github.com/nomanoma121/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="flex gap-6 items-start border-l-2 border-transparent hover:border-primary transition-all duration-300 pl-6">
                <div className="w-48 h-32 bg-muted rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src="/modern-portfolio-website.png"
                    alt="ポートフォリオ"
                    width={192}
                    height={128}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    ポートフォリオ
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Next.jsを用いて作成しました。</p>
                </div>
              </div>
            </Link>
            <Link
              href="https://github.com/nomanoma121/nginx-reverse-proxy"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="flex gap-6 items-start border-l-2 border-transparent hover:border-primary transition-all duration-300 pl-6">
                <div className="w-48 h-32 bg-muted rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src="/nginx-reverse-proxy-architecture-diagram.jpg"
                    alt="リバースプロキシ"
                    width={192}
                    height={128}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    リバースプロキシ
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    NginxとDockerを使用して簡単なリバースプロキシを構築しました。
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Recent Blogs */}
        <section className="mb-20 border-b border-border pb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Blogs</h2>
            <Link href="/blogs">
              <Button variant="ghost" size="sm" className="gap-2">
                See More
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="space-y-6">
            <Link href="/blogs/chat-app" className="block group">
              <div className="border-l-2 border-transparent hover:border-primary transition-all duration-300 pl-6 py-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <time className="text-xs text-muted-foreground mb-2 block font-mono">2025/12/26</time>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      チャットアプリを作ってみた
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      チャットアプリを作ったのでどんな機能があるのか紹介します。
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                </div>
              </div>
            </Link>
            <div className="border-t border-border" />
            <Link href="/blogs/di-container" className="block group">
              <div className="border-l-2 border-transparent hover:border-primary transition-all duration-300 pl-6 py-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <time className="text-xs text-muted-foreground mb-2 block font-mono">2025/07/19</time>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      DIコンテナをつかってみた
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      DIコンテナを使ってみた感想や学びをまとめます。
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Timeline/History Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Timeline</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                <div className="w-0.5 h-full bg-border mt-2" />
              </div>
              <div className="flex-1 pb-8">
                <time className="text-sm text-muted-foreground font-mono">2024/04</time>
                <h3 className="font-semibold text-lg mt-2 mb-1">埼玉大学 工学部 情報工学科 入学</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  情報工学科に入学し、プログラミングを本格的に学び始めました。
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                <div className="w-0.5 h-full bg-border mt-2" />
              </div>
              <div className="flex-1 pb-8">
                <time className="text-sm text-muted-foreground font-mono">2024/06</time>
                <h3 className="font-semibold text-lg mt-2 mb-1">プログラミングサークル Maximum 加入</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  大学のプログラミングサークルに加入し、Web開発を中心に学習を開始しました。
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                <div className="w-0.5 h-full bg-border mt-2" />
              </div>
              <div className="flex-1 pb-8">
                <time className="text-sm text-muted-foreground font-mono">2024/12</time>
                <h3 className="font-semibold text-lg mt-2 mb-1">個人開発プロジェクト開始</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  チャットアプリやリバースプロキシなど、様々な個人開発プロジェクトに取り組み始めました。
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0 mt-1.5" />
              </div>
              <div className="flex-1">
                <time className="text-sm text-muted-foreground font-mono">2025/04</time>
                <h3 className="font-semibold text-lg mt-2 mb-1">Maximum 講師就任</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  プログラミングサークルで講師として活動を開始し、後輩への指導を行っています。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
