"use client";

import * as React from "react";
import { AppBadge } from "@viana/ui";
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
} from "@viana/ui";
import samiIcon from "../../../../../packages/ui/src/assets/Service-applets-apps/sami-for-environment.png";
import zoneIcon from "../../../../../packages/ui/src/assets/Service-applets-apps/zone-engagement.png";
import shelfIcon from "../../../../../packages/ui/src/assets/Service-applets-apps/petra.png";

// ─── Sample data ──────────────────────────────────────────────────────────────

type AppletKey = "sami" | "zone" | "shelf";

type Session = {
  id: number;
  name: string;
  status: "PASSED" | "FAILED";
  applets: AppletKey[];
  site: string;
  dateTime: string;
  origin: string;
};

const SAMPLE_DATA: Session[] = [
  { id: 1, name: "Jerome Bell",        status: "PASSED", applets: ["sami", "zone"],           site: "MeldCx HQ", dateTime: "2024-06-28T17:00:00", origin: "AI" },
  { id: 2, name: "Cameron Williamson", status: "FAILED", applets: ["zone", "shelf"],           site: "MeldCx PH", dateTime: "2024-06-27T17:00:00", origin: "AI" },
  { id: 3, name: "Brooklyn Simmons",   status: "PASSED", applets: ["shelf"],                   site: "MeldCx CA", dateTime: "2024-06-26T17:00:00", origin: "AI" },
  { id: 4, name: "Savannah Nguyen",    status: "PASSED", applets: ["sami", "zone", "shelf"],   site: "MeldCx GE", dateTime: "2024-06-25T17:00:00", origin: "AI" },
  { id: 5, name: "Jerome Bell",        status: "PASSED", applets: ["zone", "sami"],            site: "MeldCx US", dateTime: "2024-06-24T17:00:00", origin: "AI" },
];

const APPLET_OPTIONS: TableManagerFilterOption[] = [
  {
    value: "sami",
    label: "SAMi for Environments",
    icon: <img src={samiIcon.src} alt="" className="size-5 rounded object-cover" />,
  },
  {
    value: "zone",
    label: "Zone Engagement",
    icon: <img src={zoneIcon.src} alt="" className="size-5 rounded object-cover" />,
  },
  {
    value: "shelf",
    label: "Shelf Engagement",
    icon: <img src={shelfIcon.src} alt="" className="size-5 rounded object-cover" />,
  },
];

const EXPORT_OPTIONS: TableManagerExportOption[] = [
  { label: "CSV", value: "csv" },
  { label: "PDF", value: "pdf" },
];

// ─── Applet meta map ──────────────────────────────────────────────────────────

const APPLET_META: Record<AppletKey, { label: string; icon: string }> = {
  sami:  { label: "SAMi for Environments", icon: samiIcon.src },
  zone:  { label: "Zone Engagement",       icon: zoneIcon.src },
  shelf: { label: "Shelf Engagement",      icon: shelfIcon.src },
};

// ─── Column definitions ───────────────────────────────────────────────────────

const COLUMNS: TableManagerColumnDef<Session>[] = [
  {
    id: "name",
    header: "Session ID",
    type: "text",
    accessorKey: "name",
    enableSorting: true,
  },
  {
    id: "applet",
    header: "Service Applet",
    cell: (row) => (
      <div className="flex items-center gap-1">
        {(row.applets ?? []).map((key) => (
          <img
            key={key}
            src={APPLET_META[key].icon}
            alt={APPLET_META[key].label}
            title={APPLET_META[key].label}
            className="size-6 rounded object-cover"
          />
        ))}
      </div>
    ),
  },
  {
    id: "status",
    header: "Status",
    accessorKey: "status",
    enableSorting: true,
    cell: (row) => (
      <AppBadge variant={row.status === "PASSED" ? "default" : "destructive"}>
        {row.status}
      </AppBadge>
    ),
  },
  {
    id: "site",
    header: "Site",
    type: "text",
    accessorKey: "site",
    enableSorting: true,
  },
  {
    id: "dateTime",
    header: "Date Time",
    type: "date",
    accessorKey: "dateTime",
    enableSorting: true,
    cell: (row) =>
      new Date(row.dateTime).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
      }),
  },
  {
    id: "origin",
    header: "Origin",
    accessorKey: "origin",
  },
];

// ─── Preview ──────────────────────────────────────────────────────────────────

export function TableManagerDefaultPreview() {
  const [data, setData] = React.useState<Session[]>(SAMPLE_DATA);
  const [totalCount] = React.useState(SAMPLE_DATA.length);
  const [loading, setLoading] = React.useState(false);

  function simulateFetch() {
    setLoading(true);
    setTimeout(() => setLoading(false), 800);
  }

  return (
    <div className="p-4">
      <TableManager
        columns={COLUMNS}
        data={data}
        totalCount={totalCount}
        loading={loading}
        defaultRowsPerPage={20}
        defaultFilters={{ applet: ["sami", "zone", "shelf"] }}
        onSearchChange={(term) => {
          const filtered = SAMPLE_DATA.filter((r) =>
            r.name.toLowerCase().includes(term.toLowerCase()) ||
            r.site.toLowerCase().includes(term.toLowerCase())
          );
          setData(filtered);
        }}
        onFilterChange={(filters) => {
          const checkedApplets = filters["applet"] ?? [];
          const filtered =
            checkedApplets.length === 0
              ? []
              : SAMPLE_DATA.filter((r) =>
                  r.applets.some((a) => checkedApplets.includes(a))
                );
          setData(filtered);
        }}
        onDateRangeChange={simulateFetch}
        onPageChange={simulateFetch}
        onRowsPerPageChange={simulateFetch}
      >
        <TableManagerToolbar>
          <TableManagerSearch placeholder="Search sessions..." />
          <TableManagerToolbarActions>
            <TableManagerMultiFilter
              name="applet"
              label="SAMi for Environment"
              icon={<img src={samiIcon.src} alt="" className="size-5 rounded object-cover" />}
              options={APPLET_OPTIONS}
              searchPlaceholder="Search Service Applet"
            />
            <TableManagerDateRange />
            <TableManagerRowsPerPage />
            <TableManagerPagination />
            <TableManagerColumnToggle />
            <TableManagerExport
              options={EXPORT_OPTIONS}
              onExport={(fmt) => alert(`Exporting as ${fmt}`)}
            />
          </TableManagerToolbarActions>
        </TableManagerToolbar>
        <TableManagerContent />
        <TableManagerFooter />
      </TableManager>
    </div>
  );
}
