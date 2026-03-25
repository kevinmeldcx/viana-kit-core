import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { PaginationDefaultPreview } from "@/components/previews/pagination-preview";

export const metadata: Metadata = {
  title: "Pagination",
};

export default function PaginationPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Pagination
        </h1>
        <p className="text-lg text-muted-foreground">
          A set of pagination controls.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<PaginationDefaultPreview />}
        code={`import { AppPagination, AppPaginationContent, AppPaginationItem, AppPaginationLink, AppPaginationNext, AppPaginationPrevious } from "@/components/primitives/AppPagination"

export function Example() {
  return (
    <AppPagination>
      <AppPaginationContent>
        <AppPaginationItem>
          <AppPaginationPrevious href="#" />
        </AppPaginationItem>
        <AppPaginationItem>
          <AppPaginationLink href="#">1</AppPaginationLink>
        </AppPaginationItem>
        <AppPaginationItem>
          <AppPaginationNext href="#" />
        </AppPaginationItem>
      </AppPaginationContent>
    </AppPagination>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-pagination-v1
        related_components: ["AppPagination", "AppPaginationContent", "AppPaginationItem", "AppPaginationLink", "AppPaginationPrevious", "AppPaginationNext", "AppPaginationEllipsis"]
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
  AppPagination,
  AppPaginationContent,
  AppPaginationItem,
  AppPaginationLink,
  AppPaginationPrevious,
  AppPaginationNext,
  AppPaginationEllipsis,
} from "@/components/primitives/AppPagination"`}
          />
        </div>

        {/* API Reference - AppPagination */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppPagination
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
            filename="src/components/primitives/AppPagination.tsx"
            code={`"use client"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination"

function AppPagination(props: React.ComponentProps<typeof Pagination>) {
  return <Pagination {...props} />
}

function AppPaginationContent(props: React.ComponentProps<typeof PaginationContent>) {
  return <PaginationContent {...props} />
}

function AppPaginationItem(props: React.ComponentProps<typeof PaginationItem>) {
  return <PaginationItem {...props} />
}

function AppPaginationLink(props: React.ComponentProps<typeof PaginationLink> & { isActive?: boolean }) {
  return <PaginationLink {...props} />
}

function AppPaginationPrevious(props: React.ComponentProps<typeof PaginationPrevious>) {
  return <PaginationPrevious {...props} />
}

function AppPaginationNext(props: React.ComponentProps<typeof PaginationNext>) {
  return <PaginationNext {...props} />
}

function AppPaginationEllipsis(props: React.ComponentProps<typeof PaginationEllipsis>) {
  return <PaginationEllipsis {...props} />
}

export {
  AppPagination,
  AppPaginationContent,
  AppPaginationItem,
  AppPaginationLink,
  AppPaginationPrevious,
  AppPaginationNext,
  AppPaginationEllipsis,
}`}
          />
        </div>
      </section>
    </article>
  );
}
