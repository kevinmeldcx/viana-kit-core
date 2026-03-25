import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { TabsDefaultPreview } from "@/components/previews/tabs-preview";

export const metadata: Metadata = { title: "Tabs" };

export default function TabsPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Tabs</h1>
        <p className="text-lg text-muted-foreground">A set of tabbed panels for navigating between views.</p>
      </div>
      <ComponentPreview preview={<TabsDefaultPreview />} code={`import { AppTabs, AppTabsList, AppTabsTrigger, AppTabsContent } from "@/components/primitives/AppTabs"

export function Example() {
  return (
    <AppTabs defaultValue="account">
      <AppTabsList>
        <AppTabsTrigger value="account">Account</AppTabsTrigger>
        <AppTabsTrigger value="password">Password</AppTabsTrigger>
      </AppTabsList>
      <AppTabsContent value="account">Account settings</AppTabsContent>
      <AppTabsContent value="password">Password settings</AppTabsContent>
    </AppTabs>
  )
}`} filename="example.tsx" />
      <hr className="border-border my-10" />
      <section className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Installation</h2>
          <CodeBlock language="bash" code="npx viana-kit add tabs" />
        </div>
      </section>
    </article>
  );
}
