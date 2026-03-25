import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { CommandDefaultPreview } from "@/components/previews/command-preview";

export const metadata: Metadata = {
  title: "Command",
};

export default function CommandPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Command
        </h1>
        <p className="text-lg text-muted-foreground">
          A fast, composable command palette for searching and executing
          actions. Use it as a modal dialog or embedded inline in a page.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<CommandDefaultPreview />}
        code={`import {
  AppCommandDialog,
  AppCommandInput,
  AppCommandList,
  AppCommandEmpty,
  AppCommandGroup,
  AppCommandItem,
} from "@/components/primitives/AppCommand"

export function Example() {
  const [open, setOpen] = useState(false)

  return (
    <AppCommandDialog open={open} onOpenChange={setOpen}>
      <AppCommandInput placeholder="Type a command or search..." />
      <AppCommandList>
        <AppCommandEmpty>No results found.</AppCommandEmpty>
        <AppCommandGroup heading="Suggestions">
          <AppCommandItem>Profile</AppCommandItem>
          <AppCommandItem>Settings</AppCommandItem>
          <AppCommandItem>Logout</AppCommandItem>
        </AppCommandGroup>
      </AppCommandList>
    </AppCommandDialog>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-command-v1
        related_components: ["AppCommand", "AppCommandDialog", "AppCommandInput", "AppCommandList", "AppCommandEmpty", "AppCommandGroup", "AppCommandItem", "AppCommandShortcut", "AppCommandSeparator"]
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
  AppCommand,
  AppCommandDialog,
  AppCommandInput,
  AppCommandList,
  AppCommandEmpty,
  AppCommandGroup,
  AppCommandItem,
  AppCommandShortcut,
  AppCommandSeparator,
} from "@/components/primitives/AppCommand"`}
          />
        </div>

        {/* Inline usage */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Inline
          </h2>
          <p className="text-muted-foreground leading-7">
            Use{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppCommand
            </code>{" "}
            directly (without the dialog wrapper) to embed the palette inline on
            a page — for example inside a popover or a sidebar.
          </p>
          <CodeBlock
            language="tsx"
            code={`<AppCommand>
  <AppCommandInput placeholder="Search..." />
  <AppCommandList>
    <AppCommandEmpty>No results found.</AppCommandEmpty>
    <AppCommandGroup heading="Pages">
      <AppCommandItem>Dashboard</AppCommandItem>
      <AppCommandItem>Settings</AppCommandItem>
    </AppCommandGroup>
  </AppCommandList>
</AppCommand>`}
          />
        </div>

        {/* Keyboard trigger */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Keyboard trigger
          </h2>
          <p className="text-muted-foreground leading-7">
            The standard pattern is to open the command dialog with{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              ⌘K
            </code>{" "}
            (or{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              Ctrl+K
            </code>{" "}
            on Windows). Add a{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              useEffect
            </code>{" "}
            to wire this up globally.
          </p>
          <CodeBlock
            language="tsx"
            code={`const [open, setOpen] = useState(false)

useEffect(() => {
  const down = (e: KeyboardEvent) => {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      setOpen((open) => !open)
    }
  }
  document.addEventListener("keydown", down)
  return () => document.removeEventListener("keydown", down)
}, [])

<AppCommandDialog open={open} onOpenChange={setOpen}>
  {/* ... */}
</AppCommandDialog>`}
          />
        </div>

        {/* Shortcuts */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Shortcuts
          </h2>
          <p className="text-muted-foreground leading-7">
            Use{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppCommandShortcut
            </code>{" "}
            to display a keyboard shortcut hint alongside a command item.
          </p>
          <CodeBlock
            language="tsx"
            code={`<AppCommandItem>
  Profile
  <AppCommandShortcut>⌘P</AppCommandShortcut>
</AppCommandItem>`}
          />
        </div>

        {/* API Reference */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppCommandDialog
            </code>{" "}
            and its sub-components extend the underlying Radix UI Dialog and
            cmdk primitives.
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
                    prop: "open",
                    type: "boolean",
                    default: "—",
                    description: "Controlled open state of the dialog.",
                  },
                  {
                    prop: "onOpenChange",
                    type: "(open: boolean) => void",
                    default: "—",
                    description: "Callback fired when the open state changes.",
                  },
                  {
                    prop: "filter",
                    type: "(value: string, search: string) => number",
                    default: "—",
                    description:
                      "Custom filter function for AppCommand. Return a score between 0 and 1.",
                  },
                  {
                    prop: "shouldFilter",
                    type: "boolean",
                    default: "true",
                    description:
                      "Set to false to disable built-in filtering and handle it yourself.",
                  },
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
            filename="src/components/primitives/AppCommand.tsx"
            code={`"use client"

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

function AppCommand(props: React.ComponentProps<typeof Command>) {
  return <Command {...props} />
}

function AppCommandDialog(props: React.ComponentProps<typeof CommandDialog>) {
  return <CommandDialog {...props} />
}

function AppCommandInput(props: React.ComponentProps<typeof CommandInput>) {
  return <CommandInput {...props} />
}

function AppCommandList(props: React.ComponentProps<typeof CommandList>) {
  return <CommandList {...props} />
}

function AppCommandEmpty(props: React.ComponentProps<typeof CommandEmpty>) {
  return <CommandEmpty {...props} />
}

function AppCommandGroup(props: React.ComponentProps<typeof CommandGroup>) {
  return <CommandGroup {...props} />
}

function AppCommandItem(props: React.ComponentProps<typeof CommandItem>) {
  return <CommandItem {...props} />
}

function AppCommandShortcut(props: React.HTMLAttributes<HTMLSpanElement>) {
  return <CommandShortcut {...props} />
}

function AppCommandSeparator(props: React.ComponentProps<typeof CommandSeparator>) {
  return <CommandSeparator {...props} />
}

export {
  AppCommand,
  AppCommandDialog,
  AppCommandInput,
  AppCommandList,
  AppCommandEmpty,
  AppCommandGroup,
  AppCommandItem,
  AppCommandShortcut,
  AppCommandSeparator,
}`}
          />
        </div>
      </section>
    </article>
  );
}
