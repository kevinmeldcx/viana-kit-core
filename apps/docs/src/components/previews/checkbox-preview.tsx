"use client";

import { AppCheckbox } from "@viana/ui";

export function CheckboxDefaultPreview() {
  return (
    <div className="flex items-center gap-2">
      <AppCheckbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  );
}