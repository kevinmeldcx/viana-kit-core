import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { TableDefaultPreview } from "@/components/previews/table-preview";

export const metadata: Metadata = {
  title: "Table",
};

export default function TablePage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Table
        </h1>
        <p className="text-lg text-muted-foreground">
          A responsive table for displaying data.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<TableDefaultPreview />}
        code={`import { AppTable, AppTableHeader, AppTableBody, AppTableHead, AppTableRow, AppTableCell } from "@/components/primitives/AppTable"

export function Example() {
  return (
    <AppTable>
      <AppTableHeader>
        <AppTableRow>
          <AppTableHead>Name</AppTableHead>
          <AppTableHead>Email</AppTableHead>
        </AppTableRow>
      </AppTableHeader>
      <AppTableBody>
        <AppTableRow>
          <AppTableCell>John</AppTableCell>
          <AppTableCell>john@example.com</AppTableCell>
        </AppTableRow>
      </AppTableBody>
    </AppTable>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-table-v1
        related_components: ["AppTable", "AppTableHeader", "AppTableBody", "AppTableFooter", "AppTableHead", "AppTableRow", "AppTableCell", "AppTableCaption"]
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
  AppTable,
  AppTableHeader,
  AppTableBody,
  AppTableFooter,
  AppTableHead,
  AppTableRow,
  AppTableCell,
  AppTableCaption,
} from "@/components/primitives/AppTable"`}
          />
        </div>

        {/* API Reference - AppTable */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppTable
            </code>{" "}
            extends all native{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              {"<table>"}
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
            filename="src/components/primitives/AppTable.tsx"
            code={`"use client"

import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "../ui/table"

function AppTable(props: React.ComponentProps<typeof Table>) {
  return <Table {...props} />
}

function AppTableHeader(props: React.ComponentProps<typeof TableHeader>) {
  return <TableHeader {...props} />
}

function AppTableBody(props: React.ComponentProps<typeof TableBody>) {
  return <TableBody {...props} />
}

function AppTableFooter(props: React.ComponentProps<typeof TableFooter>) {
  return <TableFooter {...props} />
}

function AppTableHead(props: React.ComponentProps<typeof TableHead>) {
  return <TableHead {...props} />
}

function AppTableRow(props: React.ComponentProps<typeof TableRow>) {
  return <TableRow {...props} />
}

function AppTableCell(props: React.ComponentProps<typeof TableCell>) {
  return <TableCell {...props} />
}

function AppTableCaption(props: React.ComponentProps<typeof TableCaption>) {
  return <TableCaption {...props} />
}

export { AppTable, AppTableHeader, AppTableBody, AppTableFooter, AppTableHead, AppTableRow, AppTableCell, AppTableCaption }`}
          />
        </div>
      </section>
    </article>
  );
}
