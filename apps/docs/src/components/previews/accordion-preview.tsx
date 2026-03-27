"use client";

import { AppAccordion, AppAccordionContent, AppAccordionItem, AppAccordionTrigger } from "@viana/ui";

export function AccordionDefaultPreview() {
  return (
    <AppAccordion type="single" collapsible className="w-75">
      <AppAccordionItem value="item-1">
        <AppAccordionTrigger>What is Viana Kit?</AppAccordionTrigger>
        <AppAccordionContent>
          An AI-native design system built on React, Tailwind CSS v4, and shadcn/ui.
        </AppAccordionContent>
      </AppAccordionItem>
      <AppAccordionItem value="item-2">
        <AppAccordionTrigger>How do I use it?</AppAccordionTrigger>
        <AppAccordionContent>
          Clone the starter and import components from @/components/primitives.
        </AppAccordionContent>
      </AppAccordionItem>
    </AppAccordion>
  );
}
