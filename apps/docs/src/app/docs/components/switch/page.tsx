import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { SwitchDefaultPreview } from "@/components/previews/switch-preview";

export const metadata: Metadata = {
  title: "Switch",
};

export default function SwitchPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Switch</h1>
        <p className="text-lg text-muted-foreground">A control that allows the user to toggle between checked and not checked.</p>
      </div>

      <ComponentPreview
        preview={<SwitchDefaultPreview />}
        code={`import { AppSwitch } from "@viana/ui"

export function Example() {
  return (
    <div className="flex items-center gap-2">
      <AppSwitch id="airplane-mode" />
      <label htmlFor="airplane-mode">Airplane mode</label>
    </div>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      <section className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Installation</h2>
          <CodeBlock language="bash" code="npx viana-kit add switch" />
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Import</h2>
          <CodeBlock language="tsx" code={`import { AppSwitch } from "@viana/ui"AppSwitch"`} />
        </div>
      </section>
    </article>
  );
}
