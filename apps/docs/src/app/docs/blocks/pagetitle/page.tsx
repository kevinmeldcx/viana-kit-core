import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import {
  PageTitleDefaultPreview,
  PageTitleWithActionsPreview,
  PageTitleHiddenPreview,
  PageTitleStandalonePreview,
} from "@/components/previews/pagetitle-preview";

export const metadata: Metadata = {
  title: "Page Title",
};

export default function PageTitlePage() {
  return (
    <article className="mx-auto w-full px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Blocks</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Page Title
        </h1>
        <p className="text-lg text-muted-foreground">
          Standard page header block with auto-generated breadcrumbs, an h1
          title, optional subtitle, and a right-side action slot. Shown by
          default on most pages via <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">AppDashboard</code>.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        fullWidth
        preview={<PageTitleDefaultPreview />}
        code={`import { MapPin, Server, Cctv, LineChart, FileText, LayoutDashboard } from "lucide-react"
import { AppDashboard } from "@/components/blocks/AppDashboard"

const nav = [
  { items: [{ title: "Dashboards", icon: LayoutDashboard }] },
  {
    label: "Manage",
    items: [
      { title: "Site", icon: MapPin, isActive: true },
      { title: "Devices", icon: Server },
      { title: "Sensor", icon: Cctv },
    ],
  },
]

export default function Page() {
  return (
    <AppDashboard
      nav={nav}
      pageTitle={{
        title: "Site",
        subtitle: "Stay up to date to everything in your network",
      }}
    >
      <PageContent />
    </AppDashboard>
  )
}`}
        filename="page.tsx"
      />

      <hr className="my-10 border-border" />

      {/*
        canonical_id: block-pagetitle-v1
        related_components: ["AppPageTitle", "AppDashboard", "AppBreadcrumb"]
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
            code={`// Recommended — via AppDashboard pageTitle prop
import { AppDashboard } from "@/components/blocks/AppDashboard"

// Standalone use
import { AppPageTitle } from "@/components/blocks/AppPageTitle"`}
          />
        </div>

        {/* Examples */}
        <div className="space-y-8">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Examples
          </h2>

          {/* With actions */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">With actions</h3>
            <p className="text-sm text-muted-foreground">
              Pass any elements to{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">actions</code>{" "}
              — buttons, selects, or text. The slot is right-aligned and empty by default.
            </p>
            <ComponentPreview
              fullWidth
              preview={<PageTitleWithActionsPreview />}
              code={`import { Plus } from "lucide-react"
import { AppButton } from "@/components/primitives/AppButton"

<AppDashboard
  nav={nav}
  pageTitle={{
    title: "Site",
    subtitle: "Stay up to date to everything in your network",
    actions: (
      <AppButton>
        <Plus className="size-4" />
        Add Site
      </AppButton>
    ),
  }}
>
  <PageContent />
</AppDashboard>`}
              filename="page.tsx"
            />
          </div>

          {/* Hidden */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Hidden</h3>
            <p className="text-sm text-muted-foreground">
              Pass{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">pageTitle={"{false}"}</code>{" "}
              to suppress the block entirely for pages that don't need a title header.
            </p>
            <ComponentPreview
              fullWidth
              preview={<PageTitleHiddenPreview />}
              code={`<AppDashboard nav={nav} pageTitle={false}>
  <PageContent />
</AppDashboard>`}
              filename="page.tsx"
            />
          </div>

          {/* Standalone */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Standalone</h3>
            <p className="text-sm text-muted-foreground">
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">AppPageTitle</code>{" "}
              can be used directly in custom layouts outside of{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">AppDashboard</code>.
            </p>
            <ComponentPreview
              preview={<PageTitleStandalonePreview />}
              code={`import { Plus } from "lucide-react"
import { AppPageTitle } from "@/components/blocks/AppPageTitle"
import { AppButton } from "@/components/primitives/AppButton"

<AppPageTitle
  title="Site"
  subtitle="Stay up to date to everything in your network"
  breadcrumbs={[
    { label: "Manage", href: "/manage" },
    { label: "Site" },
  ]}
  actions={
    <AppButton>
      <Plus className="size-4" />
      Add Site
    </AppButton>
  }
/>`}
              filename="example.tsx"
            />
          </div>
        </div>

        {/* API Reference */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
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
                  { prop: "title", type: "string", default: "required", description: "Page heading rendered as an <h1>." },
                  { prop: "subtitle", type: "string", default: "—", description: "Optional description rendered below the heading." },
                  { prop: "breadcrumbs", type: "AppPageTitleBreadcrumb[]", default: "auto", description: "Explicit breadcrumb trail. Auto-generated from window.location.pathname when omitted." },
                  { prop: "actions", type: "ReactNode", default: "—", description: "Right-side slot. Accepts buttons, selects, or any elements. Empty by default." },
                  { prop: "hidden", type: "boolean", default: "false", description: "Hides the entire block." },
                  { prop: "className", type: "string", default: "—", description: "Extra classes on the root element." },
                ].map(({ prop, type, default: def, description }, i) => (
                  <tr key={i}>
                    <td className="px-4 py-3 font-mono text-xs text-foreground">{prop}</td>
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{type}</td>
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{def}</td>
                    <td className="px-4 py-3 text-muted-foreground">{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground">
            When used via{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">AppDashboard</code>,
            pass{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">pageTitle={"{AppPageTitleProps}"}</code>{" "}
            or{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">pageTitle={"{false}"}</code>{" "}
            to suppress.
          </p>
        </div>

        {/* Breadcrumb auto-generation */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Breadcrumb auto-generation
          </h2>
          <p className="text-muted-foreground leading-7">
            When <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">breadcrumbs</code> is omitted,
            the component reads <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">window.location.pathname</code> on mount
            and converts each path segment into a readable label. Segments are split on <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">-</code> and <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">_</code>, then title-cased
            (<code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">site-settings</code> → <strong>Site Settings</strong>).
            The last segment has no link (current page). Pass an explicit <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">breadcrumbs</code> array
            to override when the URL structure doesn't match the desired labels.
          </p>
        </div>

        {/* Source */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Source
          </h2>
          <CodeBlock
            filename="src/components/blocks/AppPageTitle.tsx"
            code={`"use client"

import * as React from "react"
import { cn } from "../../lib/utils"
import {
  AppBreadcrumb,
  AppBreadcrumbItem,
  AppBreadcrumbLink,
  AppBreadcrumbList,
  AppBreadcrumbPage,
  AppBreadcrumbSeparator,
} from "../primitives/AppBreadcrumb"

export type AppPageTitleBreadcrumb = {
  label: string
  href?: string
}

export type AppPageTitleProps = {
  title: string
  subtitle?: string
  breadcrumbs?: AppPageTitleBreadcrumb[]
  actions?: React.ReactNode
  hidden?: boolean
  className?: string
}

function AppPageTitle({ title, subtitle, breadcrumbs, actions, hidden = false, className }: AppPageTitleProps) {
  const [autoCrumbs, setAutoCrumbs] = React.useState<AppPageTitleBreadcrumb[]>([])

  React.useEffect(() => {
    if (breadcrumbs === undefined) {
      const segments = window.location.pathname.split("/").filter(Boolean)
      setAutoCrumbs(segments.map((seg, i) => ({
        label: seg.split(/[-_]/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
        href: i < segments.length - 1 ? "/" + segments.slice(0, i + 1).join("/") : undefined,
      })))
    }
  }, [breadcrumbs])

  if (hidden) return null

  const crumbs = breadcrumbs ?? autoCrumbs

  return (
    <div className={cn("mb-6 flex items-start justify-between gap-4", className)}>
      <div className="space-y-1 min-w-0">
        {crumbs.length > 0 && (
          <AppBreadcrumb>
            <AppBreadcrumbList>
              {crumbs.map((crumb, i) => (
                <React.Fragment key={i}>
                  <AppBreadcrumbItem>
                    {crumb.href
                      ? <AppBreadcrumbLink href={crumb.href}>{crumb.label}</AppBreadcrumbLink>
                      : <AppBreadcrumbPage>{crumb.label}</AppBreadcrumbPage>}
                  </AppBreadcrumbItem>
                  {i < crumbs.length - 1 && <AppBreadcrumbSeparator />}
                </React.Fragment>
              ))}
            </AppBreadcrumbList>
          </AppBreadcrumb>
        )}
        <h1 className="text-2xl font-bold tracking-tight text-foreground">{title}</h1>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
    </div>
  )
}
AppPageTitle.displayName = "AppPageTitle"

export { AppPageTitle }`}
          />
        </div>
      </section>
    </article>
  );
}
