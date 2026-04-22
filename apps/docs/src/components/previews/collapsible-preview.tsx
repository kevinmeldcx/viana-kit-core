"use client";

import * as React from "react";
import {
  AppCollapsible,
  AppCollapsibleTrigger,
  AppCollapsibleContent,
  AppButton,
} from "@viana/ui";
import { ChevronDownIcon, ChevronsUpDown } from "lucide-react";

// ─── Default ──────────────────────────────────────────────────────────────────

export function CollapsibleDefaultPreview() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="space-y-4">
      <AppCollapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold">
            @peduarte starred 3 repositories
          </h4>
          <AppCollapsibleTrigger asChild>
            <AppButton variant="ghost" size="sm">
              <ChevronDownIcon className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </AppButton>
          </AppCollapsibleTrigger>
        </div>
        <AppCollapsibleContent className="space-y-2 pt-2">
          <p className="text-sm">@radix-ui/primitives</p>
          <p className="text-sm">@radix-ui/colors</p>
          <p className="text-sm">@stitches/react</p>
        </AppCollapsibleContent>
      </AppCollapsible>
    </div>
  );
}

// ─── Controlled ───────────────────────────────────────────────────────────────

export function CollapsibleControlledPreview() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <AppCollapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-2">
        <div className="flex items-center justify-between space-x-4">
          <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
          <AppCollapsibleTrigger asChild>
            <AppButton variant="ghost" size="sm">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </AppButton>
          </AppCollapsibleTrigger>
        </div>
        <div className="rounded-md border border-border px-4 py-2 font-mono text-sm shadow-sm">
          @radix-ui/primitives
        </div>
        <AppCollapsibleContent className="space-y-2">
          <div className="rounded-md border border-border px-4 py-2 font-mono text-sm shadow-sm">
            @radix-ui/colors
          </div>
          <div className="rounded-md border border-border px-4 py-2 font-mono text-sm shadow-sm">
            @stitches/react
          </div>
        </AppCollapsibleContent>
      </AppCollapsible>
      <p className="text-xs text-muted-foreground text-center">
        {isOpen ? "Collapse" : "Expand"} via the toggle button above
      </p>
    </div>
  );
}

// ─── Uncontrolled (defaultOpen) ───────────────────────────────────────────────

export function CollapsibleUncontrolledPreview() {
  return (
    <div className="w-full max-w-sm">
      <AppCollapsible defaultOpen className="space-y-2">
        <div className="flex items-center justify-between space-x-4">
          <h4 className="text-sm font-semibold">Release notes</h4>
          <AppCollapsibleTrigger asChild>
            <AppButton variant="ghost" size="sm">
              <ChevronDownIcon className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </AppButton>
          </AppCollapsibleTrigger>
        </div>
        <AppCollapsibleContent className="space-y-2">
          <div className="rounded-md border border-border bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
            v1.2.0 — Added dark mode support and improved accessibility.
          </div>
          <div className="rounded-md border border-border bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
            v1.1.0 — New token system and updated sidebar layout.
          </div>
        </AppCollapsibleContent>
      </AppCollapsible>
    </div>
  );
}

// ─── Disabled ─────────────────────────────────────────────────────────────────

export function CollapsibleDisabledPreview() {
  return (
    <div className="w-full max-w-sm">
      <AppCollapsible disabled className="space-y-2">
        <div className="flex items-center justify-between space-x-4">
          <h4 className="text-sm font-semibold text-muted-foreground">
            Restricted section
          </h4>
          <AppCollapsibleTrigger asChild>
            <AppButton variant="ghost" size="sm" disabled>
              <ChevronDownIcon className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </AppButton>
          </AppCollapsibleTrigger>
        </div>
        <AppCollapsibleContent className="space-y-2">
          <div className="rounded-md border border-border px-4 py-2 text-sm">
            Hidden content
          </div>
        </AppCollapsibleContent>
      </AppCollapsible>
      <p className="mt-3 text-xs text-muted-foreground text-center">
        The trigger is non-interactive when <code className="font-mono">disabled</code> is set.
      </p>
    </div>
  );
}

// ─── Nested ───────────────────────────────────────────────────────────────────

export function CollapsibleNestedPreview() {
  const [outerOpen, setOuterOpen] = React.useState(true);
  const [innerOpen, setInnerOpen] = React.useState(false);

  return (
    <div className="w-full max-w-sm">
      <AppCollapsible open={outerOpen} onOpenChange={setOuterOpen} className="space-y-1">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold">Asia Pacific</h4>
          <AppCollapsibleTrigger asChild>
            <AppButton variant="ghost" size="sm">
              <ChevronDownIcon className="h-4 w-4" />
              <span className="sr-only">Toggle Asia Pacific</span>
            </AppButton>
          </AppCollapsibleTrigger>
        </div>
        <AppCollapsibleContent>
          <div className="ml-4 mt-1 space-y-1">
            <AppCollapsible open={innerOpen} onOpenChange={setInnerOpen} className="space-y-1">
              <div className="flex items-center justify-between">
                <h5 className="text-sm text-muted-foreground">Philippines</h5>
                <AppCollapsibleTrigger asChild>
                  <AppButton variant="ghost" size="sm">
                    <ChevronDownIcon className="h-3 w-3" />
                    <span className="sr-only">Toggle Philippines</span>
                  </AppButton>
                </AppCollapsibleTrigger>
              </div>
              <AppCollapsibleContent>
                <div className="ml-4 mt-1 space-y-1 text-sm text-muted-foreground">
                  <p>Manila</p>
                  <p>Cebu City</p>
                  <p>Davao City</p>
                </div>
              </AppCollapsibleContent>
            </AppCollapsible>
            <p className="text-sm text-muted-foreground">Singapore</p>
            <p className="text-sm text-muted-foreground">Japan</p>
          </div>
        </AppCollapsibleContent>
      </AppCollapsible>
    </div>
  );
}
