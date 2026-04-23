"use client"

import * as React from "react"
import type { DateRange } from "react-day-picker"
import {
  CalendarIcon,
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
  Columns3,
  Filter,
  GripVertical,
  Search,
} from "lucide-react"
import { cn } from "../../lib/utils"
import { AppButton } from "../primitives/AppButton"
import { AppInput } from "../primitives/AppInput"
import { AppBadge } from "../primitives/AppBadge"
import { AppSpinner } from "../primitives/AppSpinner"
import { AppCheckbox } from "../primitives/AppCheckbox"
import { AppCalendar } from "../primitives/AppCalendar"
import {
  AppPopover,
  AppPopoverTrigger,
  AppPopoverContent,
} from "../primitives/AppPopover"
import {
  AppDropdownMenu,
  AppDropdownMenuTrigger,
  AppDropdownMenuContent,
  AppDropdownMenuLabel,
  AppDropdownMenuSeparator,
  AppDropdownMenuItem,
} from "../primitives/AppDropdownMenu"
import {
  AppSelect,
  AppSelectTrigger,
  AppSelectValue,
  AppSelectContent,
  AppSelectItem,
} from "../primitives/AppSelect"
import {
  AppPagination,
  AppPaginationContent,
  AppPaginationItem,
  AppPaginationLink,
  AppPaginationPrevious,
  AppPaginationNext,
  AppPaginationEllipsis,
} from "../primitives/AppPagination"
import {
  AppTable,
  AppTableHeader,
  AppTableBody,
  AppTableHead,
  AppTableRow,
  AppTableCell,
} from "../primitives/AppTable"

// ─── Public types ─────────────────────────────────────────────────────────────

export type TableManagerColumnDef<T> = {
  id: string
  header: string
  type?: "date" | "text" | "other"
  accessorKey?: keyof T
  cell?: (row: T) => React.ReactNode
  enableSorting?: boolean
  enableFiltering?: boolean
  filterPopover?: () => React.ReactNode
  defaultVisible?: boolean
}

export type TableManagerFilterOption = {
  value: string
  label: string
  icon?: React.ReactNode
}

export type TableManagerExportOption = {
  label: string
  value: string
  icon?: React.ReactNode
}

export type TableManagerProps<T extends { id: string | number }> = {
  columns: TableManagerColumnDef<T>[]
  data: T[]
  totalCount: number
  loading?: boolean
  defaultRowsPerPage?: number
  defaultVisibleColumns?: string[]
  defaultFilters?: Record<string, string[]>
  onSearchChange?: (term: string) => void
  onFilterChange?: (filters: Record<string, string[]>) => void
  onDateRangeChange?: (range: { from?: Date; to?: Date }) => void
  onPageChange?: (page: number) => void
  onRowsPerPageChange?: (rowsPerPage: number) => void
  onSelectionChange?: (rows: T[]) => void
  children: React.ReactNode
}

// ─── Internal state ───────────────────────────────────────────────────────────

type TableManagerState = {
  sortColumn: string | undefined
  sortDirection: "asc" | "desc" | undefined
  visibleColumns: Set<string>
  columnOrder: string[]
  selectedRows: Set<string | number>
  page: number
  rowsPerPage: number
  search: string
  filters: Record<string, string[]>
  dateRange: { from?: Date; to?: Date }
}

type TableManagerAction =
  | { type: "SET_SORT"; column: string; direction: "asc" | "desc" | undefined }
  | { type: "RESET_SORT" }
  | { type: "TOGGLE_COLUMN"; id: string; visibleCount: number }
  | { type: "MOVE_COLUMN"; fromIndex: number; toIndex: number }
  | { type: "TOGGLE_ROW"; id: string | number }
  | { type: "TOGGLE_ALL"; ids: (string | number)[]; allSelected: boolean }
  | { type: "SET_PAGE"; page: number }
  | { type: "SET_ROWS_PER_PAGE"; rowsPerPage: number }
  | { type: "SET_SEARCH"; search: string }
  | { type: "SET_FILTER"; name: string; values: string[] }
  | { type: "SET_DATE_RANGE"; range: { from?: Date; to?: Date } }

