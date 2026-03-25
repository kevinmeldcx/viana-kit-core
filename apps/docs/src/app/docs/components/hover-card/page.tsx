import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { HoverCardDefaultPreview } from "@/components/previews/hover-card-preview";

export const metadata: Metadata = {
  title: "Hover Card",
};

export default function HoverCardPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Hover Card
        </h1>
        <p className="text-lg text-muted-foreground">
          A card that appears on hover.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<HoverCardDefaultPreview />}
        code={`import { AppHoverCard, AppHoverCardContent, AppHoverCardTrigger } from "@/components/primitives/AppHoverCard"

export function Example() {
  return (
    <AppHoverCard>
      <AppHoverCardTrigger>Hover me</AppHoverCardTrigger>
      <AppHoverCardContent>Content here</AppHoverCardContent>
    </AppHoverCard>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-hover-card-v1
        related_components: ["AppHoverCard", "AppHoverCardTrigger", "AppHoverCardContent"]
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
            code={`import { AppHoverCard, AppHoverCardContent, AppHoverCardTrigger } from "@/components/primitives/AppHoverCard"`}
          />
        </div>

        {/* API Reference - AppHoverCard */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppHoverCard
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
            filename="src/components/primitives/AppHoverCard.tsx"
            code={`"use client"

import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"

function AppHoverCard(props: React.ComponentProps<typeof HoverCard>) {
  return <HoverCard {...props} />
}

function AppHoverCardTrigger({ children }: { children: React.ReactNode }) {
  return <HoverCardTrigger>{children}</HoverCardTrigger>
}

function AppHoverCardContent(props: React.ComponentPropsWithoutRef<typeof HoverCardContent>) {
  return <HoverCardContent {...props} />
}

export { AppHoverCard, AppHoverCardTrigger, AppHoverCardContent }`}
          />
        </div>
      </section>
    </article>
  );
}
