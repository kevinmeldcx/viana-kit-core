import { Metadata } from "next"
import { ToggleGroupDemo } from "./toggle-group-demo"

export const metadata: Metadata = {
  title: "Toggle Group - Viana Kit",
  description: "A set of two-state buttons that can be toggled together.",
}

export default function ToggleGroupPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Toggle Group
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          A set of two-state buttons that can be toggled together.
        </p>
      </div>
      <ToggleGroupDemo />
    </div>
  )
}