function reducer(state: TableManagerState, action: TableManagerAction): TableManagerState {
  switch (action.type) {
    case "SET_SORT":
      return { ...state, sortColumn: action.column, sortDirection: action.direction }
    case "RESET_SORT":
      return { ...state, sortColumn: undefined, sortDirection: undefined }
    case "TOGGLE_COLUMN": {
      const next = new Set(state.visibleColumns)
      if (next.has(action.id) && action.visibleCount <= 1) return state
      if (next.has(action.id)) next.delete(action.id)
      else next.add(action.id)
      return { ...state, visibleColumns: next }
    }
    case "MOVE_COLUMN": {
      const order = Array.from(state.columnOrder)
      const { fromIndex, toIndex } = action
      if (toIndex < 0 || toIndex >= order.length) return state
      const [moved] = order.splice(fromIndex, 1)
      order.splice(toIndex, 0, moved)
      return { ...state, columnOrder: order }
    }
    case "TOGGLE_ROW": {
      const next = new Set(state.selectedRows)
      if (next.has(action.id)) next.delete(action.id)
      else next.add(action.id)
      return { ...state, selectedRows: next }
    }
    case "TOGGLE_ALL": {
      if (action.allSelected) return { ...state, selectedRows: new Set() }
      return { ...state, selectedRows: new Set(action.ids) }
    }
    case "SET_PAGE":
      return { ...state, page: action.page, selectedRows: new Set() }
    case "SET_ROWS_PER_PAGE":
      return { ...state, rowsPerPage: action.rowsPerPage, page: 0, selectedRows: new Set() }
    case "SET_SEARCH":
      return { ...state, search: action.search, page: 0 }
    case "SET_FILTER":
      return {
        ...state,
        filters: { ...state.filters, [action.name]: action.values },
        page: 0,
      }
    case "SET_DATE_RANGE":
      return { ...state, dateRange: action.range, page: 0 }
    default:
      return state
  }
}

// ─── Context ──────────────────────────────────────────────────────────────────

type TableManagerContextValue = {
  columns: TableManagerColumnDef<{ id: string | number; [key: string]: unknown }>[]
  orderedColumns: TableManagerColumnDef<{ id: string | number; [key: string]: unknown }>[]
  data: { id: string | number; [key: string]: unknown }[]
  sortedData: { id: string | number; [key: string]: unknown }[]
  totalCount: number
  loading: boolean
  state: TableManagerState
  dispatch: React.Dispatch<TableManagerAction>
  totalPages: number
  allSelected: boolean
  someSelected: boolean
  onSearchChange?: (term: string) => void
  onFilterChange?: (filters: Record<string, string[]>) => void
  onDateRangeChange?: (range: { from?: Date; to?: Date }) => void
  onPageChange?: (page: number) => void
  onRowsPerPageChange?: (rowsPerPage: number) => void
  onSelectionChange?: (rows: { id: string | number; [key: string]: unknown }[]) => void
}

const TableManagerContext = React.createContext<TableManagerContextValue | null>(null)

function useTableManager(): TableManagerContextValue {
  const ctx = React.useContext(TableManagerContext)
  if (!ctx) throw new Error("useTableManager must be used inside TableManager")
  return ctx
}

// ─── Sort helpers ─────────────────────────────────────────────────────────────

type AnyRow = { id: string | number; [key: string]: unknown }
type AnyColumnDef = TableManagerColumnDef<AnyRow>

