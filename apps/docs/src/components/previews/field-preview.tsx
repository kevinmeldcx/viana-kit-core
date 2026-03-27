"use client";

import {
  AppField,
  AppFieldLabel,
  AppFieldDescription,
  AppFieldError,
  AppInput,
  AppButton,
  AppBadge,
} from "@viana/ui";
import { Search } from "lucide-react";

export function FieldDefaultPreview() {
  return (
    <AppField>
      <AppFieldLabel htmlFor="default-input">Full name</AppFieldLabel>
      <AppInput id="default-input" placeholder="Jane Doe" />
      <AppFieldDescription>This is your public display name.</AppFieldDescription>
    </AppField>
  );
}

export function FieldRequiredPreview() {
  return (
    <AppField>
      <AppFieldLabel htmlFor="required-input" required>Email address</AppFieldLabel>
      <AppInput id="required-input" type="email" placeholder="you@example.com" />
      <AppFieldDescription>We will never share your email.</AppFieldDescription>
    </AppField>
  );
}

export function FieldInvalidPreview() {
  return (
    <AppField>
      <AppFieldLabel htmlFor="invalid-input">Username</AppFieldLabel>
      <AppInput
        id="invalid-input"
        placeholder="johndoe"
        defaultValue="jo"
        className="border-destructive focus-visible:ring-destructive"
      />
      <AppFieldError>Username must be at least 3 characters.</AppFieldError>
    </AppField>
  );
}

export function FieldGridPreview() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <AppField>
        <AppFieldLabel htmlFor="first-name">First name</AppFieldLabel>
        <AppInput id="first-name" placeholder="Jane" />
      </AppField>
      <AppField>
        <AppFieldLabel htmlFor="last-name">Last name</AppFieldLabel>
        <AppInput id="last-name" placeholder="Doe" />
      </AppField>
      <AppField className="col-span-2">
        <AppFieldLabel htmlFor="grid-email">Email</AppFieldLabel>
        <AppInput id="grid-email" type="email" placeholder="you@example.com" />
      </AppField>
    </div>
  );
}

export function FieldWithBadgePreview() {
  return (
    <AppField>
      <div className="flex items-center gap-2">
        <AppFieldLabel htmlFor="badge-input">API Key</AppFieldLabel>
        <AppBadge variant="secondary">Optional</AppBadge>
      </div>
      <AppInput id="badge-input" placeholder="sk-••••••••••••" />
      <AppFieldDescription>Leave blank to use the default key.</AppFieldDescription>
    </AppField>
  );
}

export function FieldInputGroupPreview() {
  return (
    <AppField>
      <AppFieldLabel htmlFor="input-group">Website</AppFieldLabel>
      <div className="flex">
        <span className="inline-flex items-center rounded-l-md border border-r-0 border-input bg-muted px-3 text-sm text-muted-foreground">
          https://
        </span>
        <AppInput id="input-group" placeholder="example.com" className="rounded-l-none" />
      </div>
      <AppFieldDescription>Enter your domain without the protocol.</AppFieldDescription>
    </AppField>
  );
}

export function FieldButtonGroupPreview() {
  return (
    <AppField>
      <AppFieldLabel htmlFor="button-group">Invite by email</AppFieldLabel>
      <div className="flex gap-2">
        <AppInput id="button-group" type="email" placeholder="colleague@example.com" />
        <AppButton>Send invite</AppButton>
      </div>
    </AppField>
  );
}

export function FieldSearchGroupPreview() {
  return (
    <AppField>
      <AppFieldLabel htmlFor="search-group">Search</AppFieldLabel>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <AppInput id="search-group" placeholder="Search components..." className="pl-9" />
      </div>
      <AppFieldDescription>Search across all available components.</AppFieldDescription>
    </AppField>
  );
}
