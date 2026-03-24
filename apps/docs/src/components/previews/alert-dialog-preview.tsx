"use client";

import { useState } from "react";
import {
  AppAlertDialog,
  AppAlertDialogTrigger,
  AppAlertDialogContent,
  AppAlertDialogHeader,
  AppAlertDialogTitle,
  AppAlertDialogDescription,
  AppAlertDialogFooter,
  AppAlertDialogAction,
  AppAlertDialogCancel,
  AppButton,
} from "@viana/ui";

export function AlertDialogDefaultPreview() {
  const [open, setOpen] = useState(false);

  return (
    <AppAlertDialog open={open} onOpenChange={setOpen}>
      <AppAlertDialogTrigger asChild>
        <AppButton variant="destructive">Delete Account</AppButton>
      </AppAlertDialogTrigger>
      <AppAlertDialogContent>
        <AppAlertDialogHeader>
          <AppAlertDialogTitle>Are you absolutely sure?</AppAlertDialogTitle>
          <AppAlertDialogDescription>
            This action cannot be undone. This will permanently delete your account.
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
  );
}