function getSortedData(
  data: AnyRow[],
  columns: AnyColumnDef[],
  sortColumn: string | undefined,
  sortDirection: "asc" | "desc" | undefined
): AnyRow[] {
  const arr = Array.from(data)

  if (sortColumn && sortDirection) {
    const col = columns.find((c) => c.id === sortColumn)
    if (col?.accessorKey) {
      arr.sort((a, b) => {
        const av = a[col.accessorKey as string]
        const bv = b[col.accessorKey as string]
        let cmp = 0
        if (col.type === "date") {
          const at = av ? new Date(av as string).getTime() : 0
          const bt = bv ? new Date(bv as string).getTime() : 0
          cmp = at - bt
        } else {
          cmp = String(av ?? "").localeCompare(String(bv ?? ""))
        }
        return sortDirection === "desc" ? -cmp : cmp
      })
    }
    return arr
  }

  // Default sort: first date col desc → first text col asc → natural
  const dateCol = columns.find((c) => c.type === "date" && c.accessorKey)
  const textCol = columns.find((c) => c.type === "text" && c.accessorKey)

  if (dateCol?.accessorKey) {
    arr.sort((a, b) => {
      const at = a[dateCol.accessorKey as string]
        ? new Date(a[dateCol.accessorKey as string] as string).getTime()
        : 0
      const bt = b[dateCol.accessorKey as string]
        ? new Date(b[dateCol.accessorKey as string] as string).getTime()
        : 0
      return bt - at // desc
    })
  } else if (textCol?.accessorKey) {
    arr.sort((a, b) =>
      String(a[textCol.accessorKey as string] ?? "").localeCompare(
        String(b[textCol.accessorKey as string] ?? "")
      )
    )
  }

  return arr
}

// ─── Pagination range ─────────────────────────────────────────────────────────

function getPaginationRange(page: number, totalPages: number): (number | "ellipsis")[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }
  const current = page + 1
  if (current <= 3) return [1, 2, 3, "ellipsis", totalPages]
  if (current >= totalPages - 2)
    return [1, "ellipsis", totalPages - 2, totalPages - 1, totalPages]
  return [1, "ellipsis", current - 1, current, current + 1, "ellipsis", totalPages]
}

// ─── Date formatting ──────────────────────────────────────────────────────────

function formatDate(date: Date): string {
  const m = String(date.getMonth() + 1).padStart(2, "0")
  const d = String(date.getDate()).padStart(2, "0")
  const y = date.getFullYear()
  return `${m}/${d}/${y}`
}

// ─── TableManager (root provider) ────────────────────────────────────────────

/**
 * TableManager — Root provider for the table management block.
 * Wraps all TableManager sub-components and manages client-side sort,
 * column visibility, and row selection state.
 *
 * @note All data objects must have an `id: string | number` field.
 * @note Filtering and pagination are server-side — pass filtered data via `data`
 *   and respond to onSearchChange, onFilterChange, onDateRangeChange, onPageChange.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function TableManager<T extends { id: string | number }>({
  columns,
  data,
  totalCount,
  loading = false,
  defaultRowsPerPage = 20,
  defaultVisibleColumns,
  defaultFilters,
  onSearchChange,
  onFilterChange,
  onDateRangeChange,
  onPageChange,
  onRowsPerPageChange,
  onSelectionChange,
  children,
}: TableManagerProps<T>) {
  const typedColumns = columns as AnyColumnDef[]
  const typedData = data as AnyRow[]

  const initialVisible = React.useMemo(() => {
    if (defaultVisibleColumns) return new Set<string>(defaultVisibleColumns)
    return new Set<string>(
      columns.filter((c) => c.defaultVisible !== false).map((c) => c.id)
    )
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const initialOrder = React.useMemo(() => columns.map((c) => c.id), []) // eslint-disable-line react-hooks/exhaustive-deps

  const [state, dispatch] = React.useReducer(reducer, {
    sortColumn: undefined,
    sortDirection: undefined,
    visibleColumns: initialVisible,
    columnOrder: initialOrder,
    selectedRows: new Set<string | number>(),
    page: 0,
    rowsPerPage: defaultRowsPerPage,
    search: "",
    filters: defaultFilters ?? {},
    dateRange: {},
  })

  const sortedData = React.useMemo(
    () => getSortedData(typedData, typedColumns, state.sortColumn, state.sortDirection),
    [typedData, typedColumns, state.sortColumn, state.sortDirection]
  )

  const orderedColumns = React.useMemo(() => {
    const colMap = new Map(typedColumns.map((c) => [c.id, c]))
    return state.columnOrder
      .map((id) => colMap.get(id))
      .filter((c): c is AnyColumnDef => c !== undefined)
  }, [typedColumns, state.columnOrder])

  const totalPages = Math.max(1, Math.ceil(totalCount / state.rowsPerPage))
  const allSelected = state.selectedRows.size === typedData.length && typedData.length > 0
  const someSelected = state.selectedRows.size > 0 && !allSelected

  // Fire onSelectionChange when selection changes
  React.useEffect(() => {
    if (!onSelectionChange) return
    const selected = typedData.filter((row) => state.selectedRows.has(row.id))
    onSelectionChange(selected as T[])
  }, [state.selectedRows]) // eslint-disable-line react-hooks/exhaustive-deps

  const value: TableManagerContextValue = {
    columns: typedColumns,
    orderedColumns,
    data: typedData,
    sortedData,
    totalCount,
    loading,
    state,
    dispatch,
    totalPages,
    allSelected,
    someSelected,
    onSearchChange,
    onFilterChange,
    onDateRangeChange,
    onPageChange,
    onRowsPerPageChange,
    onSelectionChange: onSelectionChange as TableManagerContextValue["onSelectionChange"],
  }

  return (
    <TableManagerContext.Provider value={value}>
      <div className="flex flex-col gap-3">
        {children}
      </div>
    </TableManagerContext.Provider>
  )
}
TableManager.displayName = "TableManager"

// ─── TableManagerToolbar ──────────────────────────────────────────────────────

/**
 * TableManagerToolbar — Flex container for the search input and toolbar actions.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function TableManagerToolbar({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {children}
    </div>
  )
}
TableManagerToolbar.displayName = "TableManagerToolbar"

// ─── TableManagerSearch ───────────────────────────────────────────────────────

/**
 * TableManagerSearch — Search input that fires onSearchChange (debounced 300ms).
 * @note If a prop you need is missing, stop and inform the design team.
 */
