"use client";

import * as React from "react";
import {
  Search,
  LayoutGrid,
  LayoutDashboard,
  MapPin,
  Server,
  Cctv,
  LineChart,
  FileText,
} from "lucide-react";
import {
  AppDashboard,
  AppDashboardContent,
  AppDashboardMain,
  AppHeader,
  AppHeaderContent,
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
  AppSidebarProvider,
  AppSidebar,
  AppSidebarHeader,
  AppSidebarContent,
  AppSidebarGroup,
  AppSidebarGroupLabel,
  AppSidebarGroupContent,
  AppSidebarMenu,
  AppSidebarMenuItem,
  AppSidebarMenuButton,
  AppSidebarBrand,
  AppSidebarTrigger,
  AppSidebarRail,
  AppSeparator,
} from "@viana/ui";

export function DashboardDefaultPreview() {
  return (
    <div className="relative h-[980px] overflow-hidden rounded-lg border border-border [contain:layout]">
      <AppSidebarProvider
        className="min-h-0 h-full"
        style={
          {
            "--sidebar-width": "14rem",
            "--header-height": "3.5rem",
          } as React.CSSProperties
        }
      >
        <AppDashboard className="h-full">
          <AppSidebar collapsible="icon">
            <AppSidebarHeader>
              <AppSidebarBrand />
            </AppSidebarHeader>
            <AppSidebarContent>
              <AppSidebarGroup>
                <AppSidebarGroupLabel>Manage</AppSidebarGroupLabel>
                <AppSidebarGroupContent>
                  <AppSidebarMenu>
                    <AppSidebarMenuItem>
                      <AppSidebarMenuButton isActive tooltip="Dashboards">
                        <LayoutDashboard />
                        <span>Dashboards</span>
                      </AppSidebarMenuButton>
                    </AppSidebarMenuItem>
                    <AppSidebarMenuItem>
                      <AppSidebarMenuButton tooltip="Site">
                        <MapPin />
                        <span>Site</span>
                      </AppSidebarMenuButton>
                    </AppSidebarMenuItem>
                    <AppSidebarMenuItem>
                      <AppSidebarMenuButton tooltip="Devices">
                        <Server />
                        <span>Devices</span>
                      </AppSidebarMenuButton>
                    </AppSidebarMenuItem>
                    <AppSidebarMenuItem>
                      <AppSidebarMenuButton tooltip="Sensor">
                        <Cctv />
                        <span>Sensor</span>
                      </AppSidebarMenuButton>
                    </AppSidebarMenuItem>
                  </AppSidebarMenu>
                </AppSidebarGroupContent>
              </AppSidebarGroup>
              <AppSidebarGroup>
                <AppSidebarGroupLabel>Insights</AppSidebarGroupLabel>
                <AppSidebarGroupContent>
                  <AppSidebarMenu>
                    <AppSidebarMenuItem>
                      <AppSidebarMenuButton tooltip="X-ray">
                        <LineChart />
                        <span>X-ray</span>
                      </AppSidebarMenuButton>
                    </AppSidebarMenuItem>
                    <AppSidebarMenuItem>
                      <AppSidebarMenuButton tooltip="Manifest">
                        <FileText />
                        <span>Manifest</span>
                      </AppSidebarMenuButton>
                    </AppSidebarMenuItem>
                  </AppSidebarMenu>
                </AppSidebarGroupContent>
              </AppSidebarGroup>
            </AppSidebarContent>
            <AppSidebarRail />
          </AppSidebar>

          <AppDashboardContent>
            <AppHeader className="border-none">
              <AppHeaderContent>
                <AppSidebarTrigger />
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
                      <AppSelectItem value="network-1">
                        MeldCX Network
                      </AppSelectItem>
                      <AppSelectItem value="network-2">
                        Acme Network
                      </AppSelectItem>
                    </AppSelectContent>
                  </AppSelect>
                  <AppButton variant="ghost" size="icon">
                    <LayoutGrid className="size-4" />
                  </AppButton>
                  <AppAvatar className="size-8">
                    <AppAvatarFallback>KA</AppAvatarFallback>
                  </AppAvatar>
                </AppHeaderActions>
              </AppHeaderContent>
            </AppHeader>

            <AppDashboardMain className="p-6">
              <p className="text-sm text-muted-foreground">Page content</p>
            </AppDashboardMain>
          </AppDashboardContent>
        </AppDashboard>
      </AppSidebarProvider>
    </div>
  );
}
