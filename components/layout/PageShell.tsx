import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface PageShellProps {
  children: ReactNode
  width?: "full" | "cards" | "content"
  className?: string
}

export default function PageShell({
  children,
  width = "full",
  className,
}: PageShellProps) {
  const widthClasses = {
    full: "max-w-full",
    cards: "max-w-7xl",
    content: "max-w-4xl",
  }

  return (
    <div className={cn("mx-auto px-6", widthClasses[width], className)}>
      {children}
    </div>
  )
}
