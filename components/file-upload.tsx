"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function FileUpload() {
  const [vodLink, setVodLink] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    if (vodLink.trim()) {
      setIsSubmitted(true)
      // ⬇️ Send link to your backend (or console.log for now)
      console.log("Submitted VOD link:", vodLink)
    }
  }

  const resetForm = () => {
    setVodLink("")
    setIsSubmitted(false)
  }

  return (
    <section className="w-full py-12 md:py-24" id="features">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Try It Now</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Paste your VOD link and see the magic happen. We'll analyze your stream and create viral clips in seconds.
            </p>
            <div className="flex items-center justify-center gap-2 my-2">
              <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-neon" />
              <p className="text-sm font-medium text-neon">AI-powered analysis in real-time</p>
            </div>
          </div>

          <Card className="w-full max-w-3xl border-2 border-dashed border-muted-foreground/25 bg-background/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Paste Your Stream Link</CardTitle>
              <CardDescription>Supports YouTube, Twitch, Kick — full stream VODs</CardDescription>
            </CardHeader>
            <CardContent>
              {!isSubmitted ? (
                <div className="flex flex-col items-center justify-center space-y-4">
                  <input
                    type="url"
                    value={vodLink}
                    onChange={(e) => setVodLink(e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="w-full max-w-xl rounded-md border border-muted px-4 py-3 text-sm text-black dark:text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-neon"
                  />
                  <Button className="bg-neon text-black hover:bg-neon/80" onClick={handleSubmit}>
                    Analyze VOD
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center space-y-4">
                  <p className="text-xl font-medium text-green-600">✅ Link submitted successfully</p>
                  <p className="text-sm text-muted-foreground break-all">{vodLink}</p>
                  <Button variant="outline" onClick={resetForm}>
                    Submit another link
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
