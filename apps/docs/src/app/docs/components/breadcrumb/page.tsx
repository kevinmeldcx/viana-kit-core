import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { BreadcrumbDefaultPreview } from "@/components/previews/breadcrumb-preview";

export const metadata: Metadata = { title: "Breadcrumb" };

export default function BreadcrumbPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Breadcrumb</h1>
        <p className="text-lg text-muted-foreground">Shows the user's location in a navigational hierarchy.</p>
      </div>
      <ComponentPreview preview={<BreadcrumbDefaultPreview />} code={`import { AppBreadcrumb, AppBreadcrumbList, AppBreadcrumbItem, AppBreadcrumbLink, AppBreadcrumbPage, AppBreadcrumbSeparator } from "@/components/primitives/AppBreadcrumb"

export function Example() {
  return (
    <AppBreadcrumb>
      <AppBreadcrumbList>
        <AppBreadcrumbItem>
          <AppBreadcrumbLink href="#">Home</AppBreadcrumbLink>
        </AppBreadcrumbItem>
        <AppBreadcrumbSeparator />
        <AppBreadcrumbItem>
          <AppBreadcrumbPage>Breadcrumb</AppBreadcrumbPage>
        </AppBreadcrumbItem>
      </AppBreadcrumbList>
    </AppBreadcrumb>
  )
}`} filename="example.tsx" />
      <hr className="border-border my-10" />
      <section className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Installation</h2>
          <CodeBlock language="bash" code="npx viana-kit add breadcrumb" />
        </div>
      </section>
    </article>
  );
}
