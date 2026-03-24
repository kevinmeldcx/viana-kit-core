import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { TableDefaultPreview } from "@/components/previews/table-preview";

export const metadata: Metadata = { title: "Table" };

export default function TablePage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Table</h1>
        <p className="text-lg text-muted-foreground">A responsive table for displaying data.</p>
      </div>
      <ComponentPreview preview={<TableDefaultPreview />} code={`import { AppTable, AppTableHeader, AppTableBody, AppTableHead, AppTableRow, AppTableCell } from "@/components/primitives/AppTable"

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
}`} filename="example.tsx" />
      <hr className="border-border my-10" />
      <section className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Installation</h2>
          <CodeBlock language="bash" code="npx viana-kit add table" />
        </div>
      </section>
    </article>
  );
}
