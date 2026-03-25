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

      {/*
        canonical_id: component-tooltip-v1
        related_components: ["AppTooltip", "AppTooltipProvider", "AppTooltipTrigger", "AppTooltipContent"]
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
            code={`import { AppTooltip, AppTooltipProvider, AppTooltipTrigger, AppTooltipContent } from "@/components/primitives/AppTooltip"`}
          />
        </div>

        {/* API Reference - AppTooltip */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">AppTooltip</code> extends all native <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">{"<div>"}</code> HTML attributes.
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
                  { prop: "open", type: "boolean", default: "—", description: "The controlled open state of the tooltip." },
                  { prop: "onOpenChange", type: "(open: boolean) => void", default: "—", description: "Callback fired when the open state changes." },
                  { prop: "defaultOpen", type: "boolean", default: "—", description: "The default open state of the tooltip." },
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
            filename="src/components/primitives/AppTooltip.tsx"
            code={`"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"

function AppTooltipProvider({ children }: { children: React.ReactNode }) {
  return <TooltipProvider>{children}</TooltipProvider>
}

function AppTooltip(props: React.ComponentProps<typeof Tooltip>) {
  return <Tooltip {...props} />
}

function AppTooltipTrigger(props: React.ComponentProps<typeof TooltipTrigger>) {
  return <TooltipTrigger {...props} />
}

function AppTooltipContent(props: React.ComponentPropsWithoutRef<typeof TooltipContent>) {
  return (
    <TooltipContent {...props}>
      {props.children}
    </TooltipContent>
  )
}

export { AppTooltip, AppTooltipProvider, AppTooltipTrigger, AppTooltipContent }`}
          />
        </div>
      </section>
    </article>
  );
}
