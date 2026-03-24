import { Metadata } from "next"
import { AlertDialogDemo } from "./alert-dialog-demo"

export const metadata: Metadata = {
  title: "Alert Dialog - Viana Kit",
  description: "A modal dialog that interrupts the user and requires a response.",
}

export default function AlertDialogPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Alert Dialog
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          A modal dialog that interrupts the user and requires a response.
        </p>
      </div>
      <AlertDialogDemo />
    </div>
  )
}