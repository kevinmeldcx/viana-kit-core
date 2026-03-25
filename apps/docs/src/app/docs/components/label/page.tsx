import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { LabelDefaultPreview } from "@/components/previews/label-preview";

export const metadata: Metadata = {
  title: "Label",
};

export default function LabelPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Label
        </h1>
        <p className="text-lg text-muted-foreground">
          A form label. Use it to label form inputs for accessibility.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<LabelDefaultPreview />}
        code={`import { AppLabel } from "@/components/primitives/AppLabel"

export function Example() {
  return <AppLabel>Label</AppLabel>
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-label-v1
        related_components: ["AppLabel"]
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
            code={`import { AppLabel } from "@/components/primitives/AppLabel"`}
          />
        </div>

        {/* Usage */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Usage
          </h2>
          <p className="text-muted-foreground leading-7">
            Use the Label component with input components for proper
            accessibility. The{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              htmlFor
            </code>{" "}
            prop links the label to the input.
          </p>
          <CodeBlock
            language="tsx"
            code={`import { AppInput } from "@/components/primitives/AppInput"
import { AppLabel } from "@/components/primitives/AppLabel"

export function FormExample() {
  return (
    <div className="space-y-2">
      <AppLabel htmlFor="email">Email</AppLabel>
      <AppInput id="email" placeholder="Enter your email" />
    </div>
  )
}`}
          />
        </div>

        {/* API Reference */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppLabel
            </code>{" "}
            extends all native{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              {"<label>"}
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
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  {
                    prop: "htmlFor",
                    type: "string",
                    description:
                      "The id of the form element the label is associated with.",
                  },
                  {
                    prop: "className",
                    type: "string",
                    description:
                      "Additional Tailwind classes merged via cn().",
                  },
                ].map(({ prop, type, description }) => (
                  <tr key={prop}>
                    <td className="px-4 py-3 font-mono text-xs text-foreground">
                      {prop}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                      {type}
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
            filename="src/components/primitives/AppLabel.tsx"
            code={`"use client"

import { Label } from "@/components/ui/label"

function AppLabel(props: React.ComponentProps<typeof Label>) {
  return <Label {...props} />
}

export { AppLabel }`}
          />
        </div>
      </section>
    </article>
  );
}