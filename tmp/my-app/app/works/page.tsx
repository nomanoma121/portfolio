import { Navigation } from "@/components/navigation"
import Link from "next/link"
import Image from "next/image"

const works = [
  {
    title: "ポートフォリオ",
    description: "Next.jsを用いて作成しました。",
    href: "https://github.com/nomanoma121/portfolio",
    image: "/modern-portfolio-website.png",
  },
  {
    title: "リバースプロキシ",
    description: "NginxとDockerを使用して簡単なリバースプロキシを構築しました。",
    href: "https://github.com/nomanoma121/nginx-reverse-proxy",
    image: "/nginx-reverse-proxy-architecture.jpg",
  },
  {
    title: "Splatoon-Discord-Bot",
    description: "スプラトゥーン3のスケジュールをAPIを用いてDiscord上から取得できます。",
    href: "https://github.com/nomanoma121/splatoon-discord-bot",
    image: "/discord-bot-interface-splatoon.jpg",
  },
  {
    title: "Twitterのクローンサイト",
    description: "フロントエンドをReact、バックエンドをGoとMySQLを使って実装しました。",
    href: "https://github.com/nomanoma121/twitter-clone-app",
    image: "/twitter-clone-social-media-interface.jpg",
  },
  {
    title: "ライフゲーム",
    description: "Reactを用いてライフゲームを作成しました。",
    href: "https://github.com/nomanoma121/life-game-app",
    image: "/conway-game-of-life-grid-pattern.jpg",
  },
]

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="mb-12 border-b border-border pb-12">
          <h1 className="text-4xl font-bold mb-4">Works</h1>
          <p className="text-muted-foreground">それぞれクリックするとGitHubのリポジトリに遷移します。</p>
        </div>

        <div className="space-y-8">
          {works.map((work, index) => (
            <>
              <Link key={index} href={work.href} target="_blank" rel="noopener noreferrer" className="block group">
                <div className="flex gap-6 items-start border-l-2 border-transparent hover:border-primary transition-all duration-300 pl-6">
                  <div className="w-64 h-40 bg-muted rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={work.image || "/placeholder.svg"}
                      alt={work.title}
                      width={256}
                      height={160}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0 pt-2">
                    <h2 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                      {work.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">{work.description}</p>
                  </div>
                </div>
              </Link>
              {index < works.length - 1 && <div className="border-t border-border" />}
            </>
          ))}
        </div>
      </main>
    </div>
  )
}
