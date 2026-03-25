import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { AspectRatioDefaultPreview } from "@/components/previews/aspect-ratio-preview";

export const metadata: Metadata = {
  title: "Aspect Ratio",
};

export default function AspectRatioPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Aspect Ratio
        </h1>
        <p className="text-lg text-muted-foreground">
          Constrains content to a specific aspect ratio. Use it to ensure
          images, videos, or embeds maintain their proportions across all screen
          sizes.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<AspectRatioDefaultPreview />}
        code={`import { AppAspectRatio } from "@/components/primitives/AppAspectRatio"

export function Example() {
  return (
    <div className="w-full max-w-sm">
      <AppAspectRatio ratio={16 / 9}>
        <img
          src="/placeholder.jpg"
          alt="Landscape photo"
          className="h-full w-full rounded-md object-cover"
        />
      </AppAspectRatio>
    </div>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-aspect-ratio-v1
        related_components: ["AppAspectRatio"]
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
            code={`import { AppAspectRatio } from "@/components/primitives/AppAspectRatio"`}
          />
        </div>

        {/* Common ratios */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Common ratios
          </h2>
          <p className="text-muted-foreground leading-7">
            Pass any numeric expression to the{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              ratio
            </code>{" "}
            prop. Using division makes the intent clear at a glance.
          </p>
          <div className="overflow-hidden rounded-lg border border-border text-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-2.5 text-left font-medium text-foreground">
                    Ratio
                  </th>
                  <th className="px-4 py-2.5 text-left font-medium text-foreground">
                    Value
                  </th>
                  <th className="px-4 py-2.5 text-left font-medium text-foreground">
                    Common use
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["16 / 9", "1.777…", "Video, hero images, wide banners"],
                  ["4 / 3", "1.333…", "Classic photo, older displays"],
                  ["1 / 1", "1", "Square avatars, thumbnails"],
                  ["3 / 2", "1.5", "Standard photography"],
                  ["9 / 16", "0.5625", "Mobile / portrait video"],
                ].map(([ratio, value, use]) => (
                  <tr key={ratio}>
                    <td className="px-4 py-2.5 font-mono text-xs text-foreground">
                      {ratio}
                    </td>
                    <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">
                      {value}
                    </td>
                    <td className="px-4 py-2.5 text-muted-foreground">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <CodeBlock
            language="tsx"
            code={`{/* 16:9 video */}
<AppAspectRatio ratio={16 / 9}>
  <video src="/intro.mp4" className="h-full w-full object-cover" />
</AppAspectRatio>

{/* Square thumbnail */}
<AppAspectRatio ratio={1 / 1}>
  <img src="/avatar.jpg" alt="Avatar" className="h-full w-full object-cover" />
</AppAspectRatio>`}
          />
        </div>

        {/* API Reference */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppAspectRatio
            </code>{" "}
            extends the Radix UI{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AspectRatio
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
                    prop: "ratio",
                    type: "number",
                    default: "1",
                    description:
                      "The desired aspect ratio, expressed as width divided by height (e.g. 16/9).",
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
            filename="src/components/primitives/AppAspectRatio.tsx"
            code={`import { AspectRatio } from "@/components/ui/aspect-ratio"

const AppAspectRatio = AspectRatio

export { AppAspectRatio }`}
          />
        </div>
      </section>
    </article>
  );
}
