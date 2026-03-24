"use client"

import { cn } from "../../lib/utils"
import { Separator } from "../ui/separator"

function AppSeparator({ className, ...props }: React.ComponentProps<typeof Separator>) {
  return <Separator className={cn("rounded-md", className)} {...props} />
}

export { AppSeparator }
