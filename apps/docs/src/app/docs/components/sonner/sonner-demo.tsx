"use client"

import { AppButton, sonnerToast } from "@viana/ui"

export function SonnerDemo() {
  return (
    <div className="flex gap-4">
      <AppButton
        onClick={() => {
          sonnerToast.success("Event has been created")
        }}
      >
        Show Success
      </AppButton>
      <AppButton
        onClick={() => {
          sonnerToast.error("Event has been created")
        }}
      >
        Show Error
      </AppButton>
      <AppButton
        onClick={() => {
          sonnerToast("Event has been created")
        }}
      >
        Show Default
      </AppButton>
    </div>
  )
}