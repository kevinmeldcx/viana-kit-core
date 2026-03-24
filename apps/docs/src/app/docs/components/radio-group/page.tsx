import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { RadioGroupDefaultPreview } from "@/components/previews/radio-group-preview";

export const metadata: Metadata = {
  title: "Radio Group",
};

export default function RadioGroupPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Radio Group
        </h1>
        <p className="text-lg text-muted-foreground">
          A set of radio buttons where only one option can be selected at a
          time.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<RadioGroupDefaultPreview />}
        code={`import { AppRadioGroup, AppRadioGroupItem } from "@/components/primitives/AppRadioGroup"
import { AppLabel } from "@/components/primitives/AppLabel"

export function Example() {
  return (
    <AppRadioGroup defaultValue="option-one">
      <div className="flex items-center gap-2">
        <AppRadioGroupItem value="option-one" id="option-one" />
        <AppLabel htmlFor="option-one">Option One</AppLabel>
      </div>
      <div className="flex items-center gap-2">
        <AppRadioGroupItem value="option-two" id="option-two" />
        <AppLabel htmlFor="option-two">Option Two</AppLabel>
      </div>
    </AppRadioGroup>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-radio-group-v1
        related_components: ["AppRadioGroup", "AppRadioGroupItem"]
        platform_tags: ["web"]
        enforcement_level: strict
      */}

      <section className="space-y-10">
        {/* Installation */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Installation
          </h2>
          <p className="text-muted-foreground leading-7">
            Add the Radio Group component to your project using the Viana CLI.
            This copies the source files directly into your repository and
            installs any required dependencies.
          </p>
          <CodeBlock language="bash" code="npx viana-kit add radio-group" />
          <p className="text-muted-foreground leading-7">
            This will create two files in your project:
          </p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-0.5">–</span>
              <code className="font-mono text-foreground">
                src/components/ui/radio-group.tsx
              </code>
              <span>— the base shadcn/ui primitive (do not modify)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5">–</span>
              <code className="font-mono text-foreground">
                src/components/primitives/AppRadioGroup.tsx
              </code>
              <span>— the Viana Kit wrapper (do not modify)</span>
            </li>
          </ul>
        </div>

        {/* Import */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Import
          </h2>
          <CodeBlock
            language="tsx"
            code={`import { AppRadioGroup, AppRadioGroupItem } from "@/components/primitives/AppRadioGroup"`}
          />
        </div>

        {/* API Reference */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppRadioGroup
            </code>{" "}
            and{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppRadioGroupItem
            </code>{" "}
            extend their underlying Radix UI primitives.
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
                    prop: "defaultValue",
                    type: "string",
                    default: "—",
                    description: "The value of the item that is selected by default.",
                  },
                  {
                    prop: "value",
                    type: "string",
                    default: "—",
                    description: "The controlled value of the selected item.",
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
                    description: "Disables all radio items in the group.",
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
            filename="src/components/primitives/AppRadioGroup.tsx"
            code={`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const AppRadioGroup = RadioGroup
const AppRadioGroupItem = RadioGroupItem

export { AppRadioGroup, AppRadioGroupItem }`}
          />
        </div>
      </section>
    </article>
  );
}
