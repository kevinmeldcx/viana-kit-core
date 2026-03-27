import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import {
  CalendarDefaultPreview,
  CalendarRangePreview,
  CalendarDatePickerPreview,
  CalendarPresetsPreview,
  CalendarBookedDatesPreview,
  CalendarWeekNumbersPreview,
} from "@/components/previews/calendar-preview";

export const metadata: Metadata = {
  title: "Calendar",
};

export default function CalendarPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Calendar
        </h1>
        <p className="text-lg text-muted-foreground">
          A date picker built on top of React DayPicker. Supports single date,
          date range, and custom disabled states.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<CalendarDefaultPreview />}
        code={`import { AppCalendar } from "@/components/primitives/AppCalendar"

export function Example() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <AppCalendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border"
    />
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-calendar-v1
        related_components: ["AppCalendar"]
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
            code={`import { AppCalendar } from "@/components/primitives/AppCalendar"`}
          />
        </div>

        {/* Examples */}
        <div className="space-y-8">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Examples
          </h2>

          {/* Range */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Date range</h3>
            <p className="text-sm text-muted-foreground">
              Set{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">mode="range"</code>{" "}
              and{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">numberOfMonths={"{2}"}</code>{" "}
              to let users select a start and end date across two months.
            </p>
            <ComponentPreview
              preview={<CalendarRangePreview />}
              code={`import type { DateRange } from "react-day-picker"

const [range, setRange] = React.useState<DateRange | undefined>()

<AppCalendar
  mode="range"
  selected={range}
  onSelect={setRange}
  numberOfMonths={2}
  className="rounded-lg border"
/>`}
              filename="example.tsx"
            />
          </div>

          {/* Date picker */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Date picker</h3>
            <p className="text-sm text-muted-foreground">
              Combine with{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">AppPopover</code>{" "}
              and a trigger button to build a compact date picker input.
            </p>
            <ComponentPreview
              preview={<CalendarDatePickerPreview />}
              code={`import { CalendarIcon } from "lucide-react"

const [date, setDate] = React.useState<Date | undefined>()

<AppPopover>
  <AppPopoverTrigger asChild>
    <AppButton
      variant="outline"
      className={cn("w-64 justify-start text-left font-normal", !date && "text-muted-foreground")}
    >
      <CalendarIcon className="mr-2 h-4 w-4" />
      {date ? format(date, "PPP") : "Pick a date"}
    </AppButton>
  </AppPopoverTrigger>
  <AppPopoverContent className="w-auto p-0" align="start">
    <AppCalendar mode="single" selected={date} onSelect={setDate} initialFocus />
  </AppPopoverContent>
</AppPopover>`}
              filename="example.tsx"
            />
          </div>

          {/* Presets */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">With presets</h3>
            <p className="text-sm text-muted-foreground">
              Add quick-select buttons above the calendar for common relative
              dates like "Today" or "In a week".
            </p>
            <ComponentPreview
              preview={<CalendarPresetsPreview />}
              code={`const presets = [
  { label: "Today", days: 0 },
  { label: "Tomorrow", days: 1 },
  { label: "In 3 days", days: 3 },
  { label: "In a week", days: 7 },
  { label: "In 2 weeks", days: 14 },
]

<AppPopoverContent className="flex w-auto flex-col gap-2 p-2" align="start">
  <div className="flex flex-col gap-1">
    {presets.map(({ label, days }) => (
      <AppButton
        key={label}
        variant="ghost"
        size="sm"
        className="justify-start"
        onClick={() => setDate(addDays(new Date(), days))}
      >
        {label}
      </AppButton>
    ))}
  </div>
  <div className="border-t pt-2">
    <AppCalendar mode="single" selected={date} onSelect={setDate} initialFocus />
  </div>
</AppPopoverContent>`}
              filename="example.tsx"
            />
          </div>

          {/* Booked / disabled dates */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Booked dates</h3>
            <p className="text-sm text-muted-foreground">
              Pass an array of{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">Date</code>{" "}
              objects to the{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">disabled</code>{" "}
              prop to mark specific days as unavailable.
            </p>
            <ComponentPreview
              preview={<CalendarBookedDatesPreview />}
              code={`const bookedDates = [
  addDays(new Date(), 2),
  addDays(new Date(), 3),
  addDays(new Date(), 7),
]

<AppCalendar
  mode="single"
  selected={date}
  onSelect={setDate}
  disabled={bookedDates}
  className="rounded-lg border"
/>`}
              filename="example.tsx"
            />
          </div>

          {/* Week numbers */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Week numbers</h3>
            <p className="text-sm text-muted-foreground">
              Enable{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">showWeekNumber</code>{" "}
              to display ISO week numbers alongside each row — useful for project
              planning contexts.
            </p>
            <ComponentPreview
              preview={<CalendarWeekNumbersPreview />}
              code={`<AppCalendar
  mode="single"
  selected={date}
  onSelect={setDate}
  showWeekNumber
  className="rounded-lg border"
/>`}
              filename="example.tsx"
            />
          </div>
        </div>

        {/* API Reference */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppCalendar
            </code>{" "}
            passes all props through to React DayPicker. Key props are listed below.
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
                  { prop: "mode", type: '"single" | "range" | "multiple"', default: '"single"', description: "Selection mode." },
                  { prop: "selected", type: "Date | DateRange | Date[]", default: "—", description: "The currently selected date(s)." },
                  { prop: "onSelect", type: "function", default: "—", description: "Callback fired when the selection changes." },
                  { prop: "disabled", type: "Date[] | Matcher", default: "—", description: "Dates or matchers that cannot be selected." },
                  { prop: "numberOfMonths", type: "number", default: "1", description: "Number of months to display side by side." },
                  { prop: "showOutsideDays", type: "boolean", default: "true", description: "Show days from adjacent months." },
                  { prop: "showWeekNumber", type: "boolean", default: "false", description: "Display ISO week numbers." },
                  { prop: "initialFocus", type: "boolean", default: "false", description: "Focus the calendar on mount — use inside popovers." },
                  { prop: "className", type: "string", default: "—", description: "Additional Tailwind classes on the root element." },
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
            filename="src/components/primitives/AppCalendar.tsx"
            code={`"use client"

import { Calendar } from "../ui/calendar"

function AppCalendar(props: React.ComponentProps<typeof Calendar>) {
  return <Calendar {...props} />
}

export { AppCalendar }`}
          />
        </div>
      </section>
    </article>
  );
}
