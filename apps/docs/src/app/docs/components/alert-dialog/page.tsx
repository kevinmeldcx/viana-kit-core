import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { AlertDialogDefaultPreview } from "@/components/previews/alert-dialog-preview";

export const metadata: Metadata = {
  title: "Alert Dialog",
};

export default function AlertDialogPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Alert Dialog
        </h1>
        <p className="text-lg text-muted-foreground">
          A modal dialog that interrupts the user with important content and
          expects a response. Use it for irreversible or high-consequence
          actions.
        </p>
      </div>

      {/* Main preview */}
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
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
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

      {/*
        canonical_id: component-alert-dialog-v1
        related_components: ["AppAlertDialog", "AppAlertDialogTrigger", "AppAlertDialogContent", "AppAlertDialogHeader", "AppAlertDialogFooter", "AppAlertDialogTitle", "AppAlertDialogDescription", "AppAlertDialogAction", "AppAlertDialogCancel"]
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

        {/* Anatomy */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Anatomy
          </h2>
          <p className="text-muted-foreground leading-7">
            The Alert Dialog is composed of several parts that work together.
            Every usage must include a trigger, content, a title, and at least
            one action.
          </p>
          <CodeBlock
            language="tsx"
            code={`<AppAlertDialog>
  <AppAlertDialogTrigger asChild>
    <AppButton>Open</AppButton>
  </AppAlertDialogTrigger>
  <AppAlertDialogContent>
    <AppAlertDialogHeader>
      <AppAlertDialogTitle>Title</AppAlertDialogTitle>
      <AppAlertDialogDescription>Description</AppAlertDialogDescription>
    </AppAlertDialogHeader>
    <AppAlertDialogFooter>
      <AppAlertDialogCancel>Cancel</AppAlertDialogCancel>
      <AppAlertDialogAction>Confirm</AppAlertDialogAction>
    </AppAlertDialogFooter>
  </AppAlertDialogContent>
</AppAlertDialog>`}
          />
        </div>

        {/* Trigger with asChild */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Trigger
          </h2>
          <p className="text-muted-foreground leading-7">
            Pass{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              asChild
            </code>{" "}
            on{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppAlertDialogTrigger
            </code>{" "}
            to use any element as the trigger — typically an{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppButton
            </code>
            . Without{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              asChild
            </code>
            , the trigger renders as a plain{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              {"<button>"}
            </code>
            .
          </p>
          <CodeBlock
            language="tsx"
            code={`{/* Recommended — use AppButton as trigger */}
<AppAlertDialogTrigger asChild>
  <AppButton variant="destructive">Delete</AppButton>
</AppAlertDialogTrigger>`}
          />
        </div>

        {/* Controlled */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Controlled
          </h2>
          <p className="text-muted-foreground leading-7">
            Use{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              open
            </code>{" "}
            and{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              onOpenChange
            </code>{" "}
            to control the dialog from outside — for example, to open it
            programmatically without a trigger element.
          </p>
          <CodeBlock
            language="tsx"
            code={`const [open, setOpen] = useState(false)

<AppAlertDialog open={open} onOpenChange={setOpen}>
  <AppAlertDialogContent>
    {/* ... */}
  </AppAlertDialogContent>
</AppAlertDialog>`}
          />
        </div>

        {/* API Reference */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppAlertDialog
            </code>{" "}
            and its sub-components extend their underlying Radix UI primitives.
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
                    description: "Controlled open state of the dialog.",
                  },
                  {
                    prop: "defaultOpen",
                    type: "boolean",
                    default: "false",
                    description: "Initial open state when uncontrolled.",
                  },
                  {
                    prop: "onOpenChange",
                    type: "(open: boolean) => void",
                    default: "—",
                    description: "Callback fired when the open state changes.",
                  },
                  {
                    prop: "asChild",
                    type: "boolean",
                    default: "false",
                    description:
                      "On AppAlertDialogTrigger — merges props onto the child element instead of rendering a <button>.",
                  },
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
            filename="src/components/primitives/AppAlertDialog.tsx"
            code={`import {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog"

const AppAlertDialog = AlertDialog
const AppAlertDialogPortal = AlertDialogPortal
const AppAlertDialogOverlay = AlertDialogOverlay
const AppAlertDialogTrigger = AlertDialogTrigger
const AppAlertDialogContent = AlertDialogContent
const AppAlertDialogHeader = AlertDialogHeader
const AppAlertDialogFooter = AlertDialogFooter
const AppAlertDialogTitle = AlertDialogTitle
const AppAlertDialogDescription = AlertDialogDescription
const AppAlertDialogAction = AlertDialogAction
const AppAlertDialogCancel = AlertDialogCancel

export {
  AppAlertDialog,
  AppAlertDialogPortal,
  AppAlertDialogOverlay,
  AppAlertDialogTrigger,
  AppAlertDialogContent,
  AppAlertDialogHeader,
  AppAlertDialogFooter,
  AppAlertDialogTitle,
  AppAlertDialogDescription,
  AppAlertDialogAction,
  AppAlertDialogCancel,
}`}
          />
        </div>
      </section>
    </article>
  );
}
