"use client";

import { AppSpinner } from "@viana/ui";
import { AppButton } from "@viana/ui";

export function SpinnerDefaultPreview() {
  return <AppSpinner />;
}

export function SpinnerSizesPreview() {
  return (
    <div className="flex items-center gap-4">
      <AppSpinner className="h-4 w-4" label="Small loading" />
      <AppSpinner className="h-5 w-5" label="Medium loading" />
      <AppSpinner className="h-6 w-6" label="Large loading" />
      <AppSpinner className="h-8 w-8" label="XL loading" />
    </div>
  );
}

export function SpinnerColorsPreview() {
  return (
    <div className="flex items-center gap-4">
      <AppSpinner className="text-primary" />
      <AppSpinner className="text-destructive" />
      <AppSpinner className="text-muted-foreground" />
      <span className="rounded bg-primary p-2 inline-flex">
        <AppSpinner className="text-primary-foreground" />
      </span>
    </div>
  );
}

export function SpinnerInButtonPreview() {
  return (
    <div className="flex items-center gap-3">
      <AppButton disabled>
        <AppSpinner className="h-4 w-4" />
        Saving…
      </AppButton>
      <AppButton variant="outline" disabled>
        <AppSpinner className="h-4 w-4" />
        Loading
      </AppButton>
    </div>
  );
}

export function SpinnerOverlayPreview() {
  return (
    <div className="relative h-28 w-full rounded-lg border border-border bg-muted/30 flex items-center justify-center">
      <p className="text-sm text-muted-foreground select-none">Content area</p>
      <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-background/70 backdrop-blur-sm">
        <AppSpinner className="h-6 w-6 text-primary" />
      </div>
    </div>
  );
}
