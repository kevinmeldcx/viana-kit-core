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
          What is Viana Kit?
        </h1>
        <p className="text-lg text-muted-foreground">
          An AI-native design system built on React, Tailwind CSS v4, and
          shadcn/ui — architected for both human developers and AI agents.
        </p>
      </div>

      <hr className="border-border mb-8" />

      <section className="space-y-10">
        {/* Three Use Cases */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Three Ways to Use Viana Kit
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-primary/50 bg-primary/5 p-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">
                  For Developers
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Clone the starter kit and build your app with pre-configured components. No setup required.
              </p>
            </div>

            <div className="rounded-lg border border-border p-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded bg-secondary px-2 py-0.5 text-xs font-semibold text-secondary-foreground">
                  For Product
                </span>
                <span className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                  Soon
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Build rapid prototypes with Skills and MCP. Connect AI agents to generate compliant code.
              </p>
            </div>

            <div className="rounded-lg border border-border p-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded bg-secondary px-2 py-0.5 text-xs font-semibold text-secondary-foreground">
                  For Designers
                </span>
                <span className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                  Soon
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Link to Figma, Paper.design, and Pencil.dev. Generate mockups rapidly from design systems.
              </p>
            </div>
          </div>
        </div>

        {/* Getting Started for Developers */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            For Developers
          </h2>
          <p className="text-muted-foreground leading-7">
            The fastest way to start is to clone the{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              viana-kit
            </code>{" "}
            starter — a blank canvas pre-wired with all components, Tailwind v4, and the correct directory structure.
          </p>
          <CodeBlock
            language="bash"
            code={`# Clone the starter kit
git clone https://github.com/kevinmeldcx/viana-kit.git my-app
cd my-app

# Install dependencies
npm install

# Start the dev server
npm run dev`}
          />
          <p className="text-muted-foreground leading-7">
            Visit the repository for the latest components and documentation:
          </p>
          <CodeBlock
            language="bash"
            code={`https://github.com/kevinmeldcx/viana-kit`}
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
            code={`// Correct — wrap the primitive, extend in your own file
import { AppButton, type AppButtonProps } from "@/components/primitives/AppButton"

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
            Viana Kit is designed to be AI-agent friendly. Every component page
            includes machine-readable metadata: canonical IDs, related components,
            enforcement levels, and platform tags — so AI agents can reason about
            the design system with the same depth a senior engineer would.
          </p>
          <div className="rounded-lg border border-border bg-muted/30 px-5 py-4">
            <p className="text-sm font-medium text-foreground">Coming Soon</p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>• MCP server for IDE integration</li>
              <li>• Skills for rapid prototyping</li>
              <li>• Auto-generated component documentation</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
