import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import {
  ButtonDefaultPreview,
  ButtonVariantsPreview,
  ButtonSizesPreview,
  ButtonDisabledPreview,
} from "@/components/previews/button-preview";

export const metadata: Metadata = {
  title: "Button",
};

export default function ButtonPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Button
        </h1>
        <p className="text-lg text-muted-foreground">
          Triggers an action or event. Supports multiple visual variants and
          sizes, and can render as any element via the{" "}
          <code className="text-sm font-mono">asChild</code> prop.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<ButtonDefaultPreview />}
        code={`import { AppButton } from "@viana/ui"AppButton"

export function Example() {
  return <AppButton>Button</AppButton>
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-button-v1
        related_components: ["AppButton", "AppIconButton"]
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
            Add the Button component to your project using the Viana CLI. This
            copies the source files directly into your repository and installs
            any required dependencies.
          </p>
          <CodeBlock language="bash" code="npx viana-kit add button" />
          <p className="text-muted-foreground leading-7">
            This will create two files in your project:
          </p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-0.5">–</span>
              <code className="font-mono text-foreground">
                src/components/ui/button.tsx
              </code>
              <span>— the base shadcn/ui primitive (do not modify)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5">–</span>
              <code className="font-mono text-foreground">
                src/components/primitives/AppButton.tsx
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
            code={`import { AppButton } from "@viana/ui"AppButton"`}
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
            prop to change the visual style. The{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              default
            </code>{" "}
            variant is for primary actions — use it sparingly, one per view.
          </p>
          <ComponentPreview
            preview={<ButtonVariantsPreview />}
            code={`<AppButton variant="default">Default</AppButton>
<AppButton variant="secondary">Secondary</AppButton>
<AppButton variant="outline">Outline</AppButton>
<AppButton variant="ghost">Ghost</AppButton>
<AppButton variant="destructive">Destructive</AppButton>
<AppButton variant="link">Link</AppButton>`}
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
                  ["default", "Primary action. One per view."],
                  [
                    "secondary",
                    "Lower-emphasis action alongside a primary.",
                  ],
                  [
                    "outline",
                    "Secondary action. Bordered, transparent background.",
                  ],
                  [
                    "ghost",
                    "Minimal. No chrome until hovered. Good for toolbars.",
                  ],
                  [
                    "destructive",
                    "Irreversible or dangerous action. Renders in red.",
                  ],
                  ["link", "Inline text link with underline on hover."],
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

        {/* Sizes */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Sizes
          </h2>
          <p className="text-muted-foreground leading-7">
            Use the{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              size
            </code>{" "}
            prop to adjust height, padding, and font size. Icon sizes render as
            a square and should contain only an icon element.
          </p>
          <ComponentPreview
            preview={<ButtonSizesPreview />}
            code={`<AppButton size="lg">Large</AppButton>
<AppButton size="default">Default</AppButton>
<AppButton size="sm">Small</AppButton>
<AppButton size="xs">Extra small</AppButton>

{/* Icon variants */}
<AppButton size="icon-lg"><PlusIcon /></AppButton>
<AppButton size="icon"><PlusIcon /></AppButton>
<AppButton size="icon-sm"><PlusIcon /></AppButton>
<AppButton size="icon-xs"><PlusIcon /></AppButton>`}
          />
        </div>

        {/* Disabled */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Disabled
          </h2>
          <p className="text-muted-foreground leading-7">
            Pass the{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              disabled
            </code>{" "}
            prop to disable interaction. Pointer events are blocked and opacity
            is reduced to 50%.
          </p>
          <ComponentPreview
            preview={<ButtonDisabledPreview />}
            code={`<AppButton disabled>Disabled</AppButton>
<AppButton variant="outline" disabled>Disabled</AppButton>`}
          />
        </div>

        {/* asChild */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Rendering as a link
          </h2>
          <p className="text-muted-foreground leading-7">
            Pass{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              asChild
            </code>{" "}
            to merge button styles onto the immediate child element. This is the
            correct way to render a button as a Next.js{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              Link
            </code>
            .
          </p>
          <CodeBlock
            language="tsx"
            code={`import Link from "next/link"
import { AppButton } from "@viana/ui"AppButton"

export function NavigateButton() {
  return (
    <AppButton asChild>
      <Link href="/dashboard">Go to dashboard</Link>
    </AppButton>
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
              AppButton
            </code>{" "}
            extends all native{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              {"<button>"}
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
                    type: '"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"',
                    default: '"default"',
                    description: "Visual style of the button.",
                  },
                  {
                    prop: "size",
                    type: '"xs" | "sm" | "default" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"',
                    default: '"default"',
                    description: "Controls height, padding, and font size.",
                  },
                  {
                    prop: "asChild",
                    type: "boolean",
                    default: "false",
                    description:
                      "Merges props onto the child element instead of rendering a <button>.",
                  },
                  {
                    prop: "disabled",
                    type: "boolean",
                    default: "false",
                    description:
                      "Disables interaction and reduces opacity to 50%.",
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
            filename="src/components/primitives/AppButton.tsx"
            code={`"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import type { VariantProps } from "class-variance-authority"

type AppButtonProps = React.ComponentProps<typeof Button> &
  VariantProps<typeof buttonVariants>

function AppButton(props: AppButtonProps) {
  return <Button {...props} />
}

export { AppButton, type AppButtonProps }`}
          />
        </div>
      </section>
    </article>
  );
}
