"use client"

import { useState } from "react"
import { AppAlertDialog, AppAlertDialogTrigger, AppAlertDialogContent, AppAlertDialogHeader, AppAlertDialogTitle, AppAlertDialogDescription, AppAlertDialogFooter, AppAlertDialogAction, AppAlertDialogCancel, AppButton } from "@viana/ui"

export function AlertDialogDemo() {
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-4">
      <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        Basic Example
      </h2>
      <div className="rounded-lg border p-8">
        <AppAlertDialog open={open} onOpenChange={setOpen}>
          <AppAlertDialogTrigger asChild>
            <AppButton variant="destructive">Delete Account</AppButton>
          </AppAlertDialogTrigger>
          <AppAlertDialogContent>
            <AppAlertDialogHeader>
              <AppAlertDialogTitle>Are you absolutely sure?</AppAlertDialogTitle>
              <AppAlertDialogDescription>
                This action cannot be undone. This will permanently delete your account and remove your data from our servers.
              </AppAlertDialogDescription>
            </AppAlertDialogHeader>
            <AppAlertDialogFooter>
              <AppAlertDialogCancel>Cancel</AppAlertDialogCancel>
              <AppAlertDialogAction onClick={() => setOpen(false)}>
                Continue
              </AppAlertDialogAction>
            </AppAlertDialogFooter>
          </AppAlertDialogContent>
        </AppAlertDialog>
      </div>
    </div>
  )
}