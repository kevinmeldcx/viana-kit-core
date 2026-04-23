import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { TableManagerDefaultPreview } from "@/components/previews/table-manager-preview";

export const metadata: Metadata = {
  title: "Table Manager",
};

export default function TableManagerPage() {
  return (
    <article className="w-full px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Blocks</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Table Manager
        </h1>
        <p className="text-lg text-muted-foreground">
          A composable toolbar + data table block with server-side filtering,
          client-side sorting, column visibility toggling, multiselect filters,
          date range picking, pagination, and export.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        fullWidth
        preview={<TableManagerDefaultPreview />}
        code={`import {
  TableManager,
  TableManagerToolbar,
  TableManagerSearch,
  TableManagerToolbarActions,
  TableManagerMultiFilter,
  TableManagerDateRange,
  TableManagerRowsPerPage,
  TableManagerPagination,
  TableManagerColumnToggle,
  TableManagerExport,
  TableManagerContent,
  TableManagerFooter,
  type TableManagerColumnDef,
} from "@/components/blocks/TableManager"

type Session = { id: number; name: string; status: string; dateTime: string }

const columns: TableManagerColumnDef<Session>[] = [
  { id: "name", header: "Session ID", type: "text", accessorKey: "name", enableSorting: true },
  { id: "status", header: "Status", accessorKey: "status", enableSorting: true },
  { id: "dateTime", header: "Date Time", type: "date", accessorKey: "dateTime", enableSorting: true },
]

export default function Page() {
  return (
    <TableManager columns={columns} data={data} totalCount={total}>
      <TableManagerToolbar>
        <TableManagerSearch />
        <TableManagerToolbarActions>
          <TableManagerMultiFilter name="applet" label="SAMi for Environment" options={appletOptions} />
          <TableManagerDateRange />
          <TableManagerRowsPerPage />
          <TableManagerPagination />
          <TableManagerColumnToggle />
          <TableManagerExport options={[{ label: "CSV", value: "csv" }]} onExport={handleExport} />
        </TableManagerToolbarActions>
      </TableManagerToolbar>
      <TableManagerContent />
      <TableManagerFooter />
    </TableManager>
  )
}`}
        filename="page.tsx"
      />

      <hr className="my-10 border-border" />

      {/*
        canonical_id: block-table-manager-v1
        related_components: ["AppTable", "AppPagination", "AppPopover", "AppCalendar", "AppCommand", "AppDropdownMenu", "AppCheckbox"]
        platform_tags: ["web"]
        enforcement_level: strict
      */}

      <section className="space-y-10">
        {/* Import */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Import</h2>
          <CodeBlock
            language="tsx"
            code={`import {
  TableManager,
  TableManagerToolbar,
  TableManagerSearch,
  TableManagerToolbarActions,
  TableManagerMultiFilter,
  TableManagerDateRange,
  TableManagerRowsPerPage,
  TableManagerPagination,
  TableManagerColumnToggle,
  TableManagerExport,
  TableManagerContent,
  TableManagerFooter,
} from "@/components/blocks/TableManager"`}
          />
        </div>

        {/* TableManager props */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">API Reference</h2>

          <h3 className="text-base font-semibold text-foreground">TableManager</h3>
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
                  { prop: "columns", type: "TableManagerColumnDef<T>[]", default: "required", description: "Column definitions. Drive table headers, cell renderers, sort, and filter." },
                  { prop: "data", type: "T[]", default: "required", description: "Server-filtered rows for the current page. Must have id: string | number." },
                  { prop: "totalCount", type: "number", default: "required", description: "Total number of records across all pages (for pagination math)." },
                  { prop: "loading", type: "boolean", default: "false", description: "Shows a loading overlay on the table content while data is fetching." },
                  { prop: "defaultRowsPerPage", type: "number", default: "20", description: "Initial rows-per-page value." },
                  { prop: "defaultVisibleColumns", type: "string[]", default: "all", description: "Column IDs to show on initial render. Defaults to all columns with defaultVisible !== false." },
                  { prop: "onSearchChange", type: "(term: string) => void", default: "—", description: "Fired when the search input changes (debounced 300ms)." },
                  { prop: "onFilterChange", type: "(filters: Record<string, string[]>) => void", default: "—", description: "Fired when any multiselect filter changes." },
                  { prop: "onDateRangeChange", type: "(range: { from?: Date; to?: Date }) => void", default: "—", description: "Fired when the date range changes." },
                  { prop: "onPageChange", type: "(page: number) => void", default: "—", description: "Fired when the page changes (0-indexed)." },
                  { prop: "onRowsPerPageChange", type: "(rowsPerPage: number) => void", default: "—", description: "Fired when rows per page changes." },
                  { prop: "onSelectionChange", type: "(rows: T[]) => void", default: "—", description: "Fired when row selection changes." },
                ].map(({ prop, type, default: def, description }) => (
                  <tr key={prop}>
                    <td className="px-4 py-3 font-mono text-xs text-foreground">{prop}</td>
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{type}</td>
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{def}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ColumnDef */}
          <h3 className="text-base font-semibold text-foreground">TableManagerColumnDef</h3>
          <CodeBlock
            language="tsx"
            code={`type TableManagerColumnDef<T> = {
  id: string                             // Unique column identifier
  header: string                         // Column header label
  type?: "date" | "text" | "other"       // Drives default sort order
  accessorKey?: keyof T                  // Key for reading cell values
  cell?: (row: T) => React.ReactNode     // Custom cell renderer
  enableSorting?: boolean                // Click label to sort (default: false)
  enableFiltering?: boolean              // Show filter icon on header (default: false)
  filterPopover?: () => React.ReactNode  // Content for the column's filter popover
  defaultVisible?: boolean               // Initially visible (default: true)
}`}
          />

          {/* FilterOption */}
          <h3 className="text-base font-semibold text-foreground">TableManagerFilterOption</h3>
          <CodeBlock
            language="tsx"
            code={`type TableManagerFilterOption = {
  value: string
  label: string
  icon?: React.ReactNode
}`}
          />

          {/* ExportOption */}
          <h3 className="text-base font-semibold text-foreground">TableManagerExportOption</h3>
          <CodeBlock
            language="tsx"
            code={`type TableManagerExportOption = {
  label: string   // "CSV", "PDF", "Excel"
  value: string
  icon?: React.ReactNode
}`}
          />
        </div>

        {/* Data model */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Data model</h2>
          <p className="text-muted-foreground leading-7">
            TableManager uses a <strong className="text-foreground">hybrid data model</strong>:
            filtering is server-side, sorting is client-side.
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>
              <strong className="text-foreground">Filtering</strong> — The block fires callbacks
              (<code className="font-mono">onSearchChange</code>, <code className="font-mono">onFilterChange</code>,{" "}
              <code className="font-mono">onDateRangeChange</code>). The consumer fetches filtered data and passes it
              back via <code className="font-mono">data</code>.
            </li>
            <li>
              <strong className="text-foreground">Sorting</strong> — The block sorts the{" "}
              <code className="font-mono">data</code> array client-side. Default sort: first{" "}
              <code className="font-mono">type="date"</code> column descending; if none, first{" "}
              <code className="font-mono">type="text"</code> column ascending.
            </li>
            <li>
              <strong className="text-foreground">Pagination</strong> — Server-side. The consumer passes{" "}
              <code className="font-mono">totalCount</code> for pagination math and one page of data at a time.
            </li>
            <li>
              <strong className="text-foreground">Row identity</strong> — All data objects must have{" "}
              <code className="font-mono">id: string | number</code>.
            </li>
          </ul>
        </div>

        {/* Column header interactions */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Column header interactions</h2>
          <p className="text-muted-foreground leading-7">
            Each column header supports two independent click targets:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>
              <strong className="text-foreground">Label click</strong> — sorts the column client-side
              (if <code className="font-mono">enableSorting: true</code>). Cycles desc → asc → default.
            </li>
            <li>
              <strong className="text-foreground">Filter icon click</strong> — opens a popover anchored to the
              header (if <code className="font-mono">enableFiltering: true</code> and{" "}
              <code className="font-mono">filterPopover</code> is provided). The consumer supplies the popover body.
            </li>
          </ul>
          <p className="text-sm text-muted-foreground">
            Column visibility is controlled by the <strong className="text-foreground">Columns</strong> icon button
            in the toolbar — not by column header clicks.
          </p>
        </div>

        {/* Extensibility */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Extending the toolbar</h2>
          <p className="text-muted-foreground leading-7">
            <code className="font-mono">TableManagerToolbarActions</code> is an open slot — place any additional
            controls inside it. Built-in controls (<code className="font-mono">TableManagerMultiFilter</code>,{" "}
            <code className="font-mono">TableManagerDateRange</code>, etc.) can be omitted if not needed.
          </p>
          <CodeBlock
            language="tsx"
            code={`<TableManagerToolbarActions>
  {/* Built-in controls */}
  <TableManagerMultiFilter name="applet" label="Applet" options={options} />
  <TableManagerDateRange />
  <TableManagerRowsPerPage />
  <TableManagerPagination />
  <TableManagerColumnToggle />
  <TableManagerExport options={exportOptions} onExport={handleExport} />

  {/* Your custom controls */}
  <AppButton variant="outline" size="sm">Custom Action</AppButton>
</TableManagerToolbarActions>`}
          />
        </div>
      </section>
    </article>
  );
}
