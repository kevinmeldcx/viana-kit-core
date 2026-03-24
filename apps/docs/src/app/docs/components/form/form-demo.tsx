"use client"

import { useForm } from "react-hook-form"
import { AppForm, AppFormField, AppFormItem, AppFormLabel, AppFormControl, AppFormMessage, AppFormDescription, AppButton, AppInput } from "@viana/ui"

type FormValues = {
  username: string
  email: string
}

export function FormDemo() {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      email: "",
    },
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
              <AppFormDescription>
                This is your public display name.
              </AppFormDescription>
              <AppFormMessage />
            </AppFormItem>
          )}
        />
        <AppFormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <AppFormItem>
              <AppFormLabel>Email</AppFormLabel>
              <AppFormControl>
                <AppInput placeholder="Enter your email" {...field} />
              </AppFormControl>
              <AppFormMessage />
            </AppFormItem>
          )}
        />
        <AppButton type="submit">Submit</AppButton>
      </form>
    </AppForm>
  )
}