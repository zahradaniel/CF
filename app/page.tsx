import { FileUpload } from "@/components/file-upload"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PricingCards } from "@/components/pricing-cards"
import { TrustSignals } from "@/components/trust-signals"
import { WaitlistCTA } from "@/components/waitlist-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex flex-col items-center">
        <Hero />
        <FileUpload />
        <PricingCards />
        <TrustSignals />
        <WaitlistCTA />
      </main>
      <Footer />
    </div>
  )
}
