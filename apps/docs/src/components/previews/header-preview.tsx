"use client";

import * as React from "react";
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
} from "@viana/ui";

export function HeaderDefaultPreview() {
  return (
    <div
      className="overflow-hidden rounded-lg border border-border"
      style={{ "--header-height": "3.5rem" } as React.CSSProperties}
    >
      <AppHeader>
        <AppHeaderContent>
          <AppHeaderTitle>Dashboard</AppHeaderTitle>
          <AppHeaderSearchbar>
            <AppButtonGroup className="w-full max-w-sm">
              <AppInput
                placeholder="Search for sites, sensors, and more..."
                leftAdornment={<Search className="size-4" />}
              />
              <AppButton variant="default">
                <Search className="size-4" />
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
  );
}
