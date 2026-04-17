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
          The single entry point for every page layout. Renders the full
          scaffold — animated wave background, collapsible sidebar, dark header
          with search, network select, bento button, and avatar — from a single
          component with a nav prop.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        fullWidth
        preview={<DashboardDefaultPreview />}
        code={`import { LayoutDashboard, MapPin, Server } from "lucide-react"
import { AppDashboard } from "@/components/blocks/AppDashboard"

const nav = [
  { items: [{ title: "Dashboard", icon: LayoutDashboard, isActive: true }] },
  {
    label: "Manage",
    items: [
      { title: "Sites", icon: MapPin },
      { title: "Devices", icon: Server },
    ],
  },
]

export default function Page() {
  return (
    <AppDashboard nav={nav}>
      <p>Page content here.</p>
    </AppDashboard>
  )
}`}
        filename="page.tsx"
      />

      <hr className="my-10 border-border" />

      {/*
        canonical_id: block-dashboard-v2
        related_components: ["AppDashboard"]
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
            code={`import { AppDashboard } from "@/components/blocks/AppDashboard"`}
          />
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
                  { prop: "nav", type: "AppDashboardNavSection[]", default: "required", description: "Sidebar navigation sections. Each section renders a group with an optional label." },
                  { prop: "headerActions", type: "ReactNode", default: "Network select + bento + avatar", description: "Right-side header slot. Pass null to render nothing." },
                  { prop: "headerSearchbar", type: "ReactNode", default: "Search input group", description: "Searchbar slot. Pass null to suppress entirely." },
                  { prop: "sidebarWidth", type: "string", default: '"14rem"', description: "Overrides the --sidebar-width CSS variable." },
                  { prop: "headerHeight", type: "string", default: '"3.5rem"', description: "Overrides the --header-height CSS variable." },
                  { prop: "mainClassName", type: "string", default: '"p-6"', description: "Extra classes on the main content area." },
                  { prop: "children", type: "ReactNode", default: "required", description: "Your page content." },
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

        {/* Nav types */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Nav types
          </h2>
          <CodeBlock
            language="tsx"
            code={`type AppDashboardNavSection = {
  label?: string              // optional group heading
  items: AppDashboardNavItem[]
}

type AppDashboardNavItem = {
  title: string               // label and tooltip text
  icon: React.ElementType     // lucide-react icon component
  isActive?: boolean          // marks the current route
}`}
          />
        </div>

        {/* Overriding defaults */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Overriding defaults
          </h2>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">Custom header actions</h3>
            <CodeBlock
              language="tsx"
              code={`<AppDashboard nav={nav} headerActions={
  <AppAvatar className="size-8">
    <AppAvatarFallback>KA</AppAvatarFallback>
  </AppAvatar>
}>
  <PageContent />
</AppDashboard>`}
            />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">No searchbar</h3>
            <CodeBlock
              language="tsx"
              code={`<AppDashboard nav={nav} headerSearchbar={null}>
  <PageContent />
</AppDashboard>`}
            />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">Full-bleed content</h3>
            <CodeBlock
              language="tsx"
              code={`<AppDashboard nav={nav} mainClassName="p-0">
  <FullBleedContent />
</AppDashboard>`}
            />
          </div>
        </div>
      </section>
    </article>
  );
}
