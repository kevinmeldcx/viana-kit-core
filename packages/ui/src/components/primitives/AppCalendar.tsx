"use client"

import { cn } from "../../lib/utils"
import { Calendar } from "../ui/calendar"

function AppCalendar({ className, ...props }: React.ComponentProps<typeof Calendar>) {
  return <Calendar className={cn("rounded-md", className)} {...props} />
}

export { AppCalendar }
