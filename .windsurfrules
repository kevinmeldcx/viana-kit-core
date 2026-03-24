See AGENTS.md at the repo root for full instructions on how to work in this codebase.

Key rules at a glance:
- `packages/ui/src/components/primitives/` — App* wrappers must re-export from `../ui/`, never from `@radix-ui/*` directly
- Never rebuild CVA variants or component logic in a primitive — wrap the shadcn `ui/` component instead
- After changing any primitive or ui component, run `npm run sync` to push to viana-kit
- When adding a new component: ui/ file → primitive file → index.ts export → docs preview → docs page → sidebar

Read AGENTS.md for the full architecture, primitive pattern, sync workflow, and what not to do.
