# TableManager

> Docs: https://viana-kit.vercel.app/docs/blocks/table-manager

**This is a block — import from `blocks/TableManager`, not `primitives/`.**

```tsx
import {
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
  type TableManagerFilterOption,
  type TableManagerExportOption,
} from "@/components/blocks/TableManager"
```

## Hard stop

> ❌ **Never build a data table + toolbar manually using `AppTable`, `AppPagination`, and raw inputs.**
>
> `TableManager` handles sort state, column visibility, drag-to-reorder columns, row selection, loading overlay, search debounce, multiselect filters, date range, and pagination UI. Building this from scratch will produce inconsistent behaviour and visual drift. Use this block.

## Data model

TableManager uses a **hybrid data model**:

| Concern | Where it lives |
|---------|---------------|
| Filtering (search, multiselect, date range) | **Server-side** — block fires callbacks; consumer fetches and passes filtered data |
| Sorting | **Client-side** — block sorts the `data` prop internally |
| Pagination | **Server-side** — consumer passes `totalCount`; block renders pagination UI |
| Column visibility / order | **Client-side** — block owns this state internally |
| Row selection | **Client-side** — block owns this state; fires `onSelectionChange` |

All row objects must have `id: string | number`.

## Types

```tsx
type TableManagerColumnDef<T> = {
  id: string                             // Unique column identifier
  header: string                         // Column header label
  type?: "date" | "text" | "other"       // Drives default sort order
  accessorKey?: keyof T                  // Key for reading cell values
  cell?: (row: T) => React.ReactNode     // Custom cell renderer
  enableSorting?: boolean                // Click label to sort (default: false)
  enableFiltering?: boolean              // Show filter icon on header (default: false)
  filterPopover?: () => React.ReactNode  // Body of the column's filter popover
  defaultVisible?: boolean               // Initially visible (default: true)
}

type TableManagerFilterOption = {
  value: string
  label: string
  icon?: React.ReactNode
}

type TableManagerExportOption = {
  label: string
  value: string
  icon?: React.ReactNode
}
```

## Props — TableManager

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `TableManagerColumnDef<T>[]` | required | Column definitions. Drive headers, cell renderers, sort, and filter. |
| `data` | `T[]` | required | Server-filtered rows for the current page. Must have `id: string \| number`. |
| `totalCount` | `number` | required | Total records across all pages (for pagination math). |
| `loading` | `boolean` | `false` | Shows a loading overlay on the table content while data is fetching. Toolbar and footer remain interactive. |
| `defaultRowsPerPage` | `number` | `20` | Initial rows-per-page value. |
| `defaultVisibleColumns` | `string[]` | all | Column IDs to show on initial render. |
| `defaultFilters` | `Record<string, string[]>` | `{}` | Initial filter selections. Use to pre-check multiselect filters. |
| `onSearchChange` | `(term: string) => void` | — | Fired when search input changes (debounced 300 ms). |
| `onFilterChange` | `(filters: Record<string, string[]>) => void` | — | Fired when any multiselect filter changes. |
| `onDateRangeChange` | `(range: { from?: Date; to?: Date }) => void` | — | Fired when the date range changes. |
| `onPageChange` | `(page: number) => void` | — | Fired when the page changes (0-indexed). |
| `onRowsPerPageChange` | `(rowsPerPage: number) => void` | — | Fired when rows per page changes. |
| `onSelectionChange` | `(rows: T[]) => void` | — | Fired when row selection changes. |

## Default sort order

When no column header has been clicked, data is sorted by:

1. First column with `type: "date"` — **descending** (most recent first)
2. If no date column, first column with `type: "text"` — **ascending**
3. If neither, natural order

Clicking a sortable column header cycles: **desc → asc → default**.

## Column header interactions

Each column header supports two independent click targets:

- **Label click** — sorts the column client-side (if `enableSorting: true`)
- **Filter icon click** — opens a popover anchored to the header (if `enableFiltering: true` and `filterPopover` is provided)

A column may have both `enableSorting` and `enableFiltering` set simultaneously.

## Usage

### Minimal

