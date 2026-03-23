"use client";

import { AppSwitch } from "@viana/ui";

export function SwitchDefaultPreview() {
  return (
    <div className="flex items-center gap-2">
      <AppSwitch id="airplane-mode" />
      <label htmlFor="airplane-mode" className="text-sm">Airplane mode</label>
    </div>
  );
}