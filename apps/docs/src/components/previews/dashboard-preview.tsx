"use client";

import * as React from "react";
import { AppDashboard } from "@viana/ui";

export function DashboardDefaultPreview() {
  return (
    <div className="relative h-[980px] overflow-hidden rounded-lg border border-border [contain:layout]">
      <AppDashboard>
        <p className="text-sm text-muted-foreground">Page content</p>
      </AppDashboard>
    </div>
  );
}

// Scenario 1 — Locked light: background stays light regardless of page theme
export function DashboardLockedLightPreview() {
  return (
    <div className="relative h-[980px] overflow-hidden rounded-lg border border-border [contain:layout]">
      <AppDashboard backgroundTheme="light">
        <p className="text-sm text-muted-foreground">Page content</p>
      </AppDashboard>
    </div>
  );
}

