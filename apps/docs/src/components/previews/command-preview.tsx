"use client";

import { useState } from "react";
import { AppCommand, AppCommandDialog, AppCommandInput, AppCommandList, AppCommandEmpty, AppCommandGroup, AppCommandItem } from "@viana/ui";

export function CommandDefaultPreview() {
  const [open, setOpen] = useState(false);
  return (
    <AppCommandDialog open={open} onOpenChange={setOpen}>
      <AppCommandInput placeholder="Type a command..." />
      <AppCommandList>
        <AppCommandEmpty>No results found.</AppCommandEmpty>
        <AppCommandGroup heading="Suggestions">
          <AppCommandItem>Profile</AppCommandItem>
          <AppCommandItem>Settings</AppCommandItem>
          <AppCommandItem>Logout</AppCommandItem>
        </AppCommandGroup>
      </AppCommandList>
    </AppCommandDialog>
  );
}
