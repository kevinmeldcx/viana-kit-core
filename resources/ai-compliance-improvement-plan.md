# AI Compliance Improvement Plan

This document tracks planned improvements to make Viana Kit more AI-agent-friendly — reducing the chance that an AI composes non-compliant UI by ensuring primitives are self-documenting, well-scoped, and enforced by tooling.

---

## Guiding Principle

> Move logic from "AI needs to remember to compose" to "the primitive handles it via props."

AI agents must never invent components or compose substitutes from raw HTML. If something is missing, the AI stops and informs the user so the design team can add it to the system.

---

## Track 1 — AGENTS.md: Governance & Enhancement Guidance

**Status:** DONE

Two additions to the root `AGENTS.md`:

### A. "Missing Primitive" rule (hard stop)

> If you need a component that does not exist in `packages/ui/src/components/primitives/`, **do not create it.** Stop and tell the user: *"The [ComponentName] primitive does not exist in Viana Kit. Please inform the design team so it can be added to the system before proceeding."* Never compose a substitute from raw HTML or generic wrappers.

### B. "Enhancing Primitives" guidance

> When a primitive exists but lacks a prop you need (e.g. `loading`, `iconLeft`), do not compose the pattern manually. Check if the prop exists first. If it doesn't, flag it to the user as a missing prop — the design team will add it to the primitive.

**Scope:** One AGENTS.md edit, two new sections. This gates all other tracks — do this first.

---

## Track 2 — Per-Primitive Prop Enhancement (one by one)

**Status:** DONE — design team owned

AI agents flag missing props during page-building. Design team implements enhancements here.

**Rule:** Each session = one primitive. After enhancing, always run `npm run sync`.

### Priority queue

| Priority | Component | Props to Add |
|---|---|---|
| 1 | `AppButton` | `loading?: boolean`, `iconLeft?: ReactNode`, `iconRight?: ReactNode` |
| 2 | `AppInput` | `leftAdornment?: ReactNode`, `rightAdornment?: ReactNode` |
| 3 | `AppSelect` | `loading?: boolean` |
| 4+ | Others | Discovered via AI feedback during page-building |

---

## Track 3 — JSDoc on Primitives (44 files)

**Status:** Done

Add JSDoc above each component and its props type so AI agents have explicit in-source guidance.

### Pattern

```tsx
/**
 * AppButton — primary action primitive.
 * @prop loading - Shows a spinner and disables the button. Do not add a spinner manually.
 * @prop iconLeft / iconRight - Icon slots. Gap is handled internally — do not add extra wrappers.
 * @note If a prop you need doesn't exist, stop and inform the design team rather than composing manually.
 * @note Never use raw <button>. Never redefine CVA variants.
 */
```

### Approach

- Done alongside Track 2: when a primitive is enhanced, its JSDoc is added in the same session.
- After the high-priority primitives are done, run a dedicated sweep for the remaining 41 files with baseline JSDoc.

---

## Track 4 — Custom ESLint Rule (`no-raw-html-elements`)

**Status:** Pending — implement after Track 2/3 are stable for top primitives

### What

A `no-raw-html-elements` rule in a new `packages/eslint-plugin-viana` package. Errors when raw HTML elements are used where a Viana primitive exists.

### Enforcement map

| Raw element | Use instead |
|---|---|
| `<button>` | `AppButton` |
| `<input>` | `AppInput` |
| `<textarea>` | `AppTextarea` |
| `<select>` | `AppSelect` |
| `<label>` | `AppLabel` |

### Package structure

```
packages/
  eslint-plugin-viana/
    index.js
    rules/
      no-raw-html-elements.js
  package.json
```

### Scope

- Applied to: `apps/**` and consumer repos
- Excluded from: `packages/ui/src/components/ui/` (shadcn base layer uses raw HTML intentionally)

---

## Execution Order

| Step | Track | Task |
|---|---|---|
| 1 | Track 1 | AGENTS.md — "Missing Primitive" hard-stop rule + enhancement guidance |
| 2 | Track 2 + 3 | `AppButton` — add `loading` / `iconLeft` / `iconRight` + JSDoc |
| 3 | Track 2 + 3 | `AppInput` — add adornment props + JSDoc |
| 4 | Track 2 + 3 | `AppSelect` — add `loading` + JSDoc |
| 5 | Track 3 | Baseline JSDoc sweep for remaining 41 primitives |
| 6 | Track 4 | ESLint plugin (once enforcement map is stable) |
