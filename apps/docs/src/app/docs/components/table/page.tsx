import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import {
  TableDefaultPreview,
  TableWithCaptionPreview,
  TableWithFooterPreview,
  TableWithSelectedPreview,
} from "@/components/previews/table-preview";

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
          A responsive data table built from semantic HTML. Supports captions,
          footers, and row selection states.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<TableDefaultPreview />}
        code={`import {
  AppTable,
  AppTableHeader,
  AppTableBody,
  AppTableHead,
  AppTableRow,
  AppTableCell,
} from "@/components/primitives/AppTable"

export function Example() {
  return (
    <AppTable>
      <AppTableHeader>
        <AppTableRow>
          <AppTableHead>Name</AppTableHead>
          <AppTableHead>Email</AppTableHead>
          <AppTableHead>Role</AppTableHead>
        </AppTableRow>
      </AppTableHeader>
      <AppTableBody>
        <AppTableRow>
          <AppTableCell>John Doe</AppTableCell>
          <AppTableCell>john@example.com</AppTableCell>
          <AppTableCell>Admin</AppTableCell>
        </AppTableRow>
        <AppTableRow>
          <AppTableCell>Jane Smith</AppTableCell>
          <AppTableCell>jane@example.com</AppTableCell>
          <AppTableCell>User</AppTableCell>
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

        {/* With caption */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            With caption
          </h2>
          <p className="text-muted-foreground leading-7">
            Place{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppTableCaption
            </code>{" "}
            as the first child of{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppTable
            </code>
            . It renders below the table body via the{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              caption-bottom
            </code>{" "}
            utility regardless of DOM order.
          </p>
          <ComponentPreview
            preview={<TableWithCaptionPreview />}
            code={`<AppTable>
  <AppTableCaption>A list of your recent invoices.</AppTableCaption>
  <AppTableHeader>
    <AppTableRow>
      <AppTableHead>Invoice</AppTableHead>
      <AppTableHead>Status</AppTableHead>
      <AppTableHead className="text-right">Amount</AppTableHead>
    </AppTableRow>
  </AppTableHeader>
  <AppTableBody>
    <AppTableRow>
      <AppTableCell className="font-medium">INV-001</AppTableCell>
      <AppTableCell>Paid</AppTableCell>
      <AppTableCell className="text-right">$250.00</AppTableCell>
    </AppTableRow>
  </AppTableBody>
</AppTable>`}
          />
        </div>

        {/* With footer */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            With footer
          </h2>
          <p className="text-muted-foreground leading-7">
            Use{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppTableFooter
            </code>{" "}
            for summary rows — totals, counts, or aggregates. It renders with a
            top border and muted background automatically. Use{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              colSpan
            </code>{" "}
            on{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppTableCell
            </code>{" "}
            to span multiple columns.
          </p>
          <ComponentPreview
            preview={<TableWithFooterPreview />}
            code={`<AppTable>
  <AppTableHeader>
    <AppTableRow>
      <AppTableHead>Invoice</AppTableHead>
      <AppTableHead>Status</AppTableHead>
      <AppTableHead className="text-right">Amount</AppTableHead>
    </AppTableRow>
  </AppTableHeader>
  <AppTableBody>
    <AppTableRow>
      <AppTableCell className="font-medium">INV-001</AppTableCell>
      <AppTableCell>Paid</AppTableCell>
      <AppTableCell className="text-right">$250.00</AppTableCell>
    </AppTableRow>
    <AppTableRow>
      <AppTableCell className="font-medium">INV-002</AppTableCell>
      <AppTableCell>Pending</AppTableCell>
      <AppTableCell className="text-right">$150.00</AppTableCell>
    </AppTableRow>
  </AppTableBody>
  <AppTableFooter>
    <AppTableRow>
      <AppTableCell colSpan={2}>Total</AppTableCell>
      <AppTableCell className="text-right">$400.00</AppTableCell>
    </AppTableRow>
  </AppTableFooter>
</AppTable>`}
          />
        </div>

        {/* Selected row */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Selected row
          </h2>
          <p className="text-muted-foreground leading-7">
            Add{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              {`data-state="selected"`}
            </code>{" "}
            to an{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppTableRow
            </code>{" "}
            to apply the selection highlight. Control this via your own state —
            no built-in selection logic is included.
          </p>
          <ComponentPreview
            preview={<TableWithSelectedPreview />}
            code={`<AppTable>
  <AppTableHeader>
    <AppTableRow>
      <AppTableHead>Name</AppTableHead>
      <AppTableHead>Email</AppTableHead>
      <AppTableHead>Role</AppTableHead>
    </AppTableRow>
  </AppTableHeader>
  <AppTableBody>
    <AppTableRow>
      <AppTableCell>John Doe</AppTableCell>
      <AppTableCell>john@example.com</AppTableCell>
      <AppTableCell>Admin</AppTableCell>
    </AppTableRow>
    <AppTableRow data-state="selected">
      <AppTableCell>Jane Smith</AppTableCell>
      <AppTableCell>jane@example.com</AppTableCell>
      <AppTableCell>User</AppTableCell>
    </AppTableRow>
    <AppTableRow>
      <AppTableCell>Bob Johnson</AppTableCell>
      <AppTableCell>bob@example.com</AppTableCell>
      <AppTableCell>Editor</AppTableCell>
    </AppTableRow>
  </AppTableBody>
</AppTable>`}
          />
        </div>

        {/* API Reference */}
        <div className="space-y-8">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>

          {/* AppTable */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              AppTable
            </h3>
            <p className="text-muted-foreground leading-7">
              Extends all native{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
                {"<table>"}
              </code>{" "}
              HTML attributes. Renders inside a{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
                overflow-auto
              </code>{" "}
              wrapper — the{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
                className
              </code>{" "}
              prop targets the inner{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
                {"<table>"}
              </code>
              , not the wrapper.
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
                      prop: "className",
                      type: "string",
                      default: "—",
                      description: "Additional Tailwind classes merged onto the <table> element via cn().",
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

          {/* AppTableHeader */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              AppTableHeader
            </h3>
            <p className="text-muted-foreground leading-7">
              Extends all native{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
                {"<thead>"}
              </code>{" "}
              HTML attributes. Default styling applies a bottom border to all child rows.
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
                      prop: "className",
                      type: "string",
                      default: "—",
                      description: "Merged onto <thead>. Default: [&_tr]:border-b.",
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

          {/* AppTableBody */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              AppTableBody
            </h3>
            <p className="text-muted-foreground leading-7">
              Extends all native{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
                {"<tbody>"}
              </code>{" "}
              HTML attributes. Default styling removes the bottom border from the last row.
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
                      prop: "className",
                      type: "string",
                      default: "—",
                      description: "Merged onto <tbody>. Default: [&_tr:last-child]:border-0.",
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

          {/* AppTableFooter */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              AppTableFooter
            </h3>
            <p className="text-muted-foreground leading-7">
              Extends all native{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
                {"<tfoot>"}
              </code>{" "}
              HTML attributes. Renders with a top border, muted background, and medium font weight.
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
                      prop: "className",
                      type: "string",
                      default: "—",
                      description: "Merged onto <tfoot>. Default: border-t bg-muted/50 font-medium [&>tr]:last:border-b-0.",
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

          {/* AppTableHead */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              AppTableHead
            </h3>
            <p className="text-muted-foreground leading-7">
              Extends all native{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
                {"<th>"}
              </code>{" "}
              HTML attributes. Used inside{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
                AppTableRow
              </code>{" "}
              within{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
                AppTableHeader
              </code>
              .
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
                      prop: "className",
                      type: "string",
                      default: "—",
                      description: "Merged onto <th>. Default: h-10 px-2 text-left align-middle font-medium text-muted-foreground.",
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

          {/* AppTableRow */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              AppTableRow
            </h3>
            <p className="text-muted-foreground leading-7">
              Extends all native{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
                {"<tr>"}
              </code>{" "}
              HTML attributes. Includes hover and selection transitions by default.
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
                      prop: "data-state",
                      type: '"selected" | undefined',
                      default: "—",
                      description: 'Set to "selected" to apply the selection highlight (bg-muted). Controlled by your state — no built-in selection logic.',
                    },
                    {
                      prop: "className",
                      type: "string",
                      default: "—",
                      description: "Merged onto <tr>. Default: border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted.",
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

          {/* AppTableCell */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              AppTableCell
            </h3>
            <p className="text-muted-foreground leading-7">
              Extends all native{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
                {"<td>"}
              </code>{" "}
              HTML attributes. Used inside{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
                AppTableRow
              </code>{" "}
              within{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
                AppTableBody
              </code>{" "}
              or{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
                AppTableFooter
              </code>
              .
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
                      prop: "colSpan",
                      type: "number",
                      default: "—",
                      description: "Span multiple columns. Common in footer summary rows.",
                    },
                    {
                      prop: "className",
                      type: "string",
                      default: "—",
                      description: "Merged onto <td>. Default: p-2 align-middle.",
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

          {/* AppTableCaption */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">
              AppTableCaption
            </h3>
            <p className="text-muted-foreground leading-7">
              Extends all native{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
                {"<caption>"}
              </code>{" "}
              HTML attributes. Always place as the first child of{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
                AppTable
              </code>
              . Renders below the table body via{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
                caption-bottom
              </code>
              .
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
                      prop: "className",
                      type: "string",
                      default: "—",
                      description: "Merged onto <caption>. Default: mt-4 text-sm text-muted-foreground. Renders below body via caption-bottom.",
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
        </div>

        {/* Source */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Source
          </h2>
          <CodeBlock
            filename="src/components/primitives/AppTable.tsx"
            code={`"use client"

import * as React from "react"
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "../ui/table"

type AppTableProps = React.ComponentProps<typeof Table>
function AppTable(props: AppTableProps) {
  return <Table {...props} />
}

type AppTableHeaderProps = React.ComponentProps<typeof TableHeader>
function AppTableHeader(props: AppTableHeaderProps) {
  return <TableHeader {...props} />
}

type AppTableBodyProps = React.ComponentProps<typeof TableBody>
function AppTableBody(props: AppTableBodyProps) {
  return <TableBody {...props} />
}

type AppTableFooterProps = React.ComponentProps<typeof TableFooter>
function AppTableFooter(props: AppTableFooterProps) {
  return <TableFooter {...props} />
}

type AppTableHeadProps = React.ComponentProps<typeof TableHead>
function AppTableHead(props: AppTableHeadProps) {
  return <TableHead {...props} />
}

type AppTableRowProps = React.ComponentProps<typeof TableRow>
function AppTableRow(props: AppTableRowProps) {
  return <TableRow {...props} />
}

type AppTableCellProps = React.ComponentProps<typeof TableCell>
function AppTableCell(props: AppTableCellProps) {
  return <TableCell {...props} />
}

type AppTableCaptionProps = React.ComponentProps<typeof TableCaption>
function AppTableCaption(props: AppTableCaptionProps) {
  return <TableCaption {...props} />
}

export {
  AppTable, type AppTableProps,
  AppTableHeader, type AppTableHeaderProps,
  AppTableBody, type AppTableBodyProps,
  AppTableFooter, type AppTableFooterProps,
  AppTableHead, type AppTableHeadProps,
  AppTableRow, type AppTableRowProps,
  AppTableCell, type AppTableCellProps,
  AppTableCaption, type AppTableCaptionProps,
}`}
          />
        </div>
      </section>
    </article>
  );
}
