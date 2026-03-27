# Deploying Viana Kit Docs to Vercel

## How it works

The docs site (`apps/docs`) lives inside a monorepo. It imports components directly from `packages/ui` as a workspace package (`@viana/ui`). Because of this dependency, **Vercel must build from the monorepo root** — not from `apps/docs` alone.

Three files make this work together:

| File | Role |
|---|---|
| `vercel.json` | Tells Vercel how to install and build from the repo root |
| `apps/docs/next.config.ts` | `transpilePackages` so Next.js/Turbopack bundles workspace packages |
| `apps/docs/tsconfig.json` | Path aliases so TypeScript resolves `@viana/ui` → local source |

---

## Vercel project settings

In the Vercel dashboard for the project:

| Setting | Value |
|---|---|
| **Root Directory** | _(leave blank)_ |
| **Framework Preset** | Next.js |
| **Build Command** | _(leave blank — overridden by `vercel.json`)_ |
| **Output Directory** | _(leave blank — overridden by `vercel.json`)_ |
| **Install Command** | _(leave blank — overridden by `vercel.json`)_ |

Root Directory must be blank so Vercel runs from the repo root where `package.json` and `node_modules` for all workspace packages exist.

---

## What `vercel.json` does

```json
{
  "buildCommand": "npx turbo run build --filter=@viana/docs",
  "outputDirectory": "apps/docs/.next",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

- `installCommand: "npm install"` — installs from root, hoisting all workspace packages including `@viana/ui`
- `buildCommand` — runs Turborepo targeting only the docs app (Turbo resolves the `@viana/ui` workspace dependency automatically)
- `outputDirectory` — points Vercel to where Next.js writes the build output

---

## How to push changes to Vercel

Vercel is connected to the `main` branch. Any push to `main` triggers an automatic redeploy.

### Step 1 — Verify the build passes locally first

Always confirm locally before pushing. A broken push causes a failed deployment.

```bash
npx turbo run build --filter=@viana/docs
```

If the build fails locally, fix it before continuing. Do not push a broken build.

### Step 2 — Stage your changes

Stage only the files you changed. Do not use `git add -A` blindly — it may include unintended files.

```bash
# Stage specific files
git add apps/docs/src/app/docs/components/foo/page.tsx
git add apps/docs/src/components/previews/foo-preview.tsx
git add packages/ui/src/components/primitives/AppFoo.tsx
git add packages/ui/src/index.ts
```

**Common files to check after a component update:**

| What you changed | Files to stage |
|---|---|
| New or updated primitive | `packages/ui/src/components/primitives/AppFoo.tsx` |
| New export added to primitive | `packages/ui/src/index.ts` |
| Docs page updated | `apps/docs/src/app/docs/components/foo/page.tsx` |
| Preview component updated | `apps/docs/src/components/previews/foo-preview.tsx` |
| Root layout changed | `apps/docs/src/app/layout.tsx` |

### Step 3 — Commit

```bash
git commit -m "your descriptive message"
```

### Step 4 — Push

```bash
git push
```

Vercel detects the push and runs the build automatically. Monitor the deployment in the Vercel dashboard.

---

## Important rules for `next.config.ts`

> **Do not add a `webpack` config to `next.config.ts`.**

Next.js 16 uses **Turbopack** by default. Adding a `webpack` callback causes the build to crash with:
```
This build is using Turbopack, with a webpack config and no turbopack config.
```

The correct `next.config.ts` is:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@viana/ui", "@viana/tokens"],
};

export default nextConfig;
```

`transpilePackages` is all that is needed. Turbopack resolves `@viana/ui` through the npm workspace symlink automatically — no alias configuration required.

---

## If the build fails on Vercel

**Step 1 — Reproduce locally:**
```bash
npx turbo run build --filter=@viana/docs
```

**Step 2 — Check these common causes:**

| Symptom | Likely cause | Fix |
|---|---|---|
| `Module not found: Can't resolve '@viana/ui'` | webpack config added to `next.config.ts` | Remove the `webpack` block — use only `transpilePackages` |
| `Export not found in '@viana/ui'` | New export added to primitive but not added to `src/index.ts` | Add the export to `packages/ui/src/index.ts` |
| `Module not found: Can't resolve './previews/foo-preview'` | Preview file referenced in docs page but not created | Create the preview file |
| TypeScript error in `page.tsx` | Wrong prop type, missing import | Fix the TypeScript error |
| `Call retries were exceeded` (Turbopack crash) | Invalid config in `next.config.ts` | Check for webpack aliases or incompatible options |

**Step 3 — After fixing, confirm locally, then push again.**
