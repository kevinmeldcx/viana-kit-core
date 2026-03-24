import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { CheckboxDefaultPreview } from "@/components/previews/checkbox-preview";

export const metadata: Metadata = {
  title: "Checkbox",
};

export default function CheckboxPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Checkbox
        </h1>
        <p className="text-lg text-muted-foreground">
          A control that allows the user to toggle between checked and not checked.
        </p>
      </div>

      <ComponentPreview
        preview={<CheckboxDefaultPreview />}
        code={`import { AppCheckbox } from "@viana/ui"AppCheckbox"

export function Example() {
  return (
    <div className="flex items-center gap-2">
      <AppCheckbox id="terms" />
      <label htmlFor="terms">Accept terms</label>
    </div>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      <section className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Installation
          </h2>
          <CodeBlock language="bash" code="npx viana-kit add checkbox" />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Import
          </h2>
          <CodeBlock
            language="tsx"
            code={`import { AppCheckbox } from "@viana/ui"`}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-3 text-left font-medium text-foreground">Prop</th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">Type</th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 font-mono text-xs text-foreground">checked</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-4 py-3 text-muted-foreground">Whether the checkbox is checked.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs text-foreground">disabled</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="px-4 py-3 text-muted-foreground">Whether the checkbox is disabled.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </article>
  );
}