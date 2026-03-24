import { Metadata } from "next"
import { FormDemo } from "./form-demo"

export const metadata: Metadata = {
  title: "Form - Viana Kit",
  description: "Form components with validation using react-hook-form.",
}

export default function FormPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Form
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Form components built on top of react-hook-form with validation support.
        </p>
      </div>
      <FormDemo />
    </div>
  )
}