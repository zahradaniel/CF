import { Button } from "@/components/ui/button"
import WaitlistModal from "@/components/waitlist-modal"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-neon to-neon/70">
              Turn Streams Into Viral Clips Instantly
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              ClipFarm uses AI to automatically detect and clip the most engaging moments from your streams. Get more
              views, grow your audience, and save time.
            </p>
            <p className="mx-auto max-w-[700px] text-neon font-medium mt-2 md:text-lg">
              Powered by AI trained on 10,000+ hours of stream data
            </p>
          </div>
          <div className="space-x-4">
            <WaitlistModal />
            <Button className="text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute -z-10 h-full w-full top-0 left-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.15),transparent_45%)]"></div>
    </section>
  )
}
