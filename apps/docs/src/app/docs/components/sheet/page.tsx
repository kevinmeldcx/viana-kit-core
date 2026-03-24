import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { SheetDefaultPreview } from "@/components/previews/sheet-preview";

export const metadata: Metadata = { title: "Sheet" };

export default function SheetPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Sheet</h1>
        <p className="text-lg text-muted-foreground">A panel that slides in from the edge of the screen.</p>
      </div>
      <ComponentPreview preview={<SheetDefaultPreview />} code={`import { AppSheet, AppSheetContent, AppSheetHeader, AppSheetTitle, AppSheetTrigger } from "@viana/ui"
import { AppButton } from "@viana/ui"AppButton"

export function Example() {
  return (
    <AppSheet>
      <AppSheetTrigger><AppButton>Open Sheet</AppButton></AppSheetTrigger>
      <AppSheetContent>
        <AppSheetHeader>
          <AppSheetTitle>Sheet Title</AppSheetTitle>
        </AppSheetHeader>
      </AppSheetContent>
    </AppSheet>
  )
}`} filename="example.tsx" />
      <hr className="border-border my-10" />
      <section className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Installation</h2>
          <CodeBlock language="bash" code="npx viana-kit add sheet" />
        </div>
      </section>
    </article>
  );
}
