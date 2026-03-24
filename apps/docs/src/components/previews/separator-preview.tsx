"use client";

import { AppSeparator } from "@viana/ui";

export function SeparatorDefaultPreview() {
  return (
    <div className="w-full space-y-2">
      <p>Content above</p>
      <AppSeparator />
      <p>Content below</p>
    </div>
  );
}
