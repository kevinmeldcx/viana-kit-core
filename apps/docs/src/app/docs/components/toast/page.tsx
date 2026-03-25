import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { ToastDefaultPreview } from "@/components/previews/toast-preview";

export const metadata: Metadata = {
  title: "Toast - Viana Kit",
  description: "A brief message that appears temporarily.",
};

export default function ToastPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Toast
        </h1>
        <p className="text-lg text-muted-foreground">
          A brief message that appears temporarily.
        </p>
      </div>

      <ComponentPreview
        preview={<ToastDefaultPreview />}
        code={`import { AppButton } from "@/components/primitives/AppButton"
import { AppToast, toast } from "@/components/primitives/AppToast"

export function Example() {
  return (
    <AppButton onClick={() => toast("Event has been created")}>
      Show Toast
    </AppButton>
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
          <CodeBlock language="bash" code="npx viana-kit add toast" />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Import
          </h2>
          <CodeBlock
            language="tsx"
            code={`import { AppToast, toast } from "@/components/primitives/AppToast"`}
          />
        </div>
      </section>
    </article>
  );
}
