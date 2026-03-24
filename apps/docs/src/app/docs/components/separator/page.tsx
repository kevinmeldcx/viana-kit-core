import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { SeparatorDefaultPreview } from "@/components/previews/separator-preview";

export const metadata: Metadata = { title: "Separator" };

export default function SeparatorPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Separator</h1>
        <p className="text-lg text-muted-foreground">A visual divider between elements.</p>
      </div>
      <ComponentPreview preview={<SeparatorDefaultPreview />} code={`import { AppSeparator } from "@viana/ui"

export function Example() {
  return (
    <div className="w-full space-y-2">
      <p>Content above</p>
      <AppSeparator />
      <p>Content below</p>
    </div>
  )
}`} filename="example.tsx" />
      <hr className="border-border my-10" />
      <section className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Installation</h2>
          <CodeBlock language="bash" code="npx viana-kit add separator" />
        </div>
      </section>
    </article>
  );
}
