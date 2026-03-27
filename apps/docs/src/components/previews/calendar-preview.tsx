"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";
import type { DateRange } from "react-day-picker";
import {
  AppButton,
  AppCalendar,
  AppPopover,
  AppPopoverContent,
  AppPopoverTrigger,
} from "@viana/ui";

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function addDays(date: Date, days: number) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

export function CalendarDefaultPreview() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <AppCalendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border"
    />
  );
}

export function CalendarRangePreview() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <AppCalendar
      mode="range"
      selected={range}
      onSelect={setRange}
      numberOfMonths={2}
      className="rounded-lg border"
    />
  );
}

export function CalendarDatePickerPreview() {
  const [date, setDate] = React.useState<Date | undefined>();

  return (
    <AppPopover>
      <AppPopoverTrigger asChild>
        <AppButton
          variant="outline"
          className={`w-64 justify-start text-left font-normal${!date ? " text-muted-foreground" : ""}`}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? formatDate(date) : "Pick a date"}
        </AppButton>
      </AppPopoverTrigger>
      <AppPopoverContent className="w-auto p-0" align="start">
        <AppCalendar
          mode="single"
          selected={date}
          onSelect={setDate}
        />
      </AppPopoverContent>
    </AppPopover>
  );
}

export function CalendarPresetsPreview() {
  const [date, setDate] = React.useState<Date | undefined>();

  const presets = [
    { label: "Today", days: 0 },
    { label: "Tomorrow", days: 1 },
    { label: "In 3 days", days: 3 },
    { label: "In a week", days: 7 },
    { label: "In 2 weeks", days: 14 },
  ];

  return (
    <AppPopover>
      <AppPopoverTrigger asChild>
        <AppButton
          variant="outline"
          className={`w-64 justify-start text-left font-normal${!date ? " text-muted-foreground" : ""}`}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? formatDate(date) : "Pick a date"}
        </AppButton>
      </AppPopoverTrigger>
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
          <AppCalendar
            mode="single"
            selected={date}
            onSelect={setDate}
          />
        </div>
      </AppPopoverContent>
    </AppPopover>
  );
}

export function CalendarBookedDatesPreview() {
  const [date, setDate] = React.useState<Date | undefined>();

  const today = new Date();
  const bookedDates = [
    addDays(today, 2),
    addDays(today, 3),
    addDays(today, 7),
    addDays(today, 10),
    addDays(today, 11),
  ];

  return (
    <AppCalendar
      mode="single"
      selected={date}
      onSelect={setDate}
      disabled={bookedDates}
      className="rounded-lg border"
    />
  );
}

export function CalendarWeekNumbersPreview() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <AppCalendar
      mode="single"
      selected={date}
      onSelect={setDate}
      showWeekNumber
      className="rounded-lg border"
    />
  );
}
