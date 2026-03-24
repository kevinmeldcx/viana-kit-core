"use client";

import { AppBreadcrumb, AppBreadcrumbItem, AppBreadcrumbLink, AppBreadcrumbList, AppBreadcrumbPage, AppBreadcrumbSeparator } from "@viana/ui";

export function BreadcrumbDefaultPreview() {
  return (
    <AppBreadcrumb>
      <AppBreadcrumbList>
        <AppBreadcrumbItem>
          <AppBreadcrumbLink href="#">Home</AppBreadcrumbLink>
        </AppBreadcrumbItem>
        <AppBreadcrumbSeparator />
        <AppBreadcrumbItem>
          <AppBreadcrumbLink href="#">Components</AppBreadcrumbLink>
        </AppBreadcrumbItem>
        <AppBreadcrumbSeparator />
        <AppBreadcrumbItem>
          <AppBreadcrumbPage>Breadcrumb</AppBreadcrumbPage>
        </AppBreadcrumbItem>
      </AppBreadcrumbList>
    </AppBreadcrumb>
  );
}
