"use client";

import {
  AppInput,
  AppLabel,
  AppButton,
  AppField,
  AppFieldLabel,
  AppFieldDescription,
  AppFieldError,
  AppBadge,
  AppButtonGroup,
} from "@viana/ui";
import { Search, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export function InputDefaultPreview() {
  return <AppInput placeholder="Enter text..." />;
}

export function InputEmailPreview() {
  return <AppInput type="email" placeholder="you@example.com" />;
}

export function InputPasswordPreview() {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <AppInput type={show ? "text" : "password"} placeholder="Password" className="pr-10" />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
      >
        {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </div>
  );
}

export function InputWithLabelPreview() {
  return (
    <AppField>
      <AppFieldLabel htmlFor="label-input">Username</AppFieldLabel>
      <AppInput id="label-input" placeholder="johndoe" />
    </AppField>
  );
}

export function InputWithDescriptionPreview() {
  return (
    <AppField>
      <AppFieldLabel htmlFor="desc-input">Full name</AppFieldLabel>
      <AppInput id="desc-input" placeholder="Jane Doe" />
      <AppFieldDescription>This is your public display name.</AppFieldDescription>
    </AppField>
  );
}

export function InputRequiredPreview() {
  return (
    <AppField>
      <AppFieldLabel htmlFor="req-input" required>Email address</AppFieldLabel>
      <AppInput id="req-input" type="email" placeholder="you@example.com" />
      <AppFieldDescription>We will never share your email.</AppFieldDescription>
    </AppField>
  );
}

export function InputInvalidPreview() {
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

export function InputGridPreview() {
  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      <AppField>
        <AppFieldLabel htmlFor="grid-first">First name</AppFieldLabel>
        <AppInput id="grid-first" placeholder="Jane" />
      </AppField>
      <AppField>
        <AppFieldLabel htmlFor="grid-last">Last name</AppFieldLabel>
        <AppInput id="grid-last" placeholder="Doe" />
      </AppField>
      <AppField className="col-span-2">
        <AppFieldLabel htmlFor="grid-email">Email</AppFieldLabel>
        <AppInput id="grid-email" type="email" placeholder="you@example.com" />
      </AppField>
    </div>
  );
}

export function InputWithBadgePreview() {
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

export function InputGroupPreview() {
  return (
    <AppField>
      <AppFieldLabel htmlFor="input-group">Website</AppFieldLabel>
      <div className="flex">
        <span className="inline-flex items-center rounded-l-md border border-r-0 border-input bg-muted px-3 text-sm text-muted-foreground">
          https://
        </span>
        <AppInput id="input-group" placeholder="example.com" className="rounded-l-none" />
      </div>
    </AppField>
  );
}

export function InputButtonGroupPreview() {
  return (
    <AppField>
      <AppFieldLabel htmlFor="btn-group">Search</AppFieldLabel>
      <AppButtonGroup>
        <AppInput id="btn-group" placeholder="Type to search..." />
        <AppButton variant="outline">Search</AppButton>
      </AppButtonGroup>
    </AppField>
  );
}

export function InputWithIconPreview() {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <AppInput placeholder="Search..." className="pl-9" />
    </div>
  );
}

export function InputDisabledPreview() {
  return <AppInput placeholder="Disabled input" disabled />;
}

export function InputFilePreview() {
  return (
    <AppField>
      <AppFieldLabel htmlFor="file-input">Attachment</AppFieldLabel>
      <AppInput id="file-input" type="file" />
    </AppField>
  );
}
