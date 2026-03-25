import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { ToggleDefaultPreview, ToggleOutlinePreview, ToggleSizesPreview, ToggleBookmarkPreview } from "@/components/previews/toggle-preview";

export const metadata: Metadata = {
  title: "Toggle",
};

export default function TogglePage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Toggle</h1>
        <p className="text-lg text-muted-foreground">A two-state button that can be either on or off.</p>
      </div>

      <ComponentPreview
        preview={<ToggleDefaultPreview />}
        code={`import { AppToggle } from "@/components/primitives/AppToggle"

export function Example() {
  return <AppToggle>Toggle</AppToggle>
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-toggle-v1
        related_components: ["AppToggle"]
        platform_tags: ["web"]
        enforcement_level: strict
      */}

      <section className="space-y-10">
        {/* Import */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Import</h2>
          <CodeBlock language="tsx" code={`import { AppToggle } from "@/components/primitives/AppToggle"`} />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Outline</h2>
          <p className="text-muted-foreground">Use <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">variant=&quot;outline&quot;</code> for an outline style.</p>
          <ComponentPreview
            preview={<ToggleOutlinePreview />}
            code={`import { AppToggle } from "@/components/primitives/AppToggle"
import { Bold, Italic } from "lucide-react"

export function Example() {
  return (
    <>
      <AppToggle variant="outline">
        <Bold className="h-4 w-4" />
      </AppToggle>
      <AppToggle variant="outline">
        <Italic className="h-4 w-4" />
      </AppToggle>
    </>
  )
}`}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">With Icon</h2>
          <p className="text-muted-foreground">Icons can be used inside a toggle. Use the <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">group-data-[state=on]/toggle:fill-*</code> class to style the icon when the toggle is on.</p>
          <ComponentPreview
            preview={<ToggleBookmarkPreview />}
            code={`import { AppToggle } from "@/components/primitives/AppToggle"
import { Bookmark } from "lucide-react"

export function Example() {
  return (
    <AppToggle variant="outline" aria-label="Toggle bookmark">
      <Bookmark className="h-4 w-4 group-data-[state=on]/toggle:fill-foreground" />
      Bookmark
    </AppToggle>
  )
}`}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Sizes</h2>
          <p className="text-muted-foreground">Use the <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">size</code> prop to change the size of the toggle.</p>
          <ComponentPreview
            preview={<ToggleSizesPreview />}
            code={`import { AppToggle } from "@/components/primitives/AppToggle"

export function Example() {
  return (
    <>
      <AppToggle size="sm">Small</AppToggle>
      <AppToggle size="default">Default</AppToggle>
      <AppToggle size="lg">Large</AppToggle>
    </>
  )
}`}
          />
        </div>

        {/* API Reference - AppToggle */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">API Reference</h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">AppToggle</code> extends all native <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">{"<button>"}</code> HTML attributes.
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
                  { prop: "variant", type: '"default" | "outline"', default: '"default"', description: "The visual style of the toggle." },
                  { prop: "size", type: '"default" | "sm" | "lg"', default: '"default"', description: "The size of the toggle." },
                  { prop: "pressed", type: "boolean", default: "—", description: "The controlled pressed state of the toggle." },
                  { prop: "onPressedChange", type: "(pressed: boolean) => void", default: "—", description: "Callback fired when the pressed state changes." },
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
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Source</h2>
          <CodeBlock filename="src/components/primitives/AppToggle.tsx" code={`"use client"

import { Toggle, toggleVariants } from "../ui/toggle"
import type { VariantProps } from "class-variance-authority"

type AppToggleProps = React.ComponentProps<typeof Toggle> &
  VariantProps<typeof toggleVariants>

function AppToggle(props: AppToggleProps) {
  return (
    <Toggle {...props} />
  )
}

export { AppToggle }`} />
        </div>
      </section>
    </article>
  );
}
