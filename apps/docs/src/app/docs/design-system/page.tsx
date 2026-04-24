import type { Metadata } from "next";
import { AppText } from "@viana/ui";
import { LogosSection } from "@/components/logos-section";
import { IconsSection } from "@/components/icons-section";
import { ServiceAppletsSection } from "@/components/service-applets-section";

export const metadata: Metadata = {
  title: "Design System",
};

const colors = [
  {
    group: "Brand",
    tokens: [
      { name: "primary", bg: "bg-primary", text: "text-primary-foreground", label: "Primary", class: "bg-primary" },
      { name: "primary-foreground", bg: "bg-primary-foreground", text: "text-primary", label: "Primary Foreground", class: "bg-primary-foreground", border: true },
    ],
  },
  {
    group: "Neutrals",
    tokens: [
      { name: "background", bg: "bg-background", text: "text-foreground", label: "Background", class: "bg-background", border: true },
      { name: "foreground", bg: "bg-foreground", text: "text-background", label: "Foreground", class: "bg-foreground" },
      { name: "muted", bg: "bg-muted", text: "text-muted-foreground", label: "Muted", class: "bg-muted", border: true },
      { name: "muted-foreground", bg: "bg-muted-foreground", text: "text-background", label: "Muted Foreground", class: "bg-muted-foreground" },
      { name: "border", bg: "bg-border", text: "text-foreground", label: "Border", class: "bg-border" },
      { name: "input", bg: "bg-input", text: "text-foreground", label: "Input", class: "bg-input" },
      { name: "ring", bg: "bg-ring", text: "text-background", label: "Ring", class: "bg-ring" },
    ],
  },
  {
    group: "Surfaces",
    tokens: [
      { name: "card", bg: "bg-card", text: "text-card-foreground", label: "Card", class: "bg-card", border: true },
      { name: "card-foreground", bg: "bg-card-foreground", text: "text-background", label: "Card Foreground", class: "bg-card-foreground" },
      { name: "popover", bg: "bg-popover", text: "text-popover-foreground", label: "Popover", class: "bg-popover", border: true },
      { name: "popover-foreground", bg: "bg-popover-foreground", text: "text-background", label: "Popover Foreground", class: "bg-popover-foreground" },
    ],
  },
  {
    group: "Semantic",
    tokens: [
      { name: "secondary", bg: "bg-secondary", text: "text-secondary-foreground", label: "Secondary", class: "bg-secondary", border: true },
      { name: "secondary-foreground", bg: "bg-secondary-foreground", text: "text-background", label: "Secondary Foreground", class: "bg-secondary-foreground" },
      { name: "accent", bg: "bg-accent", text: "text-accent-foreground", label: "Accent", class: "bg-accent", border: true },
      { name: "accent-foreground", bg: "bg-accent-foreground", text: "text-background", label: "Accent Foreground", class: "bg-accent-foreground" },
      { name: "destructive", bg: "bg-destructive", text: "text-destructive-foreground", label: "Destructive", class: "bg-destructive" },
      { name: "destructive-foreground", bg: "bg-destructive-foreground", text: "text-destructive", label: "Destructive Foreground", class: "bg-destructive-foreground", border: true },
    ],
  },
];

const typeScale = [
  { label: "Display", variant: "display", sample: "The quick brown fox", meta: 'variant="display"' },
  { label: "H1", variant: "h1", sample: "The quick brown fox", meta: 'variant="h1"' },
  { label: "H2", variant: "h2", sample: "The quick brown fox", meta: 'variant="h2"' },
  { label: "H3", variant: "h3", sample: "The quick brown fox", meta: 'variant="h3"' },
  { label: "H4", variant: "h4", sample: "The quick brown fox jumps", meta: 'variant="h4"' },
  { label: "Lead", variant: "lead", sample: "The quick brown fox jumps over the lazy dog.", meta: 'variant="lead"' },
  { label: "Body", variant: "body", sample: "The quick brown fox jumps over the lazy dog. A quick movement of the lazy fox.", meta: 'variant="body"' },
  { label: "Small", variant: "small", sample: "The quick brown fox jumps over the lazy dog.", meta: 'variant="small"' },
  { label: "Muted", variant: "muted", sample: "The quick brown fox jumps over the lazy dog.", meta: 'variant="muted"' },
  { label: "Mono", variant: "mono", sample: "const value = 'hello world'", meta: 'variant="mono"' },
] as const;

