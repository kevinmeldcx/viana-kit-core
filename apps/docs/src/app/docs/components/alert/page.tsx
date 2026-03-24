import { Metadata } from "next"
import { AppAlert, AppAlertTitle, AppAlertDescription } from "@viana/ui"
import { InfoIcon, AlertTriangleIcon, XCircleIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Alert - Viana Kit",
  description: "Displays a callout for user attention.",
}

export default function AlertPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Alert
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Displays a callout for user attention.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
          Default
        </h2>
        <div className="rounded-lg border p-8 space-y-4">
          <AppAlert>
            <InfoIcon className="h-4 w-4" />
            <AppAlertTitle>Default Alert</AppAlertTitle>
            <AppAlertDescription>
              This is a default alert message.
            </AppAlertDescription>
          </AppAlert>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
          Destructive
        </h2>
        <div className="rounded-lg border p-8 space-y-4">
          <AppAlert variant="destructive">
            <XCircleIcon className="h-4 w-4" />
            <AppAlertTitle>Error Alert</AppAlertTitle>
            <AppAlertDescription>
              There was a problem with your request.
            </AppAlertDescription>
          </AppAlert>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
          Warning
        </h2>
        <div className="rounded-lg border p-8 space-y-4">
          <AppAlert className="border-yellow-500 text-yellow-700 dark:border-yellow-400 dark:text-yellow-400">
            <AlertTriangleIcon className="h-4 w-4" />
            <AppAlertTitle>Warning Alert</AppAlertTitle>
            <AppAlertDescription>
              Please review your changes before saving.
            </AppAlertDescription>
          </AppAlert>
        </div>
      </div>
    </div>
  )
}