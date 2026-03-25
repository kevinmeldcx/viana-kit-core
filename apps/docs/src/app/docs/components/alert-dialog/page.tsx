import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { AlertDialogDefaultPreview } from "@/components/previews/alert-dialog-preview";

export const metadata: Metadata = {
  title: "Alert Dialog - Viana Kit",
  description: "A modal dialog that interrupts the user with important content.",
};

export default function AlertDialogPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Alert Dialog
        </h1>
        <p className="text-lg text-muted-foreground">
          A modal dialog that interrupts the user with important content.
        </p>
      </div>

      <ComponentPreview
        preview={<AlertDialogDefaultPreview />}
        code={`import {
  AppAlertDialog,
  AppAlertDialogTrigger,
  AppAlertDialogContent,
  AppAlertDialogHeader,
  AppAlertDialogTitle,
  AppAlertDialogDescription,
  AppAlertDialogFooter,
  AppAlertDialogAction,
  AppAlertDialogCancel,
} from "@/components/primitives/AppAlertDialog"
import { AppButton } from "@/components/primitives/AppButton"

export function Example() {
  return (
    <AppAlertDialog>
      <AppAlertDialogTrigger asChild>
        <AppButton variant="destructive">Delete Account</AppButton>
      </AppAlertDialogTrigger>
      <AppAlertDialogContent>
        <AppAlertDialogHeader>
          <AppAlertDialogTitle>Are you absolutely sure?</AppAlertDialogTitle>
          <AppAlertDialogDescription>
            This action cannot be undone.
          </AppAlertDialogDescription>
        </AppAlertDialogHeader>
        <AppAlertDialogFooter>
          <AppAlertDialogCancel>Cancel</AppAlertDialogCancel>
          <AppAlertDialogAction>Continue</AppAlertDialogAction>
        </AppAlertDialogFooter>
      </AppAlertDialogContent>
    </AppAlertDialog>
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
          <CodeBlock language="bash" code="npx viana-kit add alert-dialog" />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Import
          </h2>
          <CodeBlock
            language="tsx"
            code={`import {
  AppAlertDialog,
  AppAlertDialogTrigger,
  AppAlertDialogContent,
  AppAlertDialogHeader,
  AppAlertDialogTitle,
  AppAlertDialogDescription,
  AppAlertDialogFooter,
  AppAlertDialogAction,
  AppAlertDialogCancel,
} from "@/components/primitives/AppAlertDialog"`}
          />
        </div>
      </section>
    </article>
  );
}
