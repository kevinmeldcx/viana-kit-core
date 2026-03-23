# Plan: viana-kit-core Monorepo Setup

## Context
Viana Kit is an AI-native design system built on React, Tailwind CSS v4, and shadcn/ui. This plan covers the initial scaffolding of the `viana-kit-core` monorepo — the "Factory" that houses branded components, design tokens, and documentation. We're using default shadcn/ui styling in light mode for now; custom branding (via `index.css`) will be applied later.

## Monorepo Structure

```
viana-kit-core/
├── package.json              # root workspace config
├── turbo.json                # Turborepo pipeline config
├── packages/
│   ├── ui/                   # shadcn/ui component library (Next.js-based)
│   │   ├── package.json
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── ui/           # raw shadcn primitives (button, dialog, etc.)
│   │   │   │   ├── primitives/   # Viana wrappers (AppButton, etc.)
│   │   │   │   └── blocks/       # composed layouts (AuthForm, etc.)
│   │   │   ├── lib/
│   │   │   │   └── utils.ts      # cn() helper
│   │   │   ├── registry/         # shadcn custom registry definitions
│   │   │   └── index.ts          # barrel exports
│   │   ├── components.json       # shadcn config
│   │   ├── tailwind.config.ts
│   │   └── tsconfig.json
│   └── tokens/               # design tokens package
│       ├── package.json
│       ├── src/
│       │   ├── index.css         # CSS variables (placeholder, user provides later)
│       │   ├── colors.ts         # token exports
│       │   ├── typography.ts
│       │   └── spacing.ts
│       └── tsconfig.json
├── apps/
│   └── docs/                 # documentation site (Next.js)
│       ├── package.json
│       ├── src/app/
│       └── next.config.ts
└── tooling/                  # shared configs (future: eslint, tsconfig base)
    └── tsconfig/
        └── base.json
```

## Step-by-Step Execution

### Step 1: Root monorepo scaffold
- Initialize `package.json` with npm workspaces (no pnpm available)
- Install Turborepo as dev dependency
- Create `turbo.json` with `build`, `dev`, `lint` pipelines
- Shared `tsconfig` base in `tooling/tsconfig/base.json`

### Step 2: `packages/ui` — shadcn component library
- Initialize as a Next.js project (required by shadcn CLI)
- Run `npx shadcn@latest init` with Vega style, neutral base color, light mode
- Uses Radix UI primitives under the hood (shadcn/ui default)
- Install Tailwind CSS v4
- Set up the three-tier directory structure:

  **Tier 1 — `components/ui/`** (READ-ONLY zone)
  Raw shadcn/ui primitives installed via CLI. These files are never modified directly.
  They can be safely overwritten by `npx shadcn` updates with zero merge conflicts.
  Example: `button.tsx`, `dialog.tsx`, `card.tsx`

  **Tier 2 — `components/primitives/`** (Viana wrappers)
  Branded wrapper components that import from `ui/` and add default props, custom variants,
  analytics hooks, or accessibility enhancements. This is where all customization lives.
  Example: `AppButton.tsx` wraps `Button` with org-specific defaults.

  **Tier 3 — `components/blocks/`** (Compositions)
  Product-level multi-component layouts built exclusively from primitives.
  Example: `AuthenticationForm.tsx`, `DashboardHeader.tsx`

- Add a starter set of shadcn components: `button`, `card`, `input`, `label`, `badge`
- Create initial primitives wrappers for each (e.g., `AppButton`, `AppCard`, `AppInput`)
- Create `cn()` utility in `lib/utils.ts`
- Set up barrel exports in `index.ts`

### Step 3: `packages/tokens` — design tokens
- Create package with CSS variable definitions (defaults for now)
- Export token constants for colors, typography, spacing
- Placeholder `index.css` — user will replace with branding later

### Step 4: `apps/docs` — documentation site
- Scaffold a minimal Next.js app
- Wire it to consume `@viana/ui` and `@viana/tokens` from workspace
- Create a landing page with component preview placeholder

### Step 5: Verify
- Run `npm install` at root to link workspaces
- Run `npx turbo build` to verify all packages build
- Run `npm run dev` in docs app to confirm it serves

## Key Decisions
- **npm workspaces** (not pnpm/yarn — npm is available, keeps it simple)
- **Turborepo** for build orchestration
- **Next.js** for both the ui package (shadcn CLI requirement) and docs app
- **Three-tier component architecture** (architecture.md + governance.md): `ui/` (read-only shadcn primitives) → `primitives/` (Viana wrappers — all customization here) → `blocks/` (compositions). This ensures shadcn updates never conflict with custom code.
- **Vega style, neutral base color** — shadcn/ui defaults; user provides `index.css` later for branding
- **Radix UI** as the primitive layer (shadcn/ui's default headless components)
- **Tailwind CSS v4** as specified in the screenshot
