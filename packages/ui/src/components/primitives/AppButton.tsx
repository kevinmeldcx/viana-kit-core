"use client"

import { cn } from "../../lib/utils"
import { Button, buttonVariants } from "../ui/button"
import type { VariantProps } from "class-variance-authority"

type AppButtonProps = React.ComponentProps<typeof Button> &
  VariantProps<typeof buttonVariants>

function AppButton({className, ...props}: AppButtonProps) {
  return <Button className={cn("rounded-md", className)} {...props} />
}

export { AppButton, type AppButtonProps }
