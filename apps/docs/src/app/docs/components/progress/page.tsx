import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { ProgressDefaultPreview, ProgressLabelPreview, ProgressControlledPreview } from "@/components/previews/progress-preview";

export const metadata: Metadata = {
  title: "Progress",
};

export default function ProgressPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Progress
        </h1>
        <p className="text-lg text-muted-foreground">
          A component that displays the progress of an operation.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<ProgressDefaultPreview />}
        code={`import { AppProgress } from "@/components/primitives/AppProgress"

export function Example() {
  return <AppProgress value={33} />
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-progress-v1
        related_components: ["AppProgress"]
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
            code={`import { AppProgress } from "@/components/primitives/AppProgress"`}
          />
        </div>

        {/* Label */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Label
          </h2>
          <p className="text-muted-foreground leading-7">
            Pair{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppProgress
            </code>{" "}
            with a label row above it to communicate status and the current
            value to the user.
          </p>
          <ComponentPreview
            preview={<ProgressLabelPreview />}
            code={`<div className="space-y-1.5">
  <div className="flex justify-between text-sm text-muted-foreground">
    <span>Uploading…</span>
    <span>66%</span>
  </div>
  <AppProgress value={66} />
</div>`}
            filename="example.tsx"
          />
        </div>

        {/* Controlled */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Controlled
          </h2>
          <p className="text-muted-foreground leading-7">
            Drive the{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              value
            </code>{" "}
            prop from state to reflect real-time progress — for example, a file
            upload or a multi-step form.
          </p>
          <ComponentPreview
            preview={<ProgressControlledPreview />}
            code={`"use client"

import { useState } from "react"
import { AppProgress } from "@/components/primitives/AppProgress"

export function ControlledExample() {
  const [value, setValue] = useState(33)

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Progress</span>
        <span>{value}%</span>
      </div>
      <AppProgress value={value} />
      <div className="flex gap-2 justify-center">
        <button onClick={() => setValue((v) => Math.max(0, v - 10))}>−10</button>
        <button onClick={() => setValue((v) => Math.min(100, v + 10))}>+10</button>
      </div>
    </div>
  )
}`}
            filename="example.tsx"
          />
        </div>

        {/* API Reference - AppProgress */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppProgress
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
                    prop: "value",
                    type: "number",
                    default: "—",
                    description: "The value of the progress indicator.",
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
            filename="src/components/primitives/AppProgress.tsx"
            code={`"use client"

import { Progress } from "../ui/progress"

type AppProgressProps = React.ComponentPropsWithoutRef<typeof Progress>

function AppProgress(props: AppProgressProps) {
  return <Progress {...props} />
}

export { AppProgress }`}
          />
        </div>
      </section>
    </article>
  );
}
