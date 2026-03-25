import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { CardDefaultPreview } from "@/components/previews/card-preview";

export const metadata: Metadata = {
  title: "Card",
};

export default function CardPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Card
        </h1>
        <p className="text-lg text-muted-foreground">
          A flexible content container. Use it to group related content and
          actions.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<CardDefaultPreview />}
        code={`import {
  AppCard,
  AppCardHeader,
  AppCardTitle,
  AppCardDescription,
  AppCardContent,
  AppCardFooter,
} from "@/components/primitives/AppCard"

export function Example() {
  return (
    <AppCard>
      <AppCardHeader>
        <AppCardTitle>Card Title</AppCardTitle>
        <AppCardDescription>Description text</AppCardDescription>
      </AppCardHeader>
      <AppCardContent>
        <p>Content goes here</p>
      </AppCardContent>
      <AppCardFooter>
        <p>Footer content</p>
      </AppCardFooter>
    </AppCard>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-card-v1
        related_components: ["AppCard", "AppCardHeader", "AppCardTitle", "AppCardDescription", "AppCardContent", "AppCardFooter"]
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
            Add the Card component to your project using the Viana CLI. This
            copies the source files directly into your repository and installs
            any required dependencies.
          </p>
          <CodeBlock language="bash" code="npx viana-kit add card" />
          <p className="text-muted-foreground leading-7">
            This will create two files in your project:
          </p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-0.5">–</span>
              <code className="font-mono text-foreground">
                src/components/ui/card.tsx
              </code>
              <span>— the base shadcn/ui primitive (do not modify)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5">–</span>
              <code className="font-mono text-foreground">
                src/components/primitives/AppCard.tsx
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
            code={`import {
  AppCard,
  AppCardHeader,
  AppCardTitle,
  AppCardDescription,
  AppCardContent,
  AppCardFooter,
} from "@/components/primitives/AppCard"`}
          />
        </div>

        {/* Sub-components */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Sub-components
          </h2>
          <p className="text-muted-foreground leading-7">
            The Card component is made up of several sub-components:
          </p>
          <div className="overflow-hidden rounded-lg border border-border text-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-2.5 text-left font-medium text-foreground">
                    Component
                  </th>
                  <th className="px-4 py-2.5 text-left font-medium text-foreground">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["AppCard", "The main container component"],
                  ["AppCardHeader", "Container for header content"],
                  ["AppCardTitle", "Title text element"],
                  ["AppCardDescription", "Description text element"],
                  ["AppCardAction", "Action buttons or links"],
                  ["AppCardContent", "Main content area"],
                  ["AppCardFooter", "Footer content area"],
                ].map(([component, description]) => (
                  <tr key={component}>
                    <td className="px-4 py-2.5 font-mono text-xs text-foreground">
                      {component}
                    </td>
                    <td className="px-4 py-2.5 text-muted-foreground">
                      {description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* API Reference */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppCard
            </code>{" "}
            and its sub-components extend their underlying shadcn/ui
            components.
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
                    prop: "className",
                    type: "string",
                    description:
                      "Additional Tailwind classes merged via cn(). Prefer the wrapper pattern for reusable overrides.",
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
            filename="src/components/primitives/AppCard.tsx"
            code={`import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

function AppCard(props: React.ComponentProps<typeof Card>) {
  return <Card {...props} />
}

// ... other sub-components follow the same pattern

export {
  AppCard,
  AppCardHeader,
  AppCardTitle,
  AppCardDescription,
  AppCardAction,
  AppCardContent,
  AppCardFooter,
}`}
          />
        </div>
      </section>
    </article>
  );
}