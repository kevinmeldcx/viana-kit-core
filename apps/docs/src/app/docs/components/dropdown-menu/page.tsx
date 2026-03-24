import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { DropdownMenuDefaultPreview } from "@/components/previews/dropdown-menu-preview";

export const metadata: Metadata = {
  title: "Dropdown Menu - Viana Kit",
  description: "A menu that displays a list of actions or options.",
};

export default function DropdownMenuPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Dropdown Menu
        </h1>
        <p className="text-lg text-muted-foreground">
          A menu that displays a list of actions or options.
        </p>
      </div>

      <ComponentPreview
        preview={<DropdownMenuDefaultPreview />}
        code={`import {
  AppDropdownMenu,
  AppDropdownMenuTrigger,
  AppDropdownMenuContent,
  AppDropdownMenuLabel,
  AppDropdownMenuSeparator,
  AppDropdownMenuItem,
  AppButton,
} from "@viana/ui"

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

      <section className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Installation
          </h2>
          <CodeBlock language="bash" code="npx viana-kit add dropdown-menu" />
        </div>

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
  AppDropdownMenuLabel,
  AppDropdownMenuSeparator,
  AppDropdownMenuItem,
} from "@viana/ui"`}
          />
        </div>
      </section>
    </article>
  );
}
