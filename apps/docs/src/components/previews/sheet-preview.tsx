"use client";

import {
  AppSheet,
  AppSheetContent,
  AppSheetHeader,
  AppSheetTitle,
  AppSheetTrigger,
} from "@viana/ui";
import { AppButton } from "@viana/ui";

export function SheetDefaultPreview() {
  return (
    <AppSheet>
      <AppSheetTrigger asChild>
        <AppButton>Open Sheet</AppButton>
      </AppSheetTrigger>
      <AppSheetContent>
        <AppSheetHeader>
          <AppSheetTitle>Sheet Title</AppSheetTitle>
        </AppSheetHeader>
        <p className="py-4">This is a sheet content.</p>
      </AppSheetContent>
    </AppSheet>
  );
}
