import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import {
  AlertDefaultPreview,
  AlertAllVariantsPreview,
} from "@/components/previews/alert-preview";

export const metadata: Metadata = {
  title: "Alert",
};

export default function AlertPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Alert
        </h1>
        <p className="text-lg text-muted-foreground">
          Displays a callout for user attention. Use it to communicate status,
          warnings, or contextual information inline on a page.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<AlertDefaultPreview />}
        code={`import { AppAlert, AppAlertContent, AppAlertTitle, AppAlertDescription } from "@/components/primitives/AppAlert"
import { InfoIcon, XIcon } from "lucide-react"
import { AppButton } from "@/components/primitives/AppButton"

export function Example() {
  return (
    <AppAlert>
      <InfoIcon className="w-8 h-8" />
      <AppAlertContent>
        <AppAlertTitle>Default Alert</AppAlertTitle>
        <AppAlertDescription>This is a default alert message.</AppAlertDescription>
      </AppAlertContent>
      <AppButton variant="ghost" size="icon" className="ml-auto shrink-0 rounded-full">
        <XIcon className="h-4 w-4" />
      </AppButton>
    </AppAlert>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-alert-v1
        related_components: ["AppAlert", "AppAlertContent", "AppAlertTitle", "AppAlertDescription"]
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
  AppAlert,
  AppAlertContent,
  AppAlertTitle,
  AppAlertDescription,
} from "@/components/primitives/AppAlert"`}
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
            preview={<AlertAllVariantsPreview />}
            code={`<AppAlert variant="destructive">
  <AlertCircleIcon className="w-8 h-8" />
  <AppAlertContent>
    <AppAlertTitle>Destructive</AppAlertTitle>
    <AppAlertDescription>This is a destructive alert.</AppAlertDescription>
  </AppAlertContent>
</AppAlert>

<AppAlert variant="success">
  <CheckCircleIcon className="w-8 h-8" />
  <AppAlertContent>
    <AppAlertTitle>Success</AppAlertTitle>
    <AppAlertDescription>Your changes have been saved successfully.</AppAlertDescription>
  </AppAlertContent>
</AppAlert>

<AppAlert variant="warning">
  <TriangleAlertIcon className="w-8 h-8" />
  <AppAlertContent>
    <AppAlertTitle>Warning</AppAlertTitle>
    <AppAlertDescription>This action may have unintended consequences.</AppAlertDescription>
  </AppAlertContent>
</AppAlert>

<AppAlert variant="info">
  <InfoIcon className="w-8 h-8" />
  <AppAlertContent>
    <AppAlertTitle>Info</AppAlertTitle>
    <AppAlertDescription>A new software update is available.</AppAlertDescription>
  </AppAlertContent>
</AppAlert>`}
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
                  ["default", "Neutral or informational messages. Renders with brand primary background and icon color."],
                  ["destructive", "Errors, failures, or dangerous conditions. Renders with destructive background and icon color."],
                  ["success", "Confirmation that an action completed successfully."],
                  ["warning", "Caution — the action is allowed but has consequences."],
                  ["info", "Supplementary information the user should be aware of."],
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

        {/* With close button */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            With close button
          </h2>
          <p className="text-muted-foreground leading-7">
            Place an{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppButton
            </code>{" "}
            after{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppAlertContent
            </code>{" "}
            to add a dismiss action. The flex layout pushes it to the right automatically.
          </p>
          <CodeBlock
            language="tsx"
            code={`<AppAlert>
  <InfoIcon className="w-8 h-8" />
  <AppAlertContent>
    <AppAlertTitle>Heads up</AppAlertTitle>
    <AppAlertDescription>You have a new message.</AppAlertDescription>
  </AppAlertContent>
  <AppButton variant="ghost" size="icon" className="ml-auto shrink-0 rounded-full">
    <XIcon className="h-4 w-4" />
  </AppButton>
</AppAlert>`}
          />
        </div>

        {/* API Reference */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppAlert
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
                  <th className="px-4 py-3 text-left font-medium text-foreground">Prop</th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">Type</th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">Default</th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  {
                    prop: "variant",
                    type: '"default" | "destructive" | "success" | "warning" | "info"',
                    default: '"default"',
                    description: "Visual style of the alert.",
                  },
                  {
                    prop: "className",
                    type: "string",
                    default: "—",
                    description: "Additional Tailwind classes merged via cn(). Applied after variant classes, so it always wins. Use for one-off overrides; prefer a wrapper block for reusable changes.",
                  },
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

          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppAlertContent
            </code>{" "}
            groups{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppAlertTitle
            </code>{" "}
            and{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppAlertDescription
            </code>{" "}
            in a flex column and takes up the remaining horizontal space in the alert row.
            It extends all native{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              {"<div>"}
            </code>{" "}
            HTML attributes.
          </p>
        </div>

        {/* Source */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Source
          </h2>
          <CodeBlock
            filename="src/components/primitives/AppAlert.tsx"
            code={`import * as React from "react"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { cn } from "@/lib/utils"

const nativeVariantClasses = {
  default: "bg-background [&>svg]:text-gray-400",
  destructive: "bg-destructive/5 [&>svg]:text-destructive",
} as const

const extendedVariantClasses = {
  success: "border text-green-700 dark:text-green-700 [&>svg]:text-green-700",
  warning: "border text-amber-600 dark:text-amber-600 [&>svg]:text-amber-600",
  info: "border text-blue-400 dark:text-blue-400 [&>svg]:text-blue-400",
} as const

type ExtendedVariant = "default" | "destructive" | keyof typeof extendedVariantClasses

type AppAlertProps = Omit<React.ComponentProps<typeof Alert>, "variant"> & {
  variant?: ExtendedVariant
}

function AppAlert({ variant = "default", className, ...props }: AppAlertProps) {
  const isExtended = variant in extendedVariantClasses
  return (
    <Alert
      variant={isExtended ? "default" : (variant as "default" | "destructive")}
      className={cn(
        "flex items-center gap-3 px-3 py-2 [&>svg]:static [&>svg]:top-auto [&>svg]:left-auto [&>svg~*]:pl-0 [&>svg+div]:translate-y-0",
        isExtended
          ? extendedVariantClasses[variant as keyof typeof extendedVariantClasses]
          : nativeVariantClasses[variant as keyof typeof nativeVariantClasses],
        className
      )}
      {...props}
    />
  )
}

const AppAlertTitle = React.forwardRef<
  React.ComponentRef<typeof AlertTitle>,
  React.ComponentPropsWithoutRef<typeof AlertTitle>
>(({ className, ...props }, ref) => (
  <AlertTitle
    ref={ref}
    className={cn("text-xl font-bold mb-0", className)}
    {...props}
  />
))
AppAlertTitle.displayName = "AppAlertTitle"

const AppAlertDescription = React.forwardRef<
  React.ComponentRef<typeof AlertDescription>,
  React.ComponentPropsWithoutRef<typeof AlertDescription>
>(({ className, ...props }, ref) => (
  <AlertDescription
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
AppAlertDescription.displayName = "AppAlertDescription"

const AppAlertContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col", className)}
    {...props}
  />
))
AppAlertContent.displayName = "AppAlertContent"

export { AppAlert, AppAlertTitle, AppAlertDescription, AppAlertContent }
export type { AppAlertProps }`}
          />
        </div>
      </section>
    </article>
  );
}
