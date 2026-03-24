"use client"

import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"

function AppHoverCard(props: React.ComponentProps<typeof HoverCard>) {
  return <HoverCard {...props} />
}

function AppHoverCardTrigger({ children }: { children: React.ReactNode }) {
  return <HoverCardTrigger>{children}</HoverCardTrigger>
}

function AppHoverCardContent(props: React.ComponentPropsWithoutRef<typeof HoverCardContent>) {
  return <HoverCardContent {...props} />
}

export { AppHoverCard, AppHoverCardTrigger, AppHoverCardContent }
