"use client";

import { AppCheckbox, AppLabel } from "@viana/ui";

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

export function CheckboxWithDescriptionPreview() {
  return (
    <div className="flex items-start gap-3">
      <AppCheckbox id="notifications" className="mt-0.5" />
      <div className="grid gap-1">
        <AppLabel htmlFor="notifications">Enable notifications</AppLabel>
        <p className="text-sm text-muted-foreground">
          You can enable or disable notifications at any time.
        </p>
      </div>
    </div>
  );
}

export function CheckboxDisabledPreview() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <AppCheckbox id="disabled-unchecked" disabled />
        <AppLabel
          htmlFor="disabled-unchecked"
          className="opacity-50 cursor-not-allowed"
        >
          Disabled (unchecked)
        </AppLabel>
      </div>
      <div className="flex items-center gap-2">
        <AppCheckbox id="disabled-checked" disabled defaultChecked />
        <AppLabel
          htmlFor="disabled-checked"
          className="opacity-50 cursor-not-allowed"
        >
          Disabled (checked)
        </AppLabel>
      </div>
    </div>
  );
}

export function CheckboxGroupPreview() {
  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-foreground">Notify me about...</p>
      {[
        { id: "comments", label: "New comments" },
        { id: "mentions", label: "Direct mentions" },
        { id: "updates", label: "Product updates" },
      ].map(({ id, label }) => (
        <div key={id} className="flex items-center gap-2">
          <AppCheckbox id={id} />
          <AppLabel htmlFor={id}>{label}</AppLabel>
        </div>
      ))}
    </div>
  );
}
