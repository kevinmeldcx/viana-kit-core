import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import {
  BadgeDefaultPreview,
  BadgeVariantsPreview,
} from "@/components/previews/badge-preview";

export const metadata: Metadata = {
  title: "Badge",
};

export default function BadgePage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Badge
        </h1>
        <p className="text-lg text-muted-foreground">
          Small status or label. Use it to tag categories, statuses, or other
          short information.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<BadgeDefaultPreview />}
        code={`import { AppBadge } from "@viana/ui"AppBadge"

export function Example() {
  return <AppBadge>Badge</AppBadge>
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-badge-v1
        related_components: ["AppBadge"]
        platform_tags: ["web"]
        enforcement_level: strict
      */}

      <section className="space-y-10">
        {/* Installation */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Installation
          </h2>
          <p className="text-muted-foreground leading-7">
            Add the Badge component to your project using the Viana CLI. This
            copies the source files directly into your repository and installs
            any required dependencies.
          </p>
          <CodeBlock language="bash" code="npx viana-kit add badge" />
          <p className="text-muted-foreground leading-7">
            This will create two files in your project:
          </p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-0.5">–</span>
              <code className="font-mono text-foreground">
                src/components/ui/badge.tsx
              </code>
              <span>— the base shadcn/ui primitive (do not modify)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5">–</span>
              <code className="font-mono text-foreground">
                src/components/primitives/AppBadge.tsx
              </code>
              <span>— the Viana Kit wrapper (do not modify)</span>
            </li>
          </ul>
        </div>

        {/* Import */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Import
          </h2>
          <CodeBlock
            language="tsx"
            code={`import { AppBadge } from "@viana/ui"AppBadge"`}
          />
        </div>

        {/* Variants */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Variants
          </h2>
          <p className="text-muted-foreground leading-7">
            Use the{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              variant
            </code>{" "}
            prop to change the visual style.
          </p>
          <ComponentPreview
            preview={<BadgeVariantsPreview />}
            code={`<AppBadge variant="default">Default</AppBadge>
<AppBadge variant="secondary">Secondary</AppBadge>
<AppBadge variant="outline">Outline</AppBadge>
<AppBadge variant="destructive">Destructive</AppBadge>`}
          />
          <div className="overflow-hidden rounded-lg border border-border text-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-2.5 text-left font-medium text-foreground">
                    Variant
                  </th>
                  <th className="px-4 py-2.5 text-left font-medium text-foreground">
                    When to use
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["default", "Default style. Primary or highlighted content."],
                  [
                    "secondary",
                    "Lower emphasis. For supporting information.",
                  ],
                  [
                    "outline",
                    "Minimal style. No background color, just border.",
                  ],
                  [
                    "destructive",
                    "For destructive actions or errors. Renders in red.",
                  ],
                ].map(([variant, description]) => (
                  <tr key={variant}>
                    <td className="px-4 py-2.5 font-mono text-xs text-foreground">
                      {variant}
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

        {/* API Reference */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppBadge
            </code>{" "}
            extends all native{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              {"<span>"}
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
                    prop: "variant",
                    type: '"default" | "secondary" | "outline" | "destructive"',
                    default: '"default"',
                    description: "Visual style of the badge.",
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
            filename="src/components/primitives/AppBadge.tsx"
            code={`"use client"

import { Badge, badgeVariants } from "@/components/ui/badge"
import type { VariantProps } from "class-variance-authority"

type AppBadgeProps = React.ComponentProps<typeof Badge> &
  VariantProps<typeof badgeVariants>

function AppBadge(props: AppBadgeProps) {
  return <Badge {...props} />
}

export { AppBadge, type AppBadgeProps }`}
          />
        </div>
      </section>
    </article>
  );
}