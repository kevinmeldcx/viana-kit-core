import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { InputDefaultPreview } from "@/components/previews/input-preview";

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
          A form input field. Use it to collect user input text.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<InputDefaultPreview />}
        code={`import { AppInput } from "@viana/ui"

export function Example() {
  return <AppInput placeholder="Enter text..." />
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-input-v1
        related_components: ["AppInput"]
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
            Add the Input component to your project using the Viana CLI. This
            copies the source files directly into your repository and installs
            any required dependencies.
          </p>
          <CodeBlock language="bash" code="npx viana-kit add input" />
          <p className="text-muted-foreground leading-7">
            This will create two files in your project:
          </p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-0.5">–</span>
              <code className="font-mono text-foreground">
                src/components/ui/input.tsx
              </code>
              <span>— the base shadcn/ui primitive (do not modify)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5">–</span>
              <code className="font-mono text-foreground">
                src/components/primitives/AppInput.tsx
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
            code={`import { AppInput } from "@viana/ui"AppInput"`}
          />
        </div>

        {/* Usage */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Usage
          </h2>
          <p className="text-muted-foreground leading-7">
            The Input component accepts all standard HTML input attributes.
          </p>
          <ComponentPreview
            preview={<InputDefaultPreview />}
            code={`<AppInput type="text" placeholder="Enter text..." />
<AppInput type="email" placeholder="Enter email..." />
<AppInput type="password" placeholder="Enter password..." />`}
          />
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
                  <th className="px-4 py-3 text-left font-medium text-foreground">
                    Prop
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  {
                    prop: "placeholder",
                    type: "string",
                    description: "Placeholder text to display when empty.",
                  },
                  {
                    prop: "type",
                    type: '"text" | "email" | "password" | "number" | "tel" | "url"',
                    description: "The input type.",
                  },
                  {
                    prop: "disabled",
                    type: "boolean",
                    description: "Whether the input is disabled.",
                  },
                  {
                    prop: "className",
                    type: "string",
                    description:
                      "Additional Tailwind classes merged via cn().",
                  },
                ].map(({ prop, type, description }) => (
                  <tr key={prop}>
                    <td className="px-4 py-3 font-mono text-xs text-foreground">
                      {prop}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                      {type}
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