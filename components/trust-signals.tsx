import { CheckCircle } from "lucide-react"

export function TrustSignals() {
  return (
    <section className="w-full py-12 bg-background/50 border-y border-neon/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8">
          {/* Platform Support */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Built for all major streaming platforms</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center mb-2">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-white fill-current">
                    <path d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43Z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Twitch</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-2">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-white fill-current">
                    <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">YouTube</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-2">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-white fill-current">
                    <path d="M20.07 6.35H15V5.59a2.5 2.5 0 0 0-2.5-2.5h-1a2.5 2.5 0 0 0-2.5 2.5v.76H3.93a.93.93 0 0 0-.93.93v11.86a.93.93 0 0 0 .93.93h16.14a.93.93 0 0 0 .93-.93V7.28a.93.93 0 0 0-.93-.93zM11.23 12l.46-.79a.5.5 0 0 1 .62-.21l1.11.46c.46.19.67.38.67.72a.63.63 0 0 1-.17.46l-.5.67c-.36.48-.7.51-1.28.51-.58 0-.92 0-1.28-.51l-.5-.67a.63.63 0 0 1-.17-.46c0-.34.21-.53.67-.72l1.11-.46a.5.5 0 0 1 .62.21zm-1.2-6.41a1.26 1.26 0 0 1 1.25-1.25h1a1.25 1.25 0 0 1 1.25 1.25v.76h-3.5z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Kick</span>
              </div>
            </div>
          </div>

          {/* Trust Counter */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 border-t border-neon/10 pt-8 w-full">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-neon" />
              <span className="text-lg font-bold">Trusted by 200+ creators</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-neon" />
              <span className="text-lg font-bold">2M+ clips generated</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-neon" />
              <span className="text-lg font-bold">99.8% accuracy</span>
            </div>
          </div>

          {/* Creator Avatars */}
          <div className="flex flex-col items-center">
            <p className="text-sm text-muted-foreground mb-4">Join our growing community of successful creators</p>
            <div className="flex -space-x-3">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-gradient-to-br"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, hsl(${i * 45}, 80%, 60%), hsl(${i * 45 + 20}, 90%, 50%))`,
                    transform: `translateX(${i * 0.5}px)`,
                  }}
                >
                  <img
                    src={`/placeholder.svg?height=40&width=40&text=${i + 1}`}
                    alt={`Creator ${i + 1}`}
                    className="opacity-0" // Just for placeholder
                  />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-background bg-neon/20 flex items-center justify-center text-neon font-bold text-xs">
                100+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
