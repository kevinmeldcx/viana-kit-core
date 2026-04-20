"use client";

import * as React from "react";
import { LayoutDashboard, MapPin, Server, Cctv, LineChart, FileText } from "lucide-react";
import { AppDashboard } from "@viana/ui";

const nav = [
  {
    items: [{ title: "Dashboards", icon: LayoutDashboard, isActive: true }],
  },
  {
    label: "Manage",
    items: [
      { title: "Sites", icon: MapPin },
      { title: "Devices", icon: Server },
      { title: "Sensors", icon: Cctv },
    ],
  },
  {
    label: "Insights",
    items: [
      { title: "X-ray", icon: LineChart },
      { title: "Manifest", icon: FileText },
    ],
  },
];

export function DashboardDefaultPreview() {
  return (
    <div className="relative h-[980px] overflow-hidden rounded-lg border border-border [contain:layout]">
      <AppDashboard nav={nav}>
        <p className="text-sm text-muted-foreground">Page content</p>
      </AppDashboard>
    </div>
  );
}

// Scenario 1 — Locked light: background stays light regardless of page theme
export function DashboardLockedLightPreview() {
  return (
    <div className="relative h-[980px] overflow-hidden rounded-lg border border-border [contain:layout]">
      <AppDashboard nav={nav} backgroundTheme="light">
        <p className="text-sm text-muted-foreground">Page content</p>
      </AppDashboard>
    </div>
  );
}

