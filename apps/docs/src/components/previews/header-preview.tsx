"use client";

import { Search } from "lucide-react";
import {
  AppHeader,
  AppHeaderContent,
  AppHeaderTitle,
  AppHeaderSearchbar,
  AppHeaderActions,
  AppButtonGroup,
  AppButton,
  AppInput,
  AppSelect,
  AppSelectTrigger,
  AppSelectValue,
  AppSelectContent,
  AppSelectItem,
  AppAvatar,
  AppAvatarFallback,
  AppSeparator,
  AppSidebarProvider,
  AppSidebarTrigger,
} from "@viana/ui";

export function HeaderNoTitlePreview() {
  return (
    <AppSidebarProvider>
      <div
        className="w-full rounded-lg bg-linear-to-br from-background via-muted to-card [--header-height:3.5rem]"
      >
        <AppHeader>
          <AppHeaderContent>
            <AppSidebarTrigger className="text-header-foreground" />
            <AppSeparator orientation="vertical" className="mx-1 h-4" />
            <AppHeaderSearchbar>
              <AppButtonGroup className="w-full max-w-sm">
                <AppInput placeholder="Search for sites, sensors, and more..." />
                <AppButton variant="outline">
                  <Search className="h-4 w-4" />
                </AppButton>
              </AppButtonGroup>
            </AppHeaderSearchbar>
            <AppHeaderActions>
              <AppSelect defaultValue="network-1">
                <AppSelectTrigger className="w-40">
                  <AppSelectValue />
                </AppSelectTrigger>
                <AppSelectContent>
                  <AppSelectItem value="network-1">MeldCX Network</AppSelectItem>
                  <AppSelectItem value="network-2">Acme Network</AppSelectItem>
                </AppSelectContent>
              </AppSelect>
              <AppAvatar className="size-8">
                <AppAvatarFallback>KA</AppAvatarFallback>
              </AppAvatar>
            </AppHeaderActions>
          </AppHeaderContent>
        </AppHeader>
      </div>
    </AppSidebarProvider>
  );
}

export function HeaderDefaultPreview() {
  return (
    <AppSidebarProvider>
      <div
        className="w-full rounded-lg bg-linear-to-br from-background via-muted to-card [--header-height:3.5rem]"
      >
        <AppHeader>
          <AppHeaderContent>
            <AppSidebarTrigger className="text-header-foreground" />
            <AppSeparator orientation="vertical" className="mx-1 h-4" />
            <AppHeaderTitle>Dashboard</AppHeaderTitle>
            <AppHeaderSearchbar>
              <AppButtonGroup className="w-full max-w-sm">
                <AppInput placeholder="Search for sites, sensors, and more..." />
                <AppButton variant="outline">
                  <Search className="h-4 w-4" />
                </AppButton>
              </AppButtonGroup>
            </AppHeaderSearchbar>
            <AppHeaderActions>
              <AppSelect defaultValue="network-1">
                <AppSelectTrigger className="w-40">
                  <AppSelectValue />
                </AppSelectTrigger>
                <AppSelectContent>
                  <AppSelectItem value="network-1">MeldCX Network</AppSelectItem>
                  <AppSelectItem value="network-2">Acme Network</AppSelectItem>
                </AppSelectContent>
              </AppSelect>
              <AppAvatar className="size-8">
                <AppAvatarFallback>KA</AppAvatarFallback>
              </AppAvatar>
            </AppHeaderActions>
          </AppHeaderContent>
        </AppHeader>
      </div>
    </AppSidebarProvider>
  );
}
