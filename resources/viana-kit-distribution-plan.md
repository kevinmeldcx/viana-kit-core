# Viana Kit: Distribution Repository Plan

## Purpose

`viana-kit` is the **distribution repository** that product teams clone to start new projects and keep synchronized with the latest branded components. It is not a one-time scaffold — it is a living connection between the design system and every product built on top of it.

When the design system team updates a component in `viana-kit-core`, product developers run a single CLI command and the updated files are overwritten in their project. Existing projects benefit from brand updates just as much as new ones. This is the core value proposition.

---

## Relationship to `viana-kit-core`

| | `viana-kit-core` | `viana-kit` |
|---|---|---|
| **Audience** | Design system engineers | Product developers |
| **Purpose** | Build and govern the system | Build products on top of it |
| **Structure** | Monorepo (Turborepo) | Standalone Next.js app |
| **Component files** | Authoritative source | Overwritable mirror |
| **Who commits** | Design system team | Product developers |

---

## Repository Structure

```
viana-kit/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Product developers build here
│   │   ├── page.tsx            ← Sample home page
│   │   └── globals.css         ← Inlined design tokens + Tailwind v4
│   ├── components/
│   │   ├── ui/                 ← ⛔ READ ONLY — managed by viana-kit CLI
│   │   │   ├── button.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── label.tsx
│   │   └── primitives/         ← ⛔ READ ONLY — managed by viana-kit CLI
│   │       ├── AppButton.tsx
│   │       ├── AppBadge.tsx
│   │       ├── AppCard.tsx
│   │       ├── AppInput.tsx
│   │       └── AppLabel.tsx
│   └── lib/
│       └── utils.ts
├── .gitignore
├── .vianarc                    ← Tracks installed component versions
├── components.json             ← shadcn-compatible registry config
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

---

## Component File Copy Strategy

When files are copied from `viana-kit-core` into this repo, two things change:

### 1. Import paths in `ui/` components
In `viana-kit-core`, these use relative imports (`../../lib/utils`) because the package gets transpiled into other apps. In `viana-kit`, the files live inside a proper Next.js app so they use the standard `@/` alias:

```ts
// viana-kit-core (relative — required for transpile)
import { cn } from "../../lib/utils"

// viana-kit distribution (alias — standard Next.js)
import { cn } from "@/lib/utils"
```

### 2. Import paths in `primitives/` components
Same principle:

```ts
// viana-kit-core
import { Button } from "../ui/button"

// viana-kit distribution
import { Button } from "@/components/ui/button"
```

This transformation happens automatically when the CLI copies files. For this initial manual setup, we apply the changes by hand.

---

## CSS / Design Tokens Setup

`viana-kit` is standalone — it cannot import `@viana/tokens` as a package. The design tokens are **inlined directly** into `globals.css`. When tokens are updated in `viana-kit-core`, the CLI overwrites `globals.css` alongside the component files.

`globals.css` structure:

```css
@import "tailwindcss";
@source "./src/components";   /* scan ui/ and primitives/ for Tailwind classes */

/* === Viana Kit Design Tokens — do not edit, managed by viana-kit CLI === */
@custom-variant dark (&:is(.dark *));

:root {
  /* ...all token values inlined from packages/tokens/src/index.css... */
}

.dark {
  /* ...dark mode overrides... */
}

@theme inline {
  /* ...theme mappings... */
}

