"use client";

import { AppAlert, AppAlertTitle, AppAlertDescription } from "@viana/ui";
import { InfoIcon } from "lucide-react";

export function AlertDefaultPreview() {
  return (
    <AppAlert>
      <InfoIcon className="h-4 w-4" />
      <AppAlertTitle>Default Alert</AppAlertTitle>
      <AppAlertDescription>
        This is a default alert message.
      </AppAlertDescription>
    </AppAlert>
  );
}

export function AlertDestructivePreview() {
  return (
    <AppAlert variant="destructive">
      <AppAlertTitle>Destructive Alert</AppAlertTitle>
      <AppAlertDescription>
        This is a destructive alert message.
      </AppAlertDescription>
    </AppAlert>
  );
}
