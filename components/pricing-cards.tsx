import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function PricingCards() {
  return (
    <section className="w-full py-12 md:py-24" id="pricing">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Choose the plan that's right for you. All plans include a 14-day free trial.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <CardDescription>Perfect for content creators just getting started</CardDescription>
                <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                  $9
                  <span className="ml-1 text-xl font-medium text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-left">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-neon" />
                    <span>5 hours of content per month</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-neon" />
                    <span>Up to 10 clips per video</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-neon" />
                    <span>720p export quality</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-neon" />
                    <span>Basic analytics</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Join Waitlist</Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col border-neon relative">
              <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-neon px-3 py-1 text-xs font-semibold text-black">
                MOST POPULAR
              </div>
              <CardHeader>
                <CardTitle>Creator</CardTitle>
                <CardDescription>For serious content creators and streamers</CardDescription>
                <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                  $29
                  <span className="ml-1 text-xl font-medium text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-left">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-neon" />
                    <span>20 hours of content per month</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-neon" />
                    <span>Unlimited clips per video</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-neon" />
                    <span>1080p export quality</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-neon" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-neon" />
                    <span>Custom thumbnails</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-neon" />
                    <span>Priority processing</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-neon text-black hover:bg-neon/80">Join Waitlist</Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>For professional streamers and teams</CardDescription>
                <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                  $79
                  <span className="ml-1 text-xl font-medium text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-left">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-neon" />
                    <span>Unlimited content</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-neon" />
                    <span>Unlimited clips</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-neon" />
                    <span>4K export quality</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-neon" />
                    <span>Advanced analytics & reporting</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-neon" />
                    <span>Multi-platform publishing</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-neon" />
                    <span>API access</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-neon" />
                    <span>Dedicated support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Join Waitlist</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
