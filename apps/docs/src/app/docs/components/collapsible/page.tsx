import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import {
  CollapsibleDefaultPreview,
  CollapsibleControlledPreview,
  CollapsibleUncontrolledPreview,
  CollapsibleDisabledPreview,
  CollapsibleNestedPreview,
} from "@/components/previews/collapsible-preview";

export const metadata: Metadata = {
  title: "Collapsible",
};

export default function CollapsiblePage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Collapsible
        </h1>
        <p className="text-lg text-muted-foreground">
          A component that reveals and hides content.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<CollapsibleDefaultPreview />}
        code={`import * as React from "react"
import { AppCollapsible, AppCollapsibleTrigger, AppCollapsibleContent } from "@/components/primitives/AppCollapsible"
import { AppButton } from "@/components/primitives/AppButton"
import { ChevronDownIcon } from "lucide-react"

export function Example() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <AppCollapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
        <AppCollapsibleTrigger asChild>
          <AppButton variant="ghost" size="sm">
            <ChevronDownIcon className="h-4 w-4" />
          </AppButton>
        </AppCollapsibleTrigger>
      </div>
      <AppCollapsibleContent className="space-y-2 pt-2">
        <p className="text-sm">@radix-ui/primitives</p>
        <p className="text-sm">@radix-ui/colors</p>
      </AppCollapsibleContent>
    </AppCollapsible>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-collapsible-v1
        related_components: ["AppCollapsible", "AppCollapsibleTrigger", "AppCollapsibleContent"]
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
  AppCollapsible,
  AppCollapsibleTrigger,
  AppCollapsibleContent,
} from "@/components/primitives/AppCollapsible"`}
          />
        </div>

        {/* API Reference - AppCollapsible */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppCollapsible
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
                    prop: "open",
                    type: "boolean",
                    default: "—",
                    description: "The controlled open state of the collapsible.",
                  },
                  {
                    prop: "onOpenChange",
                    type: "(open: boolean) => void",
                    default: "—",
                    description: "Callback fired when the open state changes.",
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

        {/* Examples */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Examples
          </h2>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">Controlled</h3>
            <p className="text-sm text-muted-foreground">
              Use <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">open</code> and{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">onOpenChange</code> to
              fully control the open state from outside the component.
            </p>
            <ComponentPreview
              preview={<CollapsibleControlledPreview />}
              code={`const [isOpen, setIsOpen] = React.useState(false)

<AppCollapsible open={isOpen} onOpenChange={setIsOpen}>
  <div className="flex items-center justify-between space-x-4">
    <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
    <AppCollapsibleTrigger asChild>
      <AppButton variant="ghost" size="sm">
        <ChevronsUpDown className="h-4 w-4" />
      </AppButton>
    </AppCollapsibleTrigger>
  </div>
  <div className="rounded-md border px-4 py-2 font-mono text-sm">
    @radix-ui/primitives
  </div>
  <AppCollapsibleContent className="space-y-2">
    <div className="rounded-md border px-4 py-2 font-mono text-sm">
      @radix-ui/colors
    </div>
    <div className="rounded-md border px-4 py-2 font-mono text-sm">
      @stitches/react
    </div>
  </AppCollapsibleContent>
</AppCollapsible>`}
              filename="example.tsx"
            />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">Uncontrolled (defaultOpen)</h3>
            <p className="text-sm text-muted-foreground">
              Use <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">defaultOpen</code> to
              start expanded without managing state yourself.
            </p>
            <ComponentPreview
              preview={<CollapsibleUncontrolledPreview />}
              code={`<AppCollapsible defaultOpen className="space-y-2">
  <div className="flex items-center justify-between space-x-4">
    <h4 className="text-sm font-semibold">Release notes</h4>
    <AppCollapsibleTrigger asChild>
      <AppButton variant="ghost" size="sm">
        <ChevronDownIcon className="h-4 w-4" />
      </AppButton>
    </AppCollapsibleTrigger>
  </div>
  <AppCollapsibleContent className="space-y-2">
    <div className="rounded-md border bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
      v1.2.0 — Added dark mode support.
    </div>
  </AppCollapsibleContent>
</AppCollapsible>`}
              filename="example.tsx"
            />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">Disabled</h3>
            <p className="text-sm text-muted-foreground">
              The <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">disabled</code> prop
              prevents user interaction with the trigger.
            </p>
            <ComponentPreview
              preview={<CollapsibleDisabledPreview />}
              code={`<AppCollapsible disabled>
  <div className="flex items-center justify-between space-x-4">
    <h4 className="text-sm font-semibold text-muted-foreground">Restricted section</h4>
    <AppCollapsibleTrigger asChild>
      <AppButton variant="ghost" size="sm" disabled>
        <ChevronDownIcon className="h-4 w-4" />
      </AppButton>
    </AppCollapsibleTrigger>
  </div>
  <AppCollapsibleContent>
    <div className="rounded-md border px-4 py-2 text-sm">Hidden content</div>
  </AppCollapsibleContent>
</AppCollapsible>`}
              filename="example.tsx"
            />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">Nested</h3>
            <p className="text-sm text-muted-foreground">
              Collapsibles can be nested to any depth. Each maintains its own independent open state.
              This is the foundation of the{" "}
              <a href="/docs/blocks/location-tree-filter" className="text-primary underline underline-offset-4">
                Location Tree Filter
              </a>{" "}
              block.
            </p>
            <ComponentPreview
              preview={<CollapsibleNestedPreview />}
              code={`const [outerOpen, setOuterOpen] = React.useState(true)
const [innerOpen, setInnerOpen] = React.useState(false)

<AppCollapsible open={outerOpen} onOpenChange={setOuterOpen}>
  <div className="flex items-center justify-between">
    <h4 className="text-sm font-semibold">Asia Pacific</h4>
    <AppCollapsibleTrigger asChild>
      <AppButton variant="ghost" size="sm">
        <ChevronDownIcon className="h-4 w-4" />
      </AppButton>
    </AppCollapsibleTrigger>
  </div>
  <AppCollapsibleContent>
    <div className="ml-4 mt-1">
      <AppCollapsible open={innerOpen} onOpenChange={setInnerOpen}>
        <div className="flex items-center justify-between">
          <h5 className="text-sm text-muted-foreground">Philippines</h5>
          <AppCollapsibleTrigger asChild>
            <AppButton variant="ghost" size="sm">
              <ChevronDownIcon className="h-3 w-3" />
            </AppButton>
          </AppCollapsibleTrigger>
        </div>
        <AppCollapsibleContent>
          <div className="ml-4 space-y-1 text-sm text-muted-foreground">
            <p>Manila</p>
            <p>Cebu City</p>
          </div>
        </AppCollapsibleContent>
      </AppCollapsible>
    </div>
  </AppCollapsibleContent>
</AppCollapsible>`}
              filename="example.tsx"
            />
          </div>
        </div>

        {/* Source */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Source
          </h2>
          <CodeBlock
            filename="src/components/primitives/AppCollapsible.tsx"
            code={`import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "../ui/collapsible"

const AppCollapsible = Collapsible
const AppCollapsibleTrigger = CollapsibleTrigger
const AppCollapsibleContent = CollapsibleContent

export { AppCollapsible, AppCollapsibleTrigger, AppCollapsibleContent }`}
          />
        </div>
      </section>
    </article>
  );
}
