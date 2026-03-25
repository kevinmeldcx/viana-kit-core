import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { SheetDefaultPreview } from "@/components/previews/sheet-preview";

export const metadata: Metadata = {
  title: "Sheet",
};

export default function SheetPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sheet
        </h1>
        <p className="text-lg text-muted-foreground">
          A panel that slides in from the edge of the screen.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<SheetDefaultPreview />}
        code={`import { AppSheet, AppSheetContent, AppSheetHeader, AppSheetTitle, AppSheetTrigger } from "@/components/primitives/AppSheet"
import { AppButton } from "@/components/primitives/AppButton"

export function Example() {
  return (
    <AppSheet>
      <AppSheetTrigger><AppButton>Open Sheet</AppButton></AppSheetTrigger>
      <AppSheetContent>
        <AppSheetHeader>
          <AppSheetTitle>Sheet Title</AppSheetTitle>
        </AppSheetHeader>
      </AppSheetContent>
    </AppSheet>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-sheet-v1
        related_components: ["AppSheet", "AppSheetTrigger", "AppSheetContent", "AppSheetHeader", "AppSheetTitle", "AppSheetDescription"]
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
  AppSheet,
  AppSheetTrigger,
  AppSheetContent,
  AppSheetHeader,
  AppSheetTitle,
  AppSheetDescription,
} from "@/components/primitives/AppSheet"`}
          />
        </div>

        {/* API Reference - AppSheet */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppSheet
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
            filename="src/components/primitives/AppSheet.tsx"
            code={`"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"

function AppSheet(props: React.ComponentProps<typeof Sheet>) {
  return <Sheet {...props} />
}

function AppSheetTrigger(props: React.ComponentProps<typeof SheetTrigger>) {
  return <SheetTrigger {...props} />
}

function AppSheetContent(props: React.ComponentPropsWithoutRef<typeof SheetContent>) {
  return <SheetContent {...props} />
}

function AppSheetHeader(props: React.HTMLAttributes<HTMLDivElement>) {
  return <SheetHeader {...props} />
}

function AppSheetTitle(props: React.ComponentPropsWithoutRef<typeof SheetTitle>) {
  return <SheetTitle {...props} />
}

function AppSheetDescription(props: React.ComponentPropsWithoutRef<typeof SheetDescription>) {
  return <SheetDescription {...props} />
}

export { AppSheet, AppSheetTrigger, AppSheetContent, AppSheetHeader, AppSheetTitle, AppSheetDescription }`}
          />
        </div>
      </section>
    </article>
  );
}
