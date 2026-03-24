import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { PaginationDefaultPreview } from "@/components/previews/pagination-preview";

export const metadata: Metadata = { title: "Pagination" };

export default function PaginationPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Pagination</h1>
        <p className="text-lg text-muted-foreground">A set of pagination controls.</p>
      </div>
      <ComponentPreview preview={<PaginationDefaultPreview />} code={`import { AppPagination, AppPaginationContent, AppPaginationItem, AppPaginationLink, AppPaginationNext, AppPaginationPrevious } from "@/components/primitives/AppPagination"

export function Example() {
  return (
    <AppPagination>
      <AppPaginationContent>
        <AppPaginationItem>
          <AppPaginationPrevious href="#" />
        </AppPaginationItem>
        <AppPaginationItem>
          <AppPaginationLink href="#">1</AppPaginationLink>
        </AppPaginationItem>
        <AppPaginationItem>
          <AppPaginationNext href="#" />
        </AppPaginationItem>
      </AppPaginationContent>
    </AppPagination>
  )
}`} filename="example.tsx" />
      <hr className="border-border my-10" />
      <section className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Installation</h2>
          <CodeBlock language="bash" code="npx viana-kit add pagination" />
        </div>
      </section>
    </article>
  );
}
