# Viana Kit Core — AI Agent Guide

This is the **source repo** for the Viana Kit design system. Read this fully before writing any code.

> **Agent compatibility:** This guide is read by all AI coding agents.
> - Claude: via `CLAUDE.md` → `@AGENTS.md`
> - Gemini: via `GEMINI.md` → reads this file
> - Other agents (Codex, Copilot, etc.): read `AGENTS.md` directly

---

## What this repo is

`viana-kit-core` is maintained by the Viana Kit design team. It is the source of truth for:
- All shadcn/ui base components (`packages/ui/src/components/ui/`)
- All Viana Kit primitive wrappers (`packages/ui/src/components/primitives/`)
- Design tokens (`packages/tokens/`)
- The documentation site (`apps/docs/`)

Changes made here are synced downstream to the `viana-kit` distribution repo via `npm run sync` — but only after review and approval. See the [development workflow](#development-workflow) below.

---

## Repo structure

```
viana-kit-core/
├── packages/
│   ├── ui/                        ← Component library
│   │   └── src/
│   │       ├── components/
│   │       │   ├── ui/            ← Layer 1: shadcn/ui base components
│   │       │   └── primitives/    ← Layer 2: Viana Kit App* wrappers
│   │       └── rules/             ← AI-readable usage rules per component
│   └── tokens/                    ← Design tokens (CSS variables, Tailwind config)
├── apps/
│   └── docs/                      ← Documentation site (Next.js)
│       └── src/
│           ├── app/docs/
│           │   └── components/    ← One page per component
│           └── components/
│               └── previews/      ← Live preview components for docs
└── scripts/
    └── sync.js                    ← Syncs primitives to viana-kit distribution repo
```

---

## The three-layer component architecture

```
packages/ui/src/components/
├── ui/          ← Layer 1: shadcn/ui base. Full styling logic, CVA variants, Radix wiring.
└── primitives/  ← Layer 2: Viana Kit App* wrappers. Minimal re-exports with brand defaults.
```

**Rules for `ui/` files:**
- These are shadcn/ui components. Keep them as close to the shadcn source as possible.
- They may use relative imports (`../../lib/utils`) and direct Radix imports — that is correct for this layer.
- Do not add product-specific logic here.

**Rules for `primitives/` files:**
- Each file must be a minimal wrapper — re-export the corresponding `ui/` component under an `App*` name.
- The only acceptable addition is a small `className` override via `cn()` (e.g. `rounded-md`).
- **Never** import directly from `@radix-ui/*` in a primitive — always go through `../ui/`.
- **Never** re-implement CVA variants, context, or logic that already exists in `ui/`.
- Use relative imports: `../../lib/utils` and `../ui/componentname`.

**Correct primitive pattern:**
```tsx
import { Button, buttonVariants } from "../ui/button"
import type { VariantProps } from "class-variance-authority"

type AppButtonProps = React.ComponentProps<typeof Button> &
  VariantProps<typeof buttonVariants>

function AppButton({ className, ...props }: AppButtonProps) {
  return <Button className={cn("rounded-md", className)} {...props} />
}

export { AppButton, type AppButtonProps }
```

**Wrong — never do this in a primitive:**
```tsx
// ✗ Importing from Radix directly
import * as DialogPrimitive from "@radix-ui/react-dialog"

// ✗ Defining own CVA variants
const myVariants = cva("...", { variants: { ... } })

// ✗ Rebuilding component logic from scratch
const AppAlert = React.forwardRef(({ className, variant, ...props }, ref) => (
  <div role="alert" className={cn(myAlertVariants({ variant }), className)} />
))
```

---

## Development workflow

Work in `viana-kit-core` follows a **build → review → publish** cycle. The docs site (`apps/docs/`) reads directly from `packages/ui/src/` via workspace references, so you can review all changes live without syncing.

```
BUILD                          REVIEW                        PUBLISH
─────────────────────────      ──────────────────────        ────────────────────────────────
Edit packages/ui/src/     →    npm run dev                →  (user approves)
Edit apps/docs/                verify at localhost:3000        write rules file
                                back-and-forth adjustments     update AGENTS.md if needed
                                iterate freely                 update docs if needed
                                no sync, no commit             npm run sync
                                                               verify sync output
                                                               update viana-kit/AGENTS.md
                                                               update viana-kit/README.md if needed
                                                               commit + push viana-kit-core
                                                               commit + push viana-kit
```

**Key rules:**
- **Do not run sync during the build or review phase.** Sync pushes to the distribution repo — only run it when work is approved.
- **Do not commit or push during the build or review phase.** Commits happen once per completed, approved component — not after every file edit.
- **The user signals publish** by saying something like "looks good", "this is good now", or "let's publish this".

---

## Adding a new component

### Phase 1 — Build (iterate freely)

1. Add the shadcn base file to `packages/ui/src/components/ui/newcomponent.tsx`
2. Add the primitive wrapper to `packages/ui/src/components/primitives/AppNewComponent.tsx`
3. Export it from `packages/ui/src/components/primitives/index.ts`
4. Add a preview file at `apps/docs/src/components/previews/newcomponent-preview.tsx`
5. Add a docs page at `apps/docs/src/app/docs/components/newcomponent/page.tsx`
6. Add the component to the sidebar in `apps/docs/src/components/sidebar-nav.tsx`
7. Run `npm run dev` and verify at `http://localhost:3000/docs/components/newcomponent`
8. Adjust and iterate based on review feedback — repeat steps 1–7 as needed.

> **Stop here.** Do not proceed to Phase 2 until the user explicitly approves the component.

### Phase 2 — Publish (after user approval only)

1. Add a rules file at `packages/ui/src/rules/newcomponent.md` — props reference, usage examples, dos and don'ts
2. Update `viana-kit-core/AGENTS.md` if needed — add the primitive to any component tables in this file
3. Update docs page instructions or examples if needed
4. Run `npm run sync` to push to viana-kit
5. Verify sync output — confirm files landed in `viana-kit/src/components/primitives/` and `viana-kit/rules/`
6. Update `viana-kit/AGENTS.md` — add the new primitive to the component rules table
7. Update `viana-kit/README.md` if the public API surface changed (new exports, new props, new block)
8. Stage and commit `viana-kit-core`, then push
9. Stage and commit `viana-kit`, then push

---

## Syncing to viana-kit

Sync is a **publish step, not a build step**. During active development, changes are visible directly in the docs dev server — no sync needed.

```bash
# Sync to the default sibling directory (../viana-kit)
npm run sync

# Sync to a custom path
npm run sync:target /path/to/viana-kit

# Sync with a specific version number
node scripts/sync.js --version 0.2.0
```

**What the sync does:**
1. Copies all `packages/ui/src/components/ui/*.tsx` → `viana-kit/src/components/ui/` (verbatim)
2. Copies all `packages/ui/src/components/primitives/*.tsx` → `viana-kit/src/components/primitives/` with import transform:
   - `../../lib/utils` → `@/lib/utils` (viana-kit uses Next.js `@/` alias)
3. Copies all `packages/ui/src/rules/*.md` → `viana-kit/rules/`
4. Bumps the patch version in `viana-kit/.vianarc` and updates all component entries

**Run sync only when:**
- The component has been reviewed and approved by the user
- You are ready to publish to the `viana-kit` distribution repo

**Do not run sync:**
- After every file edit
- During iterative review cycles
- Before the user has approved the work

---

## Building and running

```bash
# Build everything
npm run build

# Build only the docs site
npx turbo run build --filter=@viana/docs

# Run docs site in dev mode
npm run dev
```

---

## Dashboard light/dark mode behavior

The dashboard has a deliberate split between the **background** (sidebar, header, background) and the **main content area**. Use the `backgroundTheme` prop on `AppDashboard` to lock the background to a fixed mode.

| Area | Default | Controlled by |
|------|---------|---------------|
| `AppSidebar` | Dark | `backgroundTheme` prop on `AppDashboard` |
| `AppHeader` | Dark | `backgroundTheme` prop on `AppDashboard` |
| `AppDashboardBackground` | Dark | `backgroundTheme` prop on `AppDashboard` |
| `AppDashboardMain` | Follows page theme | Page-level `dark` class (unchanged) |

**`backgroundTheme` values:**

| Value | Behavior |
|-------|----------|
| `"dark"` (default) | Sidebar/header/background locked to dark regardless of page theme |
| `"light"` | Sidebar/header/background locked to light regardless of page theme |

This is a one-time decision per app. The main content area still responds to the page theme toggle independently.

Do not add `dark` directly to `AppSidebar`, `AppHeader`, or `AppDashboardBackground` — this is managed by `AppDashboard` via `backgroundTheme`. Do not add `dark` to `AppDashboard`, `AppDashboardContent`, or `AppDashboardMain`. Do not add background colors to `AppSidebar` or `AppHeader` — both are transparent so the animated background layer shows through.

---

## Styling best practices

- **Never use inline `style` props** in components. All styling must go through Tailwind classes or CSS variables defined in the token layer.
- To set CSS custom properties on a component, use Tailwind arbitrary properties (`[--sidebar:transparent]`) instead of `style={{ "--sidebar": "transparent" }}`.
- To override design tokens, set the variable via Tailwind arbitrary properties on a parent or on the component itself — never via inline styles.
- **All colors must come from CSS variables defined in `packages/tokens/src/index.css`.** Never use hardcoded color values (`oklch(...)`, `hsl(...)`, `#hex`, `rgb(...)`) in component code. When a color is needed in an inline `style` (e.g. for `background-image` gradients), reference the CSS variable with `var(--token-name)`. For alpha/opacity variants, use `color-mix(in oklch, var(--token-name) N%, transparent)`. If a needed color token does not exist, add it to `index.css` first — do not hardcode the value.
- **Do not create custom color definition files** (e.g. `colors.ts`, `palette.ts`). The single source of truth for all colors is `packages/tokens/src/index.css`. TypeScript color objects are not needed — components consume colors via Tailwind classes or CSS `var()` references.

---

## What NOT to do

| ❌ Never | ✅ Instead |
|----------|-----------|
| Use inline `style` props for styling | Use Tailwind classes or `[--var:value]` arbitrary properties |
| Hardcode color values (`oklch(...)`, `hsl(...)`, `#hex`, `rgb(...)`) | Use CSS variables from `packages/tokens/src/index.css` via `var(--token)` or Tailwind classes |
| Create custom color files (`colors.ts`, `palette.ts`, etc.) | Define all colors as CSS variables in `packages/tokens/src/index.css` |
| Import `@radix-ui/*` in a primitive | Import from `../ui/componentname` |
| Add CVA variants or custom styling to a primitive | Put that in `ui/` or accept className override |
| Rebuild component logic that shadcn already provides | Wrap the existing `ui/` component |
| Manually copy files to viana-kit | Run `npm run sync` |
| Edit `viana-kit` files directly for testing | Edit in core, then sync after approval |
| Run sync before user approval | Build → review in docs → user approves → then sync |
| Commit or push during active development | Wait for user approval, then commit both repos together |

---

## Skill workflow (architect → engineer → review → publish)

When using the `/architect` and `/engineer` Claude Code skills, the same build → review → publish lifecycle applies. Skills enforce this automatically, but the rules above apply to any agent working in this repo.

```
/architect  →  plan only, no files written
     ↓
/engineer (Phase 1 — Build)
     implement in packages/ui/src/ + apps/docs/
     stop after sidebar nav entry
     report: "Run npm run dev and check localhost:3000/docs/components/[name]"
     ↓
User reviews, requests adjustments → /engineer iterates (still Phase 1)
     ↓
User approves: "looks good" / "this is good now" / "let's publish this"
     ↓
/engineer (Phase 2 — Publish)
     write rules file → packages/ui/src/rules/
     update viana-kit-core/AGENTS.md if needed
     update docs page if needed
     npm run sync
     verify sync output in viana-kit/
     update viana-kit/AGENTS.md component table
     update viana-kit/README.md if public API changed
     stage + commit + push viana-kit-core
     stage + commit + push viana-kit
```
