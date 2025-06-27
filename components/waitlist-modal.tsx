"use client"

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { toast } from "@/hooks/use-toast"
import { supabase } from "@/lib/supabaseClient"

export default function WaitlistModal() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const { error } = await supabase
  .from("waitlist_subscribers")
  .insert({ email })

if (error) {
  toast({
    title: "Something went wrong",
    description: error.message,
    variant: "destructive",
  })
} else {
  toast({
    title: "Success!",
    description: "You’ve been added to the waitlist. Welcome aboard!",
  })
  setEmail("")
}
setIsSubmitting(false)

  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-neon text-black hover:bg-neon/80">
          Join Waitlist
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-black text-white border border-neon/30 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Be the First to Know</DialogTitle>
          <DialogDescription className="text-gray-400">
            Get early access to ClipFarm and 50% off for life.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button
            type="submit"
            className="bg-neon text-black hover:bg-neon/80"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Joining..." : "Join Waitlist"}
          </Button>
          <p className="text-xs text-center text-gray-400">No spam, ever.</p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
