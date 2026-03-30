import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { PaginationDefaultPreview, PaginationIconsOnlyPreview } from "@/components/previews/pagination-preview";

export const metadata: Metadata = {
  title: "Pagination",
};

export default function PaginationPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Pagination
        </h1>
        <p className="text-lg text-muted-foreground">
          Navigation controls for moving between pages of content.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<PaginationDefaultPreview />}
        code={`import {
  AppPagination,
  AppPaginationContent,
  AppPaginationEllipsis,
  AppPaginationItem,
  AppPaginationLink,
  AppPaginationNext,
  AppPaginationPrevious,
} from "@/components/primitives/AppPagination"

export function Example() {
  return (
    <AppPagination>
      <AppPaginationContent>
        <AppPaginationItem>
          <AppPaginationPrevious href="#" />
        </AppPaginationItem>
        <AppPaginationItem>
          <AppPaginationLink href="#">1</AppPaginationLink>
        </AppPaginationItem>
        <AppPaginationItem>
          <AppPaginationLink href="#" isActive>2</AppPaginationLink>
        </AppPaginationItem>
        <AppPaginationItem>
          <AppPaginationLink href="#">3</AppPaginationLink>
        </AppPaginationItem>
        <AppPaginationItem>
          <AppPaginationEllipsis />
        </AppPaginationItem>
        <AppPaginationItem>
          <AppPaginationLink href="#">10</AppPaginationLink>
        </AppPaginationItem>
        <AppPaginationItem>
          <AppPaginationNext href="#" />
        </AppPaginationItem>
      </AppPaginationContent>
    </AppPagination>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-pagination-v1
        related_components: ["AppPagination", "AppPaginationContent", "AppPaginationItem", "AppPaginationLink", "AppPaginationPrevious", "AppPaginationNext", "AppPaginationEllipsis"]
        platform_tags: ["web"]
        enforcement_level: strict
      */}

      <section className="space-y-10">
        {/* Import */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Import
          </h2>
          <CodeBlock
            language="tsx"
            code={`import {
  AppPagination,
  AppPaginationContent,
  AppPaginationItem,
  AppPaginationLink,
  AppPaginationPrevious,
  AppPaginationNext,
  AppPaginationEllipsis,
} from "@/components/primitives/AppPagination"`}
          />
        </div>

        {/* Active page */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Active page
          </h2>
          <p className="text-muted-foreground leading-7">
            Pass{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              isActive
            </code>{" "}
            to{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppPaginationLink
            </code>{" "}
            to mark the current page. It sets{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              aria-current="page"
            </code>{" "}
            and applies the active style.
          </p>
          <CodeBlock
            language="tsx"
            code={`<AppPaginationLink href="#" isActive>2</AppPaginationLink>`}
          />
        </div>

        {/* Ellipsis */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Ellipsis
          </h2>
          <p className="text-muted-foreground leading-7">
            Use{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppPaginationEllipsis
            </code>{" "}
            to represent skipped page ranges. It renders a{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              MoreHorizontal
            </code>{" "}
            icon with a screen-reader label.
          </p>
          <CodeBlock
            language="tsx"
            code={`<AppPaginationItem>
  <AppPaginationLink href="#">3</AppPaginationLink>
</AppPaginationItem>
<AppPaginationItem>
  <AppPaginationEllipsis />
</AppPaginationItem>
<AppPaginationItem>
  <AppPaginationLink href="#">10</AppPaginationLink>
</AppPaginationItem>`}
          />
        </div>

        {/* Icons only */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Icons only
          </h2>
          <p className="text-muted-foreground leading-7">
            Use just{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppPaginationPrevious
            </code>{" "}
            and{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppPaginationNext
            </code>{" "}
            for a compact prev/next control — useful in data tables where space is limited.
          </p>
          <ComponentPreview
            preview={<PaginationIconsOnlyPreview />}
            code={`<AppPagination>
  <AppPaginationContent>
    <AppPaginationItem>
      <AppPaginationPrevious href="#" />
    </AppPaginationItem>
    <AppPaginationItem>
      <AppPaginationNext href="#" />
    </AppPaginationItem>
  </AppPaginationContent>
</AppPagination>`}
            filename="example.tsx"
          />
        </div>

        {/* API Reference */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            All{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppPagination*
            </code>{" "}
            components extend their underlying HTML elements and accept all standard props.
          </p>
          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-3 text-left font-medium text-foreground">Component</th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">Element</th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["AppPagination", "<nav>", "Root wrapper with role=\"navigation\"."],
                  ["AppPaginationContent", "<ul>", "Flex container for pagination items."],
                  ["AppPaginationItem", "<li>", "Wrapper for each page control."],
                  ["AppPaginationLink", "<a>", "Page number link. Accepts isActive to mark the current page."],
                  ["AppPaginationPrevious", "<a>", "Previous page button with chevron icon."],
                  ["AppPaginationNext", "<a>", "Next page button with chevron icon."],
                  ["AppPaginationEllipsis", "<span>", "Skipped range indicator with screen-reader label."],
                ].map(([component, element, description]) => (
                  <tr key={component}>
                    <td className="px-4 py-3 font-mono text-xs text-foreground">{component}</td>
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{element}</td>
                    <td className="px-4 py-3 text-muted-foreground">{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* AppPaginationLink props */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            AppPaginationLink props
          </h2>
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
                  {
                    prop: "href",
                    type: "string",
                    default: "—",
                    description: "URL the link navigates to.",
                  },
                  {
                    prop: "isActive",
                    type: "boolean",
                    default: "false",
                    description: "Marks this page as current. Applies active styling and sets aria-current=\"page\".",
                  },
                  {
                    prop: "size",
                    type: '"default" | "sm" | "lg" | "icon"',
                    default: '"icon"',
                    description: "Controls the button size variant.",
                  },
                  {
                    prop: "className",
                    type: "string",
                    default: "—",
                    description: "Additional Tailwind classes merged via cn().",
                  },
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
        </div>

        {/* Source */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Source
          </h2>
          <CodeBlock
            filename="src/components/primitives/AppPagination.tsx"
            code={`import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

function AppPagination(props: React.ComponentProps<typeof Pagination>) {
  return <Pagination {...props} />
}

function AppPaginationContent(props: React.ComponentProps<typeof PaginationContent>) {
  return <PaginationContent {...props} />
}

function AppPaginationItem(props: React.ComponentProps<typeof PaginationItem>) {
  return <PaginationItem {...props} />
}

function AppPaginationLink(props: React.ComponentProps<typeof PaginationLink> & { isActive?: boolean }) {
  return <PaginationLink {...props} />
}

function AppPaginationPrevious(props: React.ComponentProps<typeof PaginationPrevious>) {
  return <PaginationPrevious {...props} />
}

function AppPaginationNext(props: React.ComponentProps<typeof PaginationNext>) {
  return <PaginationNext {...props} />
}

function AppPaginationEllipsis(props: React.ComponentProps<typeof PaginationEllipsis>) {
  return <PaginationEllipsis {...props} />
}

export {
  AppPagination,
  AppPaginationContent,
  AppPaginationItem,
  AppPaginationLink,
  AppPaginationPrevious,
  AppPaginationNext,
  AppPaginationEllipsis,
}`}
          />
        </div>
      </section>
    </article>
  );
}
