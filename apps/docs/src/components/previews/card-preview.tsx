"use client";

import {
  AppCard,
  AppCardHeader,
  AppCardTitle,
  AppCardDescription,
  AppCardContent,
  AppCardFooter,
} from "@viana/ui";

export function CardDefaultPreview() {
  return (
    <AppCard className="w-[350px]">
      <AppCardHeader>
        <AppCardTitle>Card Title</AppCardTitle>
        <AppCardDescription>
          This is a card description. It typically contains short, descriptive text.
        </AppCardDescription>
      </AppCardHeader>
      <AppCardContent>
        <p className="text-sm text-muted-foreground">
          This is the card content area where you can add more information.
        </p>
      </AppCardContent>
      <AppCardFooter>
        <p className="text-xs text-muted-foreground">Card footer content</p>
      </AppCardFooter>
    </AppCard>
  );
}