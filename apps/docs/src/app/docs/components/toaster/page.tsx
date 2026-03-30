import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { ToasterDefaultPreview, ToasterDescriptionPreview, ToasterPositionPreview } from "@/components/previews/toaster-preview";

export const metadata: Metadata = {
  title: "Toaster",
};

export default function ToasterPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Toaster
        </h1>
        <p className="text-lg text-muted-foreground">
          An opinionated toast notification component built on{" "}
          <a
            href="https://sonner.emilkowal.ski"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline underline-offset-4 hover:text-primary transition-colors"
          >
            Sonner
          </a>
          . Fires toasts from anywhere in your app without prop drilling.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<ToasterDefaultPreview />}
        code={`import { AppButton } from "@/components/primitives/AppButton"
import { sonnerToast } from "@/components/primitives/AppToaster"

export function Example() {
  return (
    <div className="flex gap-4">
      <AppButton onClick={() => sonnerToast.success("Event has been created")}>
        Show Success
      </AppButton>
      <AppButton onClick={() => sonnerToast.error("Something went wrong")}>
        Show Error
      </AppButton>
      <AppButton onClick={() => sonnerToast("Event has been created")}>
        Show Default
      </AppButton>
    </div>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-toaster-v1
        related_components: ["AppToaster", "sonnerToast"]
        platform_tags: ["web"]
        enforcement_level: strict
      */}

      <section className="space-y-10">
        {/* About */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            About
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppToaster
            </code>{" "}
            is a thin wrapper around{" "}
            <a
              href="https://sonner.emilkowal.ski"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4 hover:text-primary transition-colors"
            >
              Sonner
            </a>{" "}
            — an opinionated, accessible toast library by Emil Kowalski. The
            wrapper pre-applies Viana Kit design tokens so toasts automatically
            match your theme without any extra configuration.
          </p>
        </div>

        {/* Import */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Import
          </h2>
          <CodeBlock
            language="tsx"
            code={`import { AppToaster, sonnerToast } from "@/components/primitives/AppToaster"`}
          />
        </div>

        {/* Setup */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Setup
          </h2>
          <p className="text-muted-foreground leading-7">
            Mount{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppToaster
            </code>{" "}
            once at the root of your app (e.g. in your root layout). This is
            the component that renders toasts — without it, calls to{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              sonnerToast
            </code>{" "}
            will have no effect.
          </p>
          <CodeBlock
            language="tsx"
            code={`// app/layout.tsx
import { AppToaster } from "@/components/primitives/AppToaster"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <AppToaster />
      </body>
    </html>
  )
}`}
          />
        </div>

        {/* Toast types */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Toast types
          </h2>
          <p className="text-muted-foreground leading-7">
            Call{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              sonnerToast
            </code>{" "}
            directly or use one of its named methods for semantic variants.
          </p>
          <CodeBlock
            language="tsx"
            code={`sonnerToast("Default toast")
sonnerToast.success("Saved successfully")
sonnerToast.error("Something went wrong")
sonnerToast.warning("Check your input")
sonnerToast.info("Update available")`}
          />
        </div>

        {/* With description */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            With description
          </h2>
          <p className="text-muted-foreground leading-7">
            Pass a{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              description
            </code>{" "}
            in the options object to add a supporting line below the title.
          </p>
          <ComponentPreview
            preview={<ToasterDescriptionPreview />}
            code={`sonnerToast.success("Event created", {
  description: "Monday, January 3rd at 6:00pm",
})`}
            filename="example.tsx"
          />
        </div>

        {/* Position */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Position
          </h2>
          <p className="text-muted-foreground leading-7">
            Set a default position globally on{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppToaster
            </code>
            , or override it per-call via the{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              position
            </code>{" "}
            option. Defaults to{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              bottom-right
            </code>
            .
          </p>
          <ComponentPreview
            preview={<ToasterPositionPreview />}
            code={`// Global default on AppToaster
<AppToaster position="top-center" />

// Per-call override
sonnerToast("Toast", { position: "top-left" })`}
            filename="example.tsx"
          />
        </div>

        {/* API Reference */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppToaster
            </code>{" "}
            wraps the Sonner{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              Toaster
            </code>{" "}
            with Viana Kit theme tokens pre-applied.
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
                    prop: "position",
                    type: '"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"',
                    default: '"bottom-right"',
                    description: "Where toasts appear on screen.",
                  },
                  {
                    prop: "duration",
                    type: "number",
                    default: "4000",
                    description: "Auto-dismiss delay in milliseconds.",
                  },
                  {
                    prop: "richColors",
                    type: "boolean",
                    default: "false",
                    description: "Use semantically colored backgrounds for success/error/warning/info.",
                  },
                  {
                    prop: "closeButton",
                    type: "boolean",
                    default: "false",
                    description: "Show a close button on each toast.",
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
        </div>

        {/* Source */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Source
          </h2>
          <CodeBlock
            filename="src/components/primitives/AppToaster.tsx"
            code={`"use client"

import { Toaster as AppSonnerToaster, toast as appToast } from "sonner"

const AppToaster = () => {
  return (
    <AppSonnerToaster
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
    />
  )
}

export { AppToaster, appToast as sonnerToast }`}
          />
        </div>
      </section>
    </article>
  );
}
