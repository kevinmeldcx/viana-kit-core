import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { DrawerDefaultPreview } from "@/components/previews/drawer-preview";

export const metadata: Metadata = {
  title: "Drawer",
};

export default function DrawerPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Drawer
        </h1>
        <p className="text-lg text-muted-foreground">
          A panel that slides in from the edge of the screen.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<DrawerDefaultPreview />}
        code={`import {
  AppDrawer,
  AppDrawerTrigger,
  AppDrawerContent,
  AppDrawerHeader,
  AppDrawerTitle,
  AppDrawerDescription,
  AppDrawerFooter,
  AppDrawerClose,
} from "@/components/primitives/AppDrawer"
import { AppButton } from "@/components/primitives/AppButton"

export function Example() {
  return (
    <AppDrawer>
      <AppDrawerTrigger asChild>
        <AppButton>Open Drawer</AppButton>
      </AppDrawerTrigger>
      <AppDrawerContent>
        <AppDrawerHeader>
          <AppDrawerTitle>Edit Profile</AppDrawerTitle>
          <AppDrawerDescription>
            Make changes to your profile here.
          </AppDrawerDescription>
        </AppDrawerHeader>
        <AppDrawerFooter>
          <AppButton>Save Changes</AppButton>
          <AppDrawerClose asChild>
            <AppButton variant="outline">Cancel</AppButton>
          </AppDrawerClose>
        </AppDrawerFooter>
      </AppDrawerContent>
    </AppDrawer>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-drawer-v1
        related_components: ["AppDrawer", "AppDrawerPortal", "AppDrawerOverlay", "AppDrawerTrigger", "AppDrawerClose", "AppDrawerContent", "AppDrawerHeader", "AppDrawerFooter", "AppDrawerTitle", "AppDrawerDescription"]
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
  AppDrawer,
  AppDrawerPortal,
  AppDrawerOverlay,
  AppDrawerTrigger,
  AppDrawerClose,
  AppDrawerContent,
  AppDrawerHeader,
  AppDrawerFooter,
  AppDrawerTitle,
  AppDrawerDescription,
} from "@/components/primitives/AppDrawer"`}
          />
        </div>

        {/* API Reference - AppDrawer */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppDrawer
            </code>{" "}
            extends all native{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              {"<div>"}
            </code>{" "}
            HTML attributes.
          </p>
          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-3 text-left font-medium text-foreground">
                    Prop
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">
                    Default
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  {
                    prop: "className",
                    type: "string",
                    default: "—",
                    description:
                      "Additional Tailwind classes merged via cn(). Prefer the wrapper pattern for reusable overrides.",
                  },
                ].map(({ prop, type, default: def, description }) => (
                  <tr key={prop}>
                    <td className="px-4 py-3 font-mono text-xs text-foreground">
                      {prop}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                      {type}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                      {def}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {description}
                    </td>
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
            filename="src/components/primitives/AppDrawer.tsx"
            code={`import {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from "../ui/drawer"

const AppDrawer = Drawer
const AppDrawerPortal = DrawerPortal
const AppDrawerOverlay = DrawerOverlay
const AppDrawerTrigger = DrawerTrigger
const AppDrawerClose = DrawerClose
const AppDrawerContent = DrawerContent
const AppDrawerHeader = DrawerHeader
const AppDrawerFooter = DrawerFooter
const AppDrawerTitle = DrawerTitle
const AppDrawerDescription = DrawerDescription

export {
  AppDrawer,
  AppDrawerPortal,
  AppDrawerOverlay,
  AppDrawerTrigger,
  AppDrawerClose,
  AppDrawerContent,
  AppDrawerHeader,
  AppDrawerFooter,
  AppDrawerTitle,
  AppDrawerDescription,
}`}
          />
        </div>
      </section>
    </article>
  );
}
