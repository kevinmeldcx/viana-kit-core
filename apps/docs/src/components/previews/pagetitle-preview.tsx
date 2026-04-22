"use client";

import { Plus } from "lucide-react";
import { AppDashboard, AppButton, AppPageTitle } from "@viana/ui";

// Default — title + subtitle, no actions, breadcrumbs auto-generated
export function PageTitleDefaultPreview() {
  return (
    <div className="relative h-[560px] overflow-hidden rounded-lg border border-border [contain:layout]">
      <AppDashboard
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
      <AppDashboard pageTitle={false}>
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

// With icon — icon rendered to the left, primary title color
export function PageTitleWithIconPreview() {
  return (
    <div className="relative h-[560px] overflow-hidden rounded-lg border border-border [contain:layout]">
      <AppDashboard

        pageTitle={{
          title: "Hi Kevin! Welcome to Viana",
          subtitle: "Stay up to date to everything in your network",
          breadcrumbs: [{ label: "Dashboard" }],
          titleColor: "primary",
          icon: (
            <img
              src="/persistent-icon.png"
              alt="Dashboard"
              className="size-16 rounded-xl"
            />
          ),
        }}
      >
        <p className="text-sm text-muted-foreground">Page content</p>
      </AppDashboard>
    </div>
  );
}

// Primary title color — no icon
export function PageTitlePrimaryColorPreview() {
  return (
    <div className="rounded-lg border border-border bg-background p-6">
      <AppPageTitle
        title="Hi Kevin! Welcome to Viana"
        subtitle="Stay up to date to everything in your network"
        breadcrumbs={[{ label: "Dashboard" }]}
        titleColor="primary"
      />
    </div>
  );
}
