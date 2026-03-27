import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import {
  AvatarDefaultPreview,
  AvatarFallbackPreview,
  AvatarSizesPreview,
  AvatarGroupPreview,
  AvatarWithStatusPreview,
  AvatarWithTextPreview,
} from "@/components/previews/avatar-preview";

export const metadata: Metadata = {
  title: "Avatar",
};

export default function AvatarPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Avatar
        </h1>
        <p className="text-lg text-muted-foreground">
          An image element with a fallback for when the image fails to load.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<AvatarDefaultPreview />}
        code={`import { AppAvatar, AppAvatarImage, AppAvatarFallback } from "@/components/primitives/AppAvatar"

export function Example() {
  return (
    <AppAvatar>
      <AppAvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
      <AppAvatarFallback>CN</AppAvatarFallback>
    </AppAvatar>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-avatar-v1
        related_components: ["AppAvatar", "AppAvatarImage", "AppAvatarFallback"]
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
            code={`import { AppAvatar, AppAvatarImage, AppAvatarFallback } from "@/components/primitives/AppAvatar"`}
          />
        </div>

        {/* Examples */}
        <div className="space-y-8">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Examples
          </h2>

          {/* Fallback */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Fallback</h3>
            <p className="text-sm text-muted-foreground">
              When the image fails to load, <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">AppAvatarFallback</code> renders initials instead.
            </p>
            <ComponentPreview
              preview={<AvatarFallbackPreview />}
              code={`<AppAvatar>
  <AppAvatarImage src="/broken-image.png" alt="User" />
  <AppAvatarFallback>JD</AppAvatarFallback>
</AppAvatar>`}
              filename="example.tsx"
            />
          </div>

          {/* Sizes */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Sizes</h3>
            <p className="text-sm text-muted-foreground">
              Control size via <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">className</code> on <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">AppAvatar</code>.
            </p>
            <ComponentPreview
              preview={<AvatarSizesPreview />}
              code={`<AppAvatar className="h-6 w-6 text-xs">...</AppAvatar>
<AppAvatar className="h-8 w-8">...</AppAvatar>
<AppAvatar>...</AppAvatar>          {/* default: h-10 w-10 */}
<AppAvatar className="h-12 w-12">...</AppAvatar>
<AppAvatar className="h-16 w-16">...</AppAvatar>`}
              filename="example.tsx"
            />
          </div>

          {/* Group */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Group</h3>
            <p className="text-sm text-muted-foreground">
              Stack avatars using negative margin and a ring border to show a group of users.
            </p>
            <ComponentPreview
              preview={<AvatarGroupPreview />}
              code={`<div className="flex -space-x-2">
  <AppAvatar className="border-2 border-background">
    <AppAvatarImage src="..." alt="CN" />
    <AppAvatarFallback>CN</AppAvatarFallback>
  </AppAvatar>
  <AppAvatar className="border-2 border-background">
    <AppAvatarFallback>JD</AppAvatarFallback>
  </AppAvatar>
  <AppAvatar className="border-2 border-background">
    <AppAvatarFallback>AB</AppAvatarFallback>
  </AppAvatar>
</div>`}
              filename="example.tsx"
            />
          </div>

          {/* With status */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">With status</h3>
            <p className="text-sm text-muted-foreground">
              Wrap in a <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">relative</code> container and add an absolutely positioned dot.
            </p>
            <ComponentPreview
              preview={<AvatarWithStatusPreview />}
              code={`{/* Online */}
<div className="relative">
  <AppAvatar>
    <AppAvatarImage src="..." alt="User" />
    <AppAvatarFallback>CN</AppAvatarFallback>
  </AppAvatar>
  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-background" />
</div>

{/* Away */}
<div className="relative">
  <AppAvatar>...</AppAvatar>
  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-amber-400 ring-2 ring-background" />
</div>

{/* Offline */}
<div className="relative">
  <AppAvatar>...</AppAvatar>
  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-muted-foreground ring-2 ring-background" />
</div>`}
              filename="example.tsx"
            />
          </div>

          {/* With text */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">With text</h3>
            <p className="text-sm text-muted-foreground">
              Pair an avatar with a name and email for user identification rows.
            </p>
            <ComponentPreview
              preview={<AvatarWithTextPreview />}
              code={`<div className="flex items-center gap-3">
  <AppAvatar>
    <AppAvatarImage src="..." alt="shadcn" />
    <AppAvatarFallback>CN</AppAvatarFallback>
  </AppAvatar>
  <div>
    <p className="text-sm font-medium leading-none">shadcn</p>
    <p className="text-xs text-muted-foreground mt-1">m@example.com</p>
  </div>
</div>`}
              filename="example.tsx"
            />
          </div>
        </div>

        {/* API Reference */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>

          {/* AppAvatar */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">AppAvatar</h3>
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-4 py-3 text-left font-medium text-foreground">Prop</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Type</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Default</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { prop: "className", type: "string", default: "—", description: "Use to control size (h-* w-*) and other overrides. Merged via cn()." },
                  ].map(({ prop, type, default: def, description }) => (
                    <tr key={prop}>
                      <td className="px-4 py-3 font-mono text-xs text-foreground">{prop}</td>
                      <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{type}</td>
                      <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{def}</td>
                      <td className="px-4 py-3 text-muted-foreground">{description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* AppAvatarImage */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">AppAvatarImage</h3>
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-4 py-3 text-left font-medium text-foreground">Prop</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Type</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Default</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { prop: "src", type: "string", default: "—", description: "The URL of the image to display." },
                    { prop: "alt", type: "string", default: "—", description: "Alternative text for the image." },
                  ].map(({ prop, type, default: def, description }) => (
                    <tr key={prop}>
                      <td className="px-4 py-3 font-mono text-xs text-foreground">{prop}</td>
                      <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{type}</td>
                      <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{def}</td>
                      <td className="px-4 py-3 text-muted-foreground">{description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* AppAvatarFallback */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">AppAvatarFallback</h3>
            <p className="text-sm text-muted-foreground">
              Renders when the image is missing or fails to load. Place initials or an icon inside. Accepts all{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">{"<span>"}</code>{" "}
              attributes including <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">className</code>.
            </p>
          </div>
        </div>

        {/* Source */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Source
          </h2>
          <CodeBlock
            filename="src/components/primitives/AppAvatar.tsx"
            code={`"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function AppAvatar(props: React.ComponentProps<typeof Avatar>) {
  return <Avatar {...props} />
}

function AppAvatarImage(props: React.ComponentProps<typeof AvatarImage>) {
  return <AvatarImage {...props} />
}

function AppAvatarFallback(props: React.ComponentProps<typeof AvatarFallback>) {
  return <AvatarFallback {...props} />
}

export { AppAvatar, AppAvatarImage, AppAvatarFallback }`}
          />
        </div>
      </section>
    </article>
  );
}
