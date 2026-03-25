import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { ToggleGroupDefaultPreview } from "@/components/previews/toggle-group-preview";

export const metadata: Metadata = {
  title: "Toggle Group - Viana Kit",
  description: "A set of two-state buttons that can be toggled together.",
};

export default function ToggleGroupPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Toggle Group
        </h1>
        <p className="text-lg text-muted-foreground">
          A set of two-state buttons that can be toggled together.
        </p>
      </div>

      <ComponentPreview
        preview={<ToggleGroupDefaultPreview />}
        code={`import * as React from "react"
import { AppToggleGroup, AppToggleGroupItem } from "@/components/primitives/AppToggleGroup"
import { Bold, Italic, Underline } from "lucide-react"

export function Example() {
  return (
    <AppToggleGroup type="single">
      <AppToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </AppToggleGroupItem>
      <AppToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </AppToggleGroupItem>
      <AppToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </AppToggleGroupItem>
    </AppToggleGroup>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-toggle-group-v1
        related_components: ["AppToggleGroup", "AppToggleGroupItem"]
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
            code={`import { AppToggleGroup, AppToggleGroupItem } from "@/components/primitives/AppToggleGroup"`}
          />
        </div>

        {/* API Reference - AppToggleGroup */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">AppToggleGroup</code> extends all native <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">{"<div>"}</code> HTML attributes.
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
                  { prop: "type", type: '"single" | "multiple"', default: '"single"', description: "The type of toggle group." },
                  { prop: "value", type: "string", default: "—", description: "The controlled value of the selected item." },
                  { prop: "onValueChange", type: "(value: string) => void", default: "—", description: "Callback fired when the value changes." },
                  { prop: "className", type: "string", default: "—", description: "Additional Tailwind classes merged via cn()." },
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

        {/* Source */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Source
          </h2>
          <CodeBlock
            filename="src/components/primitives/AppToggleGroup.tsx"
            code={`import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group"

const AppToggleGroup = ToggleGroup
const AppToggleGroupItem = ToggleGroupItem

export { AppToggleGroup, AppToggleGroupItem }`}
          />
        </div>
      </section>
    </article>
  );
}
