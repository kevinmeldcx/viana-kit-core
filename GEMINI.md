# Viana Kit Core — Gemini Agent Guide

Read `AGENTS.md` in this directory before writing any code. It contains all architectural rules, component patterns, contribution guidelines, and repo structure for this repository.

Key points:
- This is a **source repo** — changes sync downstream to the `viana-kit` distribution repo via `npm run sync`.
- Components live in a strict two-layer architecture: `packages/ui/src/components/ui/` (shadcn base) and `packages/ui/src/components/primitives/` (Viana Kit `App*` wrappers).
- Layout components live in `packages/ui/src/components/layouts/` and compose primitives.
- All import rules, primitive patterns, and anti-patterns are in `AGENTS.md`.
