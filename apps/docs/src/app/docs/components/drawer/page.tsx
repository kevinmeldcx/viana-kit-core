import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { DrawerDefaultPreview } from "@/components/previews/drawer-preview";

export const metadata: Metadata = {
  title: "Drawer - Viana Kit",
  description: "A panel that slides in from the edge of the screen.",
};

export default function DrawerPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Drawer
        </h1>
        <p className="text-lg text-muted-foreground">
          A panel that slides in from the edge of the screen.
        </p>
      </div>

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

      <section className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Installation
          </h2>
          <CodeBlock language="bash" code="npx viana-kit add drawer" />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Import
          </h2>
          <CodeBlock
            language="tsx"
            code={`import {
  AppDrawer,
  AppDrawerTrigger,
  AppDrawerContent,
  AppDrawerHeader,
  AppDrawerTitle,
  AppDrawerDescription,
  AppDrawerFooter,
  AppDrawerClose,
} from "@/components/primitives/AppDrawer"`}
          />
        </div>
      </section>
    </article>
  );
}
