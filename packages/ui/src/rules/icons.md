# Icons

Viana Kit uses two icon systems: custom SVG nav icons for the sidebar, and **lucide-react** for all general-purpose UI icons.

---

## Custom Nav Icons

Seven navigation icon pairs ship with Viana Kit. Each has a default and an active state. They are used exclusively inside `AppDashboard` nav items — the active/default swap is handled automatically when `isActive` is set on the nav item.

### Available pairs

| Name | Default | Active |
|------|---------|--------|
| Dashboard | `DashboardIcon` | `DashboardActiveIcon` |
| Site | `SiteIcon` | `SiteActiveIcon` |
| Devices | `DevicesIcon` | `DevicesActiveIcon` |
| Sensor | `SensorIcon` | `SensorActiveIcon` |
| X-ray | `XrayIcon` | `XrayActiveIcon` |
| Manifest | `ManifestIcon` | `ManifestActiveIcon` |
| Installer | `InstallerIcon` | `InstallerActiveIcon` |

### Import

```tsx
import {
  DashboardIcon, DashboardActiveIcon,
  SiteIcon, SiteActiveIcon,
  // … other pairs
} from "@viana/ui/assets/icons"
```

These components accept all standard `SVGProps<SVGSVGElement>`. Default size is 24×24 — override with `width` / `height` props.

### Usage in AppDashboard nav

Pass the icon component (not `<Icon />`) as the `icon` field. Do not pass the active icon — the sidebar handles the swap internally.

```tsx
import { DashboardIcon, DashboardActiveIcon } from "@viana/ui/assets/icons"

function DashboardNavIcon() {
  return <AppSidebarNavIcon icon={<DashboardIcon />} activeIcon={<DashboardActiveIcon />} />
}

const nav = [
  {
    items: [
      { title: "Dashboard", icon: DashboardNavIcon, isActive: true },
    ],
  },
]
```

---

## Lucide React

All general-purpose icons come from **lucide-react**. It is already installed — do not add a second icon library.

### Usage

```tsx
import { Search, Moon, Sun, LayoutGrid } from "lucide-react"

<Search className="size-4" />   // 16px — inline / button icons
<Search className="size-5" />   // 20px — sidebar nav icons
<Search className="size-6" />   // 24px — hero / standalone
```

### Size conventions

| Class | Size | When to use |
|-------|------|-------------|
| `size-3` | 12px | Badges, labels |
| `size-4` | 16px | Buttons, inputs, inline |
| `size-5` | 20px | Sidebar nav, list items |
| `size-6` | 24px | Hero, standalone callouts |

### Color

Icons inherit `currentColor` via their `stroke`. Set color with a Tailwind text class — never hardcode a fill or stroke color.

```tsx
<Search className="size-4 text-muted-foreground" />
<Search className="size-4 text-primary" />
<Search className="size-4 text-destructive" />
```

---

## Service Applets & Apps

Branded app imagery for each Viana product. Assets live in `packages/ui/src/assets/Service-applets-apps/` and are synced to the distribution repo as static PNG files.

### Service Applets

| Name | File |
|------|------|
| Audience Measurement | `audience-measurement.png` |
| Content Effectiveness | `content-effectiveness.png` |
| Hop Tracking | `hop-tracking.png` |
| People Counting | `people-counting.png` |
| Petra | `petra.png` |
| SAM (Generic) | `sam-viana-generic.png` |
| SAMi For Environment | `sami-for-environment.png` |
| Shelf Engagement | `shelf-engagement.png` |
| Traffic Management | `traffic-management.png` |
| Zone Engagement | `zone-engagement.png` |

### Apps

| Name | File |
|------|------|
| Coatro | `coatro-app.png` |
| Journeys | `journeys-app.png` |

### Import

```tsx
import Image from "next/image"
import AudienceMeasurement from "@viana/ui/src/assets/Service-applets-apps/audience-measurement.png"

<Image src={AudienceMeasurement} alt="Audience Measurement" />
```

---

## Rules

- **Do** always set a `size-*` class on Lucide icons — never rely on the default 24px.
- **Do** use `text-*` classes for icon color — icons inherit `currentColor`.
- **Don't** import from `lucide-react/dist` — import from the root package.
- **Don't** add a second icon library (heroicons, phosphor, etc.) — use lucide-react exclusively.
- **Don't** wrap Lucide icons in custom components — use them directly.
- **Don't** pass `<Icon />` to the `icon` field in AppDashboard nav — pass the component reference.
