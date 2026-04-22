"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navSections = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Design System", href: "/docs/design-system" },
    ],
  },
  {
    title: "Blocks",
    items: [
      { title: "Dashboard", href: "/docs/blocks/dashboard" },
      { title: "Header", href: "/docs/blocks/header" },
      { title: "Page Title", href: "/docs/blocks/pagetitle" },
      { title: "Location Tree Filter", href: "/docs/blocks/location-tree-filter" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Accordion", href: "/docs/components/accordion" },
      { title: "Alert", href: "/docs/components/alert" },
      { title: "Alert Dialog", href: "/docs/components/alert-dialog" },
      { title: "Aspect Ratio", href: "/docs/components/aspect-ratio" },
      { title: "Avatar", href: "/docs/components/avatar" },
      { title: "Badge", href: "/docs/components/badge" },
      { title: "Breadcrumb", href: "/docs/components/breadcrumb" },
      { title: "Button", href: "/docs/components/button" },
      { title: "Button Group", href: "/docs/components/button-group" },
      { title: "Calendar", href: "/docs/components/calendar" },
      { title: "Card", href: "/docs/components/card" },
      { title: "Checkbox", href: "/docs/components/checkbox" },
      { title: "Collapsible", href: "/docs/components/collapsible" },
      { title: "Command", href: "/docs/components/command" },
      { title: "Context Menu", href: "/docs/components/context-menu" },
      { title: "Dialog", href: "/docs/components/dialog" },
      { title: "Drawer", href: "/docs/components/drawer" },
      { title: "Dropdown Menu", href: "/docs/components/dropdown-menu" },
      { title: "Field", href: "/docs/components/field" },
      { title: "Form", href: "/docs/components/form" },
      { title: "Hover Card", href: "/docs/components/hover-card" },
      { title: "Input", href: "/docs/components/input" },
      { title: "Label", href: "/docs/components/label" },
      { title: "Menubar", href: "/docs/components/menubar" },
      { title: "Navigation Menu", href: "/docs/components/navigation-menu" },
      { title: "Popover", href: "/docs/components/popover" },
      { title: "Pagination", href: "/docs/components/pagination" },
      { title: "Progress", href: "/docs/components/progress" },
      { title: "Radio Group", href: "/docs/components/radio-group" },
      { title: "Scroll Area", href: "/docs/components/scroll-area" },
      { title: "Scroll Text", href: "/docs/components/scroll-text" },
      { title: "Select", href: "/docs/components/select" },
      { title: "Separator", href: "/docs/components/separator" },
      { title: "Sheet", href: "/docs/components/sheet" },
      { title: "Sidebar", href: "/docs/components/sidebar" },
      { title: "Spinner", href: "/docs/components/spinner" },
      { title: "Skeleton", href: "/docs/components/skeleton" },
      { title: "Toaster", href: "/docs/components/toaster" },
      { title: "Switch", href: "/docs/components/switch" },
      { title: "Table", href: "/docs/components/table" },
      { title: "Tabs", href: "/docs/components/tabs" },
      { title: "Textarea", href: "/docs/components/textarea" },
      { title: "Toggle", href: "/docs/components/toggle" },
      { title: "Toggle Group", href: "/docs/components/toggle-group" },
      { title: "Tooltip", href: "/docs/components/tooltip" },
    ],
  },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="space-y-6">
      {navSections.filter((section) => section.items.length > 0).map((section) => (
        <div key={section.title}>
          <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {section.title}
          </p>
          <ul className="space-y-0.5">
            {section.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-md px-2 py-1.5 text-sm transition-colors ${
                      isActive
                        ? "bg-primary/10 font-medium text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
