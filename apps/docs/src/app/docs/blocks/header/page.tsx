import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { HeaderDefaultPreview } from "@/components/previews/header-preview";

export const metadata: Metadata = {
  title: "Header",
};

export default function HeaderPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Blocks</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Header
        </h1>
        <p className="text-lg text-muted-foreground">
          A composable application header bar with layout slots for a title,
          search input group, and right-side actions.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<HeaderDefaultPreview />}
        code={`import { Search } from "lucide-react"
import {
  AppHeader,
  AppHeaderContent,
  AppHeaderTitle,
  AppHeaderSearchbar,
  AppHeaderActions,
} from "@/components/blocks/AppHeader"
import {
  AppButtonGroup,
  AppButton,
  AppInput,
  AppSelect,
  AppSelectTrigger,
  AppSelectValue,
  AppSelectContent,
  AppSelectItem,
  AppAvatar,
  AppAvatarFallback,
} from "@/components/primitives"

export function Example() {
  return (
    <AppHeader>
      <AppHeaderContent>
        <AppHeaderTitle>Dashboard</AppHeaderTitle>
        <AppHeaderSearchbar>
          <AppButtonGroup className="w-full max-w-sm">
            <AppInput
              placeholder="Search for sites, sensors, and more..."
              leftAdornment={<Search className="size-4" />}
            />
            <AppButton variant="default">
              <Search className="size-4" />
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
              <AppSelectItem value="network-2">Acme Network</AppSelectItem>
            </AppSelectContent>
          </AppSelect>
          <AppAvatar className="size-8">
            <AppAvatarFallback>KA</AppAvatarFallback>
          </AppAvatar>
        </AppHeaderActions>
      </AppHeaderContent>
    </AppHeader>
  )
}`}
        filename="example.tsx"
      />

      <hr className="my-10 border-border" />

      {/*
        canonical_id: block-header-v1
        related_components: ["AppHeader", "AppHeaderContent", "AppHeaderTitle", "AppHeaderSearchbar", "AppHeaderActions"]
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
  AppHeader,
  AppHeaderContent,
  AppHeaderTitle,
  AppHeaderSearchbar,
  AppHeaderActions,
} from "@/components/blocks/AppHeader"`}
          />
        </div>

        {/* API Reference */}
        <div className="space-y-8">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>

          {/* AppHeader */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              AppHeader
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">
              The outer{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                &lt;header&gt;
              </code>{" "}
              element. Height is controlled by the{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                --header-height
              </code>{" "}
              CSS variable, which should be set on the layout root alongside{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                --sidebar-width
              </code>
              . Accepts all standard{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                &lt;header&gt;
              </code>{" "}
              HTML attributes.
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
                    { prop: "className", type: "string", default: "—", description: "Additional classes merged onto the header element." },
                    { prop: "children", type: "ReactNode", default: "—", description: "Slot content — typically AppHeaderContent." },
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

          {/* AppHeaderContent */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              AppHeaderContent
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">
              Inner flex container. Provides horizontal padding (
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                px-4
              </code>{" "}
              on mobile,{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                px-6
              </code>{" "}
              on large screens) and a consistent gap between children.
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
                    { prop: "className", type: "string", default: "—", description: "Additional classes merged onto the content div." },
                    { prop: "children", type: "ReactNode", default: "—", description: "Header slots: AppHeaderTitle, AppHeaderSearchbar, AppHeaderActions." },
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

          {/* AppHeaderTitle */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              AppHeaderTitle
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">
              Optional page or section label. Renders as an inline{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                &lt;span&gt;
              </code>{" "}
              with{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                shrink-0
              </code>{" "}
              so it never compresses when the searchbar expands. Omit it when no
              title is needed.
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
                    { prop: "children", type: "ReactNode", default: "—", description: "Title text content." },
                    { prop: "className", type: "string", default: "—", description: "Additional classes merged onto the span." },
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

          {/* AppHeaderSearchbar */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              AppHeaderSearchbar
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">
              A{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                flex-1
              </code>{" "}
              layout slot that expands to fill available space between the title
              and actions. Place an{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                AppButtonGroup
              </code>{" "}
              inside to compose input and button combinations. The slot imposes
              no opinions on the input group&apos;s internal layout.
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
                    { prop: "children", type: "ReactNode", default: "—", description: "Typically an AppButtonGroup containing AppInput + AppButton." },
                    { prop: "className", type: "string", default: "—", description: "Additional classes merged onto the searchbar div." },
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

          {/* AppHeaderActions */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              AppHeaderActions
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">
              Right-side slot. Uses{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                ml-auto
              </code>{" "}
              to push itself to the far right of the header. The default
              composition is{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                AppSelect
              </code>{" "}
              +{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                AppAvatar
              </code>
              , but any components can be placed inside in any order.
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
                    { prop: "children", type: "ReactNode", default: "—", description: "Action controls — AppSelect, AppButton, AppAvatar, or any combination." },
                    { prop: "className", type: "string", default: "—", description: "Additional classes merged onto the actions div." },
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

          {/* With sidebar */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              With sidebar layout
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">
              Place{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                AppHeader
              </code>{" "}
              as the first child of{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                AppSidebarInset
              </code>
              . Set{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                --header-height
              </code>{" "}
              on the{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                AppSidebarProvider
              </code>{" "}
              style alongside{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                --sidebar-width
              </code>
              .
            </p>
            <CodeBlock
              language="tsx"
              code={`<AppSidebarProvider
  style={{
    "--sidebar-width": "calc(var(--spacing) * 72)",
    "--header-height": "calc(var(--spacing) * 14)",
  } as React.CSSProperties}
>
  <AppSidebar>...</AppSidebar>
  <AppSidebarInset>
    <AppHeader>
      <AppHeaderContent>
        <AppSidebarTrigger />
        <AppHeaderSearchbar>
          <AppButtonGroup>
            <AppInput placeholder="Search..." />
            <AppButton variant="default"><Search className="size-4" /></AppButton>
          </AppButtonGroup>
        </AppHeaderSearchbar>
        <AppHeaderActions>
          <AppSelect>...</AppSelect>
          <AppAvatar><AppAvatarFallback>KA</AppAvatarFallback></AppAvatar>
        </AppHeaderActions>
      </AppHeaderContent>
    </AppHeader>
    <main>Page content</main>
  </AppSidebarInset>
</AppSidebarProvider>`}
            />
          </div>

          {/* Title optional */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              With optional title
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">
              Add{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                AppHeaderTitle
              </code>{" "}
              between the sidebar trigger and the searchbar. Omit it on pages
              where the current context is already obvious.
            </p>
            <CodeBlock
              language="tsx"
              code={`<AppHeaderContent>
  <AppSidebarTrigger />
  <AppHeaderTitle>Sites</AppHeaderTitle>
  <AppHeaderSearchbar>...</AppHeaderSearchbar>
  <AppHeaderActions>...</AppHeaderActions>
</AppHeaderContent>`}
            />
          </div>

          {/* Extra actions */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              Inserting extra controls in AppHeaderActions
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">
              Place any component between or alongside the defaults — order is
              fully controlled by the consumer.
            </p>
            <CodeBlock
              language="tsx"
              code={`import { LayoutGrid, Bell } from "lucide-react"

<AppHeaderActions>
  <AppSelect>...</AppSelect>
  <AppButton variant="ghost" size="icon">
    <LayoutGrid className="size-4" />
  </AppButton>
  <AppButton variant="ghost" size="icon">
    <Bell className="size-4" />
  </AppButton>
  <AppAvatar>
    <AppAvatarImage src="/avatar.png" alt="Kevin" />
    <AppAvatarFallback>KA</AppAvatarFallback>
  </AppAvatar>
</AppHeaderActions>`}
            />
          </div>

          {/* Searchbar without title */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              Searchbar without title
            </h3>
            <CodeBlock
              language="tsx"
              code={`<AppHeaderContent>
  <AppSidebarTrigger />
  <AppHeaderSearchbar>
    <AppButtonGroup className="w-full max-w-md">
      <AppInput
        placeholder="Search for sites, sensors, and more..."
        leftAdornment={<Search className="size-4" />}
      />
      <AppButton variant="default">
        <Search className="size-4" />
      </AppButton>
    </AppButtonGroup>
  </AppHeaderSearchbar>
  <AppHeaderActions>
    <AppSelect>...</AppSelect>
    <AppAvatar>...</AppAvatar>
  </AppHeaderActions>
</AppHeaderContent>`}
            />
          </div>
        </div>

        {/* Source */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Source
          </h2>
          <CodeBlock
            filename="src/components/blocks/AppHeader.tsx"
            code={`import * as React from "react"
import { cn } from "../../lib/utils"

function AppHeader({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <header
      className={cn(
        "flex h-(--header-height) shrink-0 items-center gap-2 border-b border-border transition-[width,height] ease-linear",
        className
      )}
      {...props}
    />
  )
}

function AppHeaderContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex w-full items-center gap-2 px-4 lg:px-6", className)}
      {...props}
    />
  )
}

function AppHeaderTitle({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("shrink-0 text-sm font-medium text-foreground", className)}
      {...props}
    />
  )
}

function AppHeaderSearchbar({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-1 items-center", className)}
      {...props}
    />
  )
}

function AppHeaderActions({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("ml-auto flex items-center gap-2", className)}
      {...props}
    />
  )
}

export {
  AppHeader,
  AppHeaderContent,
  AppHeaderTitle,
  AppHeaderSearchbar,
  AppHeaderActions,
}`}
          />
        </div>
      </section>
    </article>
  );
}
