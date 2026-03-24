"use client";

import { AppButton, toast } from "@viana/ui";

export function ToastDefaultPreview() {
  return (
    <AppButton
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2024 at 10:30 AM",
        });
      }}
    >
      Show Toast
    </AppButton>
  );
}

export function ToastDestructivePreview() {
  return (
    <AppButton
      variant="destructive"
      onClick={() => {
        toast({
          variant: "destructive",
          title: "Error",
          description: "There was a problem with your request.",
        });
      }}
    >
      Show Destructive Toast
    </AppButton>
  );
}
