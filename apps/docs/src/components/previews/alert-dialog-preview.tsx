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
          <AppAlertDialogCancel variant="secondary">Cancel</AppAlertDialogCancel>
          <AppAlertDialogAction variant="default" onClick={() => setOpen(false)}>
            Continue
          </AppAlertDialogAction>
        </AppAlertDialogFooter>
      </AppAlertDialogContent>
    </AppAlertDialog>
  );
}

export function AlertDialogDestructivePreview() {
  const [open, setOpen] = useState(false);

  return (
    <AppAlertDialog open={open} onOpenChange={setOpen}>
      <AppAlertDialogTrigger asChild>
        <AppButton variant="destructive">Delete Item</AppButton>
      </AppAlertDialogTrigger>
      <AppAlertDialogContent>
        <AppAlertDialogHeader>
          <AppAlertDialogTitle>Delete this item?</AppAlertDialogTitle>
          <AppAlertDialogDescription>
            This item will be permanently removed and cannot be recovered.
          </AppAlertDialogDescription>
        </AppAlertDialogHeader>
        <AppAlertDialogFooter>
          <AppAlertDialogCancel variant="outline">Cancel</AppAlertDialogCancel>
          <AppAlertDialogAction variant="destructive" onClick={() => setOpen(false)}>
            Delete
          </AppAlertDialogAction>
        </AppAlertDialogFooter>
      </AppAlertDialogContent>
    </AppAlertDialog>
  );
}

export function AlertDialogOutlinePreview() {
  const [open, setOpen] = useState(false);

  return (
    <AppAlertDialog open={open} onOpenChange={setOpen}>
      <AppAlertDialogTrigger asChild>
        <AppButton variant="outline">Submit for Review</AppButton>
      </AppAlertDialogTrigger>
      <AppAlertDialogContent>
        <AppAlertDialogHeader>
          <AppAlertDialogTitle>Submit for review?</AppAlertDialogTitle>
          <AppAlertDialogDescription>
            Once submitted, you won&apos;t be able to make further edits until the review is complete.
          </AppAlertDialogDescription>
        </AppAlertDialogHeader>
        <AppAlertDialogFooter>
          <AppAlertDialogCancel variant="outline">Go back</AppAlertDialogCancel>
          <AppAlertDialogAction variant="secondary" onClick={() => setOpen(false)}>
            Submit
          </AppAlertDialogAction>
        </AppAlertDialogFooter>
      </AppAlertDialogContent>
    </AppAlertDialog>
  );
}
