"use client";

import { useState } from "react";
import {
  AppDrawer,
  AppDrawerTrigger,
  AppDrawerContent,
  AppDrawerHeader,
  AppDrawerTitle,
  AppDrawerDescription,
  AppDrawerFooter,
  AppDrawerClose,
  AppButton,
} from "@viana/ui";

export function DrawerDefaultPreview() {
  const [open, setOpen] = useState(false);

  return (
    <AppDrawer open={open} onOpenChange={setOpen}>
      <AppDrawerTrigger asChild>
        <AppButton>Open Drawer</AppButton>
      </AppDrawerTrigger>
      <AppDrawerContent>
        <AppDrawerHeader>
          <AppDrawerTitle>Edit Profile</AppDrawerTitle>
          <AppDrawerDescription>
            Make changes to your profile here. Click save when you are done.
          </AppDrawerDescription>
        </AppDrawerHeader>
        <div className="px-4 py-6 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="your@email.com" />
          </div>
        </div>
        <AppDrawerFooter>
          <AppButton>Save Changes</AppButton>
          <AppDrawerClose asChild>
            <AppButton variant="outline">Cancel</AppButton>
          </AppDrawerClose>
        </AppDrawerFooter>
      </AppDrawerContent>
    </AppDrawer>
  );
}
