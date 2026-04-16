import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { DashboardDefaultPreview } from "@/components/previews/dashboard-preview";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <article className="mx-auto w-full px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Blocks</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Dashboard
        </h1>
        <p className="text-lg text-muted-foreground">
          The canonical application layout. A full-page shell with an animated
          gradient dot background, collapsible sidebar, dark header, and a
          rounded content area. Use this as the standard skeleton for every new
          page.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        fullWidth
        preview={<DashboardDefaultPreview />}
        code={`import {
  Search, LayoutDashboard, MapPin, Server, Cctv,
  LineChart, FileText, LayoutGrid,
} from "lucide-react"
import {
  AppDashboard, AppDashboardContent, AppDashboardMain,
  AppHeader, AppHeaderContent, AppHeaderSearchbar, AppHeaderActions,
  AppButtonGroup, AppButton, AppInput,
  AppSelect, AppSelectTrigger, AppSelectValue, AppSelectContent, AppSelectItem,
  AppAvatar, AppAvatarFallback,
  AppSidebarProvider, AppSidebar, AppSidebarHeader, AppSidebarContent,
  AppSidebarGroup, AppSidebarGroupLabel, AppSidebarGroupContent,
  AppSidebarMenu, AppSidebarMenuItem, AppSidebarMenuButton,
  AppSidebarBrand, AppSidebarTrigger, AppSidebarRail, AppSeparator,
} from "@viana/ui"

export function Example() {
  return (
    <AppSidebarProvider
      style={{
        "--sidebar-width": "14rem",
        "--header-height": "3.5rem",
      } as React.CSSProperties}
    >
      <AppDashboard>
        <AppSidebar collapsible="icon">
          <AppSidebarHeader>
            <AppSidebarBrand />
          </AppSidebarHeader>
          <AppSidebarContent>
            <AppSidebarGroup>
              <AppSidebarGroupLabel>Manage</AppSidebarGroupLabel>
              <AppSidebarGroupContent>
                <AppSidebarMenu>
                  <AppSidebarMenuItem>
                    <AppSidebarMenuButton isActive tooltip="Dashboards">
                      <LayoutDashboard />
                      <span>Dashboards</span>
                    </AppSidebarMenuButton>
                  </AppSidebarMenuItem>
                  <AppSidebarMenuItem>
                    <AppSidebarMenuButton tooltip="Site">
                      <MapPin />
                      <span>Site</span>
                    </AppSidebarMenuButton>
                  </AppSidebarMenuItem>
                </AppSidebarMenu>
              </AppSidebarGroupContent>
            </AppSidebarGroup>
          </AppSidebarContent>
          <AppSidebarRail />
        </AppSidebar>

        <AppDashboardContent>
          <AppHeader className="border-none">
            <AppHeaderContent>
              <AppSidebarTrigger />
              <AppSeparator orientation="vertical" className="mx-1 h-4" />
              <AppHeaderSearchbar>
                <AppButtonGroup className="w-full max-w-sm">
                  <AppInput placeholder="Search..." />
                  <AppButton variant="outline">
                    <Search className="h-4 w-4" />
                  </AppButton>
                </AppButtonGroup>
              </AppHeaderSearchbar>
              <AppHeaderActions>
                <AppSelect defaultValue="network-1">
                  <AppSelectTrigger className="w-40">
                    <AppSelectValue />
                  </AppSelectTrigger>
                  <AppSelectContent>
                    <AppSelectItem value="network-1">MeldCX Network</AppSelectItem>
                  </AppSelectContent>
                </AppSelect>
                <AppAvatar className="size-8">
                  <AppAvatarFallback>KA</AppAvatarFallback>
                </AppAvatar>
              </AppHeaderActions>
            </AppHeaderContent>
          </AppHeader>

          <AppDashboardMain className="p-6">
            {/* Your page content here */}
          </AppDashboardMain>
        </AppDashboardContent>
      </AppDashboard>
    </AppSidebarProvider>
  )
}`}
        filename="example.tsx"
      />

      <hr className="my-10 border-border" />

      {/*
        canonical_id: block-dashboard-v1
        related_components: ["AppDashboard", "AppDashboardContent", "AppDashboardMain", "AppSidebar", "AppHeader"]
        platform_tags: ["web"]
        enforcement_level: strict
      */}

      <section className="space-y-10">
        {/* Import */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Import
          </h2>
          <CodeBlock
            language="tsx"
            code={`import {
  AppDashboard,
  AppDashboardBackground,
  AppDashboardContent,
  AppDashboardMain,
} from "@/components/blocks/AppDashboard"`}
          />
        </div>

        {/* API Reference */}
        <div className="space-y-8">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>

          {/* AppDashboard */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              AppDashboard
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">
              The outermost wrapper. Renders the animated dot-pattern background
              and applies the brand gradient. Overrides{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                --sidebar
              </code>{" "}
              and{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                --sidebar-border
              </code>{" "}
              to transparent so the sidebar and header have no background of
              their own.
            </p>
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-4 py-3 text-left font-medium text-foreground">Prop</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Type</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Default</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { prop: "className", type: "string", default: "\u2014", description: "Additional classes merged onto the wrapper div." },
                    { prop: "children", type: "ReactNode", default: "\u2014", description: "Slot content \u2014 typically AppSidebar + AppDashboardContent." },
                  ].map(({ prop, type, default: def, description }) => (
                    <tr key={prop}>
                      <td className="px-4 py-3 font-mono text-xs text-foreground">{prop}</td>
                      <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{type}</td>
                      <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{def}</td>
                      <td className="px-4 py-3 text-muted-foreground">{description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* AppDashboardContent */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              AppDashboardContent
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">
              The main column next to the sidebar. Wraps{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                AppHeader
              </code>{" "}
              and{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                AppDashboardMain
              </code>
              .
            </p>
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-4 py-3 text-left font-medium text-foreground">Prop</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Type</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Default</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { prop: "className", type: "string", default: "\u2014", description: "Additional classes merged onto the content div." },
                    { prop: "children", type: "ReactNode", default: "\u2014", description: "Slot content \u2014 typically AppHeader + AppDashboardMain." },
                  ].map(({ prop, type, default: def, description }) => (
                    <tr key={prop}>
                      <td className="px-4 py-3 font-mono text-xs text-foreground">{prop}</td>
                      <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{type}</td>
                      <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{def}</td>
                      <td className="px-4 py-3 text-muted-foreground">{description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* AppDashboardMain */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              AppDashboardMain
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">
              The primary content area. Renders as a{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                &lt;main&gt;
              </code>{" "}
              element with{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                rounded-tl-3xl
              </code>
              ,{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                bg-background
              </code>
              , and a{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                shadow-2xl
              </code>{" "}
              to create the inset card effect.
            </p>
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-4 py-3 text-left font-medium text-foreground">Prop</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Type</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Default</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { prop: "className", type: "string", default: "\u2014", description: "Additional classes merged onto the main element." },
                    { prop: "children", type: "ReactNode", default: "\u2014", description: "Page content." },
                  ].map(({ prop, type, default: def, description }) => (
                    <tr key={prop}>
                      <td className="px-4 py-3 font-mono text-xs text-foreground">{prop}</td>
                      <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{type}</td>
                      <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{def}</td>
                      <td className="px-4 py-3 text-muted-foreground">{description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Usage */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Usage
          </h2>

          {/* Composition order */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              Composition order
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">
              Wrap everything in{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                AppSidebarProvider
              </code>
              , then nest{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                AppDashboard
              </code>{" "}
              as the gradient shell. Place{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                AppSidebar
              </code>{" "}
              and{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                AppDashboardContent
              </code>{" "}
              as direct children. Pass{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                className=&quot;border-none&quot;
              </code>{" "}
              to{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                AppHeader
              </code>{" "}
              to remove its default bottom border.
            </p>
            <CodeBlock
              language="tsx"
              code={`<AppSidebarProvider
  style={{
    "--sidebar-width": "14rem",
    "--header-height": "3.5rem",
  } as React.CSSProperties}
>
  <AppDashboard>
    <AppSidebar collapsible="icon">
      <AppSidebarHeader>
        <AppSidebarBrand />
      </AppSidebarHeader>
      <AppSidebarContent>...</AppSidebarContent>
      <AppSidebarRail />
    </AppSidebar>

    <AppDashboardContent>
      <AppHeader className="border-none">
        <AppHeaderContent>
          <AppSidebarTrigger />
          <AppSeparator orientation="vertical" className="mx-1 h-4" />
          <AppHeaderSearchbar>...</AppHeaderSearchbar>
          <AppHeaderActions>...</AppHeaderActions>
        </AppHeaderContent>
      </AppHeader>

      <AppDashboardMain className="p-6">
        Page content
      </AppDashboardMain>
    </AppDashboardContent>
  </AppDashboard>
</AppSidebarProvider>`}
            />
          </div>

          {/* Custom gradient */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              Overriding the gradient
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">
              Override the gradient CSS variables on the provider or pass a
              custom{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                className
              </code>{" "}
              to replace it entirely.
            </p>
            <CodeBlock
              language="tsx"
              code={`{/* Replace entirely via className — override the default gradient */}
<AppDashboard className="bg-none bg-background">`}
            />
          </div>
        </div>

        {/* Source */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Source
          </h2>
          <CodeBlock
            filename="src/components/blocks/AppDashboard.tsx"
            code={`"use client"

import * as React from "react"
import { motion } from "motion/react"
import { cn } from "../../lib/utils"

function AppDashboardBackground({
  dotSize = 8, spacing = 10, duration = 30,
  interactive = true, className, ...props
}) {
  // Animated hexagonal dot grid with blue brand gradients
  // Mouse-follow radial glow with lerp smoothing (requestAnimationFrame)
  // See full source in the repo
}

function AppDashboard({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "relative flex min-h-svh w-full",
        className
      )}
      {...props}
    >
      <AppDashboardBackground />
      {children}
    </div>
  )
}

function AppDashboardContent({ className, ...props }) {
  return (
    <div
      className={cn("relative flex min-w-0 flex-1 flex-col", className)}
      {...props}
    />
  )
}

function AppDashboardMain({ className, ...props }) {
  return (
    <main
      className={cn("flex-1 rounded-tl-3xl bg-background shadow-2xl", className)}
      {...props}
    />
  )
}

export { AppDashboard, AppDashboardBackground, AppDashboardContent, AppDashboardMain }`}
          />
        </div>
      </section>
    </article>
  );
}
