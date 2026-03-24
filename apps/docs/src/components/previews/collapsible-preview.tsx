"use client";

import * as React from "react";
import {
  AppCollapsible,
  AppCollapsibleTrigger,
  AppCollapsibleContent,
  AppButton,
} from "@viana/ui";
import { ChevronDownIcon } from "lucide-react";

export function CollapsibleDefaultPreview() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="space-y-4">
      <AppCollapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold">
            @peduarte starred 3 repositories
          </h4>
          <AppCollapsibleTrigger asChild>
            <AppButton variant="ghost" size="sm">
              <ChevronDownIcon className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </AppButton>
          </AppCollapsibleTrigger>
        </div>
        <AppCollapsibleContent className="space-y-2 pt-2">
          <p className="text-sm">@radix-ui/primitives</p>
          <p className="text-sm">@radix-ui/colors</p>
          <p className="text-sm">@stitches/react</p>
        </AppCollapsibleContent>
      </AppCollapsible>
    </div>
  );
}
