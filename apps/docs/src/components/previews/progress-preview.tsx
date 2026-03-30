"use client";

import { useState } from "react";
import { AppProgress } from "@viana/ui";

export function ProgressDefaultPreview() {
  return (
    <div className="w-full min-w-[200px]">
      <AppProgress value={33} />
    </div>
  );
}

export function ProgressLabelPreview() {
  return (
    <div className="w-full min-w-[200px] space-y-1.5">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Uploading…</span>
        <span>66%</span>
      </div>
      <AppProgress value={66} />
    </div>
  );
}

export function ProgressControlledPreview() {
  const [value, setValue] = useState(33);

  return (
    <div className="w-full min-w-[200px] space-y-4">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Progress</span>
        <span>{value}%</span>
      </div>
      <AppProgress value={value} />
      <div className="flex gap-2 justify-center">
        <button
          onClick={() => setValue((v) => Math.max(0, v - 10))}
          className="rounded-md border border-border px-3 py-1.5 text-sm hover:bg-muted transition-colors"
        >
          −10
        </button>
        <button
          onClick={() => setValue((v) => Math.min(100, v + 10))}
          className="rounded-md border border-border px-3 py-1.5 text-sm hover:bg-muted transition-colors"
        >
          +10
        </button>
      </div>
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