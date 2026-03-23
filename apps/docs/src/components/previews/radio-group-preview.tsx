"use client";

import { AppRadioGroup, AppRadioGroupItem } from "@viana/ui";

export function RadioGroupDefaultPreview() {
  return (
    <AppRadioGroup defaultValue="option-one">
      <div className="flex items-center gap-2">
        <AppRadioGroupItem value="option-one" id="option-one" />
        <label htmlFor="option-one" className="text-sm">Option One</label>
      </div>
      <div className="flex items-center gap-2">
        <AppRadioGroupItem value="option-two" id="option-two" />
        <label htmlFor="option-two" className="text-sm">Option Two</label>
      </div>
    </AppRadioGroup>
  );
}