"use client";

import { useState } from "react";
import {
  AppDialog,
  AppDialogContent,
  AppDialogDescription,
  AppDialogHeader,
  AppDialogTitle,
  AppDialogTrigger,
} from "@viana/ui";
import { AppButton } from "@viana/ui";

export function DialogDefaultPreview() {
  return (
    <AppDialog>
      <AppDialogTrigger asChild>
        <AppButton>Open Dialog</AppButton>
      </AppDialogTrigger>
      <AppDialogContent>
        <AppDialogHeader>
          <AppDialogTitle>Dialog Title</AppDialogTitle>
          <AppDialogDescription>
            This is a dialog description. It provides more context about the dialog.
          </AppDialogDescription>
        </AppDialogHeader>
      </AppDialogContent>
    </AppDialog>
  );
}
