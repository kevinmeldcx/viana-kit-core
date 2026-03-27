import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import {
  FieldDefaultPreview,
  FieldRequiredPreview,
  FieldInvalidPreview,
  FieldGridPreview,
  FieldWithBadgePreview,
  FieldInputGroupPreview,
  FieldButtonGroupPreview,
  FieldSearchGroupPreview,
} from "@/components/previews/field-preview";

export const metadata: Metadata = {
  title: "Field",
};

export default function FieldPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Field
        </h1>
        <p className="text-lg text-muted-foreground">
          A set of composable primitives for building accessible form fields —
          label, description, and error message — that wrap any input.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<FieldDefaultPreview />}
        code={`import {
  AppField,
  AppFieldLabel,
  AppFieldDescription,
} from "@/components/primitives/AppField"
import { AppInput } from "@/components/primitives/AppInput"

export function Example() {
  return (
    <AppField>
      <AppFieldLabel htmlFor="name">Full name</AppFieldLabel>
      <AppInput id="name" placeholder="Jane Doe" />
      <AppFieldDescription>This is your public display name.</AppFieldDescription>
    </AppField>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-field-v1
        related_components: ["AppField", "AppFieldLabel", "AppFieldDescription", "AppFieldError", "AppInput", "AppLabel"]
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
            code={`import {
  AppField,
  AppFieldLabel,
  AppFieldDescription,
  AppFieldError,
} from "@/components/primitives/AppField"`}
          />
        </div>

        {/* Examples */}
        <div className="space-y-8">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Examples
          </h2>

          {/* Required */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Required</h3>
            <p className="text-sm text-muted-foreground">
              Pass <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">required</code> on{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">AppFieldLabel</code> to append a red asterisk.
            </p>
            <ComponentPreview
              preview={<FieldRequiredPreview />}
              code={`<AppField>
  <AppFieldLabel htmlFor="email" required>Email address</AppFieldLabel>
  <AppInput id="email" type="email" placeholder="you@example.com" />
  <AppFieldDescription>We will never share your email.</AppFieldDescription>
</AppField>`}
              filename="example.tsx"
            />
          </div>

          {/* Invalid */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Invalid</h3>
            <p className="text-sm text-muted-foreground">
              Use <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">AppFieldError</code> to show a validation error.
              Add <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">border-destructive</code> to the input to complete the visual.
            </p>
            <ComponentPreview
              preview={<FieldInvalidPreview />}
              code={`<AppField>
  <AppFieldLabel htmlFor="username">Username</AppFieldLabel>
  <AppInput
    id="username"
    placeholder="johndoe"
    defaultValue="jo"
    className="border-destructive focus-visible:ring-destructive"
  />
  <AppFieldError>Username must be at least 3 characters.</AppFieldError>
</AppField>`}
              filename="example.tsx"
            />
          </div>

          {/* Grid */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Grid</h3>
            <p className="text-sm text-muted-foreground">
              Compose multiple fields in a CSS grid for multi-column layouts.
            </p>
            <ComponentPreview
              preview={<FieldGridPreview />}
              code={`<div className="grid grid-cols-2 gap-4">
  <AppField>
    <AppFieldLabel htmlFor="first-name">First name</AppFieldLabel>
    <AppInput id="first-name" placeholder="Jane" />
  </AppField>
  <AppField>
    <AppFieldLabel htmlFor="last-name">Last name</AppFieldLabel>
    <AppInput id="last-name" placeholder="Doe" />
  </AppField>
  <AppField className="col-span-2">
    <AppFieldLabel htmlFor="email">Email</AppFieldLabel>
    <AppInput id="email" type="email" placeholder="you@example.com" />
  </AppField>
</div>`}
              filename="example.tsx"
            />
          </div>

          {/* With badge */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">With badge</h3>
            <p className="text-sm text-muted-foreground">
              Place an <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">AppBadge</code> next to the label to signal optional or beta fields.
            </p>
            <ComponentPreview
              preview={<FieldWithBadgePreview />}
              code={`<AppField>
  <div className="flex items-center gap-2">
    <AppFieldLabel htmlFor="api-key">API Key</AppFieldLabel>
    <AppBadge variant="secondary">Optional</AppBadge>
  </div>
  <AppInput id="api-key" placeholder="sk-••••••••••••" />
  <AppFieldDescription>Leave blank to use the default key.</AppFieldDescription>
</AppField>`}
              filename="example.tsx"
            />
          </div>

          {/* Input group */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Input group</h3>
            <p className="text-sm text-muted-foreground">
              Attach a static prefix or suffix to the input using a bordered span and <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">rounded-l-none</code>.
            </p>
            <ComponentPreview
              preview={<FieldInputGroupPreview />}
              code={`<AppField>
  <AppFieldLabel htmlFor="website">Website</AppFieldLabel>
  <div className="flex">
    <span className="inline-flex items-center rounded-l-md border border-r-0 border-input bg-muted px-3 text-sm text-muted-foreground">
      https://
    </span>
    <AppInput id="website" placeholder="example.com" className="rounded-l-none" />
  </div>
  <AppFieldDescription>Enter your domain without the protocol.</AppFieldDescription>
</AppField>`}
              filename="example.tsx"
            />
          </div>

          {/* Button group */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Button group</h3>
            <p className="text-sm text-muted-foreground">
              Pair an input with a button using a flex wrapper.
            </p>
            <ComponentPreview
              preview={<FieldButtonGroupPreview />}
              code={`<AppField>
  <AppFieldLabel htmlFor="invite">Invite by email</AppFieldLabel>
  <div className="flex gap-2">
    <AppInput id="invite" type="email" placeholder="colleague@example.com" />
    <AppButton>Send invite</AppButton>
  </div>
</AppField>`}
              filename="example.tsx"
            />
          </div>

          {/* Search group */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Search group</h3>
            <ComponentPreview
              preview={<FieldSearchGroupPreview />}
              code={`import { Search } from "lucide-react"

<AppField>
  <AppFieldLabel htmlFor="search">Search</AppFieldLabel>
  <div className="relative">
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
    <AppInput id="search" placeholder="Search components..." className="pl-9" />
  </div>
  <AppFieldDescription>Search across all available components.</AppFieldDescription>
</AppField>`}
              filename="example.tsx"
            />
          </div>
        </div>

        {/* API Reference */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>

          {/* AppField */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">AppField</h3>
            <p className="text-sm text-muted-foreground">A flex column container with <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">gap-1.5</code>. Accepts all <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">{"<div>"}</code> attributes.</p>
          </div>

          {/* AppFieldLabel */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">AppFieldLabel</h3>
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-4 py-3 text-left font-medium text-foreground">Prop</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Type</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Default</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { prop: "required", type: "boolean", default: "false", description: "Appends a red asterisk after the label text." },
                    { prop: "htmlFor", type: "string", default: "—", description: "Associates the label with an input by id." },
                    { prop: "className", type: "string", default: "—", description: "Additional Tailwind classes merged via cn()." },
                  ].map(({ prop, type, default: def, description }) => (
                    <tr key={prop}>
                      <td className="px-4 py-3 font-mono text-xs text-foreground">{prop}</td>
                      <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{type}</td>
                      <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{def}</td>
                      <td className="px-4 py-3 text-muted-foreground">{description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* AppFieldDescription / AppFieldError */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">AppFieldDescription &amp; AppFieldError</h3>
            <p className="text-sm text-muted-foreground">
              Both render a <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">{"<p>"}</code> and accept all paragraph HTML attributes.{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">AppFieldDescription</code> uses <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">text-muted-foreground</code>.{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">AppFieldError</code> uses <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">text-destructive</code>.
            </p>
          </div>
        </div>

        {/* Source */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Source
          </h2>
          <CodeBlock
            filename="src/components/primitives/AppField.tsx"
            code={`"use client"

import * as React from "react"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

function AppField({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-1.5", className)} {...props} />
}

type AppFieldLabelProps = React.ComponentPropsWithoutRef<typeof Label> & {
  required?: boolean
}

const AppFieldLabel = React.forwardRef<
  React.ComponentRef<typeof Label>,
  AppFieldLabelProps
>(({ className, required, children, ...props }, ref) => (
  <Label ref={ref} className={cn(className)} {...props}>
    {children}
    {required && <span className="text-destructive">*</span>}
  </Label>
))
AppFieldLabel.displayName = "AppFieldLabel"

const AppFieldDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
))
AppFieldDescription.displayName = "AppFieldDescription"

const AppFieldError = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-destructive", className)} {...props} />
))
AppFieldError.displayName = "AppFieldError"

export { AppField, AppFieldLabel, AppFieldDescription, AppFieldError }
export type { AppFieldLabelProps }`}
          />
        </div>
      </section>
    </article>
  );
}
