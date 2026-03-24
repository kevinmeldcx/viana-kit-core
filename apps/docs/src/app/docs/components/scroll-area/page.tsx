import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { ScrollAreaDefaultPreview } from "@/components/previews/scroll-area-preview";

export const metadata: Metadata = { title: "Scroll Area" };

export default function ScrollAreaPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Scroll Area</h1>
        <p className="text-lg text-muted-foreground">A scrollable container with custom scrollbar.</p>
      </div>
      <ComponentPreview preview={<ScrollAreaDefaultPreview />} code={`import { AppScrollArea } from "@viana/ui"

export function Example() {
  return (
    <AppScrollArea className="h-[200px] w-[300px] border p-4">
      Scrollable content...
    </AppScrollArea>
  )
}`} filename="example.tsx" />
      <hr className="border-border my-10" />
      <section className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Installation</h2>
          <CodeBlock language="bash" code="npx viana-kit add scroll-area" />
        </div>
      </section>
    </article>
  );
}
