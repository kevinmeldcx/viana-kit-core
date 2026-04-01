# Rules Folder Implementation Plan

A `rules/` folder in `viana-kit` containing one `.md` file per component. Each file is a compact, AI-readable reference — props, usage examples, and explicit dos/don'ts. Intended to be the first thing an AI agent reads before using a component.

---

## Decision: Local `.md` files + doc link

Local markdown files are preferred over URL references because:
- Always available — no network dependency
- Clean signal — no HTML boilerplate for AI to parse through
- Low token cost per session — agent reads only the files it needs
- Authored alongside the primitive — stays in sync naturally

Each file also includes a link to the full docs page for human reference.

---

## Where rules are authored

Rules live in `viana-kit-core` (single source of truth) and are copied to `viana-kit` on sync:

```
viana-kit-core/
└── packages/ui/src/rules/     ← authored here
    ├── button.md
    ├── input.md
    └── ...

viana-kit/
└── rules/                     ← copied here on `npm run sync`
    ├── button.md
    ├── input.md
    └── ...
```

This means when a prop is added to a primitive, the rule file is updated in the same session.

---

## sync.js changes required

Add a rules sync block to `scripts/sync.js`:

- Source: `packages/ui/src/rules/`
- Destination: `viana-kit/rules/`
- No import transformation needed (these are `.md` files)
- Copy verbatim, same as `ui/` files

---

## AGENTS.md addition (viana-kit)

Add a short section pointing agents to the rules folder:

```markdown
## Component rules

Before using any primitive, read its rule file in `rules/<component>.md`.
Each file contains the full prop list, usage examples, and explicit dos/don'ts.

Example: before using AppButton, read `rules/button.md`.
```

---

## Rule file template

```markdown
# App[Component]

> Docs: https://viana-kit.vercel.app/docs/components/[component]

Import:
\`\`\`tsx
import { AppComponent } from "@/components/primitives/AppComponent"
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ...  | ...  | ...     | ...         |

## Usage

### [Pattern name]
\`\`\`tsx
[example]
\`\`\`

## Rules
- ✅ ...
- ❌ ...
- ❌ If a prop you need is missing, stop and inform the design team
```

---

## Component list (44 files to create)

| File | Component(s) |
|------|--------------|
| `accordion.md` | AppAccordion, AppAccordionItem, AppAccordionTrigger, AppAccordionContent |
| `alert.md` | AppAlert, AppAlertTitle, AppAlertDescription |
| `alert-dialog.md` | AppAlertDialog + 8 sub-components |
| `aspect-ratio.md` | AppAspectRatio |
| `avatar.md` | AppAvatar, AppAvatarImage, AppAvatarFallback |
| `badge.md` | AppBadge |
| `breadcrumb.md` | AppBreadcrumb + 6 sub-components |
| `button.md` | AppButton |
| `button-group.md` | AppButtonGroup |
| `calendar.md` | AppCalendar |
| `card.md` | AppCard + 6 sub-components |
| `checkbox.md` | AppCheckbox |
| `collapsible.md` | AppCollapsible, AppCollapsibleTrigger, AppCollapsibleContent |
| `command.md` | AppCommand + 9 sub-components |
| `context-menu.md` | AppContextMenu + 5 sub-components |
| `dialog.md` | AppDialog + 7 sub-components |
| `drawer.md` | AppDrawer + 7 sub-components |
| `dropdown-menu.md` | AppDropdownMenu + 12 sub-components |
| `field.md` | AppField, AppFieldLabel, AppFieldDescription, AppFieldError |
| `form.md` | AppForm + 6 sub-components |
| `hover-card.md` | AppHoverCard, AppHoverCardTrigger, AppHoverCardContent |
| `input.md` | AppInput |
| `label.md` | AppLabel |
| `menubar.md` | AppMenubar + sub-components |
| `navigation-menu.md` | AppNavigationMenu + 5 sub-components |
| `pagination.md` | AppPagination + 6 sub-components |
| `popover.md` | AppPopover, AppPopoverTrigger, AppPopoverContent |
| `progress.md` | AppProgress |
| `radio-group.md` | AppRadioGroup, AppRadioGroupItem |
| `scroll-area.md` | AppScrollArea, AppScrollBar |
| `scroll-text.md` | AppScrollText |
| `select.md` | AppSelect + 5 sub-components |
| `separator.md` | AppSeparator |
| `sheet.md` | AppSheet + 7 sub-components |
| `skeleton.md` | AppSkeleton |
| `spinner.md` | AppSpinner |
| `switch.md` | AppSwitch |
| `table.md` | AppTable + 7 sub-components |
| `tabs.md` | AppTabs, AppTabsList, AppTabsTrigger, AppTabsContent |
| `textarea.md` | AppTextarea |
| `toaster.md` | AppToaster, sonnerToast |
| `toggle.md` | AppToggle |
| `toggle-group.md` | AppToggleGroup, AppToggleGroupItem |
| `tooltip.md` | AppTooltip + 3 sub-components |

---

## Phased execution

### Phase 1 — Setup + seed files (design team / Claude)

| Step | Task |
|---|---|
| 1 | Update `sync.js` to copy `packages/ui/src/rules/` → `viana-kit/rules/` |
| 2 | Create `packages/ui/src/rules/` folder in `viana-kit-core` |
| 3 | Write `button.md` — most props to document, sets the quality bar |
| 4 | Write `input.md` — recently enhanced, rules are fresh |
| 5 | Add `rules/` reference section to `viana-kit/AGENTS.md` |
| 6 | Run `npm run sync` — verifies the pipeline works end-to-end |

**Output of Phase 1:** A working rules pipeline with 2 reference files Gemini can use as a template.

---

### Phase 2 — Remaining 42 files (Gemini)

Delegate to Gemini with the following prompt:

> You are working in the `viana-kit-core` monorepo. Your task is to write rule files for all remaining primitives in `packages/ui/src/rules/`.
>
> **Already done — skip these:**
> - `button.md`
> - `input.md`
>
> **Use these as your template:**
> - Read `packages/ui/src/rules/button.md` and `input.md` to understand the format.
>
> **For each remaining component**, create a `.md` file in `packages/ui/src/rules/` following the same structure:
> - Component name and doc link
> - Import statement
> - Props table (derive from the primitive `.tsx` file in `packages/ui/src/components/primitives/`)
> - Usage examples (2–3 short, realistic code snippets)
> - Rules section (dos, don'ts, and always end with: "If a prop you need is missing, stop and inform the design team")
>
> **File naming:** match the docs route — e.g. `alert-dialog.md`, `dropdown-menu.md`.
>
> **Remaining files to create:** accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button-group, calendar, card, checkbox, collapsible, command, context-menu, dialog, drawer, dropdown-menu, field, form, hover-card, label, menubar, navigation-menu, pagination, popover, progress, radio-group, scroll-area, scroll-text, select, separator, sheet, skeleton, spinner, switch, table, tabs, textarea, toaster, toggle, toggle-group, tooltip
>
> Do not run `npm run sync` — the design team will do that after review.

---

## Notes

- Keep rule files short. The goal is fast AI consumption, not comprehensive documentation. If a section is already in AGENTS.md, do not repeat it in the rule file.
- After Phase 2 is complete, review Gemini's output before running sync — spot-check a few files against the actual primitive source.
- When a primitive is enhanced (new prop added), update its rule file in the same session.
