"use client";

import { AppNavigationMenu, AppNavigationMenuContent, AppNavigationMenuItem, AppNavigationMenuLink, AppNavigationMenuList, AppNavigationMenuTrigger } from "@viana/ui";

export function NavigationMenuDefaultPreview() {
  return (
    <AppNavigationMenu>
      <AppNavigationMenuList>
        <AppNavigationMenuItem>
          <AppNavigationMenuTrigger>Getting Started</AppNavigationMenuTrigger>
          <AppNavigationMenuContent>
            <div className="w-[200px] p-4">
              <p className="text-sm font-medium">Installation</p>
              <p className="text-xs text-muted-foreground">How to install</p>
            </div>
          </AppNavigationMenuContent>
        </AppNavigationMenuItem>
        <AppNavigationMenuItem>
          <AppNavigationMenuLink href="#">Documentation</AppNavigationMenuLink>
        </AppNavigationMenuItem>
      </AppNavigationMenuList>
    </AppNavigationMenu>
  );
}
