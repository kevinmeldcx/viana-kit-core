"use client";

import { AppSkeleton } from "@viana/ui";

export function SkeletonDefaultPreview() {
  return (
    <div className="flex items-center space-x-4">
      <AppSkeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <AppSkeleton className="h-4 w-[250px]" />
        <AppSkeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
