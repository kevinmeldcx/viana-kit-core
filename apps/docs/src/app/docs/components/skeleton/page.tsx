import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { SkeletonDefaultPreview } from "@/components/previews/skeleton-preview";

export const metadata: Metadata = { title: "Skeleton" };

export default function SkeletonPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Skeleton</h1>
        <p className="text-lg text-muted-foreground">A placeholder component for loading states.</p>
      </div>
      <ComponentPreview preview={<SkeletonDefaultPreview />} code={`import { AppSkeleton } from "@viana/ui"

export function Example() {
  return (
    <div className="flex items-center space-x-4">
      <AppSkeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <AppSkeleton className="h-4 w-[250px]" />
        <AppSkeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}`} filename="example.tsx" />
      <hr className="border-border my-10" />
      <section className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Installation</h2>
          <CodeBlock language="bash" code="npx viana-kit add skeleton" />
        </div>
      </section>
    </article>
  );
}
