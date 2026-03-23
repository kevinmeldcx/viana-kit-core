"use client";

import { AppProgress } from "@viana/ui";

export function ProgressDefaultPreview() {
  return (
    <div className="w-full min-w-[200px]">
      <AppProgress value={33} />
    </div>
  );
}

export function ProgressVariantsPreview() {
  return (
    <div className="flex flex-col gap-4 w-full min-w-[200px]">
      <AppProgress value={0} />
      <AppProgress value={33} />
      <AppProgress value={66} />
      <AppProgress value={100} />
    </div>
  );
}