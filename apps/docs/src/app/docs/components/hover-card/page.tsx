import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { HoverCardDefaultPreview } from "@/components/previews/hover-card-preview";

export const metadata: Metadata = { title: "Hover Card" };

export default function HoverCardPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Hover Card</h1>
        <p className="text-lg text-muted-foreground">A card that appears on hover.</p>
      </div>
      <ComponentPreview preview={<HoverCardDefaultPreview />} code={`import { AppHoverCard, AppHoverCardContent, AppHoverCardTrigger } from "@viana/ui"

export function Example() {
  return (
    <AppHoverCard>
      <AppHoverCardTrigger>Hover me</AppHoverCardTrigger>
      <AppHoverCardContent>Content here</AppHoverCardContent>
    </AppHoverCard>
  )
}`} filename="example.tsx" />
      <hr className="border-border my-10" />
      <section className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Installation</h2>
          <CodeBlock language="bash" code="npx viana-kit add hover-card" />
        </div>
      </section>
    </article>
  );
}
