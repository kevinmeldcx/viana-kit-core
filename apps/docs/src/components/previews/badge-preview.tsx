"use client";

import { AppBadge, AppSpinner } from "@viana/ui";
import { AlertCircle, CheckCircle2, Clock, Star, X } from "lucide-react";

export function BadgeDefaultPreview() {
  return <AppBadge>Badge</AppBadge>;
}

export function BadgeVariantsPreview() {
  return (
    <div className="flex flex-wrap gap-2">
      <AppBadge variant="default">Default</AppBadge>
      <AppBadge variant="secondary">Secondary</AppBadge>
      <AppBadge variant="outline">Outline</AppBadge>
      <AppBadge variant="destructive">Destructive</AppBadge>
    </div>
  );
}

export function BadgeWithIconPreview() {
  return (
    <div className="flex flex-wrap gap-2">
      <AppBadge variant="default">
        <CheckCircle2 className="h-3 w-3" />
        Verified
      </AppBadge>
      <AppBadge variant="secondary">
        <Clock className="h-3 w-3" />
        Pending
      </AppBadge>
      <AppBadge variant="destructive">
        <AlertCircle className="h-3 w-3" />
        Failed
      </AppBadge>
      <AppBadge variant="outline">
        <Star className="h-3 w-3" />
        Featured
      </AppBadge>
    </div>
  );
}

export function BadgeStatusPreview() {
  return (
    <div className="flex flex-wrap gap-2">
      <AppBadge variant="outline" className="text-green-600 border-green-300 bg-green-50">
        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
        Active
      </AppBadge>
      <AppBadge variant="outline" className="text-amber-600 border-amber-300 bg-amber-50">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
        Pending
      </AppBadge>
      <AppBadge variant="outline" className="text-muted-foreground border-border bg-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
        Inactive
      </AppBadge>
      <AppBadge variant="outline" className="text-destructive border-destructive/30 bg-destructive/10">
        <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
        Error
      </AppBadge>
    </div>
  );
}

export function BadgeAsLinkPreview() {
  return (
    <div className="flex flex-wrap gap-2">
      <AppBadge asChild>
        <a href="#">New</a>
      </AppBadge>
      <AppBadge variant="secondary" asChild>
        <a href="#">Design</a>
      </AppBadge>
      <AppBadge variant="outline" asChild>
        <a href="#">Open Source</a>
      </AppBadge>
    </div>
  );
}

export function BadgeRemovablePreview() {
  return (
    <div className="flex flex-wrap gap-2">
      {["React", "TypeScript", "Tailwind"].map((tag) => (
        <AppBadge key={tag} variant="secondary" className="gap-1 pr-1">
          {tag}
          <button className="rounded-sm hover:bg-muted-foreground/20 p-0.5">
            <X className="h-3 w-3" />
          </button>
        </AppBadge>
      ))}
    </div>
  );
}

export function BadgeWithSpinnerPreview() {
  return (
    <div className="flex flex-wrap gap-2">
      <AppBadge variant="secondary">
        <AppSpinner className="h-3 w-3" label="Deleting" />
        Deleting
      </AppBadge>
      <AppBadge variant="outline">
        <AppSpinner className="h-3 w-3" label="Generating" />
        Generating
      </AppBadge>
    </div>
  );
}

export function BadgeNotificationPreview() {
  return (
    <div className="flex items-center gap-6">
      <div className="relative inline-flex">
        <span className="text-sm text-muted-foreground">Notifications</span>
        <AppBadge className="absolute -top-2 -right-4 h-5 min-w-5 justify-center rounded-full px-1 text-xs">
          4
        </AppBadge>
      </div>
      <div className="relative inline-flex">
        <span className="text-sm text-muted-foreground">Messages</span>
        <AppBadge variant="destructive" className="absolute -top-2 -right-4 h-5 min-w-5 justify-center rounded-full px-1 text-xs">
          12
        </AppBadge>
      </div>
    </div>
  );
}
