"use client";

import { AppHoverCard, AppHoverCardContent, AppHoverCardTrigger } from "@viana/ui";

export function HoverCardDefaultPreview() {
  return (
    <AppHoverCard>
      <AppHoverCardTrigger>Hover me</AppHoverCardTrigger>
      <AppHoverCardContent>
        <p>This is a hover card content.</p>
      </AppHoverCardContent>
    </AppHoverCard>
  );
}
