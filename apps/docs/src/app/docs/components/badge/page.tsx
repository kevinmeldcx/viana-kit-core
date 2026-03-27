import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import {
  BadgeDefaultPreview,
  BadgeVariantsPreview,
  BadgeWithIconPreview,
  BadgeStatusPreview,
  BadgeAsLinkPreview,
  BadgeRemovablePreview,
  BadgeWithSpinnerPreview,
  BadgeNotificationPreview,
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
        code={`import { AppBadge } from "@/components/primitives/AppBadge"

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
        {/* Import */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Import
          </h2>
          <CodeBlock
            language="tsx"
            code={`import { AppBadge } from "@/components/primitives/AppBadge"`}
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

        {/* With icon */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            With icon
          </h2>
          <p className="text-muted-foreground leading-7">
            Place a lucide icon before the label. Icons inherit the badge text color automatically.
          </p>
          <ComponentPreview
            preview={<BadgeWithIconPreview />}
            code={`import { CheckCircle2, Clock, AlertCircle, Star } from "lucide-react"

<AppBadge variant="default"><CheckCircle2 className="h-3 w-3" />Verified</AppBadge>
<AppBadge variant="secondary"><Clock className="h-3 w-3" />Pending</AppBadge>
<AppBadge variant="destructive"><AlertCircle className="h-3 w-3" />Failed</AppBadge>
<AppBadge variant="outline"><Star className="h-3 w-3" />Featured</AppBadge>`}
          />
        </div>

        {/* Status */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Status
          </h2>
          <p className="text-muted-foreground leading-7">
            Use an <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">outline</code> badge with a colored dot and custom <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">className</code> to communicate system state.
          </p>
          <ComponentPreview
            preview={<BadgeStatusPreview />}
            code={`<AppBadge variant="outline" className="text-green-600 border-green-300 bg-green-50">
  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
  Active
</AppBadge>
<AppBadge variant="outline" className="text-amber-600 border-amber-300 bg-amber-50">
  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
  Pending
</AppBadge>`}
          />
        </div>

        {/* As link */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            As link
          </h2>
          <p className="text-muted-foreground leading-7">
            Use <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">asChild</code> to render the badge as an anchor tag for clickable tags.
          </p>
          <ComponentPreview
            preview={<BadgeAsLinkPreview />}
            code={`<AppBadge asChild>
  <a href="#">New</a>
</AppBadge>
<AppBadge variant="secondary" asChild>
  <a href="#">Design</a>
</AppBadge>`}
          />
        </div>

        {/* Removable */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Removable
          </h2>
          <p className="text-muted-foreground leading-7">
            Add a close button inside the badge for removable filter tags.
          </p>
          <ComponentPreview
            preview={<BadgeRemovablePreview />}
            code={`import { X } from "lucide-react"

<AppBadge variant="secondary" className="gap-1 pr-1">
  React
  <button className="rounded-sm hover:bg-muted-foreground/20 p-0.5">
    <X className="h-3 w-3" />
  </button>
</AppBadge>`}
          />
        </div>

        {/* With spinner */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            With spinner
          </h2>
          <p className="text-muted-foreground leading-7">
            Embed an{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppSpinner
            </code>{" "}
            inside a badge to communicate an in-progress state such as deleting
            or generating.
          </p>
          <ComponentPreview
            preview={<BadgeWithSpinnerPreview />}
            code={`import { AppSpinner } from "@/components/primitives/AppSpinner"

<AppBadge variant="secondary">
  <AppSpinner className="h-3 w-3" label="Deleting" />
  Deleting
</AppBadge>
<AppBadge variant="outline">
  <AppSpinner className="h-3 w-3" label="Generating" />
  Generating
</AppBadge>`}
          />
        </div>

        {/* Notification count */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Notification count
          </h2>
          <p className="text-muted-foreground leading-7">
            Position a badge absolutely over a trigger element using <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">-top-2 -right-4</code> and <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">rounded-full</code>.
          </p>
          <ComponentPreview
            preview={<BadgeNotificationPreview />}
            code={`<div className="relative inline-flex">
  <span>Notifications</span>
  <AppBadge className="absolute -top-2 -right-4 h-5 min-w-5 justify-center rounded-full px-1 text-xs">
    4
  </AppBadge>
</div>`}
          />
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