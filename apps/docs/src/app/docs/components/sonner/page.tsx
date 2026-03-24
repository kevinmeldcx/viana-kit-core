import { Metadata } from "next"
import { SonnerDemo } from "./sonner-demo"

export const metadata: Metadata = {
  title: "Sonner - Viana Kit",
  description: "A modern toast component for React.",
}

export default function SonnerPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Sonner
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          A modern toast component built with sonner.
        </p>
      </div>
      <SonnerDemo />
    </div>
  )
}