import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { AvatarDefaultPreview } from "@/components/previews/avatar-preview";

export const metadata: Metadata = { title: "Avatar" };

export default function AvatarPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Avatar</h1>
        <p className="text-lg text-muted-foreground">An image element with fallback support.</p>
      </div>
      <ComponentPreview preview={<AvatarDefaultPreview />} code={`import { AppAvatar, AppAvatarImage, AppAvatarFallback } from "@/components/primitives/AppAvatar"

export function Example() {
  return (
    <AppAvatar>
      <AppAvatarImage src="https://github.com/shadcn.png" />
      <AppAvatarFallback>CN</AppAvatarFallback>
    </AppAvatar>
  )
}`} filename="example.tsx" />
      <hr className="border-border my-10" />
      <section className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Installation</h2>
          <CodeBlock language="bash" code="npx viana-kit add avatar" />
        </div>
      </section>
    </article>
  );
}
