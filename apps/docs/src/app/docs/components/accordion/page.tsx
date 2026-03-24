import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { AccordionDefaultPreview } from "@/components/previews/accordion-preview";

export const metadata: Metadata = { title: "Accordion" };

export default function AccordionPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Accordion</h1>
        <p className="text-lg text-muted-foreground">A vertically stacked set of interactive headings.</p>
      </div>
      <ComponentPreview preview={<AccordionDefaultPreview />} code={`import { AppAccordion, AppAccordionContent, AppAccordionItem, AppAccordionTrigger } from "@/components/primitives/AppAccordion"

export function Example() {
  return (
    <AppAccordion type="single" collapsible>
      <AppAccordionItem value="item-1">
        <AppAccordionTrigger>Question?</AppAccordionTrigger>
        <AppAccordionContent>Answer</AppAccordionContent>
      </AppAccordionItem>
    </AppAccordion>
  )
}`} filename="example.tsx" />
      <hr className="border-border my-10" />
      <section className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Installation</h2>
          <CodeBlock language="bash" code="npx viana-kit add accordion" />
        </div>
      </section>
    </article>
  );
}
