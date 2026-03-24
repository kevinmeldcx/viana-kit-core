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
        code={`import { AppToggle } from "@viana/ui"

export function Example() {
  return <AppToggle>Toggle</AppToggle>
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      <section className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Installation</h2>
          <CodeBlock language="bash" code="npx viana-kit add toggle" />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Import</h2>
          <CodeBlock language="tsx" code={`import { AppToggle } from "@viana/ui"`} />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Outline</h2>
          <p className="text-muted-foreground">Use <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">variant=&quot;outline&quot;</code> for an outline style.</p>
          <ComponentPreview
            preview={<ToggleOutlinePreview />}
            code={`import { AppToggle } from "@viana/ui"
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
            code={`import { AppToggle } from "@viana/ui"
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
            code={`import { AppToggle } from "@viana/ui"

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
      </section>
    </article>
  );
}
