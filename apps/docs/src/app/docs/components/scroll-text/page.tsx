import { Metadata } from "next"
import { AppScrollText } from "@viana/ui"

export const metadata: Metadata = {
  title: "Scroll Text - Viana Kit",
  description: "A component that scrolls text automatically.",
}

export default function ScrollTextPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Scroll Text
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          A component that scrolls text automatically in a specified direction.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
          Scrolling Left
        </h2>
        <div className="rounded-lg border p-8">
          <AppScrollText direction="left" className="text-2xl font-bold">
            <span className="mx-4">Welcome to Viana Kit</span>
            <span className="mx-4">Build faster with shadcn/ui style</span>
            <span className="mx-4">Open source and free to use</span>
          </AppScrollText>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
          Faster Scroll
        </h2>
        <div className="rounded-lg border p-8">
          <AppScrollText direction="right" speed={100} className="text-lg">
            <span className="mx-4">Faster scrolling with speed prop</span>
            <span className="mx-4">Default speed is 50</span>
            <span className="mx-4">Higher numbers = faster</span>
          </AppScrollText>
        </div>
      </div>
    </div>
  )
}