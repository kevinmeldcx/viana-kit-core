import Link from "next/link";
import { SidebarNav } from "@/components/sidebar-nav";
import { VianaLogo } from "@/components/viana-logo";
import { AppThemeToggle } from "@viana/ui";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="flex h-14 items-center gap-3 px-6">
          <Link
            href="/docs/introduction"
            className="flex items-center gap-2"
            aria-label="Viana Kit home"
          >
            <VianaLogo />
            <span className="text-sm font-semibold tracking-tight">Viana Kit</span>
          </Link>
          <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">
            v0.1.4
          </span>
          <div className="ml-auto">
            <AppThemeToggle />
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-56 shrink-0 overflow-y-auto border-r border-border px-4 py-6 md:block">
          <SidebarNav />
        </aside>

        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
