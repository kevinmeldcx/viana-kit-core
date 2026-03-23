import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";

export const metadata: Metadata = {
  title: "Introduction",
};

export default function IntroductionPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Getting Started</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Introduction
        </h1>
        <p className="text-lg text-muted-foreground">
          An AI-native design system built on React, Tailwind CSS v4, and
          shadcn/ui — architected for both human developers and AI agents.
        </p>
      </div>

      <hr className="border-border mb-8" />

      <section className="space-y-10">
        {/* What is Viana Kit */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            What is Viana Kit?
          </h2>
          <p className="text-muted-foreground leading-7">
            Viana Kit is a centrally governed component library that decouples
            brand identity from individual product lifecycles. It gives
            engineering teams a clean, pre-wired starting point — so they can
            focus exclusively on business logic while the design system team
            maintains total governance over the visual language.
          </p>
          <p className="text-muted-foreground leading-7">
            Unlike traditional UI libraries shipped as compiled NPM packages,
            Viana Kit uses a{" "}
            <strong className="text-foreground">source-code-first</strong>{" "}
            model. Components live directly in your repository, which means you
            own them entirely — no version conflicts, no black-box internals,
            and no breaking changes forced on you.
          </p>
          <p className="text-muted-foreground leading-7">
            It is also designed from the ground up to be{" "}
            <strong className="text-foreground">machine-readable</strong>.
            Design tokens, component APIs, and usage guidelines are all
            structured so that AI agents can reason about the design system,
            generate compliant code, and inspect visual output — without human
            intervention.
          </p>
        </div>

        {/* Two-Repo Architecture */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Repository Architecture
          </h2>
          <p className="text-muted-foreground leading-7">
            Viana Kit uses a two-tier model to separate governance from
            consumption.
          </p>

          <div className="space-y-4">
            <div className="rounded-lg border border-border p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                  Factory
                </span>
                <code className="text-sm font-mono text-foreground">
                  viana-kit-core
                </code>
              </div>
              <p className="text-sm text-muted-foreground leading-6">
                The monorepo owned by the design system team. This is where
                branded primitives, design tokens, and documentation are
                developed and maintained. Engineers on product teams do not
                commit here.
              </p>
            </div>

            <div className="rounded-lg border border-border p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded bg-secondary px-2 py-0.5 text-xs font-semibold text-secondary-foreground">
                  Product
                </span>
                <code className="text-sm font-mono text-foreground">
                  viana-kit
                </code>
              </div>
              <p className="text-sm text-muted-foreground leading-6">
                A pre-configured starter template for new product initiatives.
                Clone it to bootstrap your project. It comes with a mirrored
                copy of all branded components already in place.
              </p>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Getting Started
          </h2>
          <p className="text-muted-foreground leading-7">
            The fastest way to start a new product is to clone the{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              viana-kit
            </code>{" "}
            starter. It is a blank canvas pre-wired with all branded components,
            Tailwind v4, and the correct directory structure.
          </p>
          <CodeBlock
            language="bash"
            code={`# Clone the starter into your new project
git clone https://github.com/your-org/viana-kit my-app
cd my-app

# Install dependencies
npm install

# Start the dev server
npm run dev`}
          />
          <p className="text-muted-foreground leading-7">
            To add new components from the registry as they are released, use
            the Viana CLI:
          </p>
          <CodeBlock
            language="bash"
            code={`# Add a component to your project
npx viana-kit add button

# Update an existing component to the latest version
npx viana-kit update button`}
          />
        </div>

        {/* The Golden Rule */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            The Governance Rule
          </h2>
          <div className="rounded-lg border border-amber-200 bg-amber-50 px-5 py-4 dark:border-amber-800 dark:bg-amber-950/20">
            <p className="text-sm font-medium text-amber-900 dark:text-amber-300">
              Important
            </p>
            <p className="mt-1 text-sm text-amber-800 leading-6 dark:text-amber-400">
              Never modify files inside{" "}
              <code className="font-mono">src/components/ui/</code>. That
              directory is treated as read-only and will be overwritten when
              brand updates are pushed.
            </p>
          </div>
          <p className="text-muted-foreground leading-7">
            If a component needs project-specific behavior or extended styling,
            create a wrapper outside the{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              ui/
            </code>{" "}
            directory that imports and extends the Viana Kit primitive.
          </p>
          <CodeBlock
            filename="src/components/submit-button.tsx"
            code={`// ✅ Correct — wrap the primitive, extend in your own file
import { AppButton, type AppButtonProps } from "@/components/ui/button"

interface SubmitButtonProps extends AppButtonProps {
  loading?: boolean
}

export function SubmitButton({ loading, children, ...props }: SubmitButtonProps) {
  return (
    <AppButton disabled={loading} {...props}>
      {loading ? "Saving…" : children}
    </AppButton>
  )
}`}
          />
          <CodeBlock
            filename="src/components/ui/button.tsx"
            code={`// ✅ This file is managed by Viana Kit — do not edit directly.
// Run \`npx viana-kit update button\` to pull the latest version.`}
          />
        </div>

        {/* Component Directory Structure */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Component Layers
          </h2>
          <p className="text-muted-foreground leading-7">
            Viana Kit components are organized into three tiers, each with a
            distinct responsibility.
          </p>
          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-3 text-left font-medium text-foreground">
                    Directory
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">
                    Contents
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">
                    Editable?
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 font-mono text-xs text-foreground">
                    components/ui/
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    Raw shadcn/ui primitives, brand-adjusted
                  </td>
                  <td className="px-4 py-3 text-red-600 dark:text-red-400 font-medium">
                    No
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs text-foreground">
                    components/primitives/
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    Viana Kit wrappers with enforced defaults
                  </td>
                  <td className="px-4 py-3 text-red-600 dark:text-red-400 font-medium">
                    No
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs text-foreground">
                    components/blocks/
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    Product-level compositions built from primitives
                  </td>
                  <td className="px-4 py-3 text-green-700 dark:text-green-400 font-medium">
                    Yes
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* For AI Agents */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            For AI Agents
          </h2>
          <p className="text-muted-foreground leading-7">
            Viana Kit is designed to be connected to AI agents via the{" "}
            <strong className="text-foreground">Model Context Protocol</strong>{" "}
            (MCP). Once the MCP server is deployed (Phase 3), agents will be
            able to query the component catalog, fetch design tokens, search
            usage guidelines, and generate compliant code — all without leaving
            your IDE.
          </p>
          <p className="text-muted-foreground leading-7">
            This documentation is also structured for RAG ingestion. Every
            component page includes machine-readable metadata: canonical IDs,
            related components, enforcement levels, and platform tags — so AI
            agents can reason about the design system with the same depth a
            senior engineer would.
          </p>
          <div className="rounded-lg border border-border bg-muted/30 px-5 py-4">
            <p className="text-sm font-medium text-foreground">Coming in Phase 3</p>
            <p className="mt-1 text-sm text-muted-foreground leading-6">
              MCP server deployment, Viana CLI (<code className="font-mono">add</code> /{" "}
              <code className="font-mono">update</code>), and paper.design
              integration. The foundation you are building on now is already
              designed to support it.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
