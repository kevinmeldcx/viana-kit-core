import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { FormDefaultPreview } from "@/components/previews/form-preview";

export const metadata: Metadata = {
  title: "Form - Viana Kit",
  description: "A form component with validation using react-hook-form.",
};

export default function FormPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Form
        </h1>
        <p className="text-lg text-muted-foreground">
          A form component with validation using react-hook-form.
        </p>
      </div>

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

      <section className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Installation
          </h2>
          <CodeBlock language="bash" code="npx viana-kit add form" />
        </div>

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
} from "@/components/primitives/AppForm"
import { AppButton } from "@/components/primitives/AppButton"
import { AppInput } from "@/components/primitives/AppInput"`}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Sub-components
          </h2>
          <div className="overflow-hidden rounded-lg border border-border text-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-2.5 text-left font-medium text-foreground">
                    Component
                  </th>
                  <th className="px-4 py-2.5 text-left font-medium text-foreground">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["AppForm", "Main form wrapper"],
                  ["AppFormField", "Field wrapper with react-hook-form"],
                  ["AppFormItem", "Form field container"],
                  ["AppFormLabel", "Field label"],
                  ["AppFormControl", "Input control wrapper"],
                  ["AppFormDescription", "Helper text"],
                  ["AppFormMessage", "Error message display"],
                ].map(([component, description]) => (
                  <tr key={component}>
                    <td className="px-4 py-2.5 font-mono text-xs text-foreground">
                      {component}
                    </td>
                    <td className="px-4 py-2.5 text-muted-foreground">
                      {description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </article>
  );
}
