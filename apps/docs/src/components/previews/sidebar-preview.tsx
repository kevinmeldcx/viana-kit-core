"use client";

import {
  Cctv,
  Download,
  FileText,
  LayoutDashboard,
  LineChart,
  MapPin,
  Server,
} from "lucide-react";
import {
  AppSidebar,
  AppSidebarBrand,
  AppSidebarContent,
  AppSidebarFooter,
  AppSidebarGroup,
  AppSidebarGroupContent,
  AppSidebarGroupLabel,
  AppSidebarHeader,
  AppSidebarInset,
  AppSidebarMenu,
  AppSidebarMenuButton,
  AppSidebarMenuItem,
  AppSidebarProvider,
  AppSidebarRail,
  AppSidebarTrigger,
} from "@viana/ui";

const navSections = [
  {
    items: [{ title: "Dashboard", icon: LayoutDashboard }],
  },
  {
    label: "Manage",
    items: [
      { title: "Site", icon: MapPin },
      { title: "Devices", icon: Server },
      { title: "Sensor", icon: Cctv },
    ],
  },
  {
    label: "Insights",
    items: [
      { title: "X-ray", icon: LineChart },
      { title: "Manifest", icon: FileText },
    ],
  },
  {
    label: "Downloads",
    items: [{ title: "Installers", icon: Download }],
  },
];

const workspaces = [
  { label: "Acme Corp" },
  { label: "Personal" },
  { separator: true as const },
  { label: "Create workspace" },
];

export function SidebarDefaultPreview() {
  return (
    <div className="relative h-96 overflow-hidden rounded-lg border border-border [contain:layout]">
      <AppSidebarProvider className="min-h-0 h-full">
        <AppSidebar collapsible="offcanvas">
          <AppSidebarHeader>
            <AppSidebarBrand dropdown={workspaces} />
          </AppSidebarHeader>
          <AppSidebarContent>
            {navSections.map((section, i) => (
              <AppSidebarGroup key={i}>
                {section.label && (
                  <AppSidebarGroupLabel>{section.label}</AppSidebarGroupLabel>
                )}
                <AppSidebarGroupContent>
                  <AppSidebarMenu>
                    {section.items.map((item) => (
                      <AppSidebarMenuItem key={item.title}>
                        <AppSidebarMenuButton
                          isActive={item.title === "Dashboard"}
                        >
                          <item.icon />
                          <span>{item.title}</span>
                        </AppSidebarMenuButton>
                      </AppSidebarMenuItem>
                    ))}
                  </AppSidebarMenu>
                </AppSidebarGroupContent>
              </AppSidebarGroup>
            ))}
          </AppSidebarContent>
          <AppSidebarFooter>
            <span className="px-2 text-xs text-muted-foreground">v1.0.0</span>
          </AppSidebarFooter>
          <AppSidebarRail />
        </AppSidebar>
        <AppSidebarInset className="bg-background">
          <header className="flex items-center gap-2 border-b border-border px-4 py-3">
            <AppSidebarTrigger />
            <span className="text-sm text-muted-foreground">Main content</span>
          </header>
          <div className="p-4">
            <p className="text-sm text-muted-foreground">
              Use the trigger or drag the rail to resize.
            </p>
          </div>
        </AppSidebarInset>
      </AppSidebarProvider>
    </div>
  );
}
