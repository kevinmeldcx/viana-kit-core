import { Metadata } from "next"
import { ToastDemo } from "./toast-demo"

export const metadata: Metadata = {
  title: "Toast - Viana Kit",
  description: "Displays a callout for user attention.",
}

export default function ToastPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Toast
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Displays a callout for user attention.
        </p>
      </div>
      <ToastDemo />
    </div>
  )
}