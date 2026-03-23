"use client";

import { AppPopover, AppPopoverContent, AppPopoverTrigger } from "@viana/ui";
import { AppButton } from "@viana/ui";

export function PopoverDefaultPreview() {
  return (
    <AppPopover>
      <AppPopoverTrigger asChild>
        <AppButton>Open Popover</AppButton>
      </AppPopoverTrigger>
      <AppPopoverContent>
        <p>This is a popover content.</p>
      </AppPopoverContent>
    </AppPopover>
  );
}