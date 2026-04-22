import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import {
  LocationTreeFilterDefaultPreview,
  LocationTreeFilterNoUnallocatedPreview,
} from "@/components/previews/location-tree-filter-preview";

export const metadata: Metadata = {
  title: "Location Tree Filter",
};

export default function LocationTreeFilterPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Blocks</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Location Tree Filter
        </h1>
        <p className="text-lg text-muted-foreground">
          A searchable, collapsible tree for filtering records by hierarchical location data.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<LocationTreeFilterDefaultPreview />}
        code={`import { AppLocationTreeFilter } from "@/components/blocks/AppLocationTreeFilter"

const tree = [
  {
    label: "All",
    count: 65,
    children: [
      {
        label: "Philippines",
        count: 65,
        children: [
          { label: "Davao City Davao", count: 1, children: [{ label: "Davao City", count: 1 }] },
          { label: "Misamis Oriental", count: 64, children: [{ label: "Cagayan de Oro", count: 64 }] },
        ],
      },
    ],
  },
]

export default function Page() {
  const [selected, setSelected] = React.useState<string | null>(null)

  return (
    <AppLocationTreeFilter
      data={tree}
      title="Filter by Location"
      showHelp
      unallocated={{ label: "Unallocated Devices", count: 135 }}
      selected={selected}
      onSelect={setSelected}
    />
  )
}`}
        filename="page.tsx"
      />

      <hr className="my-10 border-border" />

      {/*
        canonical_id: block-location-tree-filter-v1
        related_components: ["AppLocationTreeFilter", "AppCollapsible", "AppInput"]
        platform_tags: ["web"]
        enforcement_level: strict
      */}

      <section className="space-y-10">
        {/* Import */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Import</h2>
          <CodeBlock
            language="tsx"
            code={`import { AppLocationTreeFilter } from "@/components/blocks/AppLocationTreeFilter"`}
          />
        </div>

        {/* API Reference */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>

          {/* AppLocationTreeFilterProps */}
          <h3 className="text-base font-semibold text-foreground">AppLocationTreeFilter</h3>
          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-3 text-left font-medium text-foreground">Prop</th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">Type</th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">Default</th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { prop: "data", type: "TreeNode[]", default: "required", description: "Tree data. Top-level nodes with optional children." },
                  { prop: "selected", type: "string | null", default: "required", description: "Current selection. null = root/all state." },
                  { prop: "onSelect", type: "(value: string | null) => void", default: "required", description: "Fired on node or unallocated row click." },
                  { prop: "title", type: "string", default: '"Filter by Location"', description: "Label shown above the search input." },
                  { prop: "showHelp", type: "boolean", default: "false", description: "Shows a help icon next to the title." },
                  { prop: "searchPlaceholder", type: "string", default: '"Search locations..."', description: "Placeholder for the search input." },
                  { prop: "unallocated", type: "UnallocatedConfig", default: "undefined", description: "Pinned row above the tree for unallocated records. Omit to hide." },
                  { prop: "className", type: "string", default: "—", description: "Extra classes on the root container." },
                ].map(({ prop, type, default: def, description }) => (
                  <tr key={prop}>
                    <td className="px-4 py-3 font-mono text-xs text-foreground">{prop}</td>
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{type}</td>
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{def}</td>
                    <td className="px-4 py-3 text-muted-foreground">{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* TreeNode type */}
          <h3 className="text-base font-semibold text-foreground">TreeNode</h3>
          <CodeBlock
            language="tsx"
            code={`type TreeNode = {
  label: string         // Display label and selection key
  count: number         // Badge count shown alongside the label
  children?: TreeNode[] // If present, renders as a collapsible branch
}`}
          />

          {/* UnallocatedConfig type */}
          <h3 className="text-base font-semibold text-foreground">UnallocatedConfig</h3>
          <CodeBlock
            language="tsx"
            code={`type UnallocatedConfig = {
  label?: string  // Row label. Defaults to "Unallocated"
  count: number   // Badge count
  value?: string  // Sentinel value emitted on click. Defaults to "__unallocated__"
}`}
          />
        </div>

        {/* Examples */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Examples</h2>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">Without unallocated row</h3>
            <p className="text-sm text-muted-foreground">
              Omit the <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">unallocated</code> prop
              to hide the special row entirely.
            </p>
            <ComponentPreview
              preview={<LocationTreeFilterNoUnallocatedPreview />}
              code={`<AppLocationTreeFilter
  data={tree}
  title="Filter by Region"
  selected={selected}
  onSelect={setSelected}
/>`}
              filename="example.tsx"
            />
          </div>
        </div>

        {/* Selection behavior */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Selection behavior
          </h2>
          <p className="text-muted-foreground leading-7">
            The <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">selected</code> prop
            drives all highlight state. The block never manages selection internally — your component
            owns the state.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
            <li>
              <strong className="text-foreground">null</strong> — root "All" state. Top-level branch nodes emit{" "}
              <code className="font-mono">null</code> when clicked.
            </li>
            <li>
              <strong className="text-foreground">string</strong> — a node label. Mid-level and leaf nodes emit
              their own label.
            </li>
            <li>
              <strong className="text-foreground">unallocated.value</strong> — defaults to{" "}
              <code className="font-mono">&quot;__unallocated__&quot;</code>. If storing in URL search params,
              encode this value with <code className="font-mono">encodeURIComponent</code>.
            </li>
          </ul>
        </div>

        {/* Search behavior */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Search behavior
          </h2>
          <p className="text-muted-foreground leading-7">
            Typing in the search input filters the visible tree nodes by label. Branches that contain
            a match are automatically expanded so results are always reachable. Clearing the search
            restores the original collapsed state.
          </p>
        </div>
      </section>
    </article>
  );
}
