"use client"

import { cn } from "../../lib/utils"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"

function AppScrollArea({ className, ...props }: React.ComponentProps<typeof ScrollArea>) {
  return <ScrollArea className={cn("rounded-md", className)} {...props} />
}

function AppScrollBar({ className, ...props }: React.ComponentProps<typeof ScrollBar>) {
  return <ScrollBar className={cn("rounded-md", className)} {...props} />
}

export { AppScrollArea, AppScrollBar }
