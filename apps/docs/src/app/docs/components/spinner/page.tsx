import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import {
  SpinnerDefaultPreview,
  SpinnerSizesPreview,
  SpinnerColorsPreview,
  SpinnerInButtonPreview,
  SpinnerOverlayPreview,
} from "@/components/previews/spinner-preview";

export const metadata: Metadata = {
  title: "Spinner",
};

export default function SpinnerPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Spinner
        </h1>
        <p className="text-lg text-muted-foreground">
          An animated loading indicator. Use it to signal background activity or
          a pending state.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<SpinnerDefaultPreview />}
        code={`import { AppSpinner } from "@/components/primitives/AppSpinner"

export function Example() {
  return <AppSpinner />
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-spinner-v1
        related_components: ["AppSpinner"]
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
            code={`import { AppSpinner } from "@/components/primitives/AppSpinner"`}
          />
        </div>

        {/* Sizes */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Sizes
          </h2>
          <p className="text-muted-foreground leading-7">
            Control size with Tailwind{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              h-*
            </code>{" "}
            and{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              w-*
            </code>{" "}
            classes via{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              className
            </code>
            . The default is{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              h-5 w-5
            </code>
            .
          </p>
          <ComponentPreview
            preview={<SpinnerSizesPreview />}
            code={`<AppSpinner className="h-4 w-4" />   {/* sm */}
<AppSpinner className="h-5 w-5" />   {/* md — default */}
<AppSpinner className="h-6 w-6" />   {/* lg */}
<AppSpinner className="h-8 w-8" />   {/* xl */}`}
          />
        </div>

        {/* Colors */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Colors
          </h2>
          <p className="text-muted-foreground leading-7">
            The spinner inherits{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              currentColor
            </code>{" "}
            from its parent. Use a Tailwind text color utility to override it.
          </p>
          <ComponentPreview
            preview={<SpinnerColorsPreview />}
            code={`<AppSpinner className="text-primary" />
<AppSpinner className="text-destructive" />
<AppSpinner className="text-muted-foreground" />

{/* On a dark background */}
<span className="rounded bg-primary p-2 inline-flex">
  <AppSpinner className="text-primary-foreground" />
</span>`}
          />
        </div>

        {/* Inside a button */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Inside a button
          </h2>
          <p className="text-muted-foreground leading-7">
            Place a spinner before the label and set the button to{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              disabled
            </code>{" "}
            while the action is in progress.
          </p>
          <ComponentPreview
            preview={<SpinnerInButtonPreview />}
            code={`<AppButton disabled>
  <AppSpinner className="h-4 w-4" />
  Saving…
</AppButton>

<AppButton variant="outline" disabled>
  <AppSpinner className="h-4 w-4" />
  Loading
</AppButton>`}
          />
        </div>

        {/* Full-area overlay */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Overlay
          </h2>
          <p className="text-muted-foreground leading-7">
            Position the spinner absolutely over a{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              relative
            </code>{" "}
            container to block the content area during loading.
          </p>
          <ComponentPreview
            preview={<SpinnerOverlayPreview />}
            code={`<div className="relative">
  {/* your content here */}
  <div className="absolute inset-0 flex items-center justify-center bg-background/70 backdrop-blur-sm">
    <AppSpinner className="h-6 w-6 text-primary" />
  </div>
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
              AppSpinner
            </code>{" "}
            extends all native{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              {"<svg>"}
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
                    prop: "label",
                    type: "string",
                    default: '"Loading..."',
                    description:
                      "Accessible label set on aria-label. Screen readers announce this text.",
                  },
                  {
                    prop: "className",
                    type: "string",
                    default: "—",
                    description:
                      "Additional Tailwind classes merged via cn(). Use h-* w-* for size and text-* for color.",
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
            filename="src/components/primitives/AppSpinner.tsx"
            code={`import * as React from "react"
import { cn } from "../../lib/utils"

type AppSpinnerProps = React.SVGAttributes<SVGSVGElement> & {
  label?: string
}

const AppSpinner = React.forwardRef<SVGSVGElement, AppSpinnerProps>(
  ({ className, label = "Loading...", ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-label={label}
      role="status"
      className={cn("h-5 w-5 animate-spin text-current", className)}
      {...props}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  )
)
AppSpinner.displayName = "AppSpinner"

export { AppSpinner }
export type { AppSpinnerProps }`}
          />
        </div>
      </section>
    </article>
  );
}
