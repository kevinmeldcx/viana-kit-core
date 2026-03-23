"use client";

import { AppBadge } from "@viana/ui";

export function BadgeDefaultPreview() {
  return <AppBadge>Badge</AppBadge>;
}

export function BadgeVariantsPreview() {
  return (
    <>
      <AppBadge variant="default">Default</AppBadge>
      <AppBadge variant="secondary">Secondary</AppBadge>
      <AppBadge variant="outline">Outline</AppBadge>
      <AppBadge variant="destructive">Destructive</AppBadge>
    </>
  );
}