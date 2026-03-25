import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { ContextMenuDefaultPreview } from "@/components/previews/context-menu-preview";

export const metadata: Metadata = {
  title: "Context Menu",
};

export default function ContextMenuPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Context Menu
        </h1>
        <p className="text-lg text-muted-foreground">
          A menu that appears when the user right-clicks or long-presses.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<ContextMenuDefaultPreview />}
        code={`import {
  AppContextMenu,
  AppContextMenuTrigger,
  AppContextMenuContent,
  AppContextMenuItem,
  AppContextMenuSeparator,
  AppContextMenuShortcut,
} from "@/components/primitives/AppContextMenu"

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

      {/*
        canonical_id: component-context-menu-v1
        related_components: ["AppContextMenu", "AppContextMenuTrigger", "AppContextMenuContent", "AppContextMenuItem", "AppContextMenuCheckboxItem", "AppContextMenuRadioItem", "AppContextMenuLabel", "AppContextMenuSeparator", "AppContextMenuShortcut", "AppContextMenuGroup", "AppContextMenuPortal", "AppContextMenuSub", "AppContextMenuSubContent", "AppContextMenuSubTrigger", "AppContextMenuRadioGroup"]
        platform_tags: ["web"]
        enforcement_level: strict
      */}

      <section className="space-y-10">
        {/* Import */}
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
  AppContextMenuCheckboxItem,
  AppContextMenuRadioItem,
  AppContextMenuLabel,
  AppContextMenuSeparator,
  AppContextMenuShortcut,
  AppContextMenuGroup,
  AppContextMenuPortal,
  AppContextMenuSub,
  AppContextMenuSubContent,
  AppContextMenuSubTrigger,
  AppContextMenuRadioGroup,
} from "@/components/primitives/AppContextMenu"`}
          />
        </div>

        {/* API Reference - AppContextMenu */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppContextMenu
            </code>{" "}
            extends all native{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              {"<div>"}
            </code>{" "}
            HTML attributes.
          </p>
          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-3 text-left font-medium text-foreground">
                    Prop
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">
                    Default
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  {
                    prop: "className",
                    type: "string",
                    default: "—",
                    description:
                      "Additional Tailwind classes merged via cn(). Prefer the wrapper pattern for reusable overrides.",
                  },
                ].map(({ prop, type, default: def, description }) => (
                  <tr key={prop}>
                    <td className="px-4 py-3 font-mono text-xs text-foreground">
                      {prop}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                      {type}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                      {def}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Source */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Source
          </h2>
          <CodeBlock
            filename="src/components/primitives/AppContextMenu.tsx"
            code={`import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
} from "../ui/context-menu"

const AppContextMenu = ContextMenu
const AppContextMenuTrigger = ContextMenuTrigger
const AppContextMenuContent = ContextMenuContent
const AppContextMenuItem = ContextMenuItem
const AppContextMenuCheckboxItem = ContextMenuCheckboxItem
const AppContextMenuRadioItem = ContextMenuRadioItem
const AppContextMenuLabel = ContextMenuLabel
const AppContextMenuSeparator = ContextMenuSeparator
const AppContextMenuShortcut = ContextMenuShortcut
const AppContextMenuGroup = ContextMenuGroup
const AppContextMenuPortal = ContextMenuPortal
const AppContextMenuSub = ContextMenuSub
const AppContextMenuSubContent = ContextMenuSubContent
const AppContextMenuSubTrigger = ContextMenuSubTrigger
const AppContextMenuRadioGroup = ContextMenuRadioGroup

export {
  AppContextMenu,
  AppContextMenuTrigger,
  AppContextMenuContent,
  AppContextMenuItem,
  AppContextMenuCheckboxItem,
  AppContextMenuRadioItem,
  AppContextMenuLabel,
  AppContextMenuSeparator,
  AppContextMenuShortcut,
  AppContextMenuGroup,
  AppContextMenuPortal,
  AppContextMenuSub,
  AppContextMenuSubContent,
  AppContextMenuSubTrigger,
  AppContextMenuRadioGroup,
}`}
          />
        </div>
      </section>
    </article>
  );
}
