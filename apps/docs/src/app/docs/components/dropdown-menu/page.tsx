import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { DropdownMenuDefaultPreview } from "@/components/previews/dropdown-menu-preview";

export const metadata: Metadata = {
  title: "Dropdown Menu",
};

export default function DropdownMenuPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Dropdown Menu
        </h1>
        <p className="text-lg text-muted-foreground">
          A menu that displays a list of actions or options.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<DropdownMenuDefaultPreview />}
        code={`import {
  AppDropdownMenu,
  AppDropdownMenuTrigger,
  AppDropdownMenuContent,
  AppDropdownMenuLabel,
  AppDropdownMenuSeparator,
  AppDropdownMenuItem,
} from "@/components/primitives/AppDropdownMenu"
import { AppButton } from "@/components/primitives/AppButton"

export function Example() {
  return (
    <AppDropdownMenu>
      <AppDropdownMenuTrigger asChild>
        <AppButton>Open Menu</AppButton>
      </AppDropdownMenuTrigger>
      <AppDropdownMenuContent className="w-56">
        <AppDropdownMenuLabel>My Account</AppDropdownMenuLabel>
        <AppDropdownMenuSeparator />
        <AppDropdownMenuItem>Profile</AppDropdownMenuItem>
        <AppDropdownMenuItem>Settings</AppDropdownMenuItem>
        <AppDropdownMenuItem>Billing</AppDropdownMenuItem>
      </AppDropdownMenuContent>
    </AppDropdownMenu>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-dropdown-menu-v1
        related_components: ["AppDropdownMenu", "AppDropdownMenuTrigger", "AppDropdownMenuContent", "AppDropdownMenuItem", "AppDropdownMenuCheckboxItem", "AppDropdownMenuRadioItem", "AppDropdownMenuLabel", "AppDropdownMenuSeparator", "AppDropdownMenuShortcut", "AppDropdownMenuGroup", "AppDropdownMenuPortal", "AppDropdownMenuSub", "AppDropdownMenuSubContent", "AppDropdownMenuSubTrigger", "AppDropdownMenuRadioGroup"]
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
  AppDropdownMenu,
  AppDropdownMenuTrigger,
  AppDropdownMenuContent,
  AppDropdownMenuItem,
  AppDropdownMenuCheckboxItem,
  AppDropdownMenuRadioItem,
  AppDropdownMenuLabel,
  AppDropdownMenuSeparator,
  AppDropdownMenuShortcut,
  AppDropdownMenuGroup,
  AppDropdownMenuPortal,
  AppDropdownMenuSub,
  AppDropdownMenuSubContent,
  AppDropdownMenuSubTrigger,
  AppDropdownMenuRadioGroup,
} from "@/components/primitives/AppDropdownMenu"`}
          />
        </div>

        {/* API Reference - AppDropdownMenu */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppDropdownMenu
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
            filename="src/components/primitives/AppDropdownMenu.tsx"
            code={`import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from "../ui/dropdown-menu"

const AppDropdownMenu = DropdownMenu
const AppDropdownMenuTrigger = DropdownMenuTrigger
const AppDropdownMenuContent = DropdownMenuContent
const AppDropdownMenuItem = DropdownMenuItem
const AppDropdownMenuCheckboxItem = DropdownMenuCheckboxItem
const AppDropdownMenuRadioItem = DropdownMenuRadioItem
const AppDropdownMenuLabel = DropdownMenuLabel
const AppDropdownMenuSeparator = DropdownMenuSeparator
const AppDropdownMenuShortcut = DropdownMenuShortcut
const AppDropdownMenuGroup = DropdownMenuGroup
const AppDropdownMenuPortal = DropdownMenuPortal
const AppDropdownMenuSub = DropdownMenuSub
const AppDropdownMenuSubContent = DropdownMenuSubContent
const AppDropdownMenuSubTrigger = DropdownMenuSubTrigger
const AppDropdownMenuRadioGroup = DropdownMenuRadioGroup

export {
  AppDropdownMenu,
  AppDropdownMenuTrigger,
  AppDropdownMenuContent,
  AppDropdownMenuItem,
  AppDropdownMenuCheckboxItem,
  AppDropdownMenuRadioItem,
  AppDropdownMenuLabel,
  AppDropdownMenuSeparator,
  AppDropdownMenuShortcut,
  AppDropdownMenuGroup,
  AppDropdownMenuPortal,
  AppDropdownMenuSub,
  AppDropdownMenuSubContent,
  AppDropdownMenuSubTrigger,
  AppDropdownMenuRadioGroup,
}`}
          />
        </div>
      </section>
    </article>
  );
}
