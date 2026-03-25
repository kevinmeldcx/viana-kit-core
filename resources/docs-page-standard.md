# Docs Page Standard — Viana Kit Core

This document defines the canonical structure every component docs page must follow.
AI agents must read this fully before editing or creating any file under
`apps/docs/src/app/docs/components/`.

---

## Reference pages

Use these two pages as the gold standard:

- `apps/docs/src/app/docs/components/badge/page.tsx` — simple component, no extra sections
- `apps/docs/src/app/docs/components/button/page.tsx` — component with extra sections (Sizes, Disabled, etc.)

When in doubt, open one of these files and match the exact JSX structure.

---

## Section order

Every page must follow this order exactly:

1. **Page header** (breadcrumb + title + description)
2. **Main preview** (ComponentPreview with default example)
3. **Divider + canonical comment**
4. Inside `<section>`:
   1. **Import**
   2. **Variants** _(skip entirely if the component has no variants)_
   3. **[Extra sections]** _(Sizes, Disabled, Rendering as a link, etc. — add as many as needed)_
   4. **API Reference**
   5. **Source**

> **Installation section: do not include.** This feature is not yet available. Remove it from any page that currently has it.

---

## File-level boilerplate

Every `page.tsx` must start with these imports — adjust preview imports per component:

```tsx
import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import {
  AppFooDefaultPreview,
  // ...other previews as needed
} from "@/components/previews/appfoo-preview";

export const metadata: Metadata = {
  title: "ComponentName",
};

export default function ComponentNamePage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* ... */}
    </article>
  );
}
```

---

## Section 1 — Page header

```tsx
{/* Header */}
<div className="mb-8 space-y-2">
  <p className="text-sm font-medium text-primary">Components</p>
  <h1 className="text-3xl font-bold tracking-tight text-foreground">
    Component Name
  </h1>
  <p className="text-lg text-muted-foreground">
    One or two sentence description of what the component does and when to use it.
  </p>
</div>
```

---

## Section 2 — Main preview

Shows the simplest possible working example of the component.

```tsx
{/* Main preview */}
<ComponentPreview
  preview={<AppFooDefaultPreview />}
  code={`import { AppFoo } from "@/components/primitives/AppFoo"

export function Example() {
  return <AppFoo>Content</AppFoo>
}`}
  filename="example.tsx"
/>
```

**Rules:**
- `filename` is always `"example.tsx"`
- Import path is always `@/components/primitives/AppFoo` — never `@viana/ui`
- If the component exports multiple sub-parts (e.g. `AppCard`, `AppCardHeader`), include all of them in the import
- The example must be a complete, copy-pasteable function

---

## Divider + canonical comment

Place this between the main preview and the `<section>` block. Every page must have it.

```tsx
<hr className="border-border my-10" />

{/*
  canonical_id: component-appfoo-v1
  related_components: ["AppFoo"]
  platform_tags: ["web"]
  enforcement_level: strict
*/}
```

**Rules for `canonical_id`:** `component-` + lowercase component name + `-v1`
**Rules for `related_components`:** list every exported App* name from the primitive file

---

## Section 3 — Import

Always the first section inside `<section className="space-y-10">`.

```tsx
{/* Import */}
<div className="space-y-4">
  <h2 className="text-xl font-semibold tracking-tight text-foreground">
    Import
  </h2>
  <CodeBlock
    language="tsx"
    code={`import { AppFoo } from "@/components/primitives/AppFoo"`}
  />
</div>
```

**Rules:**
- Import path is always `@/components/primitives/AppFoo`
- If the component exports multiple parts, include all of them:
  ```
  import { AppFoo, AppFooHeader, AppFooContent } from "@/components/primitives/AppFoo"
  ```
- No `language` prop needed if `language="tsx"` is the default — but include it explicitly for clarity

---

## Section 4 — Variants _(conditional)_

Include this section only if the component has a `variant` prop. Skip it entirely for components like `Input`, `Separator`, `AspectRatio`.

```tsx
{/* Variants */}
<div className="space-y-4">
  <h2 className="text-xl font-semibold tracking-tight text-foreground">
    Variants
  </h2>
  <p className="text-muted-foreground leading-7">
    Use the{" "}
    <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
      variant
    </code>{" "}
    prop to change the visual style.
  </p>
  <ComponentPreview
    preview={<AppFooVariantsPreview />}
    code={`<AppFoo variant="default">Default</AppFoo>