```tsx
const columns: TableManagerColumnDef<Row>[] = [
  { id: "name", header: "Name", type: "text", accessorKey: "name", enableSorting: true },
  { id: "status", header: "Status", accessorKey: "status" },
  { id: "date", header: "Date", type: "date", accessorKey: "date", enableSorting: true },
]

export default function Page() {
  const [data, setData] = React.useState<Row[]>(rows)

  return (
    <TableManager
      columns={columns}
      data={data}
      totalCount={data.length}
      onSearchChange={(term) => setData(rows.filter(r => r.name.includes(term)))}
    >
      <TableManagerToolbar>
        <TableManagerSearch placeholder="Search..." />
        <TableManagerToolbarActions>
          <TableManagerPagination />
        </TableManagerToolbarActions>
      </TableManagerToolbar>
      <TableManagerContent />
      <TableManagerFooter />
    </TableManager>
  )
}
```

### Full toolbar

```tsx
<TableManager
  columns={columns}
  data={data}
  totalCount={totalCount}
  loading={loading}
  defaultFilters={{ applet: ["sami", "zone"] }}
  onSearchChange={handleSearch}
  onFilterChange={handleFilter}
  onDateRangeChange={handleDateRange}
  onPageChange={handlePage}
  onRowsPerPageChange={handleRowsPerPage}
  onSelectionChange={handleSelection}
>
  <TableManagerToolbar>
    <TableManagerSearch placeholder="Search sessions..." />
    <TableManagerToolbarActions>
      <TableManagerMultiFilter
        name="applet"
        label="Service Applet"
        icon={<img src={icon.src} alt="" className="size-5 rounded object-cover" />}
        options={appletOptions}
        searchPlaceholder="Search Service Applet"
      />
      <TableManagerDateRange />
      <TableManagerRowsPerPage />
      <TableManagerPagination />
      <TableManagerColumnToggle />
      <TableManagerExport
        options={[{ label: "CSV", value: "csv" }]}
        onExport={(fmt) => exportAs(fmt)}
      />
    </TableManagerToolbarActions>
  </TableManagerToolbar>
  <TableManagerContent />
  <TableManagerFooter />
</TableManager>
```

### Pre-checked multiselect filter

Use `defaultFilters` to pre-select all options. The consumer's `onFilterChange` should use OR logic: a row is visible if any of its values match any checked option.

```tsx
<TableManager
  defaultFilters={{ applet: ["sami", "zone", "shelf"] }}
  onFilterChange={(filters) => {
    const checked = filters["applet"] ?? []
    const filtered = checked.length === 0
      ? []
      : rows.filter(r => r.applets.some(a => checked.includes(a)))
    setData(filtered)
  }}
  ...
>
```

### Custom cell renderer

```tsx
{
  id: "status",
  header: "Status",
  accessorKey: "status",
  cell: (row) => (
    <AppBadge variant={row.status === "PASSED" ? "default" : "destructive"}>
      {row.status}
    </AppBadge>
  ),
}
```

### Column-level filter popover

```tsx
{
  id: "site",
  header: "Site",
  accessorKey: "site",
  enableSorting: true,
  enableFiltering: true,
  filterPopover: () => (
    <div className="p-2">
      {/* your filter UI here */}
    </div>
  ),
}
```

### Extending the toolbar

`TableManagerToolbarActions` is an open slot — add any custom controls inside it:

```tsx
<TableManagerToolbarActions>
  <TableManagerMultiFilter ... />
  <TableManagerDateRange />
  <TableManagerPagination />
  <TableManagerColumnToggle />
  <TableManagerExport ... />
  {/* custom */}
  <AppButton variant="outline" size="sm">Custom Action</AppButton>
</TableManagerToolbarActions>
```

## Rules

- ✅ Always wrap everything in `<TableManager>` before using any sub-component
- ✅ All row objects must have `id: string | number`
- ✅ Pass `totalCount` equal to the total filtered record count (not just the current page length) for correct pagination
- ✅ Use `defaultFilters` to pre-select multiselect filter options so they render as checked on first render
- ✅ Implement OR logic in `onFilterChange` when a row can belong to multiple filter values
- ✅ Set `type: "date"` on date columns and `type: "text"` on primary text columns so the default sort works correctly
- ✅ Use `TableManagerToolbarActions` with `shrink-0` behavior built in — it will not compress when the search input grows
- ❌ Never import sub-components outside of a `<TableManager>` tree — they read from internal context and will throw
- ❌ Never filter data internally in the block — always pass already-filtered data via the `data` prop
- ❌ Never add `date-fns` or a date library just for this block — it uses native `Date` methods
- ❌ If a prop you need is missing, stop and inform the design team
