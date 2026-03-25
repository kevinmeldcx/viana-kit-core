import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { AccordionDefaultPreview } from "@/components/previews/accordion-preview";

export const metadata: Metadata = {
  title: "Accordion",
};

export default function AccordionPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Accordion
        </h1>
        <p className="text-lg text-muted-foreground">
          A vertically stacked set of interactive headings that each reveal a
          section of content.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<AccordionDefaultPreview />}
        code={`import { AppAccordion, AppAccordionItem, AppAccordionTrigger, AppAccordionContent } from "@/components/primitives/AppAccordion"

export function Example() {
  return (
    <AppAccordion type="single" collapsible>
      <AppAccordionItem value="item-1">
        <AppAccordionTrigger>Is it accessible?</AppAccordionTrigger>
        <AppAccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AppAccordionContent>
      </AppAccordionItem>
      <AppAccordionItem value="item-2">
        <AppAccordionTrigger>Is it styled?</AppAccordionTrigger>
        <AppAccordionContent>
          Yes. It comes with default styles that match your design tokens.
        </AppAccordionContent>
      </AppAccordionItem>
    </AppAccordion>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-accordion-v1
        related_components: ["AppAccordion", "AppAccordionItem", "AppAccordionTrigger", "AppAccordionContent"]
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
            code={`import { AppAccordion, AppAccordionItem, AppAccordionTrigger, AppAccordionContent } from "@/components/primitives/AppAccordion"`}
          />
        </div>

        {/* type prop */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Single vs multiple
          </h2>
          <p className="text-muted-foreground leading-7">
            Use the{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              type
            </code>{" "}
            prop to control whether one or multiple items can be open at a time.
          </p>
          <div className="overflow-hidden rounded-lg border border-border text-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-2.5 text-left font-medium text-foreground">
                    Value
                  </th>
                  <th className="px-4 py-2.5 text-left font-medium text-foreground">
                    Behaviour
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["single", "Only one item can be open at a time."],
                  ["multiple", "Multiple items can be open simultaneously."],
                ].map(([value, description]) => (
                  <tr key={value}>
                    <td className="px-4 py-2.5 font-mono text-xs text-foreground">
                      {value}
                    </td>
                    <td className="px-4 py-2.5 text-muted-foreground">
                      {description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* collapsible */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Collapsible
          </h2>
          <p className="text-muted-foreground leading-7">
            When{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              type="single"
            </code>
            , add{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              collapsible
            </code>{" "}
            to allow the open item to be closed by clicking its trigger again.
          </p>
          <CodeBlock
            language="tsx"
            code={`<AppAccordion type="single" collapsible>
  {/* items */}
</AppAccordion>`}
          />
        </div>

        {/* API Reference */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppAccordion
            </code>{" "}
            and its sub-components extend their underlying Radix UI primitives.
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
                    prop: "type",
                    type: '"single" | "multiple"',
                    default: "—",
                    description:
                      "Whether one or multiple items can be open at a time.",
                  },
                  {
                    prop: "collapsible",
                    type: "boolean",
                    default: "false",
                    description:
                      'When type="single", allows the open item to be closed.',
                  },
                  {
                    prop: "defaultValue",
                    type: "string | string[]",
                    default: "—",
                    description: "The value of the item(s) open by default.",
                  },
                  {
                    prop: "value",
                    type: "string | string[]",
                    default: "—",
                    description: "Controlled open state value.",
                  },
                  {
                    prop: "onValueChange",
                    type: "(value: string | string[]) => void",
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

        {/* Source */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Source
          </h2>
          <CodeBlock
            filename="src/components/primitives/AppAccordion.tsx"
            code={`"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

function AppAccordion(props: React.ComponentProps<typeof Accordion>) {
  return <Accordion {...props} />
}

function AppAccordionItem(props: React.ComponentProps<typeof AccordionItem>) {
  return <AccordionItem {...props} />
}

function AppAccordionTrigger(props: React.ComponentProps<typeof AccordionTrigger>) {
  return <AccordionTrigger {...props} />
}

function AppAccordionContent(props: React.ComponentProps<typeof AccordionContent>) {
  return <AccordionContent {...props} />
}

export { AppAccordion, AppAccordionItem, AppAccordionTrigger, AppAccordionContent }`}
          />
        </div>
      </section>
    </article>
  );
}
