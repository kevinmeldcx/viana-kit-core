"use client";

import { AppTabs, AppTabsContent, AppTabsList, AppTabsTrigger } from "@viana/ui";

export function TabsDefaultPreview() {
  return (
    <AppTabs defaultValue="account">
      <AppTabsList>
        <AppTabsTrigger value="account">Account</AppTabsTrigger>
        <AppTabsTrigger value="password">Password</AppTabsTrigger>
      </AppTabsList>
      <AppTabsContent value="account">Account settings content.</AppTabsContent>
      <AppTabsContent value="password">Password settings content.</AppTabsContent>
    </AppTabs>
  );
}
