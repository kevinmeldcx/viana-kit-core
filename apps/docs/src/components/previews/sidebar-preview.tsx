"use client";

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
  DEFAULT_NAV,
} from "@viana/ui";

const workspaces = [
  { label: "Acme Corp" },
  { label: "Personal" },
  { separator: true as const },
  { label: "Create workspace" },
];

export function SidebarDefaultPreview() {
  return (
    <div className="relative h-96 overflow-hidden rounded-lg border border-border dark bg-linear-to-br from-background via-muted to-card [contain:layout]">
      <AppSidebarProvider className="min-h-0 h-full">
        <AppSidebar collapsible="icon">
          <AppSidebarHeader>
            <AppSidebarBrand dropdown={workspaces} />
          </AppSidebarHeader>
          <AppSidebarContent>
            {DEFAULT_NAV.map((section, i) => (
              <AppSidebarGroup key={i}>
                {section.label && (
                  <AppSidebarGroupLabel>{section.label}</AppSidebarGroupLabel>
                )}
                <AppSidebarGroupContent>
                  <AppSidebarMenu>
                    {section.items.map((item) => (
                      <AppSidebarMenuItem key={item.title}>
                        <AppSidebarMenuButton
                          isActive={item.title === "Dashboards"}
                          tooltip={item.title}
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
            <span className="px-2 text-xs text-sidebar-foreground/50">v1.0.0</span>
          </AppSidebarFooter>
          <AppSidebarRail />
        </AppSidebar>
        <AppSidebarInset className="bg-transparent">
          <header className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <AppSidebarTrigger className="text-sidebar-foreground" />
            <span className="text-sm text-sidebar-foreground/70">Main content</span>
          </header>
          <div className="p-4">
            <p className="text-sm text-sidebar-foreground/70">
              Use the trigger or drag the rail to collapse to icons.
            </p>
          </div>
        </AppSidebarInset>
      </AppSidebarProvider>
    </div>
  );
}
