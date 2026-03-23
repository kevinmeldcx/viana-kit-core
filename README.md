# viana-kit-core

Monorepo for viana-kit UI components with documentation site.

## Component Structure

```
packages/ui/src/
├── components/
│   ├── ui/              # shadcn/ui base components (DO NOT MODIFY)
│   │   ├── button.tsx
│   │   ├── badge.tsx
│   │   ├── dialog.tsx
│   │   └── ...
│   └── primitives/      # viana-kit wrappers (MODIFY HERE)
│       ├── AppButton.tsx
│       ├── AppBadge.tsx
│       ├── AppDialog.tsx
│       └── ...
```

## Where to Add Components

### Step 1: Add shadcn/ui base component

Copy from shadcn/ui into `packages/ui/src/components/ui/`:
```bash
# Example: Adding a new component
cp path/to/shadcn/checkbox.tsx packages/ui/src/components/ui/
```

### Step 2: Create viana-kit wrapper

Create in `packages/ui/src/components/primitives/`:

```tsx
// packages/ui/src/components/primitives/AppCheckbox.tsx
"use client"

import { cn } from "../../lib/utils"
import { Checkbox } from "../ui/checkbox"

type AppCheckboxProps = React.ComponentPropsWithoutRef<typeof Checkbox>

function AppCheckbox({ className, ...props }: AppCheckboxProps) {
  return <Checkbox className={cn("rounded-md", className)} {...props} />
}

export { AppCheckbox }
```

### Step 3: Export from index

Add to `packages/ui/src/index.ts`:
```tsx
export { AppCheckbox } from "./components/primitives/AppCheckbox"
```

### Step 4: Add documentation

1. Create preview: `apps/docs/src/components/previews/[component]-preview.tsx`
2. Create docs page: `apps/docs/src/app/docs/components/[component]/page.tsx`
3. Update sidebar: `apps/docs/src/components/sidebar-nav.tsx`

## Development

```bash
# Install dependencies
npm install

# Start docs site
npm run dev
```

## Tech Stack

- Next.js 16
- Tailwind CSS v4
- Radix UI
- TypeScript
- Turborepo

## License

MIT
