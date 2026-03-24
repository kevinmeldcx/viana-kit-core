"use client";

import { AppTable, AppTableBody, AppTableCell, AppTableHead, AppTableHeader, AppTableRow } from "@viana/ui";

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
