import {
  DashboardIcon, DashboardActiveIcon,
  SiteIcon, SiteActiveIcon,
  DevicesIcon, DevicesActiveIcon,
  SensorIcon, SensorActiveIcon,
  XrayIcon, XrayActiveIcon,
  ManifestIcon, ManifestActiveIcon,
  InstallerIcon, InstallerActiveIcon,
} from "../../../../packages/ui/src/assets/icons"

const NAV_ICONS = [
  { name: "Dashboard",  default: DashboardIcon,  active: DashboardActiveIcon },
  { name: "Site",       default: SiteIcon,        active: SiteActiveIcon },
  { name: "Devices",    default: DevicesIcon,     active: DevicesActiveIcon },
  { name: "Sensor",     default: SensorIcon,      active: SensorActiveIcon },
  { name: "X-ray",      default: XrayIcon,        active: XrayActiveIcon },
  { name: "Manifest",   default: ManifestIcon,    active: ManifestActiveIcon },
  { name: "Installer",  default: InstallerIcon,   active: InstallerActiveIcon },
]

export function IconsSection() {
  return (
    <div className="space-y-14">

      {/* Custom Nav Icons */}
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Custom Nav Icons</h2>
          <p className="text-sm text-muted-foreground">
            Viana Kit ships seven navigation icon pairs — each has a default and an active state.
            They are used exclusively inside <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs text-foreground">AppDashboard</code> nav items.
            The active state is applied automatically when <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs text-foreground">isActive</code> is set on the nav item.
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-border divide-y divide-border">
          <div className="grid grid-cols-3 bg-muted/40 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <span>Name</span>
            <span>Default</span>
            <span>Active</span>
          </div>
          {NAV_ICONS.map(({ name, default: Default, active: Active }) => (
            <div key={name} className="grid grid-cols-3 items-center px-4 py-3">
              <span className="text-sm font-medium text-foreground">{name}</span>
              <span className="flex items-center">
                <span className="flex size-9 items-center justify-center rounded-md bg-muted">
                  <Default />
                </span>
              </span>
              <span className="flex items-center">
                <span className="flex size-9 items-center justify-center rounded-md bg-primary">
                  <Active />
                </span>
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Import</p>
          <div className="overflow-hidden rounded-lg border border-border">
            <pre className="overflow-x-auto bg-muted/40 px-5 py-4 text-xs text-foreground">
{`import {
  DashboardIcon, DashboardActiveIcon,
  SiteIcon, SiteActiveIcon,
  // … other pairs
} from "@viana/ui/assets/icons"`}
            </pre>
          </div>
          <p className="text-xs text-muted-foreground">
            These components accept all standard <code className="rounded bg-muted px-1 py-0.5 font-mono">SVGProps</code>.
            Default size is 24&times;24 — override with <code className="rounded bg-muted px-1 py-0.5 font-mono">width</code> / <code className="rounded bg-muted px-1 py-0.5 font-mono">height</code> props.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-muted/30 px-5 py-4 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">Usage in AppDashboard nav</p>
          <p className="mt-1 leading-6">
            Pass the icon component (not <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs text-foreground">&lt;Icon /&gt;</code>) as the{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs text-foreground">icon</code> field in your nav section.
            The active/default swap is handled automatically by the sidebar.
          </p>
          <pre className="mt-3 overflow-x-auto rounded bg-muted px-4 py-3 text-xs text-foreground">
{`const nav = [
  {
    items: [
      { title: "Dashboard", icon: DashboardNavIcon, isActive: true },
    ],
  },
]`}
          </pre>
        </div>
      </div>

      <hr className="border-border" />

      {/* Lucide React */}
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Lucide React</h2>
          <p className="text-sm text-muted-foreground">
            All general-purpose icons in Viana Kit come from{" "}
            <strong className="text-foreground">lucide-react</strong>. It is already installed — do not add a second icon library.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Usage</p>
          <div className="overflow-hidden rounded-lg border border-border">
            <pre className="overflow-x-auto bg-muted/40 px-5 py-4 text-xs text-foreground">
{`import { Search, Moon, Sun, LayoutGrid } from "lucide-react"

// Inside JSX — always set an explicit size class
<Search className="size-4" />   {/* 16px — inline / button icons */}
<Search className="size-5" />   {/* 20px — sidebar nav icons */}
<Search className="size-6" />   {/* 24px — hero / standalone */}`}
            </pre>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-border divide-y divide-border">
          <div className="grid grid-cols-2 bg-muted/40 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:grid-cols-4">
            <span>Class</span>
            <span>Size</span>
            <span className="hidden sm:block">When to use</span>
            <span className="hidden sm:block">Example</span>
          </div>
          {[
            { cls: "size-3", px: "12px", when: "Badges, labels", ex: "Status dot" },
            { cls: "size-4", px: "16px", when: "Buttons, inputs, inline", ex: "Button icon" },
            { cls: "size-5", px: "20px", when: "Sidebar nav, list items", ex: "Nav icon" },
            { cls: "size-6", px: "24px", when: "Hero, standalone callouts", ex: "Empty state" },
          ].map((row) => (
            <div key={row.cls} className="grid grid-cols-2 items-center px-4 py-3 text-sm sm:grid-cols-4">
              <code className="font-mono text-xs text-foreground">{row.cls}</code>
              <span className="text-muted-foreground">{row.px}</span>
              <span className="hidden text-muted-foreground sm:block">{row.when}</span>
              <span className="hidden text-muted-foreground sm:block">{row.ex}</span>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Color</p>
          <p className="text-sm text-muted-foreground">
            Icons inherit color from the parent&apos;s <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs text-foreground">currentColor</code> via their{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs text-foreground">stroke</code>. Set color with a Tailwind text class on the icon or a parent element — never hardcode a fill or stroke color.
          </p>
          <div className="overflow-hidden rounded-lg border border-border">
            <pre className="overflow-x-auto bg-muted/40 px-5 py-4 text-xs text-foreground">
{`<Search className="size-4 text-muted-foreground" />   {/* muted */}
<Search className="size-4 text-primary" />             {/* brand blue */}
<Search className="size-4 text-destructive" />         {/* error red */}`}
            </pre>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-muted/30 px-5 py-4 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">Rules</p>
          <ul className="mt-1 space-y-1 leading-6">
            <li>Always set a <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs text-foreground">size-*</code> class — never rely on the default 24px size.</li>
            <li>Do not import from <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs text-foreground">lucide-react/dist</code> — import from the root package.</li>
            <li>Do not add a separate icon library (heroicons, phosphor, etc.) — use lucide-react exclusively.</li>
            <li>Do not wrap Lucide icons in custom components — use them directly.</li>
          </ul>
        </div>
      </div>

    </div>
  )
}