<AppFoo variant="secondary">Secondary</AppFoo>`}
  />
  <div className="overflow-hidden rounded-lg border border-border text-sm">
    <table className="w-full">
      <thead>
        <tr className="border-b border-border bg-muted/50">
          <th className="px-4 py-2.5 text-left font-medium text-foreground">
            Variant
          </th>
          <th className="px-4 py-2.5 text-left font-medium text-foreground">
            When to use
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-border">
        {[
          ["default", "Description of when to use this variant."],
          ["secondary", "Description of when to use this variant."],
        ].map(([variant, description]) => (
          <tr key={variant}>
            <td className="px-4 py-2.5 font-mono text-xs text-foreground">
              {variant}
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
```

---

## Section 5 — Extra sections _(optional, encouraged)_

After Variants and before API Reference, add as many extra sections as are useful. Each extra section documents a specific prop, behavior, or usage pattern.

**Common examples:** Sizes, Disabled, Rendering as a link, Controlled vs uncontrolled, With label, With form, etc.

A section with a live preview:

```tsx
{/* Sizes */}
<div className="space-y-4">
  <h2 className="text-xl font-semibold tracking-tight text-foreground">
    Sizes
  </h2>
  <p className="text-muted-foreground leading-7">
    Use the{" "}
    <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
      size
    </code>{" "}
    prop to adjust the size.
  </p>
  <ComponentPreview
    preview={<AppFooSizesPreview />}
    code={`<AppFoo size="sm">Small</AppFoo>
<AppFoo size="default">Default</AppFoo>
<AppFoo size="lg">Large</AppFoo>`}
  />
</div>
```

A section with only a code block (no live preview):

```tsx
{/* Rendering as a link */}
<div className="space-y-4">
  <h2 className="text-xl font-semibold tracking-tight text-foreground">
    Rendering as a link
  </h2>
  <p className="text-muted-foreground leading-7">
    Explanation of this usage pattern.
  </p>
  <CodeBlock
    language="tsx"
    code={`import Link from "next/link"
import { AppFoo } from "@/components/primitives/AppFoo"

export function Example() {
  return (
    <AppFoo asChild>
      <Link href="/page">Go to page</Link>
    </AppFoo>
  )
}`}
  />
</div>
```

---

## Section 6 — API Reference

Documents every meaningful prop. Always the last section before Source.

```tsx
{/* API Reference */}
<div className="space-y-4">
  <h2 className="text-xl font-semibold tracking-tight text-foreground">
    API Reference
  </h2>
  <p className="text-muted-foreground leading-7">
    <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
      AppFoo
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
          <th className="px-4 py-3 text-left font-medium text-foreground">Default</th>
          <th className="px-4 py-3 text-left font-medium text-foreground">Description</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-border">
        {[
          {
            prop: "variant",
            type: '"default" | "secondary"',
            default: '"default"',
            description: "Visual style of the component.",
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
```

**Rules:**
- Always include `className` as the last prop row with the standard description
- Use `"—"` (em dash) for props with no default
- The intro paragraph must name the component and what it extends (`<button>`, `<div>`, `<span>`, or the Radix UI primitive name)
- If a component has multiple exported parts (e.g. AppCard + AppCardHeader), add a separate API table for each

---

## Section 7 — Source

Always the last section. Shows the actual content of `AppFoo.tsx` in viana-kit.

```tsx
{/* Source */}
<div className="space-y-4">
  <h2 className="text-xl font-semibold tracking-tight text-foreground">
    Source
  </h2>
  <CodeBlock
    filename="src/components/primitives/AppFoo.tsx"
    code={`import { Foo } from "@/components/ui/foo"

const AppFoo = Foo

export { AppFoo }`}
  />
</div>
```

**Rules:**
- `filename` is always `src/components/primitives/AppFoo.tsx`
- The code shown must be the actual current source of the primitive in `packages/ui/src/components/primitives/AppFoo.tsx`
- Read the real file first — do not guess the content

---

## Import path rules (apply everywhere)

| Context | Correct path | Never use |
|---|---|---|
| Code strings shown to users | `@/components/primitives/AppFoo` | `@viana/ui` |
| Preview file runtime imports | `@viana/ui` | `@/components/primitives/AppFoo` |
| Source block in docs | `@/components/ui/foo` for shadcn base | `@radix-ui/*` |

---

## Checklist before finishing a page

- [ ] No `Installation` section exists on the page
- [ ] Main preview has `filename="example.tsx"`
- [ ] All code strings use `@/components/primitives/AppFoo` (not `@viana/ui`)
- [ ] Canonical comment is present after the `<hr />`
- [ ] `Variants` section exists only if the component has a `variant` prop
- [ ] API Reference table has a `className` row as the last entry
- [ ] Source block shows the real content of the primitive file
- [ ] Page builds without TypeScript errors (`npx turbo run build --filter=@viana/docs`)
