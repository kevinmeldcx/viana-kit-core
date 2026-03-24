import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import {
  AlertDefaultPreview,
  AlertDestructivePreview,
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
        code={`import { AppAlert, AppAlertTitle, AppAlertDescription } from "@/components/primitives/AppAlert"
import { InfoIcon } from "lucide-react"

export function Example() {
  return (
    <AppAlert>
      <InfoIcon className="h-4 w-4" />
      <AppAlertTitle>Heads up</AppAlertTitle>
      <AppAlertDescription>
        This is an informational alert message.
      </AppAlertDescription>
    </AppAlert>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-alert-v1
        related_components: ["AppAlert", "AppAlertTitle", "AppAlertDescription"]
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
            Add the Alert component to your project using the Viana CLI. This
            copies the source files directly into your repository and installs
            any required dependencies.
          </p>
          <CodeBlock language="bash" code="npx viana-kit add alert" />
          <p className="text-muted-foreground leading-7">
            This will create two files in your project:
          </p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-0.5">–</span>
              <code className="font-mono text-foreground">
                src/components/ui/alert.tsx
              </code>
              <span>— the base shadcn/ui primitive (do not modify)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5">–</span>
              <code className="font-mono text-foreground">
                src/components/primitives/AppAlert.tsx
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
            code={`import { AppAlert, AppAlertTitle, AppAlertDescription } from "@/components/primitives/AppAlert"`}
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
            preview={<AlertDestructivePreview />}
            code={`<AppAlert variant="destructive">
  <AppAlertTitle>Something went wrong</AppAlertTitle>
  <AppAlertDescription>
    Your session has expired. Please sign in again.
  </AppAlertDescription>
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
                  ["default", "Informational or neutral messages."],
                  ["destructive", "Errors, failures, or dangerous conditions."],
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
                    type: '"default" | "destructive"',
                    default: '"default"',
                    description: "Visual style of the alert.",
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
            filename="src/components/primitives/AppAlert.tsx"
            code={`import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

const AppAlert = Alert
const AppAlertTitle = AlertTitle
const AppAlertDescription = AlertDescription

export { AppAlert, AppAlertTitle, AppAlertDescription }`}
          />
        </div>
      </section>
    </article>
  );
}
