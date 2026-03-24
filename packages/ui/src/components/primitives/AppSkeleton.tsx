"use client"

import { cn } from "../../lib/utils"
import { Skeleton } from "../ui/skeleton"

function AppSkeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <Skeleton className={cn("rounded-md", className)} {...props} />
}

export { AppSkeleton }
