import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import {
  ButtonGroupDefaultPreview,
  ButtonGroupVariantsPreview,
  ButtonGroupSizesPreview,
  ButtonGroupIconsPreview,
  ButtonGroupSplitPreview,
  ButtonGroupInputPreview,
} from "@/components/previews/button-group-preview";

export const metadata: Metadata = {
  title: "Button Group",
};

export default function ButtonGroupPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Button Group
        </h1>
        <p className="text-lg text-muted-foreground">
          A flex container that joins adjacent buttons and inputs into a seamless
          group — collapsing inner border radii and merging shared borders.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<ButtonGroupDefaultPreview />}
        code={`import { AppButtonGroup } from "@/components/primitives/AppButtonGroup"
import { AppButton } from "@/components/primitives/AppButton"

export function Example() {
  return (
    <AppButtonGroup>
      <AppButton variant="outline">Copy</AppButton>
      <AppButton variant="outline">Paste</AppButton>
      <AppButton variant="outline">Clear</AppButton>
    </AppButtonGroup>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-button-group-v1
        related_components: ["AppButtonGroup", "AppButton", "AppInput", "AppField"]
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
            code={`import { AppButtonGroup } from "@/components/primitives/AppButtonGroup"`}
          />
        </div>

        {/* Examples */}
        <div className="space-y-8">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Examples
          </h2>

          {/* Variants */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Variants</h3>
            <p className="text-sm text-muted-foreground">
              Use any button{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">variant</code>{" "}
              — the group adapts automatically.
            </p>
            <ComponentPreview
              preview={<ButtonGroupVariantsPreview />}
              code={`{/* Default */}
<AppButtonGroup>
  <AppButton>Save</AppButton>
  <AppButton>Preview</AppButton>
  <AppButton>Publish</AppButton>
</AppButtonGroup>

{/* Outline */}
<AppButtonGroup>
  <AppButton variant="outline">Save</AppButton>
  <AppButton variant="outline">Preview</AppButton>
  <AppButton variant="outline">Publish</AppButton>
</AppButtonGroup>

{/* Secondary */}
<AppButtonGroup>
  <AppButton variant="secondary">Save</AppButton>
  <AppButton variant="secondary">Preview</AppButton>
  <AppButton variant="secondary">Publish</AppButton>
</AppButtonGroup>`}
              filename="example.tsx"
            />
          </div>

          {/* Sizes */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Sizes</h3>
            <p className="text-sm text-muted-foreground">
              Control size via the{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">size</code>{" "}
              prop on each button inside the group.
            </p>
            <ComponentPreview
              preview={<ButtonGroupSizesPreview />}
              code={`<AppButtonGroup>
  <AppButton variant="outline" size="sm">Days</AppButton>
  <AppButton variant="outline" size="sm">Weeks</AppButton>
  <AppButton variant="outline" size="sm">Months</AppButton>
</AppButtonGroup>

<AppButtonGroup>
  <AppButton variant="outline">Days</AppButton>
  <AppButton variant="outline">Weeks</AppButton>
  <AppButton variant="outline">Months</AppButton>
</AppButtonGroup>

<AppButtonGroup>
  <AppButton variant="outline" size="lg">Days</AppButton>
  <AppButton variant="outline" size="lg">Weeks</AppButton>
  <AppButton variant="outline" size="lg">Months</AppButton>
</AppButtonGroup>`}
              filename="example.tsx"
            />
          </div>

          {/* Icon buttons */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Icon buttons</h3>
            <p className="text-sm text-muted-foreground">
              Use{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">size="icon"</code>{" "}
              for compact icon-only toolbar groups.
            </p>
            <ComponentPreview
              preview={<ButtonGroupIconsPreview />}
              code={`import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-react"

<AppButtonGroup>
  <AppButton variant="outline" size="icon">
    <Bold className="h-4 w-4" />
  </AppButton>
  <AppButton variant="outline" size="icon">
    <Italic className="h-4 w-4" />
  </AppButton>
  <AppButton variant="outline" size="icon">
    <Underline className="h-4 w-4" />
  </AppButton>
</AppButtonGroup>

<AppButtonGroup>
  <AppButton variant="outline" size="icon">
    <AlignLeft className="h-4 w-4" />
  </AppButton>
  <AppButton variant="outline" size="icon">
    <AlignCenter className="h-4 w-4" />
  </AppButton>
  <AppButton variant="outline" size="icon">
    <AlignRight className="h-4 w-4" />
  </AppButton>
</AppButtonGroup>`}
              filename="example.tsx"
            />
          </div>

          {/* Split button */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Split button</h3>
            <p className="text-sm text-muted-foreground">
              Pair a primary action button with a dropdown trigger to expose
              secondary options.
            </p>
            <ComponentPreview
              preview={<ButtonGroupSplitPreview />}
              code={`import { ChevronDown } from "lucide-react"

<AppButtonGroup>
  <AppButton>Publish</AppButton>
  <AppDropdownMenu>
    <AppDropdownMenuTrigger asChild>
      <AppButton size="icon">
        <ChevronDown className="h-4 w-4" />
      </AppButton>
    </AppDropdownMenuTrigger>
    <AppDropdownMenuContent align="end">
      <AppDropdownMenuItem>Save as draft</AppDropdownMenuItem>
      <AppDropdownMenuItem>Schedule</AppDropdownMenuItem>
      <AppDropdownMenuItem>Publish and share</AppDropdownMenuItem>
    </AppDropdownMenuContent>
  </AppDropdownMenu>
</AppButtonGroup>`}
              filename="example.tsx"
            />
          </div>

          {/* Input integration */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Input integration</h3>
            <p className="text-sm text-muted-foreground">
              Any element that accepts{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">className</code>{" "}
              can be placed inside — inputs, buttons, or static spans for
              prefixes and suffixes.
            </p>
            <ComponentPreview
              preview={<ButtonGroupInputPreview />}
              code={`import { Search } from "lucide-react"

{/* Input + Button */}
<AppButtonGroup>
  <AppInput placeholder="Search…" />
  <AppButton variant="outline">
    <Search className="h-4 w-4" />
  </AppButton>
</AppButtonGroup>

{/* Static prefix + Input */}
<AppButtonGroup>
  <span className="inline-flex items-center border border-input bg-muted px-3 text-sm text-muted-foreground">
    https://
  </span>
  <AppInput placeholder="example.com" />
</AppButtonGroup>

{/* Input + Static suffix */}
<AppButtonGroup>
  <AppInput placeholder="0.00" type="number" />
  <span className="inline-flex items-center border border-input bg-muted px-3 text-sm text-muted-foreground">
    USD
  </span>
</AppButtonGroup>`}
              filename="example.tsx"
            />
          </div>
        </div>

        {/* How it works */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            How it works
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppButtonGroup
            </code>{" "}
            uses CSS child selectors to automatically:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm leading-7">
            <li>Remove all border radii from inner children</li>
            <li>Restore <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">rounded-l-md</code> on the first child</li>
            <li>Restore <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">rounded-r-md</code> on the last child</li>
            <li>Remove the right border on all but the last child to avoid double borders</li>
          </ul>
        </div>

        {/* API Reference */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppButtonGroup
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
                  <th className="px-4 py-3 text-left font-medium text-foreground">Prop</th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">Type</th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  {
                    prop: "className",
                    type: "string",
                    description: "Additional Tailwind classes merged via cn(). Applied after base styles.",
                  },
                ].map(({ prop, type, description }) => (
                  <tr key={prop}>
                    <td className="px-4 py-3 font-mono text-xs text-foreground">{prop}</td>
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{type}</td>
                    <td className="px-4 py-3 text-muted-foreground">{description}</td>
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
            filename="src/components/primitives/AppButtonGroup.tsx"
            code={`import * as React from "react"
import { cn } from "@/lib/utils"

function AppButtonGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex [&>*]:rounded-none [&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md [&>*:not(:last-child)]:border-r-0",
        className
      )}
      {...props}
    />
  )
}

export { AppButtonGroup }`}
          />
        </div>
      </section>
    </article>
  );
}
