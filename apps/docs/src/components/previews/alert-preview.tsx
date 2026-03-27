"use client";

import { AppAlert, AppAlertContent, AppAlertTitle, AppAlertDescription, AppButton } from "@viana/ui";
import { AlertCircleIcon, CheckCircleIcon, InfoIcon, TriangleAlertIcon, XIcon } from "lucide-react";

export function AlertDefaultPreview() {
  return (
    <div className="w-150 flex flex-col gap-2">
      <AppAlert>
        <InfoIcon className="w-8 h-8" />
        <AppAlertContent>
          <AppAlertTitle>Default Alert</AppAlertTitle>
          <AppAlertDescription>
            This is a default alert message.
          </AppAlertDescription>
        </AppAlertContent>
        <AppButton variant="ghost" size="icon" className="ml-auto shrink-0 rounded-full">
          <XIcon className="h-8 w-8" />
        </AppButton>
      </AppAlert>
      <AppAlert>
            <InfoIcon className="w-8 h-8" />
            <AppAlertTitle>Default Alert</AppAlertTitle>        
      </AppAlert>
      <AppAlert>
          <AppAlertContent>
          <AppAlertTitle>Default Alert</AppAlertTitle>
          <AppAlertDescription>
            This is a default alert message.
          </AppAlertDescription>
        </AppAlertContent>
      </AppAlert>      
    </div>
  );
}

export function AlertAllVariantsPreview() {
  return (
    <div className="flex flex-col gap-4 w-[600px]">
      <AppAlert>
        <InfoIcon className="w-8 h-8" />
        <AppAlertContent>
          <AppAlertTitle>Default</AppAlertTitle>
          <AppAlertDescription>This is a default alert.</AppAlertDescription>
        </AppAlertContent>
      </AppAlert>
      <AppAlert variant="destructive">
        <AlertCircleIcon className="w-8 h-8" />
        <AppAlertContent>
          <AppAlertTitle>Destructive</AppAlertTitle>
          <AppAlertDescription>This is a destructive alert.</AppAlertDescription>
        </AppAlertContent>
      </AppAlert>
      <AppAlert variant="success">
        <CheckCircleIcon className="w-8 h-8" />
        <AppAlertContent>
          <AppAlertTitle>Success</AppAlertTitle>
          <AppAlertDescription>This is a success alert.</AppAlertDescription>
        </AppAlertContent>
      </AppAlert>
      <AppAlert variant="warning">
        <TriangleAlertIcon className="w-8 h-8" />
        <AppAlertContent>
          <AppAlertTitle>Warning</AppAlertTitle>
          <AppAlertDescription>This is a warning alert.</AppAlertDescription>
        </AppAlertContent>
      </AppAlert>
      <AppAlert variant="info">
        <InfoIcon className="w-8 h-8" />
        <AppAlertContent>
          <AppAlertTitle>Info</AppAlertTitle>
          <AppAlertDescription>This is an info alert.</AppAlertDescription>
        </AppAlertContent>
      </AppAlert>
    </div>
  );
}