function TableManagerSearch({
  placeholder = "Search...",
  debounceMs = 300,
  className,
}: {
  placeholder?: string
  debounceMs?: number
  className?: string
}) {
  const { state, dispatch, onSearchChange } = useTableManager()
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    dispatch({ type: "SET_SEARCH", search: value })
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      onSearchChange?.(value)
    }, debounceMs)
  }

  React.useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current) }, [])

  return (
    <AppInput
      value={state.search}
      onChange={handleChange}
      placeholder={placeholder}
      leftAdornment={<Search className="size-4" />}
      className={cn("w-64", className)}
    />
  )
}
TableManagerSearch.displayName = "TableManagerSearch"

// ─── TableManagerToolbarActions ───────────────────────────────────────────────

/**
 * TableManagerToolbarActions — Right-side extensibility slot for toolbar controls.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function TableManagerToolbarActions({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn("ml-auto flex shrink-0 items-center gap-2", className)}>
      {children}
    </div>
  )
}
TableManagerToolbarActions.displayName = "TableManagerToolbarActions"

// ─── TableManagerMultiFilter ──────────────────────────────────────────────────

/**
 * TableManagerMultiFilter — Multiselect filter popover with search.
 * Shows icon + label on the trigger. Displays a count badge when items are selected.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function TableManagerMultiFilter({
  name,
  label,
  icon,
  options,
  searchPlaceholder,
  className,
}: {
  name: string
  label: string
  icon?: React.ReactNode
  options: TableManagerFilterOption[]
  searchPlaceholder?: string
  className?: string
}) {
  const { state, dispatch, onFilterChange } = useTableManager()
  const selected = state.filters[name] ?? []
  const [search, setSearch] = React.useState("")

  function toggle(value: string) {
    const next = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value]
    dispatch({ type: "SET_FILTER", name, values: next })
    onFilterChange?.({ ...state.filters, [name]: next })
  }

  const filtered = options.filter(
    (opt) =>
      search.trim() === "" ||
      opt.label.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <AppPopover>
      <AppPopoverTrigger asChild>
        <AppButton
          variant="outline"
          size="sm"
          className={cn("gap-2", className)}
        >
          {icon && <span className="flex shrink-0 items-center">{icon}</span>}
          <span>{label}</span>
          {selected.length > 0 && (
            <AppBadge variant="secondary" className="ml-1 px-1.5 py-0 text-xs">
              {selected.length}
            </AppBadge>
          )}
        </AppButton>
      </AppPopoverTrigger>
      <AppPopoverContent className="w-64 p-0" align="start">
        <div className="flex items-center gap-2 border-b px-3 py-2">
          <Search className="size-4 shrink-0 opacity-50" />
          <input
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            placeholder={searchPlaceholder ?? `Search ${label.toLowerCase()}...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="max-h-[300px] overflow-y-auto p-1">
          {filtered.length === 0 ? (
            <p className="py-6 text-center text-sm text-muted-foreground">
              No results found.
            </p>
          ) : (
            filtered.map((opt) => (
              <div
                key={opt.value}
                role="option"
                aria-selected={selected.includes(opt.value)}
                onClick={() => toggle(opt.value)}
                className="flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
              >
                <AppCheckbox
                  checked={selected.includes(opt.value)}
                  className="pointer-events-none"
                />
                {opt.icon && (
                  <span className="flex shrink-0 items-center">{opt.icon}</span>
                )}
                <span>{opt.label}</span>
              </div>
            ))
          )}
        </div>
      </AppPopoverContent>
    </AppPopover>
  )
}
TableManagerMultiFilter.displayName = "TableManagerMultiFilter"

// ─── TableManagerDateRange ────────────────────────────────────────────────────

/**
 * TableManagerDateRange — Date range picker that fires onDateRangeChange.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function TableManagerDateRange({
  placeholder = "mm/dd/yyyy to mm/dd/yyyy",
  className,
}: {
  placeholder?: string
  className?: string
}) {
  const { state, dispatch, onDateRangeChange } = useTableManager()
  const { from, to } = state.dateRange

  const displayText =
    from && to
      ? `${formatDate(from)} to ${formatDate(to)}`
      : from
      ? `${formatDate(from)} to ...`
      : placeholder

  function handleSelect(range: DateRange | undefined) {
    const next = { from: range?.from, to: range?.to }
    dispatch({ type: "SET_DATE_RANGE", range: next })
    onDateRangeChange?.(next)
  }

  return (
    <AppPopover>
      <AppPopoverTrigger asChild>
        <AppButton
          variant="outline"
          size="sm"
          iconLeft={<CalendarIcon className="size-4" />}
          className={cn("min-w-[220px] justify-start text-left", !from && "text-muted-foreground", className)}
        >
          {displayText}
        </AppButton>
      </AppPopoverTrigger>
      <AppPopoverContent className="w-auto p-0" align="start">
        <AppCalendar
          mode="range"
          selected={{ from, to }}
          onSelect={handleSelect}
          numberOfMonths={2}
          className="rounded-md"
        />
      </AppPopoverContent>
    </AppPopover>
  )
}
TableManagerDateRange.displayName = "TableManagerDateRange"

// ─── TableManagerRowsPerPage ──────────────────────────────────────────────────

/**
 * TableManagerRowsPerPage — Rows per page selector. Fires onRowsPerPageChange.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function TableManagerRowsPerPage({
  options = [10, 20, 50, 100],
  className,
}: {
  options?: number[]
  className?: string
}) {
  const { state, dispatch, onRowsPerPageChange } = useTableManager()

  function handleChange(value: string) {
    const n = Number(value)
    dispatch({ type: "SET_ROWS_PER_PAGE", rowsPerPage: n })
    onRowsPerPageChange?.(n)
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="text-sm text-muted-foreground">Rows</span>
      <AppSelect
        value={String(state.rowsPerPage)}
        onValueChange={handleChange}
      >
        <AppSelectTrigger className="w-16 h-8 text-sm">
          <AppSelectValue />
        </AppSelectTrigger>
        <AppSelectContent>
          {options.map((n) => (
            <AppSelectItem key={n} value={String(n)}>
              {n}
            </AppSelectItem>
          ))}
        </AppSelectContent>
      </AppSelect>
    </div>
  )
}
TableManagerRowsPerPage.displayName = "TableManagerRowsPerPage"

// ─── TableManagerPagination ───────────────────────────────────────────────────

/**
 * TableManagerPagination — Page navigation. Fires onPageChange.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function TableManagerPagination({ className }: { className?: string }) {
  const { state, dispatch, totalPages, onPageChange } = useTableManager()
  const { page } = state
  const range = getPaginationRange(page, totalPages)

  function goTo(p: number) {
    if (p < 0 || p >= totalPages) return
    dispatch({ type: "SET_PAGE", page: p })
    onPageChange?.(p)
  }

  return (
    <AppPagination className={className}>
      <AppPaginationContent>
        <AppPaginationItem>
          <AppPaginationPrevious
            href="#"
            onClick={(e) => { e.preventDefault(); goTo(page - 1) }}
            aria-disabled={page === 0}
            className={page === 0 ? "pointer-events-none opacity-50" : ""}
          />
        </AppPaginationItem>

        {range.map((item, i) =>
          item === "ellipsis" ? (
            <AppPaginationItem key={`ellipsis-${i}`}>
              <AppPaginationEllipsis />
            </AppPaginationItem>
          ) : (
            <AppPaginationItem key={item}>
              <AppPaginationLink
                href="#"
                isActive={item === page + 1}
                onClick={(e) => { e.preventDefault(); goTo(item - 1) }}
              >
                {item}
              </AppPaginationLink>
            </AppPaginationItem>
          )
        )}

        <AppPaginationItem>
          <AppPaginationNext
            href="#"
            onClick={(e) => { e.preventDefault(); goTo(page + 1) }}
            aria-disabled={page >= totalPages - 1}
            className={page >= totalPages - 1 ? "pointer-events-none opacity-50" : ""}
          />
        </AppPaginationItem>
      </AppPaginationContent>
    </AppPagination>
  )
}
TableManagerPagination.displayName = "TableManagerPagination"

// ─── TableManagerColumnToggle ─────────────────────────────────────────────────

/**
 * TableManagerColumnToggle — Dropdown to show/hide and reorder table columns.
 * Drag the grip handle to reorder. At least one column always remains visible.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function TableManagerColumnToggle({ className }: { className?: string }) {
  const { orderedColumns, state, dispatch } = useTableManager()
  const visibleCount = state.visibleColumns.size

  const dragIndexRef = React.useRef<number | null>(null)
  const [dragOverIndex, setDragOverIndex] = React.useState<number | null>(null)

  function handleDragStart(e: React.DragEvent, index: number) {
    dragIndexRef.current = index
    e.dataTransfer.effectAllowed = "move"
  }

  function handleDragOver(e: React.DragEvent, index: number) {
    e.preventDefault()
    e.dataTransfer.dropEffect = "move"
    setDragOverIndex(index)
  }

  function handleDrop(e: React.DragEvent, toIndex: number) {
    e.preventDefault()
    const fromIndex = dragIndexRef.current
    if (fromIndex !== null && fromIndex !== toIndex) {
      dispatch({ type: "MOVE_COLUMN", fromIndex, toIndex })
    }
    dragIndexRef.current = null
    setDragOverIndex(null)
  }

  function handleDragEnd() {
    dragIndexRef.current = null
    setDragOverIndex(null)
  }

  return (
    <AppDropdownMenu>
      <AppDropdownMenuTrigger asChild>
        <AppButton
          variant="outline"
          size="icon"
          className={className}
          aria-label="Toggle columns"
        >
          <Columns3 className="size-4" />
        </AppButton>
      </AppDropdownMenuTrigger>
      <AppDropdownMenuContent align="end" className="w-52">
        <AppDropdownMenuLabel>Toggle columns</AppDropdownMenuLabel>
        <AppDropdownMenuSeparator />
        {orderedColumns.map((col, i) => {
          const isVisible = state.visibleColumns.has(col.id)
          const isLast = visibleCount === 1 && isVisible
          const isDragOver = dragOverIndex === i
          const isDragging = dragIndexRef.current === i

          return (
            <AppDropdownMenuItem
              key={col.id}
              onSelect={(e) => e.preventDefault()}
              draggable
              onDragStart={(e) => handleDragStart(e, i)}
              onDragOver={(e) => handleDragOver(e, i)}
              onDrop={(e) => handleDrop(e, i)}
              onDragEnd={handleDragEnd}
              className={cn(
                "flex items-center gap-2 transition-colors",
                isDragOver && "bg-accent",
                isDragging && "opacity-40"
              )}
            >
              {/* Drag handle */}
              <GripVertical className="size-4 shrink-0 cursor-grab text-muted-foreground active:cursor-grabbing" />
              {/* Visibility checkbox */}
              <AppCheckbox
                checked={isVisible}
                disabled={isLast}
                onCheckedChange={() =>
                  dispatch({ type: "TOGGLE_COLUMN", id: col.id, visibleCount })
                }
                onClick={(e) => e.stopPropagation()}
                aria-label={`Show ${col.header}`}
              />
              <span className="flex-1 text-sm">{col.header}</span>
            </AppDropdownMenuItem>
          )
        })}
      </AppDropdownMenuContent>
    </AppDropdownMenu>
  )
}
TableManagerColumnToggle.displayName = "TableManagerColumnToggle"

