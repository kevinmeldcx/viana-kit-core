import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { TooltipDefaultPreview } from "@/components/previews/tooltip-preview";

export const metadata: Metadata = { title: "Tooltip" };

export default function TooltipPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Tooltip</h1>
        <p className="text-lg text-muted-foreground">A popup that displays information on hover.</p>
      </div>
      <ComponentPreview preview={<TooltipDefaultPreview />} code={`import { AppTooltip, AppTooltipContent, AppTooltipProvider, AppTooltipTrigger } from "@/components/primitives/AppTooltip"

export function Example() {
  return (
    <AppTooltipProvider>
      <AppTooltip>
        <AppTooltipTrigger>Hover me</AppTooltipTrigger>
        <AppTooltipContent>Tooltip content</AppTooltipContent>
      </AppTooltip>
    </AppTooltipProvider>
  )
}`} filename="example.tsx" />
      <hr className="border-border my-10" />
      <section className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Installation</h2>
          <CodeBlock language="bash" code="npx viana-kit add tooltip" />
        </div>
      </section>
    </article>
  );
}
