import type React from "react"

export function MarkdownContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <div className="markdown-body">{children}</div>
    </div>
  )
}
