import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { CommandDefaultPreview } from "@/components/previews/command-preview";

export const metadata: Metadata = { title: "Command" };

export default function CommandPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Command</h1>
        <p className="text-lg text-muted-foreground">A command palette for searching and executing commands.</p>
      </div>
      <ComponentPreview preview={<CommandDefaultPreview />} code={`import { AppCommand, AppCommandDialog, AppCommandInput, AppCommandList, AppCommandGroup, AppCommandItem } from "@/components/primitives/AppCommand"

export function Example() {
  return (
    <AppCommandDialog open={true} onOpenChange={() => {}}>
      <AppCommandInput placeholder="Type a command..." />
      <AppCommandList>
        <AppCommandGroup heading="Suggestions">
          <AppCommandItem>Profile</AppCommandItem>
          <AppCommandItem>Settings</AppCommandItem>
        </AppCommandGroup>
      </AppCommandList>
    </AppCommandDialog>
  )
}`} filename="example.tsx" />
      <hr className="border-border my-10" />
      <section className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Installation</h2>
          <CodeBlock language="bash" code="npx viana-kit add command" />
        </div>
      </section>
    </article>
  );
}
