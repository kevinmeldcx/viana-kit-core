import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { MenubarDefaultPreview } from "@/components/previews/menubar-preview";

export const metadata: Metadata = {
  title: "Menubar",
};

export default function MenubarPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Menubar
        </h1>
        <p className="text-lg text-muted-foreground">
          A visually persistent menu bar that provides quick access to a
          consistent set of commands.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<MenubarDefaultPreview />}
        code={`import {
  AppMenubar,
  AppMenubarContent,
  AppMenubarItem,
  AppMenubarMenu,
  AppMenubarSeparator,
  AppMenubarShortcut,
  AppMenubarTrigger,
} from "@/components/primitives/AppMenubar"

export function Example() {
  return (
    <AppMenubar>
      <AppMenubarMenu>
        <AppMenubarTrigger>File</AppMenubarTrigger>
        <AppMenubarContent>
          <AppMenubarItem>
            New Tab <AppMenubarShortcut>⌘T</AppMenubarShortcut>
          </AppMenubarItem>
          <AppMenubarItem>
            New Window <AppMenubarShortcut>⌘N</AppMenubarShortcut>
          </AppMenubarItem>
          <AppMenubarSeparator />
          <AppMenubarItem>
            Print <AppMenubarShortcut>⌘P</AppMenubarShortcut>
          </AppMenubarItem>
        </AppMenubarContent>
      </AppMenubarMenu>
      <AppMenubarMenu>
        <AppMenubarTrigger>Edit</AppMenubarTrigger>
        <AppMenubarContent>
          <AppMenubarItem>
            Undo <AppMenubarShortcut>⌘Z</AppMenubarShortcut>
          </AppMenubarItem>
          <AppMenubarItem>
            Redo <AppMenubarShortcut>⇧⌘Z</AppMenubarShortcut>
          </AppMenubarItem>
          <AppMenubarSeparator />
          <AppMenubarItem>
            Cut <AppMenubarShortcut>⌘X</AppMenubarShortcut>
          </AppMenubarItem>
          <AppMenubarItem>
            Copy <AppMenubarShortcut>⌘C</AppMenubarShortcut>
          </AppMenubarItem>
          <AppMenubarItem>
            Paste <AppMenubarShortcut>⌘V</AppMenubarShortcut>
          </AppMenubarItem>
        </AppMenubarContent>
      </AppMenubarMenu>
      <AppMenubarMenu>
        <AppMenubarTrigger>View</AppMenubarTrigger>
        <AppMenubarContent>
          <AppMenubarItem>Zoom In</AppMenubarItem>
          <AppMenubarItem>Zoom Out</AppMenubarItem>
          <AppMenubarSeparator />
          <AppMenubarItem>Full Screen</AppMenubarItem>
        </AppMenubarContent>
      </AppMenubarMenu>
    </AppMenubar>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-menubar-v1
        related_components: ["AppMenubar", "AppMenubarMenu", "AppMenubarTrigger", "AppMenubarContent", "AppMenubarItem", "AppMenubarSeparator", "AppMenubarShortcut", "AppMenubarLabel", "AppMenubarCheckboxItem", "AppMenubarRadioGroup", "AppMenubarRadioItem", "AppMenubarSub", "AppMenubarSubTrigger", "AppMenubarSubContent"]
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
  AppMenubar,
  AppMenubarMenu,
  AppMenubarTrigger,
  AppMenubarContent,
  AppMenubarItem,
  AppMenubarSeparator,
  AppMenubarShortcut,
  AppMenubarLabel,
  AppMenubarCheckboxItem,
  AppMenubarRadioGroup,
  AppMenubarRadioItem,
  AppMenubarSub,
  AppMenubarSubTrigger,
  AppMenubarSubContent,
} from "@/components/primitives/AppMenubar"`}
          />
        </div>

        {/* Structure */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Structure
          </h2>
          <p className="text-muted-foreground leading-7">
            Each menu in the bar is a{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppMenubarMenu
            </code>{" "}
            containing a{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppMenubarTrigger
            </code>{" "}
            and an{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppMenubarContent
            </code>
            . Items, separators, labels, and shortcuts nest inside the content.
          </p>
          <CodeBlock
            language="tsx"
            code={`<AppMenubar>
  <AppMenubarMenu>
    <AppMenubarTrigger>Menu label</AppMenubarTrigger>
    <AppMenubarContent>
      <AppMenubarItem>Action</AppMenubarItem>
      <AppMenubarSeparator />
      <AppMenubarItem>
        Another action <AppMenubarShortcut>⌘K</AppMenubarShortcut>
      </AppMenubarItem>
    </AppMenubarContent>
  </AppMenubarMenu>
</AppMenubar>`}
          />
        </div>

        {/* Submenus */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Submenus
          </h2>
          <p className="text-muted-foreground leading-7">
            Nest{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppMenubarSub
            </code>{" "}
            inside content to create a cascading submenu.
          </p>
          <CodeBlock
            language="tsx"
            code={`<AppMenubarItem>Share</AppMenubarItem>
<AppMenubarSub>
  <AppMenubarSubTrigger>More tools</AppMenubarSubTrigger>
  <AppMenubarSubContent>
    <AppMenubarItem>Save as…</AppMenubarItem>
    <AppMenubarItem>Create shortcut…</AppMenubarItem>
  </AppMenubarSubContent>
</AppMenubarSub>`}
          />
        </div>

        {/* API Reference */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            All{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppMenubar*
            </code>{" "}
            components extend their underlying Radix UI primitives and accept all
            their props.
          </p>
          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-3 text-left font-medium text-foreground">
                    Component
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["AppMenubar", "Root container. Renders the menu bar."],
                  ["AppMenubarMenu", "Wraps a single menu (trigger + content)."],
                  ["AppMenubarTrigger", "Button that opens the menu content."],
                  ["AppMenubarContent", "Dropdown panel containing menu items."],
                  ["AppMenubarItem", "A single actionable menu entry."],
                  ["AppMenubarLabel", "Non-interactive group label."],
                  ["AppMenubarSeparator", "Visual divider between items."],
                  ["AppMenubarShortcut", "Keyboard shortcut hint displayed on the right."],
                  ["AppMenubarCheckboxItem", "A toggleable checkbox item."],
                  ["AppMenubarRadioGroup", "Groups radio items for single selection."],
                  ["AppMenubarRadioItem", "A selectable radio item."],
                  ["AppMenubarSub", "Wrapper for a nested submenu."],
                  ["AppMenubarSubTrigger", "Item that opens the submenu."],
                  ["AppMenubarSubContent", "Content panel for the submenu."],
                ].map(([component, description]) => (
                  <tr key={component}>
                    <td className="px-4 py-3 font-mono text-xs text-foreground">
                      {component}
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
            filename="src/components/primitives/AppMenubar.tsx"
            code={`import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarGroup,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarShortcut,
} from "@/components/ui/menubar"

const AppMenubar = Menubar
const AppMenubarMenu = MenubarMenu
const AppMenubarTrigger = MenubarTrigger
const AppMenubarContent = MenubarContent
const AppMenubarItem = MenubarItem
const AppMenubarSeparator = MenubarSeparator
const AppMenubarLabel = MenubarLabel
const AppMenubarCheckboxItem = MenubarCheckboxItem
const AppMenubarRadioGroup = MenubarRadioGroup
const AppMenubarRadioItem = MenubarRadioItem
const AppMenubarPortal = MenubarPortal
const AppMenubarGroup = MenubarGroup
const AppMenubarSub = MenubarSub
const AppMenubarSubContent = MenubarSubContent
const AppMenubarSubTrigger = MenubarSubTrigger
const AppMenubarShortcut = MenubarShortcut

export {
  AppMenubar,
  AppMenubarMenu,
  AppMenubarTrigger,
  AppMenubarContent,
  AppMenubarItem,
  AppMenubarSeparator,
  AppMenubarLabel,
  AppMenubarCheckboxItem,
  AppMenubarRadioGroup,
  AppMenubarRadioItem,
  AppMenubarPortal,
  AppMenubarGroup,
  AppMenubarSub,
  AppMenubarSubContent,
  AppMenubarSubTrigger,
  AppMenubarShortcut,
}`}
          />
        </div>
      </section>
    </article>
  );
}
