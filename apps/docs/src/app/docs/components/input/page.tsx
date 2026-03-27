import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import {
  InputDefaultPreview,
  InputEmailPreview,
  InputPasswordPreview,
  InputWithDescriptionPreview,
  InputRequiredPreview,
  InputInvalidPreview,
  InputGridPreview,
  InputWithBadgePreview,
  InputGroupPreview,
  InputButtonGroupPreview,
  InputWithIconPreview,
  InputDisabledPreview,
  InputFilePreview,
} from "@/components/previews/input-preview";

export const metadata: Metadata = {
  title: "Input",
};

export default function InputPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Input
        </h1>
        <p className="text-lg text-muted-foreground">
          A form input field. Pair with{" "}
          <a href="/docs/components/field" className="text-primary underline underline-offset-4">
            Field
          </a>{" "}
          to add a label, description, or error message.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<InputDefaultPreview />}
        code={`import { AppInput } from "@/components/primitives/AppInput"

export function Example() {
  return <AppInput placeholder="Enter text..." />
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-input-v1
        related_components: ["AppInput", "AppField", "AppFieldLabel", "AppFieldDescription", "AppFieldError"]
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
            code={`import { AppInput } from "@/components/primitives/AppInput"`}
          />
        </div>

        {/* Examples */}
        <div className="space-y-8">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Examples
          </h2>

          {/* Email */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Email</h3>
            <ComponentPreview
              preview={<InputEmailPreview />}
              code={`<AppInput type="email" placeholder="you@example.com" />`}
              filename="example.tsx"
            />
          </div>

          {/* Password */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Password with toggle</h3>
            <ComponentPreview
              preview={<InputPasswordPreview />}
              code={`import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export function Example() {
  const [show, setShow] = useState(false)
  return (
    <div className="relative">
      <AppInput type={show ? "text" : "password"} placeholder="Password" className="pr-10" />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
      >
        {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </div>
  )
}`}
              filename="example.tsx"
            />
          </div>

          {/* With icon */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">With icon</h3>
            <ComponentPreview
              preview={<InputWithIconPreview />}
              code={`import { Search } from "lucide-react"

<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
  <AppInput placeholder="Search..." className="pl-9" />
</div>`}
              filename="example.tsx"
            />
          </div>

          {/* Field — with description */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Field — with description</h3>
            <ComponentPreview
              preview={<InputWithDescriptionPreview />}
              code={`import { AppField, AppFieldLabel, AppFieldDescription } from "@/components/primitives/AppField"

<AppField>
  <AppFieldLabel htmlFor="name">Full name</AppFieldLabel>
  <AppInput id="name" placeholder="Jane Doe" />
  <AppFieldDescription>This is your public display name.</AppFieldDescription>
</AppField>`}
              filename="example.tsx"
            />
          </div>

          {/* Field — required */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Field — required</h3>
            <ComponentPreview
              preview={<InputRequiredPreview />}
              code={`<AppField>
  <AppFieldLabel htmlFor="email" required>Email address</AppFieldLabel>
  <AppInput id="email" type="email" placeholder="you@example.com" />
  <AppFieldDescription>We will never share your email.</AppFieldDescription>
</AppField>`}
              filename="example.tsx"
            />
          </div>

          {/* Field — invalid */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Field — invalid</h3>
            <ComponentPreview
              preview={<InputInvalidPreview />}
              code={`import { AppFieldError } from "@/components/primitives/AppField"

<AppField>
  <AppFieldLabel htmlFor="username">Username</AppFieldLabel>
  <AppInput
    id="username"
    placeholder="johndoe"
    className="border-destructive focus-visible:ring-destructive"
  />
  <AppFieldError>Username must be at least 3 characters.</AppFieldError>
</AppField>`}
              filename="example.tsx"
            />
          </div>

          {/* Grid */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Grid</h3>
            <ComponentPreview
              preview={<InputGridPreview />}
              code={`<div className="grid grid-cols-2 gap-4">
  <AppField>
    <AppFieldLabel htmlFor="first-name">First name</AppFieldLabel>
    <AppInput id="first-name" placeholder="Jane" />
  </AppField>
  <AppField>
    <AppFieldLabel htmlFor="last-name">Last name</AppFieldLabel>
    <AppInput id="last-name" placeholder="Doe" />
  </AppField>
  <AppField className="col-span-2">
    <AppFieldLabel htmlFor="email">Email</AppFieldLabel>
    <AppInput id="email" type="email" placeholder="you@example.com" />
  </AppField>
</div>`}
              filename="example.tsx"
            />
          </div>

          {/* With badge */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">With badge</h3>
            <ComponentPreview
              preview={<InputWithBadgePreview />}
              code={`import { AppBadge } from "@/components/primitives/AppBadge"

<AppField>
  <div className="flex items-center gap-2">
    <AppFieldLabel htmlFor="api-key">API Key</AppFieldLabel>
    <AppBadge variant="secondary">Optional</AppBadge>
  </div>
  <AppInput id="api-key" placeholder="sk-••••••••••••" />
  <AppFieldDescription>Leave blank to use the default key.</AppFieldDescription>
</AppField>`}
              filename="example.tsx"
            />
          </div>

          {/* Input group */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Input group</h3>
            <ComponentPreview
              preview={<InputGroupPreview />}
              code={`<AppField>
  <AppFieldLabel htmlFor="website">Website</AppFieldLabel>
  <div className="flex">
    <span className="inline-flex items-center rounded-l-md border border-r-0 border-input bg-muted px-3 text-sm text-muted-foreground">
      https://
    </span>
    <AppInput id="website" placeholder="example.com" className="rounded-l-none" />
  </div>
</AppField>`}
              filename="example.tsx"
            />
          </div>

          {/* Button group */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Button group</h3>
            <ComponentPreview
              preview={<InputButtonGroupPreview />}
              code={`import { AppButtonGroup } from "@/components/primitives/AppButtonGroup"

<AppField>
  <AppFieldLabel htmlFor="search">Search</AppFieldLabel>
  <AppButtonGroup>
    <AppInput id="search" placeholder="Type to search..." />
    <AppButton variant="outline">Search</AppButton>
  </AppButtonGroup>
</AppField>`}
              filename="example.tsx"
            />
          </div>

          {/* File */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">File</h3>
            <ComponentPreview
              preview={<InputFilePreview />}
              code={`<AppField>
  <AppFieldLabel htmlFor="file">Attachment</AppFieldLabel>
  <AppInput id="file" type="file" />
</AppField>`}
              filename="example.tsx"
            />
          </div>

          {/* Disabled */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Disabled</h3>
            <ComponentPreview
              preview={<InputDisabledPreview />}
              code={`<AppInput placeholder="Disabled input" disabled />`}
              filename="example.tsx"
            />
          </div>
        </div>

        {/* API Reference */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppInput
            </code>{" "}
            extends all native{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              {"<input>"}
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
                    prop: "type",
                    type: '"text" | "email" | "password" | "number" | "tel" | "url" | "file" | "search"',
                    description: "The input type. Defaults to text.",
                  },
                  {
                    prop: "placeholder",
                    type: "string",
                    description: "Placeholder text displayed when the field is empty.",
                  },
                  {
                    prop: "disabled",
                    type: "boolean",
                    description: "Prevents interaction and applies a muted visual style.",
                  },
                  {
                    prop: "className",
                    type: "string",
                    description: "Additional Tailwind classes merged via cn(). Applied after base styles, so it always wins.",
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
            filename="src/components/primitives/AppInput.tsx"
            code={`import { Input } from "@/components/ui/input"

function AppInput(props: React.ComponentProps<typeof Input>) {
  return <Input {...props} />
}

export { AppInput }`}
          />
        </div>
      </section>
    </article>
  );
}
