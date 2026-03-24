import { Metadata } from "next"
import { CollapsibleDemo } from "./collapsible-demo"

export const metadata: Metadata = {
  title: "Collapsible - Viana Kit",
  description: "An interactive component which expands and collapses child content.",
}

export default function CollapsiblePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Collapsible
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          An interactive component for expanding and collapsing content.
        </p>
      </div>
      <CollapsibleDemo />
    </div>
  )
}