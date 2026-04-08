# @viana/ui

The Viana Kit component library. This package is the **source of truth** for all UI primitives, layout components, and design tokens used across Viana's web portals.

---

## Structure

```
src/
├── components/
│   ├── ui/          ← Layer 1: shadcn/ui base components (unmodified)
│   └── primitives/  ← Layer 2: Viana Kit App* wrappers
├── lib/
│   └── utils.ts     ← cn() utility
└── rules/           ← AI-readable usage rules per component
```

---

## Components

All primitives are exported from `src/components/primitives/index.ts` and follow the `App*` naming convention.

### Inputs

| Component | Import |
|-----------|--------|
| `AppButton` | `./AppButton` |
| `AppButtonGroup` | `./AppButtonGroup` |
| `AppInput` | `./AppInput` |
| `AppTextarea` | `./AppTextarea` |
| `AppSelect` | `./AppSelect` |
| `AppCheckbox` | `./AppCheckbox` |
| `AppRadioGroup` | `./AppRadioGroup` |
| `AppSwitch` | `./AppSwitch` |
| `AppLabel` | `./AppLabel` |
| `AppField` | `./AppField` |
| `AppForm` | `./AppForm` |
| `AppCalendar` | `./AppCalendar` |

### Display

| Component | Import |
|-----------|--------|
| `AppText` | `./AppText` |
| `AppBadge` | `./AppBadge` |
| `AppAvatar` | `./AppAvatar` |
| `AppCard` | `./AppCard` |
| `AppTable` | `./AppTable` |
| `AppProgress` | `./AppProgress` |
| `AppSkeleton` | `./AppSkeleton` |
| `AppSpinner` | `./AppSpinner` |
| `AppSeparator` | `./AppSeparator` |
| `AppScrollArea` | `./AppScrollArea` |
| `AppScrollText` | `./AppScrollText` |
| `AppAspectRatio` | `./AppAspectRatio` |

### Feedback & Overlays

| Component | Import |
|-----------|--------|
| `AppAlert` | `./AppAlert` |
| `AppAlertDialog` | `./AppAlertDialog` |
| `AppDialog` | `./AppDialog` |
| `AppDrawer` | `./AppDrawer` |
| `AppSheet` | `./AppSheet` |
| `AppToaster` / `sonnerToast` | `./AppToaster` |
| `AppTooltip` | `./AppTooltip` |
| `AppHoverCard` | `./AppHoverCard` |
| `AppPopover` | `./AppPopover` |

### Navigation

| Component | Import |
|-----------|--------|
| `AppBreadcrumb` | `./AppBreadcrumb` |
| `AppNavigationMenu` | `./AppNavigationMenu` |
| `AppMenubar` | `./AppMenubar` |
| `AppPagination` | `./AppPagination` |
| `AppTabs` | `./AppTabs` |
| `AppAccordion` | `./AppAccordion` |
| `AppCollapsible` | `./AppCollapsible` |

### Controls

| Component | Import |
|-----------|--------|
| `AppToggle` | `./AppToggle` |
| `AppToggleGroup` | `./AppToggleGroup` |
| `AppDropdownMenu` | `./AppDropdownMenu` |
| `AppContextMenu` | `./AppContextMenu` |
| `AppCommand` | `./AppCommand` |

---

## Usage (in viana-kit distribution repo)

```tsx
import { AppButton } from "@/components/primitives/AppButton"
import { AppCard, AppCardHeader, AppCardTitle, AppCardContent } from "@/components/primitives/AppCard"

export default function Page() {
  return (
    <AppCard>
      <AppCardHeader>
        <AppCardTitle>Hello</AppCardTitle>
      </AppCardHeader>
      <AppCardContent>
        <AppButton>Get started</AppButton>
      </AppCardContent>
    </AppCard>
  )
}
```

---

## Development

This package lives inside `viana-kit-core`. After making changes, sync to the distribution repo:

```bash
# From viana-kit-core root
npm run sync
```

See `AGENTS.md` at the repo root for full contribution guidelines and component architecture rules.
