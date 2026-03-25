import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { ScrollAreaDefaultPreview } from "@/components/previews/scroll-area-preview";

export const metadata: Metadata = {
  title: "Scroll Area",
};

export default function ScrollAreaPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Scroll Area
        </h1>
        <p className="text-lg text-muted-foreground">
          A scrollable container with custom scrollbar.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<ScrollAreaDefaultPreview />}
        code={`import { AppScrollArea } from "@/components/primitives/AppScrollArea"

export function Example() {
  return (
    <AppScrollArea className="h-[200px] w-[300px] border p-4">
      Scrollable content...
    </AppScrollArea>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-scroll-area-v1
        related_components: ["AppScrollArea", "AppScrollBar"]
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
            code={`import { AppScrollArea, AppScrollBar } from "@/components/primitives/AppScrollArea"`}
          />
        </div>

        {/* API Reference - AppScrollArea */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppScrollArea
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
            filename="src/components/primitives/AppScrollArea.tsx"
            code={`"use client"

import { ScrollArea, ScrollBar } from "../ui/scroll-area"

function AppScrollArea(props: React.ComponentProps<typeof ScrollArea>) {
  return <ScrollArea {...props} />
}

function AppScrollBar(props: React.ComponentProps<typeof ScrollBar>) {
  return <ScrollBar {...props} />
}

export { AppScrollArea, AppScrollBar }`}
          />
        </div>
      </section>
    </article>
  );
}
