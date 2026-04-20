import type { Metadata } from "next";
import { AppThemeProvider, AppToaster } from "@viana/ui";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Viana Kit",
    template: "%s – Viana Kit",
  },
  description:
    "An AI-native design system built on React, Tailwind CSS v4, and shadcn/ui. Architected for human developers and AI agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="min-h-full bg-background text-foreground antialiased">
        <AppThemeProvider storageKey="viana-docs-theme">{children}</AppThemeProvider>
        <AppToaster />
      </body>
    </html>
  );
}
