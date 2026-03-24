# Viana Kit Core — AI Agent Guide

This is the **source repo** for the Viana Kit design system. Read this fully before writing any code.

---

## What this repo is

`viana-kit-core` is maintained by the Viana Kit design team. It is the source of truth for:
- All shadcn/ui base components (`packages/ui/src/components/ui/`)
- All Viana Kit primitive wrappers (`packages/ui/src/components/primitives/`)
- Design tokens (`packages/tokens/`)
- The documentation site (`apps/docs/`)

Changes made here are synced downstream to the `viana-kit` distribution repo via `npm run sync`.

---

## Repo structure

```
viana-kit-core/
├── packages/
│   ├── ui/                        ← Component library
│   │   └── src/components/
│   │       ├── ui/                ← Layer 1: shadcn/ui base components
│   │       └── primitives/        ← Layer 2: Viana Kit App* wrappers
│   └── tokens/                    ← Design tokens (CSS variables, Tailwind config)
├── apps/
│   └── docs/                      ← Documentation site (Next.js)
│       └── src/
│           ├── app/docs/components/   ← One page per component
│           └── components/
│               └── previews/          ← Live preview components for docs
└── scripts/
    └── sync.js                    ← Syncs primitives to viana-kit distribution repo
```

---

## The two-layer component architecture

```
packages/ui/src/components/
├── ui/          ← shadcn/ui base. Contains full styling logic, CVA variants, Radix wiring.
└── primitives/  ← Viana Kit wrappers. Re-exports ui/ components under App* names.
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

## Syncing to viana-kit

After making changes to `ui/` or `primitives/`, sync them to the distribution repo:

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
3. Bumps the patch version in `viana-kit/.vianarc` and updates all component entries

**Always run sync after:**
- Fixing or updating any primitive file
- Adding a new primitive
- Updating a `ui/` base component

---

## Adding a new component

1. Add the shadcn base file to `packages/ui/src/components/ui/newcomponent.tsx`
2. Add the primitive wrapper to `packages/ui/src/components/primitives/AppNewComponent.tsx`
3. Export it from `packages/ui/src/components/primitives/index.ts`
4. Add a preview file at `apps/docs/src/components/previews/newcomponent-preview.tsx`
5. Add a docs page at `apps/docs/src/app/docs/components/newcomponent/page.tsx`
6. Add the component to the sidebar in `apps/docs/src/components/sidebar-nav.tsx`
7. Run `npm run sync` to push changes to viana-kit

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

## What NOT to do

| ❌ Never | ✅ Instead |
|----------|-----------|
| Import `@radix-ui/*` in a primitive | Import from `../ui/componentname` |
| Add CVA variants or custom styling to a primitive | Put that in `ui/` or accept className override |
| Rebuild component logic that shadcn already provides | Wrap the existing `ui/` component |
| Manually copy files to viana-kit | Run `npm run sync` |
| Edit `viana-kit` files directly for testing | Edit core, sync, verify in viana-kit |
