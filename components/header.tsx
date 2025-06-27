import Link from "next/link"
import { Scissors } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Scissors className="h-6 w-6 text-neon" />
          <span className="text-xl font-bold">ClipFarm</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="#features" className="text-sm font-medium hover:text-neon transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-neon transition-colors">
            Pricing
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-neon transition-colors">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button variant="outline" className="hidden md:flex">
            Log In
          </Button>
          <Button className="bg-neon text-black hover:bg-neon/80">Join Waitlist</Button>
        </div>
      </div>
    </header>
  )
}
