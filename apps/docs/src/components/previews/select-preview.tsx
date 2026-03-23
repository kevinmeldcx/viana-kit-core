"use client";

import {
  AppSelect,
  AppSelectContent,
  AppSelectItem,
  AppSelectTrigger,
  AppSelectValue,
} from "@viana/ui";

export function SelectDefaultPreview() {
  return (
    <AppSelect>
      <AppSelectTrigger>
        <AppSelectValue placeholder="Select an option" />
      </AppSelectTrigger>
      <AppSelectContent>
        <AppSelectItem value="apple">Apple</AppSelectItem>
        <AppSelectItem value="banana">Banana</AppSelectItem>
        <AppSelectItem value="orange">Orange</AppSelectItem>
      </AppSelectContent>
    </AppSelect>
  );
}
