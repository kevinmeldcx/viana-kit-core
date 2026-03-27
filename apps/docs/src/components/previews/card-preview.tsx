"use client";

import {
  AppBadge,
  AppButton,
  AppCard,
  AppCardAction,
  AppCardContent,
  AppCardDescription,
  AppCardFooter,
  AppCardHeader,
  AppCardTitle,
  AppInput,
  AppLabel,
} from "@viana/ui";
import { TrendingUp } from "lucide-react";

export function CardDefaultPreview() {
  return (
    <AppCard className="w-[350px]">
      <AppCardHeader>
        <AppCardTitle>Card Title</AppCardTitle>
        <AppCardDescription>
          This is a card description. It typically contains short, descriptive text.
        </AppCardDescription>
      </AppCardHeader>
      <AppCardContent>
        <p className="text-sm text-muted-foreground">
          This is the card content area where you can add more information.
        </p>
      </AppCardContent>
      <AppCardFooter>
        <p className="text-xs text-muted-foreground">Card footer content</p>
      </AppCardFooter>
    </AppCard>
  );
}

export function CardLoginPreview() {
  return (
    <AppCard className="w-[350px]">
      <AppCardHeader>
        <AppCardTitle>Login</AppCardTitle>
        <AppCardDescription>
          Enter your credentials to access your account.
        </AppCardDescription>
      </AppCardHeader>
      <AppCardContent className="space-y-4">
        <div className="space-y-1.5">
          <AppLabel htmlFor="email">Email</AppLabel>
          <AppInput id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="space-y-1.5">
          <AppLabel htmlFor="password">Password</AppLabel>
          <AppInput id="password" type="password" placeholder="••••••••" />
        </div>
      </AppCardContent>
      <AppCardFooter className="flex flex-col gap-2">
        <AppButton className="w-full">Sign in</AppButton>
        <AppButton variant="outline" className="w-full">
          Login with Google
        </AppButton>
      </AppCardFooter>
    </AppCard>
  );
}

export function CardWithActionPreview() {
  return (
    <AppCard className="w-[350px]">
      <AppCardHeader>
        <AppCardTitle>Notifications</AppCardTitle>
        <AppCardDescription>You have 3 unread messages.</AppCardDescription>
        <AppCardAction>
          <AppButton variant="outline" size="sm">
            Mark all read
          </AppButton>
        </AppCardAction>
      </AppCardHeader>
      <AppCardContent>
        <div className="space-y-3">
          {[
            { title: "Your call has been confirmed.", time: "1 hour ago" },
            { title: "You have a new message!", time: "1 hour ago" },
            { title: "Your subscription is expiring soon!", time: "2 hours ago" },
          ].map(({ title, time }) => (
            <div key={title} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <div className="space-y-0.5">
                <p className="text-sm font-medium leading-none">{title}</p>
                <p className="text-xs text-muted-foreground">{time}</p>
              </div>
            </div>
          ))}
        </div>
      </AppCardContent>
    </AppCard>
  );
}

export function CardImagePreview() {
  return (
    <AppCard className="w-[350px] overflow-hidden">
      <div className="h-40 w-full bg-muted" />
      <AppCardHeader>
        <div className="flex items-center justify-between">
          <AppBadge variant="secondary">Featured</AppBadge>
        </div>
        <AppCardTitle>Design systems meetup</AppCardTitle>
        <AppCardDescription>
          Join us for an evening of talks on design tokens, component APIs, and
          cross-platform consistency.
        </AppCardDescription>
      </AppCardHeader>
      <AppCardFooter>
        <AppButton className="w-full">View Event</AppButton>
      </AppCardFooter>
    </AppCard>
  );
}

export function CardStatsPreview() {
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-md">
      {[
        { label: "Total Revenue", value: "$45,231.89", change: "+20.1% from last month" },
        { label: "Active Users", value: "2,350", change: "+180 from last month" },
        { label: "New Signups", value: "+12,234", change: "+19% from last month" },
        { label: "Active Now", value: "573", change: "+201 since last hour" },
      ].map(({ label, value, change }) => (
        <AppCard key={label}>
          <AppCardHeader>
            <AppCardDescription>{label}</AppCardDescription>
            <AppCardTitle className="text-2xl">{value}</AppCardTitle>
          </AppCardHeader>
          <AppCardContent>
            <p className="flex items-center gap-1 text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 text-green-500" />
              {change}
            </p>
          </AppCardContent>
        </AppCard>
      ))}
    </div>
  );
}
