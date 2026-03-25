import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { TabsDefaultPreview } from "@/components/previews/tabs-preview";

export const metadata: Metadata = {
  title: "Tabs",
};

export default function TabsPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Tabs
        </h1>
        <p className="text-lg text-muted-foreground">
          A set of tabbed panels for navigating between views.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<TabsDefaultPreview />}
        code={`import { AppTabs, AppTabsList, AppTabsTrigger, AppTabsContent } from "@/components/primitives/AppTabs"

export function Example() {
  return (
    <AppTabs defaultValue="account">
      <AppTabsList>
        <AppTabsTrigger value="account">Account</AppTabsTrigger>
        <AppTabsTrigger value="password">Password</AppTabsTrigger>
      </AppTabsList>
      <AppTabsContent value="account">Account settings</AppTabsContent>
      <AppTabsContent value="password">Password settings</AppTabsContent>
    </AppTabs>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-tabs-v1
        related_components: ["AppTabs", "AppTabsList", "AppTabsTrigger", "AppTabsContent"]
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
  AppTabs,
  AppTabsList,
  AppTabsTrigger,
  AppTabsContent,
} from "@/components/primitives/AppTabs"`}
          />
        </div>

        {/* API Reference - AppTabs */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppTabs
            </code>{" "}
            extends all native{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              {"<div>"}
            </code>{" "}
            HTML attributes.
          </p>
          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-3 text-left font-medium text-foreground">
                    Prop
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">
                    Default
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  {
                    prop: "defaultValue",
                    type: "string",
                    default: "—",
                    description: "The default selected tab value.",
                  },
                  {
                    prop: "value",
                    type: "string",
                    default: "—",
                    description: "The controlled selected tab value.",
                  },
                  {
                    prop: "onValueChange",
                    type: "(value: string) => void",
                    default: "—",
                    description: "Callback fired when the tab value changes.",
                  },
                  {
                    prop: "className",
                    type: "string",
                    default: "—",
                    description:
                      "Additional Tailwind classes merged via cn(). Prefer the wrapper pattern for reusable overrides.",
                  },
                ].map(({ prop, type, default: def, description }) => (
                  <tr key={prop}>
                    <td className="px-4 py-3 font-mono text-xs text-foreground">
                      {prop}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                      {type}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                      {def}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Source */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Source
          </h2>
          <CodeBlock
            filename="src/components/primitives/AppTabs.tsx"
            code={`"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"

type AppTabsProps = React.ComponentProps<typeof Tabs>

function AppTabs(props: AppTabsProps) {
  return <Tabs {...props} />
}

function AppTabsList(props: React.ComponentProps<typeof TabsList>) {
  return <TabsList {...props} />
}

function AppTabsTrigger(props: React.ComponentProps<typeof TabsTrigger>) {
  return <TabsTrigger {...props} />
}

function AppTabsContent(props: React.ComponentProps<typeof TabsContent>) {
  return <TabsContent {...props} />
}

export { AppTabs, AppTabsList, AppTabsTrigger, AppTabsContent }`}
          />
        </div>
      </section>
    </article>
  );
}
