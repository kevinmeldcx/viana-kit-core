import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { BreadcrumbDefaultPreview } from "@/components/previews/breadcrumb-preview";

export const metadata: Metadata = {
  title: "Breadcrumb",
};

export default function BreadcrumbPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Breadcrumb
        </h1>
        <p className="text-lg text-muted-foreground">
          Shows the user's location in a navigational hierarchy.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<BreadcrumbDefaultPreview />}
        code={`import { AppBreadcrumb, AppBreadcrumbList, AppBreadcrumbItem, AppBreadcrumbLink, AppBreadcrumbPage, AppBreadcrumbSeparator } from "@/components/primitives/AppBreadcrumb"

export function Example() {
  return (
    <AppBreadcrumb>
      <AppBreadcrumbList>
        <AppBreadcrumbItem>
          <AppBreadcrumbLink href="#">Home</AppBreadcrumbLink>
        </AppBreadcrumbItem>
        <AppBreadcrumbSeparator />
        <AppBreadcrumbItem>
          <AppBreadcrumbPage>Breadcrumb</AppBreadcrumbPage>
        </AppBreadcrumbItem>
      </AppBreadcrumbList>
    </AppBreadcrumb>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-breadcrumb-v1
        related_components: ["AppBreadcrumb", "AppBreadcrumbList", "AppBreadcrumbItem", "AppBreadcrumbLink", "AppBreadcrumbPage", "AppBreadcrumbSeparator", "AppBreadcrumbEllipsis"]
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
            code={`import { AppBreadcrumb, AppBreadcrumbList, AppBreadcrumbItem, AppBreadcrumbLink, AppBreadcrumbPage, AppBreadcrumbSeparator, AppBreadcrumbEllipsis } from "@/components/primitives/AppBreadcrumb"`}
          />
        </div>

        {/* API Reference - AppBreadcrumb */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppBreadcrumb
            </code>{" "}
            extends all native{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              {"<nav>"}
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

        {/* API Reference - AppBreadcrumbLink */}
        <div className="space-y-4">
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
                    prop: "asChild",
                    type: "boolean",
                    default: "—",
                    description: "Change the component to the HTML element or component.",
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
            filename="src/components/primitives/AppBreadcrumb.tsx"
            code={`"use client"

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb"

function AppBreadcrumb(props: React.ComponentProps<typeof Breadcrumb>) {
  return <Breadcrumb {...props} />
}

function AppBreadcrumbList(props: React.ComponentProps<typeof BreadcrumbList>) {
  return <BreadcrumbList {...props} />
}

function AppBreadcrumbItem(props: React.ComponentProps<typeof BreadcrumbItem>) {
  return <BreadcrumbItem {...props} />
}

function AppBreadcrumbLink(props: React.ComponentProps<typeof BreadcrumbLink> & { asChild?: boolean }) {
  return <BreadcrumbLink {...props} />
}

function AppBreadcrumbPage(props: React.ComponentProps<typeof BreadcrumbPage>) {
  return <BreadcrumbPage {...props} />
}

function AppBreadcrumbSeparator(props: React.ComponentProps<typeof BreadcrumbSeparator>) {
  return <BreadcrumbSeparator {...props} />
}

function AppBreadcrumbEllipsis(props: React.ComponentProps<typeof BreadcrumbEllipsis>) {
  return <BreadcrumbEllipsis {...props} />
}

export {
  AppBreadcrumb,
  AppBreadcrumbList,
  AppBreadcrumbItem,
  AppBreadcrumbLink,
  AppBreadcrumbPage,
  AppBreadcrumbSeparator,
  AppBreadcrumbEllipsis,
}`}
          />
        </div>
      </section>
    </article>
  );
}
