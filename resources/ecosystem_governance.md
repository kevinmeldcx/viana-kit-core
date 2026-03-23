# Viana Kit: Ecosystem & Governance Strategy

Viana Kit is a unified, AI-native design system built on top of **React** and **shadcn/ui**. It is architected to decouple brand identity and UI consistency from individual product lifecycles, empowering engineering teams to focus exclusively on business logic while the Creative Team maintains total governance over the visual language.

---

## 1. Repository Architecture: "The Factory & The Product"

To ensure a "Single Source of Truth" while providing a friction-less developer experience, Viana Kit utilizes a two-tier repository architecture.

### A. The Factory: `viana-kit-core` (Monorepo)
- **Target Audience:** Creative Director, Design System Engineers.
- **Purpose:** Centralized development of branded primitives, design tokens, and machine-readable documentation.
- **Structure:**
  - `packages/ui/`: Master repository for all branded shadcn components.
  - `packages/tokens/`: Core design tokens (Tailwind config, CSS variables, assets).
  - `apps/docs/`: Documentation portal (e.g., `docs.vianakit.com`) with live previews and AI-ready metadata.

### B. The Product: `viana-kit` (Distribution Starter)
- **Target Audience:** Product Frontend and Backend Developers.
- **Purpose:** A clean, pre-configured repository template for new product initiatives.
- **Structure:**
  - `src/components/ui/`: A mirrored, read-only copy of branded components from the Factory.
  - `src/app/`: The blank canvas for building product-specific features.
  - *Note: Once cloned, this repository becomes the project-specific source (e.g., `viana-billing-app`).*

---

## 2. Governance: The "Read-Only" Boundary

To maintain the integrity and updateability of the Viana Kit ecosystem, we enforce a strict architectural boundary between **System Code** and **Product Code**.

> [!IMPORTANT]
> **The Golden Rule:** Developers are strictly prohibited from modifying any files within the `src/components/ui/` directory.

### Rationalization
Direct modification of core components creates immediate technical debt and prevents automated brand updates. Local overrides will be lost or cause merge conflicts when the latest brand-aligned components are pushed from the Factory.

### The Solution: The Wrapper Pattern
If a component requires project-specific behavior or extended styling, developers must create a new component outside the `ui/` directory that imports and wraps the standard Viana Kit primitive.

---

## 3. Update Delivery Pipeline

Viana Kit follows the shadcn/ui "Copy-and-Paste" philosophy, where code lives directly in the product repository. To manage this at scale, we utilize an overwriting delivery model.

1.  **Central Update:** The Creative Team updates a component in `viana-kit-core` (e.g., adjusting padding or accessibility attributes).
2.  **Documentation Sync:** `docs.vianakit.com` updates automatically to reflect the new styles, API changes, and RAG-optimized documentation.
3.  **Developer Deployment:** Product engineers pull updates into their local workspace using the Viana CLI.

```bash
# Update a specific component to the latest version
npx viana-kit update button
```

**Safety Mechanism:** Because the `src/components/ui/` directory is treated as read-only by the product team, the CLI can safely overwrite files with zero merge conflicts, ensuring 100% brand compliance.

---

## 4. Phased Strategic Roadmap

| Phase | focus Area | Key Deliverables |
| :--- | :--- | :--- |
| **Phase 1** | **Core Foundation** | Branded shadcn/ui primitives; `viana-kit` starter repo; Core design tokens. |
| **Phase 2** | **Knowledge & Docs** | Launch `docs.vianakit.com`; RAG-optimized documentation; Component "Copy-Paste" blocks. |
| **Phase 3** | **Automation & AI** | Viana CLI (`add`/`update`); MCP Server deployment; `paper.design` integration. |

---

## 5. Summary of Responsibilities

| Role | Core Responsibility | Primary Repository Access |
| :--- | :--- | :--- |
| **Creative Director** | Brand Vision, Component UX, & Design Guidelines | `viana-kit-core` |
| **Design System Team** | Primitive Maintenance, CLI Tooling, & MCP Support | `viana-kit-core` |
| **Product Developers** | Feature Implementation, Business Logic, & Product UX | `viana-kit` |
