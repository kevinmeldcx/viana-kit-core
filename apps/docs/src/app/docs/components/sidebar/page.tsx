import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { SidebarDefaultPreview } from "@/components/previews/sidebar-preview";

export const metadata: Metadata = {
  title: "Sidebar",
};

export default function SidebarPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sidebar
        </h1>
        <p className="text-lg text-muted-foreground">
          A composable, collapsible navigation sidebar with built-in brand
          header and mobile support.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<SidebarDefaultPreview />}
        code={`import {
  AppSidebarProvider,
  AppSidebar,
  AppSidebarBrand,
  AppSidebarHeader,
  AppSidebarContent,
  AppSidebarFooter,
  AppSidebarInset,
  AppSidebarRail,
  AppSidebarTrigger,
  AppSidebarGroup,
  AppSidebarGroupLabel,
  AppSidebarGroupContent,
  AppSidebarMenu,
  AppSidebarMenuItem,
  AppSidebarMenuButton,
} from "@/components/primitives/AppSidebar"
import {
  LayoutDashboard, MapPin, Server, Cctv,
  LineChart, FileText, Download,
} from "lucide-react"

const navSections = [
  { items: [{ title: "Dashboard", icon: LayoutDashboard }] },
  {
    label: "Manage",
    items: [
      { title: "Site",    icon: MapPin },
      { title: "Devices", icon: Server },
      { title: "Sensor",  icon: Cctv },
    ],
  },
  {
    label: "Insights",
    items: [
      { title: "X-ray",    icon: LineChart },
      { title: "Manifest", icon: FileText },
    ],
  },
  {
    label: "Downloads",
    items: [{ title: "Installers", icon: Download }],
  },
]

const workspaces = [
  { label: "Acme Corp", onClick: () => {} },
  { label: "Personal",  onClick: () => {} },
  { separator: true },
  { label: "Create workspace", onClick: () => {} },
]

export function Example() {
  return (
    <AppSidebarProvider>
      <AppSidebar collapsible="icon">
        <AppSidebarHeader>
          {/* logo defaults to <WhiteLogo width={90} height={28} /> centered */}
          <AppSidebarBrand dropdown={workspaces} />
        </AppSidebarHeader>
        <AppSidebarContent>
          {navSections.map((section, i) => (
            <AppSidebarGroup key={i}>
              {section.label && (
                <AppSidebarGroupLabel>{section.label}</AppSidebarGroupLabel>
              )}
              <AppSidebarGroupContent>
                <AppSidebarMenu>
                  {section.items.map((item) => (
                    <AppSidebarMenuItem key={item.title}>
                      <AppSidebarMenuButton isActive={item.title === "Dashboard"} tooltip={item.title}>
                        <item.icon />
                        <span>{item.title}</span>
                      </AppSidebarMenuButton>
                    </AppSidebarMenuItem>
                  ))}
                </AppSidebarMenu>
              </AppSidebarGroupContent>
            </AppSidebarGroup>
          ))}
        </AppSidebarContent>
        <AppSidebarFooter>
          <span className="text-xs text-muted-foreground">v1.0.0</span>
        </AppSidebarFooter>
        <AppSidebarRail />
      </AppSidebar>
      <AppSidebarInset>
        <header className="flex items-center gap-2 border-b border-border px-4 py-3">
          <AppSidebarTrigger />
        </header>
        <main>Page content</main>
      </AppSidebarInset>
    </AppSidebarProvider>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-sidebar-v1
        related_components: ["AppSidebarProvider", "AppSidebar", "AppSidebarBrand", "AppSidebarTrigger", "AppSidebarRail", "AppSidebarInset", "AppSidebarHeader", "AppSidebarContent", "AppSidebarFooter", "AppSidebarSeparator", "AppSidebarInput", "AppSidebarGroup", "AppSidebarGroupLabel", "AppSidebarGroupAction", "AppSidebarGroupContent", "AppSidebarMenu", "AppSidebarMenuItem", "AppSidebarMenuButton", "AppSidebarMenuAction", "AppSidebarMenuBadge", "AppSidebarMenuSkeleton", "AppSidebarMenuSub", "AppSidebarMenuSubItem", "AppSidebarMenuSubButton"]
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
  AppSidebarProvider,
  AppSidebar,
  AppSidebarBrand,
  AppSidebarTrigger,
  AppSidebarRail,
  AppSidebarInset,
  AppSidebarHeader,
  AppSidebarContent,
  AppSidebarFooter,
  AppSidebarSeparator,
  AppSidebarInput,
  AppSidebarGroup,
  AppSidebarGroupLabel,
  AppSidebarGroupAction,
  AppSidebarGroupContent,
  AppSidebarMenu,
  AppSidebarMenuItem,
  AppSidebarMenuButton,
  AppSidebarMenuAction,
  AppSidebarMenuBadge,
  AppSidebarMenuSkeleton,
  AppSidebarMenuSub,
  AppSidebarMenuSubItem,
  AppSidebarMenuSubButton,
  useSidebar,
} from "@/components/primitives/AppSidebar"`}
          />
        </div>

        {/* API Reference */}
        <div className="space-y-8">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>

          {/* AppSidebarProvider */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              AppSidebarProvider
            </h3>
            <p className="text-sm text-muted-foreground leading-6">
              Wraps the entire layout. Manages open/collapsed state and provides
              context to all child sidebar components. Open state is persisted
              to a cookie automatically.
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
                    { prop: "defaultOpen", type: "boolean", default: "true", description: "Initial open state (uncontrolled)." },
                    { prop: "open", type: "boolean", default: "—", description: "Controlled open state." },
                    { prop: "onOpenChange", type: "(open: boolean) => void", default: "—", description: "Callback fired when open state changes." },
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

          {/* AppSidebar */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              AppSidebar
            </h3>
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
                    { prop: "side", type: '"left" | "right"', default: '"left"', description: "Which edge the sidebar is anchored to." },
                    { prop: "variant", type: '"sidebar" | "floating" | "inset"', default: '"sidebar"', description: "Visual presentation style." },
                    { prop: "collapsible", type: '"offcanvas" | "icon" | "none"', default: '"offcanvas"', description: "offcanvas: slides off-screen. icon: collapses to icon width. none: always visible." },
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

          {/* AppSidebarBrand */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              AppSidebarBrand
            </h3>
            <p className="text-sm text-muted-foreground leading-6">
              Place as the first child of{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">
                AppSidebarHeader
              </code>
              . The logo is always horizontally centered. When a{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">
                dropdown
              </code>{" "}
              is provided, the chevron is absolutely positioned to the right
              edge so it does not shift the logo off-center. Accepts either a
              text string or a logo component for the{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">
                logo
              </code>{" "}
              prop.
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
                    { prop: "logo", type: "string | ReactNode", default: "<WhiteLogo width={90} height={28} />", description: "Text label or logo component. Defaults to the white Viana Kit logo for use on dark backgrounds." },
                    { prop: "collapsedLogo", type: "ReactNode", default: "<WhiteSymbol width={24} height={24} />", description: "Icon shown in the header when the sidebar is collapsed to icon mode." },
                    { prop: "dropdown", type: "AppSidebarBrandDropdownItem[]", default: "—", description: "Structured item list. When omitted the brand renders as a plain non-interactive element." },
                    { prop: "showChevron", type: "boolean", default: "true", description: "Show the caret icon. Only applies when dropdown is provided." },
                    { prop: "className", type: "string", default: "—", description: "Additional classes for the brand container." },
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

            <p className="text-sm font-medium text-foreground pt-2">
              AppSidebarBrandDropdownItem
            </p>
            <p className="text-sm text-muted-foreground leading-6">
              Two shapes are accepted in the same array — regular items and separators:
            </p>
            <CodeBlock
              language="ts"
              code={`// Regular item
{ label: string; onClick?: () => void; icon?: ReactNode; disabled?: boolean }

// Separator — renders a visual divider
{ separator: true }`}
            />
          </div>

          {/* AppSidebarMenuButton */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              AppSidebarMenuButton
            </h3>
            <p className="text-sm text-muted-foreground leading-6">
              No background fill in the default or hover state. The primary
              brand color background is applied{" "}
              <strong className="font-medium text-foreground">
                only when{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
                  isActive={"{true}"}
                </code>
              </strong>
              . Do not add manual{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">
                bg-*
              </code>{" "}
              or{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">
                hover:bg-*
              </code>{" "}
              classes — fill behaviour is intentionally controlled by{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">
                isActive
              </code>{" "}
              only.
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
                    { prop: "asChild", type: "boolean", default: "false", description: "Render as child element (e.g. a router Link)." },
                    { prop: "isActive", type: "boolean", default: "false", description: "Marks this item as the active route. Applies primary brand color background + medium font weight." },
                    { prop: "variant", type: '"default" | "outline"', default: '"default"', description: "Visual style." },
                    { prop: "size", type: '"default" | "sm" | "lg"', default: '"default"', description: "Height and text size." },
                    { prop: "tooltip", type: "string | TooltipContentProps", default: "—", description: "Tooltip shown when sidebar is collapsed to icon mode." },
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

          {/* Default logo */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              Default logo
            </h3>
            <p className="text-sm text-muted-foreground leading-6">
              Omit the{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">
                logo
              </code>{" "}
              prop entirely to use the built-in white Viana Kit logo at{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">
                90×28
              </code>
              , centered in the header.
            </p>
            <CodeBlock
              language="tsx"
              code={`<AppSidebarHeader>
  <AppSidebarBrand />
</AppSidebarHeader>`}
            />
          </div>

          {/* Text logo */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              Text logo
            </h3>
            <CodeBlock
              language="tsx"
              code={`<AppSidebarHeader>
  <AppSidebarBrand logo="My App" />
</AppSidebarHeader>`}
            />
          </div>

          {/* Image logo */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              Image logo
            </h3>
            <p className="text-sm text-muted-foreground leading-6">
              Pass any{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">
                ReactNode
              </code>{" "}
              as the{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">
                logo
              </code>{" "}
              prop.{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">
                90×28
              </code>{" "}
              is the standard sidebar header size.
            </p>
            <CodeBlock
              language="tsx"
              code={`import { WhiteLogo } from "@/assets/logos"

<AppSidebarHeader>
  <AppSidebarBrand logo={<WhiteLogo width={90} height={28} />} />
</AppSidebarHeader>`}
            />
          </div>

          {/* With dropdown */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              With workspace dropdown
            </h3>
            <p className="text-sm text-muted-foreground leading-6">
              Pass a{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">
                dropdown
              </code>{" "}
              array to turn the brand into a dropdown trigger. The chevron is
              shown by default, positioned to the right so the logo stays
              centered. Use{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">
                {"{ separator: true }"}
              </code>{" "}
              to insert a visual divider.
            </p>
            <CodeBlock
              language="tsx"
              code={`<AppSidebarBrand
  dropdown={[
    { label: "Acme Corp", onClick: () => switchWorkspace("acme") },
    { label: "Personal",  onClick: () => switchWorkspace("personal") },
    { separator: true },
    { label: "Create workspace", onClick: openCreateModal },
  ]}
/>`}
            />
          </div>

          {/* Dropdown with icons */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              Dropdown with icons
            </h3>
            <CodeBlock
              language="tsx"
              code={`import { UserIcon, CreditCardIcon, LogOutIcon } from "lucide-react"

<AppSidebarBrand
  dropdown={[
    { label: "Profile", icon: <UserIcon className="size-4" />, onClick: goToProfile },
    { label: "Billing", icon: <CreditCardIcon className="size-4" />, onClick: goToBilling },
    { separator: true },
    { label: "Log out", icon: <LogOutIcon className="size-4" />, onClick: logout },
  ]}
/>`}
            />
          </div>

          {/* Disable chevron */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              Disable the chevron
            </h3>
            <p className="text-sm text-muted-foreground leading-6">
              Set{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">
                showChevron={"{false}"}
              </code>{" "}
              to hide the caret while keeping the dropdown fully functional.
              Useful when the logo itself carries enough affordance, or for a
              minimal header style.
            </p>
            <CodeBlock
              language="tsx"
              code={`<AppSidebarBrand dropdown={items} showChevron={false} />`}
            />
          </div>

          {/* Menu button fill */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              Active state
            </h3>
            <p className="text-sm text-muted-foreground leading-6">
              Pass{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">
                isActive
              </code>{" "}
              to mark the current route. No background is shown for inactive
              or hovered items.
            </p>
            <CodeBlock
              language="tsx"
              code={`<AppSidebarMenuButton isActive>Dashboard</AppSidebarMenuButton>
<AppSidebarMenuButton>Projects</AppSidebarMenuButton>`}
            />
          </div>

          {/* Menu button as link */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              Menu button as link
            </h3>
            <CodeBlock
              language="tsx"
              code={`<AppSidebarMenuButton asChild isActive>
  <a href="/dashboard">Dashboard</a>
</AppSidebarMenuButton>`}
            />
          </div>

          {/* Collapsible with trigger */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              Collapsible sidebar with trigger
            </h3>
            <p className="text-sm text-muted-foreground leading-6">
              Add{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">
                AppSidebarRail
              </code>{" "}
              for a drag-to-resize handle and{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">
                AppSidebarTrigger
              </code>{" "}
              for a toggle button. The keyboard shortcut{" "}
              <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs font-mono">
                ⌘B
              </kbd>{" "}
              is wired automatically.
            </p>
            <CodeBlock
              language="tsx"
              code={`<AppSidebarProvider>
  <AppSidebar collapsible="icon">
    <AppSidebarHeader>
      <AppSidebarBrand dropdown={workspaces} />
    </AppSidebarHeader>
    <AppSidebarContent>...</AppSidebarContent>
    <AppSidebarRail />
  </AppSidebar>
  <AppSidebarInset>
    <header className="flex items-center gap-2 border-b border-border px-4 py-3">
      <AppSidebarTrigger />
    </header>
    <main>Page content</main>
  </AppSidebarInset>
</AppSidebarProvider>`}
            />
          </div>

          {/* Preview containment */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              Containing sidebar inside a preview box
            </h3>
            <p className="text-sm text-muted-foreground leading-6">
              When embedding a sidebar inside a fixed-height container,{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">
                collapsible="icon"
              </code>{" "}
              uses{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">
                position: fixed
              </code>{" "}
              which breaks out of the parent. Add{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">
                [contain:layout]
              </code>{" "}
              to the wrapper to create a containing block.
            </p>
            <CodeBlock
              language="tsx"
              code={`<div className="relative h-96 overflow-hidden rounded-lg border [contain:layout]">
  <AppSidebarProvider className="min-h-0 h-full">
    <AppSidebar collapsible="icon">...</AppSidebar>
    <AppSidebarInset>...</AppSidebarInset>
  </AppSidebarProvider>
</div>`}
            />
          </div>
        </div>

        {/* Source */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Source
          </h2>
          <CodeBlock
            filename="src/components/primitives/AppSidebar.tsx"
            code={`"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "../../lib/utils"
import { WhiteLogo, WhiteSymbol } from "../../assets/logos"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Sidebar, SidebarProvider, useSidebar, /* ... */ } from "../ui/sidebar"

export type AppSidebarBrandDropdownItem =
  | { separator: true }
  | { label: string; onClick?: () => void; icon?: React.ReactNode; disabled?: boolean }

function AppSidebarBrand({
  logo = <WhiteLogo width={90} height={28} />,
  collapsedLogo = <WhiteSymbol width={24} height={24} />,
  dropdown,
  showChevron = true,
  className,
}) {
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"

  const inner = (
    <div className="relative flex w-full items-center justify-center py-1">
      {isCollapsed
        ? collapsedLogo
        : typeof logo === "string"
          ? <span className="text-sm font-semibold text-foreground">{logo}</span>
          : logo}
      {!isCollapsed && dropdown && showChevron && (
        <ChevronDown className="absolute right-0 size-4 shrink-0 text-muted-foreground" />
      )}
    </div>
  )
  if (!dropdown || isCollapsed) {
    return <div className={cn("flex items-center px-2", className)}>{inner}</div>
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={cn("flex w-full items-center rounded-md px-2 outline-none hover:bg-sidebar-accent ...", className)}>
          {inner}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="start" className="min-w-(--radix-dropdown-menu-trigger-width)">
        {dropdown.map((item, i) =>
          "separator" in item && item.separator
            ? <DropdownMenuSeparator key={i} />
            : <DropdownMenuItem key={i} disabled={item.disabled} onClick={item.onClick}>
                {item.icon}{item.label}
              </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function AppSidebarMenuButton({ className, ...props }) {
  return (
    <SidebarMenuButton
      className={cn(
        // Remove fill on hover and CSS :active
        "hover:bg-transparent hover:text-sidebar-foreground",
        "active:bg-transparent active:text-sidebar-foreground",
        // data-active: matches ALL buttons in Tailwind v4 (attribute always present) — reset
        "data-active:bg-transparent data-active:font-normal data-active:text-sidebar-foreground",
        // Re-apply primary brand color only for isActive={true}
        "data-[active=true]:bg-primary data-[active=true]:font-medium data-[active=true]:text-primary-foreground",
        className
      )}
      {...props}
    />
  )
}

// All other App* wrappers are passthrough — see full source in the repo
export { AppSidebar, AppSidebarBrand, AppSidebarMenuButton, AppSidebarProvider, /* ... */ }`}
          />
        </div>
      </section>
    </article>
  );
}
