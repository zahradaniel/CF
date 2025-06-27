import Link from "next/link"
import { Scissors } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full py-6 md:py-8 border-t">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Scissors className="h-5 w-5 text-neon" />
          <span className="text-lg font-bold">ClipFarm</span>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm hover:text-neon transition-colors">
            Terms
          </Link>
          <Link href="#" className="text-sm hover:text-neon transition-colors">
            Privacy
          </Link>
          <Link href="#" className="text-sm hover:text-neon transition-colors">
            Cookies
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} ClipFarm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
