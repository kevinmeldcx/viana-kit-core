import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { AspectRatioDefaultPreview } from "@/components/previews/aspect-ratio-preview";

export const metadata: Metadata = {
  title: "Aspect Ratio - Viana Kit",
  description: "A component that maintains aspect ratio for its content.",
};

export default function AspectRatioPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Aspect Ratio
        </h1>
        <p className="text-lg text-muted-foreground">
          A component that maintains aspect ratio for its content.
        </p>
      </div>

      <ComponentPreview
        preview={<AspectRatioDefaultPreview />}
        code={`import { AppAspectRatio } from "@/components/primitives/AppAspectRatio"

export function Example() {
  return (
    <AppAspectRatio ratio={16 / 9}>
      <img
        src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=800&h=450&fit=crop"
        alt="Demo image"
        className="h-full w-full object-cover"
      />
    </AppAspectRatio>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      <section className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Installation
          </h2>
          <CodeBlock language="bash" code="npx viana-kit add aspect-ratio" />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Import
          </h2>
          <CodeBlock
            language="tsx"
            code={`import { AppAspectRatio } from "@/components/primitives/AppAspectRatio"`}
          />
        </div>
      </section>
    </article>
  );
}
