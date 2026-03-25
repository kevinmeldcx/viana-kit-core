# Deploying Viana Kit Docs to Vercel

## How it works

The docs site (`apps/docs`) lives inside a monorepo. It imports components directly from `packages/ui` as a workspace package (`@viana/ui`). Because of this dependency, **Vercel must build from the monorepo root** — not from `apps/docs` alone.

Three files make this work together:

| File | Role |
|---|---|
| `vercel.json` | Tells Vercel how to install and build from the repo root |
| `apps/docs/next.config.ts` | `transpilePackages` so Next.js bundles workspace packages |
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
- `buildCommand` — runs Turborepo targeting only the docs app (but Turbo resolves the workspace dependency on `@viana/ui` automatically)
- `outputDirectory` — points Vercel to where Next.js writes the build output

---

## Deploying

Push to the branch connected to your Vercel project. Vercel picks up the push automatically and runs the build.

```bash
git add .
git commit -m "your message"
git push
```

Vercel will:
1. Run `npm install` at the repo root
2. Run `npx turbo run build --filter=@viana/docs`
3. Serve the output from `apps/docs/.next`

---

## If the build fails

**Check first:** Does it build locally?

```bash
npx turbo run build --filter=@viana/docs
```

**Common causes:**

- A component page references a preview component that doesn't exist yet
- A `@viana/ui` export was added to a primitive but not re-exported from `primitives/index.ts`
- TypeScript error in a `page.tsx` (missing import, wrong prop type)
