"use client";

import { useState } from "react";
import {
  AppDialog,
  AppDialogContent,
  AppDialogDescription,
  AppDialogHeader,
  AppDialogTitle,
} from "@viana/ui";
import { AppButton } from "@viana/ui";

export function DialogDefaultPreview() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppButton onClick={() => setOpen(true)}>Open Dialog</AppButton>
      <AppDialog open={open} onOpenChange={setOpen}>
        <AppDialogContent>
          <AppDialogHeader>
            <AppDialogTitle>Dialog Title</AppDialogTitle>
            <AppDialogDescription>
              This is a dialog description. It provides more context about the dialog.
            </AppDialogDescription>
          </AppDialogHeader>
        </AppDialogContent>
      </AppDialog>
    </>
  );
}
