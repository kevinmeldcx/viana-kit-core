"use client";

import {
  AppBreadcrumb,
  AppBreadcrumbEllipsis,
  AppBreadcrumbItem,
  AppBreadcrumbLink,
  AppBreadcrumbList,
  AppBreadcrumbPage,
  AppBreadcrumbSeparator,
  AppDropdownMenu,
  AppDropdownMenuContent,
  AppDropdownMenuItem,
  AppDropdownMenuTrigger,
} from "@viana/ui";
import { Slash } from "lucide-react";

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

export function BreadcrumbCustomSeparatorPreview() {
  return (
    <AppBreadcrumb>
      <AppBreadcrumbList>
        <AppBreadcrumbItem>
          <AppBreadcrumbLink href="#">Home</AppBreadcrumbLink>
        </AppBreadcrumbItem>
        <AppBreadcrumbSeparator>
          <Slash />
        </AppBreadcrumbSeparator>
        <AppBreadcrumbItem>
          <AppBreadcrumbLink href="#">Components</AppBreadcrumbLink>
        </AppBreadcrumbItem>
        <AppBreadcrumbSeparator>
          <Slash />
        </AppBreadcrumbSeparator>
        <AppBreadcrumbItem>
          <AppBreadcrumbPage>Breadcrumb</AppBreadcrumbPage>
        </AppBreadcrumbItem>
      </AppBreadcrumbList>
    </AppBreadcrumb>
  );
}

export function BreadcrumbDropdownPreview() {
  return (
    <AppBreadcrumb>
      <AppBreadcrumbList>
        <AppBreadcrumbItem>
          <AppBreadcrumbLink href="#">Home</AppBreadcrumbLink>
        </AppBreadcrumbItem>
        <AppBreadcrumbSeparator />
        <AppBreadcrumbItem>
          <AppDropdownMenu>
            <AppDropdownMenuTrigger className="flex items-center gap-1">
              <AppBreadcrumbEllipsis />
            </AppDropdownMenuTrigger>
            <AppDropdownMenuContent align="start">
              <AppDropdownMenuItem>Documentation</AppDropdownMenuItem>
              <AppDropdownMenuItem>Themes</AppDropdownMenuItem>
              <AppDropdownMenuItem>GitHub</AppDropdownMenuItem>
            </AppDropdownMenuContent>
          </AppDropdownMenu>
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

export function BreadcrumbCollapsedPreview() {
  return (
    <AppBreadcrumb>
      <AppBreadcrumbList>
        <AppBreadcrumbItem>
          <AppBreadcrumbLink href="#">Home</AppBreadcrumbLink>
        </AppBreadcrumbItem>
        <AppBreadcrumbSeparator />
        <AppBreadcrumbItem>
          <AppBreadcrumbEllipsis />
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

export function BreadcrumbAsChildPreview() {
  return (
    <AppBreadcrumb>
      <AppBreadcrumbList>
        <AppBreadcrumbItem>
          <AppBreadcrumbLink asChild href="#">
            <a href="#">Home</a>
          </AppBreadcrumbLink>
        </AppBreadcrumbItem>
        <AppBreadcrumbSeparator />
        <AppBreadcrumbItem>
          <AppBreadcrumbLink asChild href="#">
            <a href="#">Components</a>
          </AppBreadcrumbLink>
        </AppBreadcrumbItem>
        <AppBreadcrumbSeparator />
        <AppBreadcrumbItem>
          <AppBreadcrumbPage>Breadcrumb</AppBreadcrumbPage>
        </AppBreadcrumbItem>
      </AppBreadcrumbList>
    </AppBreadcrumb>
  );
}