export default function DesignSystemPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Getting Started</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Design System
        </h1>
        <p className="text-lg text-muted-foreground">
          The visual language of Viana Kit — semantic color tokens, typography scale, and spacing.
          All values are defined as CSS variables and exposed as Tailwind utility classes.
        </p>
      </div>

      <hr className="border-border mb-10" />

      <section className="space-y-14">

        {/* Logos */}
        <LogosSection />

        <hr className="border-border" />

        {/* Colors */}
        <div className="space-y-8">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">Colors</h2>
            <p className="text-sm text-muted-foreground">
              Use semantic token classes — never hardcode color values. All tokens adapt automatically in dark mode.
            </p>
          </div>

          {colors.map((group) => (
            <div key={group.group} className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {group.group}
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {group.tokens.map((token) => (
                  <div key={token.name} className="overflow-hidden rounded-lg border border-border">
                    <div
                      className={`h-14 w-full ${token.bg} ${token.border ? "border-b border-border" : ""}`}
                    />
                    <div className="bg-background px-3 py-2">
                      <p className="text-xs font-medium text-foreground">{token.label}</p>
                      <p className="mt-0.5 font-mono text-xs text-muted-foreground">{token.class}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <hr className="border-border" />

        {/* Typography */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">Typography</h2>
            <p className="text-sm text-muted-foreground">
              Viana Kit uses <span className="font-medium text-foreground">Lato</span> as the default sans-serif font.
              Use Tailwind's type scale — never set arbitrary font sizes.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-border divide-y divide-border">
            {typeScale.map((item) => (
              <div key={item.label} className="flex items-baseline gap-6 px-5 py-4">
                <span className="w-16 shrink-0 text-xs text-muted-foreground">{item.label}</span>
                <div className="min-w-0 flex-1 space-y-1">
                  <AppText variant={item.variant}>{item.sample}</AppText>
                  <p className="font-mono text-xs text-muted-foreground">{item.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-border" />

        {/* Radius */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">Radius</h2>
            <p className="text-sm text-muted-foreground">
              Border radius is defined relative to the base <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">--radius</code> token.
              Use the Tailwind scale — never set arbitrary radius values.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {[
              { label: "rounded-sm", class: "rounded-sm", meta: "calc(--radius - 4px)" },
              { label: "rounded-md", class: "rounded-md", meta: "calc(--radius - 2px)" },
              { label: "rounded-lg", class: "rounded-lg", meta: "--radius" },
              { label: "rounded-xl", class: "rounded-xl", meta: "calc(--radius + 4px)" },
              { label: "rounded-full", class: "rounded-full", meta: "9999px" },
            ].map((r) => (
              <div key={r.label} className="flex flex-col items-center gap-2">
                <div className={`h-14 w-14 bg-primary ${r.class}`} />
                <div className="text-center">
                  <p className="font-mono text-xs text-foreground">{r.label}</p>
                  <p className="font-mono text-xs text-muted-foreground">{r.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-border" />

        {/* Icons */}
        <div className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">Icons</h2>
            <p className="text-sm text-muted-foreground">
              Custom SVG nav icons for the sidebar, and <strong className="text-foreground">lucide-react</strong> for all general-purpose UI icons.
            </p>
          </div>
          <IconsSection />
        </div>

        <hr className="border-border" />

        {/* Service Applets */}
        <div className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">Service Applets</h2>
            <p className="text-sm text-muted-foreground">
              Branded app imagery for each Viana service applet. Use these assets wherever a visual identifier for a product or service is needed.
            </p>
          </div>
          <ServiceAppletsSection />
        </div>

        <hr className="border-border" />

        {/* Usage note */}
        <div className="rounded-lg border border-border bg-muted/30 px-5 py-4 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">Using tokens in code</p>
          <p className="mt-1 leading-6">
            All tokens are available as Tailwind utility classes. Reference them directly —
            do not use hardcoded hex, rgb, or hsl values, and do not override the token block in{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs text-foreground">globals.css</code>.
          </p>
        </div>

      </section>
    </article>
  );
}
