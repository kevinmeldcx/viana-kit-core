# Adding Branding Adjustments to Primitives

This document covers the correct workflow for adding or updating `className` overrides in primitive components — the mechanism for applying Viana Kit branding on top of shadcn/ui base components.

---

## Where branding adjustments live

Only in `packages/ui/src/components/primitives/`. Never in `packages/ui/src/components/ui/` (shadcn base — keep as close to upstream as possible).

The only acceptable addition to a primitive is a small `className` override via `cn()`:

```tsx
function AppButton({ className, ...props }: AppButtonProps) {
  return <Button className={cn("rounded-full", className)} {...props} />
}
```

The `className` prop must always be passed through last so consumers can still override.

---

## Workflow

### 1. Edit the primitive

Open the relevant file in `packages/ui/src/components/primitives/AppFoo.tsx` and add your `cn()` override.

```tsx
// Before
function AppButton({ className, ...props }: AppButtonProps) {
  return <Button className={cn(className)} {...props} />
}

// After — adding brand rounding
function AppButton({ className, ...props }: AppButtonProps) {
  return <Button className={cn("rounded-full", className)} {...props} />
}
```

### 2. Verify the docs preview

Run the dev server and check the live preview on the component's docs page.

```bash
npm run dev
```

The preview imports from `@viana/ui`, which resolves directly to the primitive source you just edited — no build step needed. Changes are visible immediately.

### 3. Update the docs Source section

The Source block in `apps/docs/src/app/docs/components/foo/page.tsx` is a **static code string** — it does not auto-update when you edit the primitive. You must manually sync it.

1. Re-read the actual primitive file to get the current content
2. Update the `code={\`...\`}` string in the corresponding docs page Source section

> Always read the file first — never reconstruct the source from memory.

### 4. Run sync

Push the updated primitive to the distribution repo.

```bash
npm run sync
```

This copies all primitives from `packages/ui/src/components/primitives/` to `viana-kit/src/components/primitives/` with import paths transformed for the distribution repo.

### 5. Confirm the build

```bash
npx turbo run build --filter=@viana/docs
```

Fix any TypeScript errors before deploying.

---

## Order matters

| Step | Action | Why |
|---|---|---|
| 1 | Edit primitive | Source of truth |
| 2 | Verify preview in dev | Catch visual regressions before committing |
| 3 | Update docs Source block | Keep static code string in sync with real file |
| 4 | Run sync | Distribute only after everything is verified locally |
| 5 | Build | Confirm no TypeScript errors |

Sync runs **last** because it touches the distribution repo. Verify everything locally first.

---

## Rules

- Never add branding classes to `ui/` files — those are shadcn base components
- Never import from `@radix-ui/*` directly in a primitive — always go through `../ui/`
- Always pass `className` through as the last argument to `cn()` so consumers can override
- After any primitive change, steps 3–5 are mandatory — not optional