@layer base {
  * { @apply border-border outline-ring/50; }
  body { @apply bg-background text-foreground; }
}
```

Note: `@source "./src/components"` (relative to project root) ensures Tailwind scans the copied component files.

---

## Package Dependencies

```json
{
  "dependencies": {
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.577.0",
    "next": "16.2.1",
    "radix-ui": "^1.4.3",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "tailwind-merge": "^3.5.0",
    "tw-animate-css": "^1.4.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

These mirror the dependencies declared in `packages/ui/package.json` in the factory. When the factory adds a new dependency, the CLI update command should notify the developer.

---

## Version Tracking: `.vianarc`

A `.vianarc` JSON file tracks which version of each component is installed. This allows the CLI to know what is outdated.

```json
{
  "version": "0.1.0",
  "components": {
    "button": "0.1.0",
    "badge": "0.1.0",
    "card": "0.1.0",
    "input": "0.1.0",
    "label": "0.1.0"
  },
  "tokensVersion": "0.1.0"
}
```

This file is committed to the product repo and updated each time the developer runs the CLI.

---

## The Governance Rule (Enforced by Convention)

Two directories are treated as read-only by product developers:

- `src/components/ui/` — shadcn/ui base primitives, brand-adjusted
- `src/components/primitives/` — Viana Kit wrappers

Both directories should carry a comment header at the top of each file:

```ts
// ─────────────────────────────────────────────────────────────
// Managed by Viana Kit — do not modify this file directly.
// Run `npx viana-kit update <component>` to get the latest version.
// ─────────────────────────────────────────────────────────────
```

Product-specific customizations always go in a new file outside these directories using the wrapper pattern.

---

## Sample Home Page

`src/app/page.tsx` should demonstrate the components are working and show the governance rule in practice. It should:
- Render at least one of each component (AppButton, AppBadge, AppCard, AppInput, AppLabel)
- Include a comment pointing to the docs site
- Serve as a visual smoke test after running an update

---

## How Existing Projects Get Updates

This is the same flow for new AND existing projects:

```bash
# Update a specific component to the latest version from the registry
npx viana-kit update button

# Update all components at once
npx viana-kit update --all

# Check what is out of date
npx viana-kit status
```

The CLI (Phase 3) will:
1. Fetch the latest component files from the `viana-kit-core` registry
2. Overwrite files in `ui/` and `primitives/` (safe — they're read-only by convention)
3. Update `.vianarc` with the new versions
4. Warn if new npm dependencies are needed

Because `ui/` and `primitives/` are never modified by product developers, overwrites are always safe — zero merge conflicts.

---

## What Is NOT in This Repo

| What | Why |
|---|---|
| `src/components/blocks/` | Blocks are product-specific compositions. Developers create these themselves. |
| MCP server config | Phase 3 deliverable. |
| Viana CLI source | Phase 3. CLI lives in `viana-kit-core`, not here. |
| `@viana/tokens` package | Tokens are inlined into `globals.css` for portability. |

---

## Implementation Steps (Ordered)

1. Scaffold a new Next.js 16 app at `../viana-kit` (sibling to `viana-kit-core`)
2. Install all dependencies listed above
3. Set up `tsconfig.json` with `@/*` → `./src/*` path alias
4. Build `globals.css` by inlining the full token CSS from `packages/tokens/src/index.css` and adding `@source`
5. Copy `ui/` component files — apply `@/lib/utils` import fix
6. Copy `primitives/` component files — apply `@/components/ui/*` import fix
7. Copy `lib/utils.ts`
8. Add governance comment headers to all `ui/` and `primitives/` files
9. Create `.vianarc` with initial versions
10. Build sample `page.tsx` showing all components
11. Run `next build` to verify clean compile
12. Initialize git repo with an initial commit
13. Update `apps/docs` introduction page to reference the correct clone URL pattern

---

## Open Questions Before Executing

1. **Repository location** — should `viana-kit` live as a sibling directory to `viana-kit-core` locally, or should it be scaffolded inside `viana-kit-core` temporarily and moved? Sibling seems cleanest.
2. **Git remote** — do we set up a GitHub remote now or leave it local for testing?
3. **Node version** — same engine as `viana-kit-core` (Node 20)?
4. **Additional components** — the sidebar in `apps/docs` now lists Checkbox, Dialog, Hover Card, Popover, Progress, Radio Group, Select, Sheet, Switch, Textarea, Toggle, Tooltip. Should those be added to the factory (`packages/ui/`) before building the distribution repo, or ship the distribution with only the current 5?
