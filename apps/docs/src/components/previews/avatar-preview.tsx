"use client";

import { AppAvatar, AppAvatarFallback, AppAvatarImage } from "@viana/ui";

export function AvatarDefaultPreview() {
  return (
    <AppAvatar>
      <AppAvatarImage src="https://github.com/shadcn.png" />
      <AppAvatarFallback>CN</AppAvatarFallback>
    </AppAvatar>
  );
}
