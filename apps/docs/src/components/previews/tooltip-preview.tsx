"use client";

import {
  AppTooltip,
  AppTooltipContent,
  AppTooltipProvider,
  AppTooltipTrigger,
} from "@viana/ui";

export function TooltipDefaultPreview() {
  return (
    <AppTooltipProvider>
      <AppTooltip>
        <AppTooltipTrigger>Hover me</AppTooltipTrigger>
        <AppTooltipContent>
          <p>This is a tooltip</p>
        </AppTooltipContent>
      </AppTooltip>
    </AppTooltipProvider>
  );
}
