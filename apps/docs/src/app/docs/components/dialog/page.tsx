import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { DialogDefaultPreview } from "@/components/previews/dialog-preview";

export const metadata: Metadata = {
  title: "Dialog",
};

export default function DialogPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Dialog
        </h1>
        <p className="text-lg text-muted-foreground">
          A modal dialog that focuses the user's attention.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<DialogDefaultPreview />}
        code={`import { AppDialog, AppDialogContent, AppDialogHeader, AppDialogTitle, AppDialogDescription, AppDialogTrigger } from "@/components/primitives/AppDialog"
import { AppButton } from "@/components/primitives/AppButton"

export function Example() {
  return (
    <AppDialog>
      <AppDialogTrigger asChild>
        <AppButton>Open Dialog</AppButton>
      </AppDialogTrigger>
      <AppDialogContent>
        <AppDialogHeader>
          <AppDialogTitle>Dialog Title</AppDialogTitle>
          <AppDialogDescription>Description here</AppDialogDescription>
        </AppDialogHeader>
      </AppDialogContent>
    </AppDialog>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-dialog-v1
        related_components: ["AppDialog", "AppDialogTrigger", "AppDialogContent", "AppDialogHeader", "AppDialogTitle", "AppDialogDescription"]
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
  AppDialog,
  AppDialogTrigger,
  AppDialogContent,
  AppDialogHeader,
  AppDialogTitle,
  AppDialogDescription,
} from "@/components/primitives/AppDialog"`}
          />
        </div>

        {/* API Reference - AppDialog */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppDialog
            </code>{" "}
            extends all native{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              {"<dialog>"}
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
                    prop: "open",
                    type: "boolean",
                    default: "—",
                    description: "The controlled open state of the dialog.",
                  },
                  {
                    prop: "onOpenChange",
                    type: "(open: boolean) => void",
                    default: "—",
                    description: "Callback fired when the open state changes.",
                  },
                  {
                    prop: "className",
                    type: "string",
                    default: "—",
                    description:
                      "Additional Tailwind classes merged via cn(). Applied after the rounded-md brand default, so it always wins.",
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
            filename="src/components/primitives/AppDialog.tsx"
            code={`"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

type AppDialogProps = {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

function AppDialog({ children, ...props }: AppDialogProps) {
  return <Dialog {...props}>{children}</Dialog>
}

function AppDialogTrigger(props: React.ComponentProps<typeof DialogTrigger>) {
  return <DialogTrigger {...props} />
}

function AppDialogContent({ className, ...props }: React.ComponentPropsWithoutRef<typeof DialogContent>) {
  return <DialogContent className={cn("rounded-md", className)} {...props} />
}

function AppDialogHeader(props: React.HTMLAttributes<HTMLDivElement>) {
  return <DialogHeader {...props} />
}

function AppDialogTitle(props: React.ComponentPropsWithoutRef<typeof DialogTitle>) {
  return <DialogTitle {...props} />
}

function AppDialogDescription(props: React.ComponentPropsWithoutRef<typeof DialogDescription>) {
  return <DialogDescription {...props} />
}

export {
  AppDialog,
  AppDialogTrigger,
  AppDialogContent,
  AppDialogHeader,
  AppDialogTitle,
  AppDialogDescription,
}`}
          />
        </div>
      </section>
    </article>
  );
}
