import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { SonnerDefaultPreview } from "@/components/previews/sonner-preview";

export const metadata: Metadata = {
  title: "Sonner - Viana Kit",
  description: "A toast notification component based on Sonner.",
};

export default function SonnerPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sonner
        </h1>
        <p className="text-lg text-muted-foreground">
          A toast notification component based on Sonner.
        </p>
      </div>

      <ComponentPreview
        preview={<SonnerDefaultPreview />}
        code={`import { AppButton } from "@/components/primitives/AppButton"
import { sonnerToast } from "@/components/primitives/AppSonner"

export function Example() {
  return (
    <div className="flex gap-4">
      <AppButton onClick={() => sonnerToast.success("Event has been created")}>
        Show Success
      </AppButton>
      <AppButton onClick={() => sonnerToast.error("Event has been created")}>
        Show Error
      </AppButton>
      <AppButton onClick={() => sonnerToast("Event has been created")}>
        Show Default
      </AppButton>
    </div>
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
          <CodeBlock language="bash" code="npx viana-kit add sonner" />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Import
          </h2>
          <CodeBlock
            language="tsx"
            code={`import { sonnerToast } from "@/components/primitives/AppSonner"`}
          />
        </div>
      </section>
    </article>
  );
}
