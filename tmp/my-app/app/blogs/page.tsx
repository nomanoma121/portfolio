import { Navigation } from "@/components/navigation"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const blogs = [
  {
    date: "2025/12/26",
    title: "チャットアプリを作ってみた",
    description: "チャットアプリを作ったのでどんな機能があるのか紹介します。",
    href: "/blogs/chat-app",
  },
  {
    date: "2025/07/19",
    title: "DIコンテナをつかってみた",
    description: "DIコンテナを使ってみた感想や学びをまとめます。",
    href: "/blogs/di-container",
  },
  {
    date: "2025/04/28",
    title: "ポートフォリオを作りました！",
    description: "ポートフォリオがある程度完成したので記念に書いていきます。",
    href: "/blogs/portfolio",
  },
]

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="mb-12 border-b border-border pb-12">
          <h1 className="text-4xl font-bold mb-4">Blogs</h1>
        </div>

        <div className="space-y-6">
          {blogs.map((blog, index) => (
            <>
              <Link key={blog.href} href={blog.href} className="block group">
                <div className="border-l-2 border-transparent hover:border-primary transition-all duration-300 pl-6 py-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <time className="text-xs text-muted-foreground mb-3 block font-mono">{blog.date}</time>
                      <h2 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                        {blog.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">{blog.description}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                  </div>
                </div>
              </Link>
              {index < blogs.length - 1 && <div className="border-t border-border" />}
            </>
          ))}
        </div>
      </main>
    </div>
  )
}
