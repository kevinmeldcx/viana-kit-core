import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { NavigationMenuDefaultPreview } from "@/components/previews/navigation-menu-preview";

export const metadata: Metadata = { title: "Navigation Menu" };

export default function NavigationMenuPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Navigation Menu</h1>
        <p className="text-lg text-muted-foreground">A set of navigational links with dropdowns.</p>
      </div>
      <ComponentPreview preview={<NavigationMenuDefaultPreview />} code={`import { AppNavigationMenu, AppNavigationMenuList, AppNavigationMenuItem, AppNavigationMenuTrigger, AppNavigationMenuContent, AppNavigationMenuLink } from "@/components/primitives/AppNavigationMenu"

export function Example() {
  return (
    <AppNavigationMenu>
      <AppNavigationMenuList>
        <AppNavigationMenuItem>
          <AppNavigationMenuTrigger>Menu</AppNavigationMenuTrigger>
          <AppNavigationMenuContent>Content</AppNavigationMenuContent>
        </AppNavigationMenuItem>
        <AppNavigationMenuItem>
          <AppNavigationMenuLink href="#">Link</AppNavigationMenuLink>
        </AppNavigationMenuItem>
      </AppNavigationMenuList>
    </AppNavigationMenu>
  )
}`} filename="example.tsx" />
      <hr className="border-border my-10" />
      <section className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Installation</h2>
          <CodeBlock language="bash" code="npx viana-kit add navigation-menu" />
        </div>
      </section>
    </article>
  );
}
