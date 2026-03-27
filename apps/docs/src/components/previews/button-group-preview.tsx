"use client";

import {
  AppButton,
  AppButtonGroup,
  AppDropdownMenu,
  AppDropdownMenuContent,
  AppDropdownMenuItem,
  AppDropdownMenuTrigger,
  AppInput,
} from "@viana/ui";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  ChevronDown,
  Italic,
  Search,
  Underline,
} from "lucide-react";

export function ButtonGroupDefaultPreview() {
  return (
    <AppButtonGroup>
      <AppButton variant="outline">Copy</AppButton>
      <AppButton variant="outline">Paste</AppButton>
      <AppButton variant="outline">Clear</AppButton>
    </AppButtonGroup>
  );
}

export function ButtonGroupVariantsPreview() {
  return (
    <div className="flex flex-col gap-3">
      <AppButtonGroup>
        <AppButton>Save</AppButton>
        <AppButton>Preview</AppButton>
        <AppButton>Publish</AppButton>
      </AppButtonGroup>
      <AppButtonGroup>
        <AppButton variant="outline">Save</AppButton>
        <AppButton variant="outline">Preview</AppButton>
        <AppButton variant="outline">Publish</AppButton>
      </AppButtonGroup>
      <AppButtonGroup>
        <AppButton variant="secondary">Save</AppButton>
        <AppButton variant="secondary">Preview</AppButton>
        <AppButton variant="secondary">Publish</AppButton>
      </AppButtonGroup>
    </div>
  );
}

export function ButtonGroupSizesPreview() {
  return (
    <div className="flex flex-col gap-3">
      <AppButtonGroup>
        <AppButton variant="outline" size="sm">Days</AppButton>
        <AppButton variant="outline" size="sm">Weeks</AppButton>
        <AppButton variant="outline" size="sm">Months</AppButton>
      </AppButtonGroup>
      <AppButtonGroup>
        <AppButton variant="outline">Days</AppButton>
        <AppButton variant="outline">Weeks</AppButton>
        <AppButton variant="outline">Months</AppButton>
      </AppButtonGroup>
      <AppButtonGroup>
        <AppButton variant="outline" size="lg">Days</AppButton>
        <AppButton variant="outline" size="lg">Weeks</AppButton>
        <AppButton variant="outline" size="lg">Months</AppButton>
      </AppButtonGroup>
    </div>
  );
}

export function ButtonGroupIconsPreview() {
  return (
    <div className="flex flex-col gap-3">
      <AppButtonGroup>
        <AppButton variant="outline" size="icon">
          <Bold className="h-4 w-4" />
        </AppButton>
        <AppButton variant="outline" size="icon">
          <Italic className="h-4 w-4" />
        </AppButton>
        <AppButton variant="outline" size="icon">
          <Underline className="h-4 w-4" />
        </AppButton>
      </AppButtonGroup>
      <AppButtonGroup>
        <AppButton variant="outline" size="icon">
          <AlignLeft className="h-4 w-4" />
        </AppButton>
        <AppButton variant="outline" size="icon">
          <AlignCenter className="h-4 w-4" />
        </AppButton>
        <AppButton variant="outline" size="icon">
          <AlignRight className="h-4 w-4" />
        </AppButton>
      </AppButtonGroup>
    </div>
  );
}

export function ButtonGroupSplitPreview() {
  return (
    <AppButtonGroup>
      <AppButton>Publish</AppButton>
      <AppDropdownMenu>
        <AppDropdownMenuTrigger asChild>
          <AppButton size="icon">
            <ChevronDown className="h-4 w-4" />
          </AppButton>
        </AppDropdownMenuTrigger>
        <AppDropdownMenuContent align="end">
          <AppDropdownMenuItem>Save as draft</AppDropdownMenuItem>
          <AppDropdownMenuItem>Schedule</AppDropdownMenuItem>
          <AppDropdownMenuItem>Publish and share</AppDropdownMenuItem>
        </AppDropdownMenuContent>
      </AppDropdownMenu>
    </AppButtonGroup>
  );
}

export function ButtonGroupInputPreview() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm">
      {/* Input + Button */}
      <AppButtonGroup>
        <AppInput placeholder="Search…" />
        <AppButton variant="outline">
          <Search className="h-4 w-4" />
        </AppButton>
      </AppButtonGroup>

      {/* Prefix + Input */}
      <AppButtonGroup>
        <span className="inline-flex items-center border border-input bg-muted px-3 text-sm text-muted-foreground">
          https://
        </span>
        <AppInput placeholder="example.com" />
      </AppButtonGroup>

      {/* Input + Suffix */}
      <AppButtonGroup>
        <AppInput placeholder="0.00" type="number" />
        <span className="inline-flex items-center border border-input bg-muted px-3 text-sm text-muted-foreground">
          USD
        </span>
      </AppButtonGroup>
    </div>
  );
}
