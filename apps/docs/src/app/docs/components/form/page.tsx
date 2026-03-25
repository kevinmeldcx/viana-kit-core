import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { FormDefaultPreview } from "@/components/previews/form-preview";

export const metadata: Metadata = {
  title: "Form",
};

export default function FormPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Form
        </h1>
        <p className="text-lg text-muted-foreground">
          A form component with validation using react-hook-form.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<FormDefaultPreview />}
        code={`import { useForm } from "react-hook-form"
import { AppForm, AppFormField, AppFormItem, AppFormLabel, AppFormControl, AppFormMessage, AppFormDescription } from "@/components/primitives/AppForm"
import { AppButton } from "@/components/primitives/AppButton"
import { AppInput } from "@/components/primitives/AppInput"

type FormValues = {
  username: string
  email: string
}

export function Example() {
  const form = useForm<FormValues>({
    defaultValues: { username: "", email: "" },
  })

  function onSubmit(data: FormValues) {
    console.log(data)
  }

  return (
    <AppForm {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <AppFormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <AppFormItem>
              <AppFormLabel>Username</AppFormLabel>
              <AppFormControl>
                <AppInput placeholder="Enter your username" {...field} />
              </AppFormControl>
              <AppFormDescription>This is your public display name.</AppFormDescription>
              <AppFormMessage />
            </AppFormItem>
          )}
        />
        <AppButton type="submit">Submit</AppButton>
      </form>
    </AppForm>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-form-v1
        related_components: ["AppForm", "AppFormItem", "AppFormLabel", "AppFormControl", "AppFormDescription", "AppFormMessage", "AppFormField", "useAppFormField"]
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
  AppForm,
  AppFormField,
  AppFormItem,
  AppFormLabel,
  AppFormControl,
  AppFormMessage,
  AppFormDescription,
} from "@/components/primitives/AppForm"`}
          />
        </div>

        {/* API Reference - AppForm */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            API Reference
          </h2>
          <p className="text-muted-foreground leading-7">
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              AppForm
            </code>{" "}
            extends all native{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
              {"<form>"}
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
            filename="src/components/primitives/AppForm.tsx"
            code={`import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
  useFormField,
} from "../ui/form"

const AppForm = Form
const AppFormItem = FormItem
const AppFormLabel = FormLabel
const AppFormControl = FormControl
const AppFormDescription = FormDescription
const AppFormMessage = FormMessage
const AppFormField = FormField
const useAppFormField = useFormField

export {
  AppForm,
  AppFormItem,
  AppFormLabel,
  AppFormControl,
  AppFormDescription,
  AppFormMessage,
  AppFormField,
  useAppFormField,
}`}
          />
        </div>
      </section>
    </article>
  );
}
