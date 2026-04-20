"use client";

import { MapPin, Plus, Server, Cctv, LineChart, FileText, LayoutDashboard } from "lucide-react";
import { AppDashboard, AppButton, AppPageTitle } from "@viana/ui";

const nav = [
  {
    items: [{ title: "Dashboards", icon: LayoutDashboard }],
  },
  {
    label: "Manage",
    items: [
      { title: "Site", icon: MapPin, isActive: true },
      { title: "Devices", icon: Server },
      { title: "Sensor", icon: Cctv },
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

// Default — title + subtitle, no actions, breadcrumbs auto-generated
export function PageTitleDefaultPreview() {
  return (
    <div className="relative h-[560px] overflow-hidden rounded-lg border border-border [contain:layout]">
      <AppDashboard
        nav={nav}
        pageTitle={{
          title: "Site",
          subtitle: "Stay up to date to everything in your network",
          breadcrumbs: [{ label: "Manage", href: "/manage" }, { label: "Site" }],
        }}
      >
        <p className="text-sm text-muted-foreground">Page content</p>
      </AppDashboard>
    </div>
  );
}

// With actions
export function PageTitleWithActionsPreview() {
  return (
    <div className="relative h-[560px] overflow-hidden rounded-lg border border-border [contain:layout]">
      <AppDashboard
        nav={nav}
        pageTitle={{
          title: "Site",
          subtitle: "Stay up to date to everything in your network",
          breadcrumbs: [{ label: "Manage", href: "/manage" }, { label: "Site" }],
          actions: (
            <AppButton>
              <Plus className="size-4" />
              Add Site
            </AppButton>
          ),
        }}
      >
        <p className="text-sm text-muted-foreground">Page content</p>
      </AppDashboard>
    </div>
  );
}

// Hidden — no title block rendered
export function PageTitleHiddenPreview() {
  return (
    <div className="relative h-[560px] overflow-hidden rounded-lg border border-border [contain:layout]">
      <AppDashboard nav={nav} pageTitle={false}>
        <p className="text-sm text-muted-foreground">Page content (no title block)</p>
      </AppDashboard>
    </div>
  );
}

// Standalone — AppPageTitle used outside AppDashboard
export function PageTitleStandalonePreview() {
  return (
    <div className="rounded-lg border border-border bg-background p-6">
      <AppPageTitle
        title="Site"
        subtitle="Stay up to date to everything in your network"
        breadcrumbs={[{ label: "Manage", href: "/manage" }, { label: "Site" }]}
        actions={
          <AppButton>
            <Plus className="size-4" />
            Add Site
          </AppButton>
        }
      />
    </div>
  );
}
