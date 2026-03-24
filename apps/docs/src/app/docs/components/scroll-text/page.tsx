import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { ScrollTextDefaultPreview } from "@/components/previews/scroll-text-preview";

export const metadata: Metadata = {
  title: "Scroll Text - Viana Kit",
  description: "A component that scrolls text automatically.",
};

export default function ScrollTextPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Scroll Text
        </h1>
        <p className="text-lg text-muted-foreground">
          A component that scrolls text automatically in a specified direction.
        </p>
      </div>

      <ComponentPreview
        preview={<ScrollTextDefaultPreview />}
        code={`import { AppScrollText } from "@viana/ui"

export function Example() {
  return (
    <AppScrollText direction="left" className="text-2xl font-bold">
      <span className="mx-4">Welcome to Viana Kit</span>
      <span className="mx-4">Build faster with shadcn/ui style</span>
      <span className="mx-4">Open source and free to use</span>
    </AppScrollText>
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
          <CodeBlock language="bash" code="npx viana-kit add scroll-text" />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Import
          </h2>
          <CodeBlock
            language="tsx"
            code={`import { AppScrollText } from "@viana/ui"`}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Props
          </h2>
          <div className="overflow-hidden rounded-lg border border-border text-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-2.5 text-left font-medium text-foreground">
                    Prop
                  </th>
                  <th className="px-4 py-2.5 text-left font-medium text-foreground">
                    Type
                  </th>
                  <th className="px-4 py-2.5 text-left font-medium text-foreground">
                    Default
                  </th>
                  <th className="px-4 py-2.5 text-left font-medium text-foreground">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["direction", '"left" | "right"', '"left"', "Scroll direction"],
                  ["speed", "number", "50", "Scroll speed (higher = faster)"],
                  ["className", "string", "-", "Additional CSS classes"],
                ].map(([prop, type, default_, description]) => (
                  <tr key={prop}>
                    <td className="px-4 py-2.5 font-mono text-xs text-foreground">
                      {prop}
                    </td>
                    <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">
                      {type}
                    </td>
                    <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">
                      {default_}
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
      </section>
    </article>
  );
}
