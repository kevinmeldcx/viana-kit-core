import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { ContextMenuDefaultPreview } from "@/components/previews/context-menu-preview";

export const metadata: Metadata = {
  title: "Context Menu - Viana Kit",
  description: "A menu that appears when the user right-clicks or long-presses.",
};

export default function ContextMenuPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Context Menu
        </h1>
        <p className="text-lg text-muted-foreground">
          A menu that appears when the user right-clicks or long-presses.
        </p>
      </div>

      <ComponentPreview
        preview={<ContextMenuDefaultPreview />}
        code={`import {
  AppContextMenu,
  AppContextMenuTrigger,
  AppContextMenuContent,
  AppContextMenuItem,
  AppContextMenuSeparator,
  AppContextMenuShortcut,
} from "@viana/ui"

export function Example() {
  return (
    <AppContextMenu>
      <AppContextMenuTrigger className="flex h-[150px] w-full items-center justify-center border border-dashed">
        Right click here
      </AppContextMenuTrigger>
      <AppContextMenuContent className="w-56">
        <AppContextMenuItem>
          <span>Copy</span>
          <AppContextMenuShortcut>⌘C</AppContextMenuShortcut>
        </AppContextMenuItem>
        <AppContextMenuItem>
          <span>Paste</span>
          <AppContextMenuShortcut>⌘V</AppContextMenuShortcut>
        </AppContextMenuItem>
        <AppContextMenuSeparator />
        <AppContextMenuItem>
          <span>Refresh</span>
        </AppContextMenuItem>
      </AppContextMenuContent>
    </AppContextMenu>
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
          <CodeBlock language="bash" code="npx viana-kit add context-menu" />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Import
          </h2>
          <CodeBlock
            language="tsx"
            code={`import {
  AppContextMenu,
  AppContextMenuTrigger,
  AppContextMenuContent,
  AppContextMenuItem,
  AppContextMenuSeparator,
  AppContextMenuShortcut,
} from "@viana/ui"`}
          />
        </div>
      </section>
    </article>
  );
}
