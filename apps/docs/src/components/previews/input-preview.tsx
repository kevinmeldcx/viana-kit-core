"use client";

import { AppInput } from "@viana/ui";

export function InputDefaultPreview() {
  return <AppInput placeholder="Enter text..." />;
}

export function InputWithLabelPreview() {
  return (
    <div className="space-y-2">
      <AppInput placeholder="Username" />
    </div>
  );
}