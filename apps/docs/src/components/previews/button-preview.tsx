"use client";

import { AppButton } from "@viana/ui";

export function ButtonDefaultPreview() {
  return <AppButton>Button</AppButton>;
}

export function ButtonVariantsPreview() {
  return (
    <>
      <AppButton variant="default">Default</AppButton>
      <AppButton variant="secondary">Secondary</AppButton>
      <AppButton variant="outline">Outline</AppButton>
      <AppButton variant="ghost">Ghost</AppButton>
      <AppButton variant="destructive">Destructive</AppButton>
      <AppButton variant="link">Link</AppButton>
    </>
  );
}

export function ButtonSizesPreview() {
  return (
    <>
      <AppButton size="lg">Large</AppButton>
      <AppButton size="default">Default</AppButton>
      <AppButton size="sm">Small</AppButton>
      <AppButton size="xs">Extra small</AppButton>
    </>
  );
}

export function ButtonDisabledPreview() {
  return (
    <>
      <AppButton disabled>Disabled</AppButton>
      <AppButton variant="outline" disabled>
        Disabled
      </AppButton>
    </>
  );
}
