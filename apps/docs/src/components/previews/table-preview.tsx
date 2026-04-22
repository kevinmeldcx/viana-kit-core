"use client";

import {
  AppTable,
  AppTableBody,
  AppTableCaption,
  AppTableCell,
  AppTableFooter,
  AppTableHead,
  AppTableHeader,
  AppTableRow,
} from "@viana/ui";

export function TableDefaultPreview() {
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
  );
}

export function TableWithCaptionPreview() {
  return (
    <AppTable>
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
        <AppTableRow>
          <AppTableCell className="font-medium">INV-002</AppTableCell>
          <AppTableCell>Pending</AppTableCell>
          <AppTableCell className="text-right">$150.00</AppTableCell>
        </AppTableRow>
        <AppTableRow>
          <AppTableCell className="font-medium">INV-003</AppTableCell>
          <AppTableCell>Paid</AppTableCell>
          <AppTableCell className="text-right">$350.00</AppTableCell>
        </AppTableRow>
      </AppTableBody>
    </AppTable>
  );
}

export function TableWithFooterPreview() {
  return (
    <AppTable>
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
        <AppTableRow>
          <AppTableCell className="font-medium">INV-003</AppTableCell>
          <AppTableCell>Paid</AppTableCell>
          <AppTableCell className="text-right">$350.00</AppTableCell>
        </AppTableRow>
      </AppTableBody>
      <AppTableFooter>
        <AppTableRow>
          <AppTableCell colSpan={2}>Total</AppTableCell>
          <AppTableCell className="text-right">$750.00</AppTableCell>
        </AppTableRow>
      </AppTableFooter>
    </AppTable>
  );
}

export function TableWithSelectedPreview() {
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
    </AppTable>
  );
}