// ─── TableManagerExport ───────────────────────────────────────────────────────

/**
 * TableManagerExport — Export dropdown with format options.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function TableManagerExport({
  options,
  onExport,
  className,
}: {
  options: TableManagerExportOption[]
  onExport: (format: string) => void
  className?: string
}) {
  return (
    <AppDropdownMenu>
      <AppDropdownMenuTrigger asChild>
        <AppButton
          variant="outline"
          size="sm"
          iconRight={<ChevronDown className="size-4" />}
          className={className}
        >
          Export
        </AppButton>
      </AppDropdownMenuTrigger>
      <AppDropdownMenuContent align="end" className="w-36">
        {options.map((opt) => (
          <AppDropdownMenuItem
            key={opt.value}
            onSelect={() => onExport(opt.value)}
            className="gap-2"
          >
            {opt.icon && <span className="flex items-center">{opt.icon}</span>}
            {opt.label}
          </AppDropdownMenuItem>
        ))}
      </AppDropdownMenuContent>
    </AppDropdownMenu>
  )
}
TableManagerExport.displayName = "TableManagerExport"

// ─── TableManagerContent ──────────────────────────────────────────────────────

/**
 * TableManagerContent — The data table. Reads sorted data from context.
 * Shows a loading overlay when `loading` is true (toolbar/footer stay interactive).
 * @note If a prop you need is missing, stop and inform the design team.
 */
