import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { SelectDefaultPreview } from "@/components/previews/select-preview";

export const metadata: Metadata = { title: "Select" };

export default function SelectPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Select</h1>
        <p className="text-lg text-muted-foreground">A dropdown list for selecting options.</p>
      </div>
      <ComponentPreview preview={<SelectDefaultPreview />} code={`import { AppSelect, AppSelectContent, AppSelectItem, AppSelectLabel, AppSelectTrigger, AppSelectValue } from "@/components/primitives/AppSelect"

export function Example() {
  return (
    <AppSelect>
      <AppSelectTrigger>
        <AppSelectValue placeholder="Select an option" />
      </AppSelectTrigger>
      <AppSelectContent>
        <AppSelectLabel>Fruits</AppSelectLabel>
        <AppSelectItem value="apple">Apple</AppSelectItem>
        <AppSelectItem value="banana">Banana</AppSelectItem>
      </AppSelectContent>
    </AppSelect>
  )
}`} filename="example.tsx" />
      <hr className="border-border my-10" />
      <section className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Installation</h2>
          <CodeBlock language="bash" code="npx viana-kit add select" />
        </div>
      </section>
    </article>
  );
}
