import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import {
  CheckboxDefaultPreview,
  CheckboxWithDescriptionPreview,
  CheckboxDisabledPreview,
  CheckboxGroupPreview,
} from "@/components/previews/checkbox-preview";

export const metadata: Metadata = {
  title: "Checkbox",
};

export default function CheckboxPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Checkbox
        </h1>
        <p className="text-lg text-muted-foreground">
          A control that allows the user to toggle between checked and not
          checked. Typically used in forms alongside a label.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<CheckboxDefaultPreview />}
        code={`import { AppCheckbox } from "@/components/primitives/AppCheckbox"
import { AppLabel } from "@/components/primitives/AppLabel"

export function Example() {
  return (
    <div className="flex items-center gap-2">
      <AppCheckbox id="terms" />
      <AppLabel htmlFor="terms">Accept terms and conditions</AppLabel>
    </div>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-checkbox-v1
        related_components: ["AppCheckbox"]
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
            code={`import { AppCheckbox } from "@/components/primitives/AppCheckbox"`}
          />
        </div>

        {/* With label */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            With a label
          </h2>
          <p className="text-muted-foreground leading-7">
            Always pair a checkbox with an{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppLabel
            </code>{" "}
            using matching{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              id
            </code>{" "}
            and{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              htmlFor
            </code>{" "}
            values so that clicking the label also toggles the checkbox.
          </p>
          <CodeBlock
            language="tsx"
            code={`<div className="flex items-center gap-2">
  <AppCheckbox id="newsletter" />
  <AppLabel htmlFor="newsletter">Subscribe to newsletter</AppLabel>
</div>`}
          />
        </div>

        {/* With description */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            With description
          </h2>
          <p className="text-muted-foreground leading-7">
            Add a description below the label to provide additional context.
          </p>
          <ComponentPreview
            preview={<CheckboxWithDescriptionPreview />}
            code={`<div className="flex items-start gap-3">
  <AppCheckbox id="notifications" className="mt-0.5" />
  <div className="grid gap-1">
    <AppLabel htmlFor="notifications">Enable notifications</AppLabel>
    <p className="text-sm text-muted-foreground">
      You can enable or disable notifications at any time.
    </p>
  </div>
</div>`}
          />
        </div>

        {/* Disabled */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Disabled
          </h2>
          <p className="text-muted-foreground leading-7">
            Pass the{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              disabled
            </code>{" "}
            prop to prevent interaction. Works for both unchecked and
            pre-checked states.
          </p>
          <ComponentPreview
            preview={<CheckboxDisabledPreview />}
            code={`{/* Disabled unchecked */}
<div className="flex items-center gap-2">
  <AppCheckbox id="disabled-unchecked" disabled />
  <AppLabel htmlFor="disabled-unchecked" className="opacity-50 cursor-not-allowed">
    Disabled (unchecked)
  </AppLabel>
</div>

{/* Disabled checked */}
<div className="flex items-center gap-2">
  <AppCheckbox id="disabled-checked" disabled defaultChecked />
  <AppLabel htmlFor="disabled-checked" className="opacity-50 cursor-not-allowed">
    Disabled (checked)
  </AppLabel>
</div>`}
          />
        </div>

        {/* Checkbox group */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Checkbox group
          </h2>
          <p className="text-muted-foreground leading-7">
            Stack multiple checkboxes for multi-select scenarios. Each
            checkbox is independent — there is no shared group state.
          </p>
          <ComponentPreview
            preview={<CheckboxGroupPreview />}
            code={`<div className="space-y-3">
  <p className="text-sm font-medium text-foreground">Notify me about...</p>
  <div className="flex items-center gap-2">
    <AppCheckbox id="comments" />
    <AppLabel htmlFor="comments">New comments</AppLabel>
  </div>
  <div className="flex items-center gap-2">
    <AppCheckbox id="mentions" />
    <AppLabel htmlFor="mentions">Direct mentions</AppLabel>
  </div>
  <div className="flex items-center gap-2">
    <AppCheckbox id="updates" />
    <AppLabel htmlFor="updates">Product updates</AppLabel>
  </div>
</div>`}
          />
        </div>

        {/* API Reference */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppCheckbox
            </code>{" "}
            extends the Radix UI{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              Checkbox
            </code>{" "}
            primitive.
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
                    prop: "checked",
                    type: "boolean | 'indeterminate'",
                    default: "—",
                    description: "Controlled checked state.",
                  },
                  {
                    prop: "defaultChecked",
                    type: "boolean",
                    default: "false",
                    description: "Initial checked state when uncontrolled.",
                  },
                  {
                    prop: "onCheckedChange",
                    type: "(checked: boolean | 'indeterminate') => void",
                    default: "—",
                    description: "Callback fired when the checked state changes.",
                  },
                  {
                    prop: "disabled",
                    type: "boolean",
                    default: "false",
                    description: "Prevents interaction and reduces opacity.",
                  },
                  {
                    prop: "required",
                    type: "boolean",
                    default: "false",
                    description: "Marks the checkbox as required in a form.",
                  },
                  {
                    prop: "name",
                    type: "string",
                    default: "—",
                    description: "Submitted with its owning form as part of a name/value pair.",
                  },
                  {
                    prop: "value",
                    type: "string",
                    default: "'on'",
                    description: "The value given as data when submitted in a form.",
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
            filename="src/components/primitives/AppCheckbox.tsx"
            code={`"use client"

import { Checkbox as CheckboxPrimitive } from "../ui/checkbox"

type AppCheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive>

function AppCheckbox(props: AppCheckboxProps) {
  return <CheckboxPrimitive {...props} />
}

export { AppCheckbox }`}
          />
        </div>
      </section>
    </article>
  );
}
