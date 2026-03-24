"use client";

import {
  AppDropdownMenu,
  AppDropdownMenuTrigger,
  AppDropdownMenuContent,
  AppDropdownMenuLabel,
  AppDropdownMenuSeparator,
  AppDropdownMenuItem,
  AppButton,
} from "@viana/ui";
import { UserIcon, SettingsIcon, CreditCardIcon, KeyboardIcon } from "lucide-react";

export function DropdownMenuDefaultPreview() {
  return (
    <AppDropdownMenu>
      <AppDropdownMenuTrigger asChild>
        <AppButton>Open Menu</AppButton>
      </AppDropdownMenuTrigger>
      <AppDropdownMenuContent className="w-56">
        <AppDropdownMenuLabel>My Account</AppDropdownMenuLabel>
        <AppDropdownMenuSeparator />
        <AppDropdownMenuItem>
          <UserIcon className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </AppDropdownMenuItem>
        <AppDropdownMenuItem>
          <SettingsIcon className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </AppDropdownMenuItem>
        <AppDropdownMenuItem>
          <CreditCardIcon className="mr-2 h-4 w-4" />
          <span>Billing</span>
        </AppDropdownMenuItem>
        <AppDropdownMenuSeparator />
        <AppDropdownMenuItem>
          <KeyboardIcon className="mr-2 h-4 w-4" />
          <span>Keyboard shortcuts</span>
        </AppDropdownMenuItem>
      </AppDropdownMenuContent>
    </AppDropdownMenu>
  );
}
