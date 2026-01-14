import Link from "next/link"
import { Github, Twitter } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export function Navigation() {
  return (
    <header className="border-b border-border bg-primary backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold text-primary-foreground hover:text-primary-foreground/80 transition-colors"
          >
            nomanoma121
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/works"
              className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              Works
            </Link>
            <Link
              href="/blogs"
              className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              Blogs
            </Link>
            <div className="flex items-center gap-4 ml-4 border-l border-primary-foreground/20 pl-4">
              <ThemeToggle />
              <a
                href="https://github.com/nomanoma121"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://x.com/sobur1al"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