function TableManagerContent({ className }: { className?: string }) {
  const {
    orderedColumns,
    sortedData,
    loading,
    state,
    dispatch,
    allSelected,
    someSelected,
  } = useTableManager()

  const visibleColumns = orderedColumns.filter((c) => state.visibleColumns.has(c.id))

  function handleSortClick(col: AnyColumnDef) {
    if (!col.enableSorting) return
    if (state.sortColumn !== col.id) {
      dispatch({ type: "SET_SORT", column: col.id, direction: "desc" })
    } else if (state.sortDirection === "desc") {
      dispatch({ type: "SET_SORT", column: col.id, direction: "asc" })
    } else {
      dispatch({ type: "RESET_SORT" })
    }
  }

  function getSortIcon(col: AnyColumnDef) {
    if (!col.enableSorting) return null
    if (state.sortColumn !== col.id)
      return <ChevronsUpDown className="size-3 text-muted-foreground" />
    if (state.sortDirection === "asc")
      return <ChevronUp className="size-3" />
    return <ChevronDown className="size-3" />
  }

  function getAriaSort(col: AnyColumnDef): "ascending" | "descending" | "none" | undefined {
    if (!col.enableSorting) return undefined
    if (state.sortColumn !== col.id) return "none"
    return state.sortDirection === "asc" ? "ascending" : "descending"
  }

  const colCount = visibleColumns.length + 1 // +1 for checkbox col

  return (
    <div className={cn("relative rounded-lg border bg-card", className)}>
      {/* Loading overlay — covers table only */}
      {loading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-background/60">
          <AppSpinner className="size-6 text-primary" />
        </div>
      )}

      <AppTable>
        <AppTableHeader>
          <AppTableRow>
            {/* Select-all checkbox */}
            <AppTableHead className="w-10 pr-0">
              <AppCheckbox
                checked={allSelected ? true : someSelected ? "indeterminate" : false}
                onCheckedChange={() =>
                  dispatch({
                    type: "TOGGLE_ALL",
                    ids: sortedData.map((r) => r.id),
                    allSelected,
                  })
                }
                aria-label="Select all rows"
              />
            </AppTableHead>

            {visibleColumns.map((col) => (
              <AppTableHead
                key={col.id}
                aria-sort={getAriaSort(col)}
                className="whitespace-nowrap"
              >
                <div className="flex items-center gap-1">
                  {/* Sort trigger: label click */}
                  {col.enableSorting ? (
                    <button
                      type="button"
                      onClick={() => handleSortClick(col)}
                      className="flex items-center gap-1 hover:text-foreground"
                    >
                      {col.header}
                      {getSortIcon(col)}
                    </button>
                  ) : (
                    <span>{col.header}</span>
                  )}

                  {/* Filter icon — separate click target */}
                  {col.enableFiltering && col.filterPopover && (
                    <AppPopover>
                      <AppPopoverTrigger asChild>
                        <button
                          type="button"
                          aria-label={`Filter ${col.header}`}
                          aria-haspopup="dialog"
                          className="ml-0.5 flex items-center text-muted-foreground hover:text-foreground"
                        >
                          <Filter className="size-3" />
                        </button>
                      </AppPopoverTrigger>
                      <AppPopoverContent align="start" className="w-64 p-3">
                        {col.filterPopover()}
                      </AppPopoverContent>
                    </AppPopover>
                  )}
                </div>
              </AppTableHead>
            ))}
          </AppTableRow>
        </AppTableHeader>

        <AppTableBody>
          {sortedData.length === 0 ? (
            <AppTableRow>
              <AppTableCell colSpan={colCount} className="py-12 text-center text-muted-foreground">
                No results.
              </AppTableCell>
            </AppTableRow>
          ) : (
            sortedData.map((row) => (
              <AppTableRow
                key={row.id}
                data-state={state.selectedRows.has(row.id) ? "selected" : undefined}
              >
                <AppTableCell className="pr-0">
                  <AppCheckbox
                    checked={state.selectedRows.has(row.id)}
                    onCheckedChange={() =>
                      dispatch({ type: "TOGGLE_ROW", id: row.id })
                    }
                    aria-label="Select row"
                  />
                </AppTableCell>
                {visibleColumns.map((col) => (
                  <AppTableCell key={col.id}>
                    {col.cell
                      ? col.cell(row)
                      : col.accessorKey != null
                      ? String(row[col.accessorKey as string] ?? "")
                      : null}
                  </AppTableCell>
                ))}
              </AppTableRow>
            ))
          )}
        </AppTableBody>
      </AppTable>
    </div>
  )
}
TableManagerContent.displayName = "TableManagerContent"

// ─── TableManagerFooter ───────────────────────────────────────────────────────

/**
 * TableManagerFooter — Bottom bar with selection count, rows-per-page, and pagination.
 * @note If a prop you need is missing, stop and inform the design team.
 */
function TableManagerFooter({ className }: { className?: string }) {
  const { state, data } = useTableManager()
  const selectedCount = state.selectedRows.size
  const totalShown = data.length

  return (
    <div className={cn("flex items-center justify-between text-sm", className)}>
      <span className="text-muted-foreground">
        {selectedCount} of {totalShown} row{totalShown !== 1 ? "s" : ""} selected.
      </span>
      <div className="flex items-center gap-2">
        <TableManagerRowsPerPage />
        <TableManagerPagination />
      </div>
    </div>
  )
}
TableManagerFooter.displayName = "TableManagerFooter"

// ─── Exports ──────────────────────────────────────────────────────────────────

export {
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
}
