"use client"

import { AppButton, toast } from "@viana/ui"

export function ToastDemo() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
          Basic Example
        </h2>
        <p className="text-muted-foreground">Click the button to trigger a toast.</p>
        <div className="rounded-lg border p-8">
          <AppButton
            onClick={() => {
              toast({
                title: "Scheduled: Catch up",
                description: "Friday, February 10, 2024 at 10:30 AM",
              })
            }}
          >
            Show Toast
          </AppButton>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
          Destructive Toast
        </h2>
        <div className="rounded-lg border p-8">
          <AppButton
            variant="destructive"
            onClick={() => {
              toast({
                variant: "destructive",
                title: "Error",
                description: "There was a problem with your request.",
              })
            }}
          >
            Show Destructive Toast
          </AppButton>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
          With Action
        </h2>
        <div className="rounded-lg border p-8">
          <AppButton
            onClick={() => {
              toast({
                title: "Update Available",
                description: "A new version is available. Restart to update.",
                action: (
                  <button className="inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    Restart
                  </button>
                ),
              })
            }}
          >
            Show Toast with Action
          </AppButton>
        </div>
      </div>
    </div>
  )
}