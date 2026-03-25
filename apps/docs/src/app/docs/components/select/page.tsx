import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { SelectDefaultPreview } from "@/components/previews/select-preview";

export const metadata: Metadata = {
  title: "Select",
};

export default function SelectPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Select
        </h1>
        <p className="text-lg text-muted-foreground">
          Displays a list of options for the user to pick from, triggered by a
          button. Use it when a user must choose one value from a set.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<SelectDefaultPreview />}
        code={`import {
  AppSelect,
  AppSelectTrigger,
  AppSelectValue,
  AppSelectContent,
  AppSelectLabel,
  AppSelectItem,
} from "@/components/primitives/AppSelect"

export function Example() {
  return (
    <AppSelect>
      <AppSelectTrigger className="w-48">
        <AppSelectValue placeholder="Select a fruit" />
      </AppSelectTrigger>
      <AppSelectContent>
        <AppSelectLabel>Fruits</AppSelectLabel>
        <AppSelectItem value="apple">Apple</AppSelectItem>
        <AppSelectItem value="banana">Banana</AppSelectItem>
        <AppSelectItem value="mango">Mango</AppSelectItem>
      </AppSelectContent>
    </AppSelect>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-select-v1
        related_components: ["AppSelect", "AppSelectTrigger", "AppSelectValue", "AppSelectContent", "AppSelectItem", "AppSelectLabel"]
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
  AppSelect,
  AppSelectTrigger,
  AppSelectValue,
  AppSelectContent,
  AppSelectItem,
  AppSelectLabel,
} from "@/components/primitives/AppSelect"`}
          />
        </div>

        {/* Controlled */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Controlled
          </h2>
          <p className="text-muted-foreground leading-7">
            Use{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              value
            </code>{" "}
            and{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              onValueChange
            </code>{" "}
            to control the selected value from outside the component.
          </p>
          <CodeBlock
            language="tsx"
            code={`const [fruit, setFruit] = useState("")

<AppSelect value={fruit} onValueChange={setFruit}>
  <AppSelectTrigger>
    <AppSelectValue placeholder="Pick a fruit" />
  </AppSelectTrigger>
  <AppSelectContent>
    <AppSelectItem value="apple">Apple</AppSelectItem>
    <AppSelectItem value="banana">Banana</AppSelectItem>
  </AppSelectContent>
</AppSelect>`}
          />
        </div>

        {/* Disabled */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Disabled
          </h2>
          <p className="text-muted-foreground leading-7">
            Pass{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              disabled
            </code>{" "}
            on{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppSelect
            </code>{" "}
            to disable the whole control, or on a specific{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppSelectItem
            </code>{" "}
            to disable individual options.
          </p>
          <CodeBlock
            language="tsx"
            code={`{/* Disable the entire select */}
<AppSelect disabled>...</AppSelect>

{/* Disable a single option */}
<AppSelectItem value="mango" disabled>Mango (out of stock)</AppSelectItem>`}
          />
        </div>

        {/* API Reference */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppSelect
            </code>{" "}
            and its sub-components extend their underlying Radix UI primitives.
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
                    prop: "value",
                    type: "string",
                    default: "—",
                    description: "Controlled value of the selected item.",
                  },
                  {
                    prop: "defaultValue",
                    type: "string",
                    default: "—",
                    description: "Initial selected value when uncontrolled.",
                  },
                  {
                    prop: "onValueChange",
                    type: "(value: string) => void",
                    default: "—",
                    description: "Callback fired when the selected value changes.",
                  },
                  {
                    prop: "disabled",
                    type: "boolean",
                    default: "false",
                    description: "Disables the entire select control.",
                  },
                  {
                    prop: "placeholder",
                    type: "string",
                    default: "—",
                    description:
                      "Placeholder text shown in AppSelectValue when no item is selected.",
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
            filename="src/components/primitives/AppSelect.tsx"
            code={`"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function AppSelect(props: React.ComponentProps<typeof Select>) {
  return <Select {...props} />
}

function AppSelectTrigger(props: React.ComponentPropsWithoutRef<typeof SelectTrigger>) {
  return <SelectTrigger {...props} />
}

function AppSelectValue(props: React.ComponentPropsWithoutRef<typeof SelectValue>) {
  return <SelectValue {...props} />
}

function AppSelectContent(props: React.ComponentPropsWithoutRef<typeof SelectContent>) {
  return <SelectContent {...props} />
}

function AppSelectItem(props: React.ComponentPropsWithoutRef<typeof SelectItem>) {
  return <SelectItem {...props} />
}

function AppSelectLabel(props: React.ComponentPropsWithoutRef<typeof SelectLabel>) {
  return <SelectLabel {...props} />
}

export { AppSelect, AppSelectTrigger, AppSelectValue, AppSelectContent, AppSelectItem, AppSelectLabel }`}
          />
        </div>
      </section>
    </article>
  );
}
