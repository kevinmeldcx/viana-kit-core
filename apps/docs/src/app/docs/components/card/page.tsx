import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import {
  CardDefaultPreview,
  CardLoginPreview,
  CardWithActionPreview,
  CardImagePreview,
  CardStatsPreview,
} from "@/components/previews/card-preview";

export const metadata: Metadata = {
  title: "Card",
};

export default function CardPage() {
  return (
    <article className="mx-auto max-w-3xl px-8 py-10">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <p className="text-sm font-medium text-primary">Components</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Card
        </h1>
        <p className="text-lg text-muted-foreground">
          A flexible content container. Use it to group related content and
          actions.
        </p>
      </div>

      {/* Main preview */}
      <ComponentPreview
        preview={<CardDefaultPreview />}
        code={`import {
  AppCard,
  AppCardHeader,
  AppCardTitle,
  AppCardDescription,
  AppCardContent,
  AppCardFooter,
} from "@/components/primitives/AppCard"

export function Example() {
  return (
    <AppCard>
      <AppCardHeader>
        <AppCardTitle>Card Title</AppCardTitle>
        <AppCardDescription>Description text</AppCardDescription>
      </AppCardHeader>
      <AppCardContent>
        <p>Content goes here</p>
      </AppCardContent>
      <AppCardFooter>
        <p>Footer content</p>
      </AppCardFooter>
    </AppCard>
  )
}`}
        filename="example.tsx"
      />

      <hr className="border-border my-10" />

      {/*
        canonical_id: component-card-v1
        related_components: ["AppCard", "AppCardHeader", "AppCardTitle", "AppCardDescription", "AppCardAction", "AppCardContent", "AppCardFooter"]
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
  AppCard,
  AppCardHeader,
  AppCardTitle,
  AppCardDescription,
  AppCardAction,
  AppCardContent,
  AppCardFooter,
} from "@/components/primitives/AppCard"`}
          />
        </div>

        {/* Examples */}
        <div className="space-y-8">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Examples
          </h2>

          {/* Login */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Login form</h3>
            <p className="text-sm text-muted-foreground">
              Compose a login form inside a card using{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">AppCardContent</code>{" "}
              for inputs and{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">AppCardFooter</code>{" "}
              for actions.
            </p>
            <ComponentPreview
              preview={<CardLoginPreview />}
              code={`<AppCard className="w-[350px]">
  <AppCardHeader>
    <AppCardTitle>Login</AppCardTitle>
    <AppCardDescription>Enter your credentials to access your account.</AppCardDescription>
  </AppCardHeader>
  <AppCardContent className="space-y-4">
    <div className="space-y-1.5">
      <AppLabel htmlFor="email">Email</AppLabel>
      <AppInput id="email" type="email" placeholder="m@example.com" />
    </div>
    <div className="space-y-1.5">
      <AppLabel htmlFor="password">Password</AppLabel>
      <AppInput id="password" type="password" />
    </div>
  </AppCardContent>
  <AppCardFooter className="flex flex-col gap-2">
    <AppButton className="w-full">Sign in</AppButton>
    <AppButton variant="outline" className="w-full">Login with Google</AppButton>
  </AppCardFooter>
</AppCard>`}
              filename="example.tsx"
            />
          </div>

          {/* With action */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">With action</h3>
            <p className="text-sm text-muted-foreground">
              Use{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">AppCardAction</code>{" "}
              inside the header to place a button or link opposite the title.
            </p>
            <ComponentPreview
              preview={<CardWithActionPreview />}
              code={`<AppCard>
  <AppCardHeader>
    <AppCardTitle>Notifications</AppCardTitle>
    <AppCardDescription>You have 3 unread messages.</AppCardDescription>
    <AppCardAction>
      <AppButton variant="outline" size="sm">Mark all read</AppButton>
    </AppCardAction>
  </AppCardHeader>
  <AppCardContent>
    {/* notification list */}
  </AppCardContent>
</AppCard>`}
              filename="example.tsx"
            />
          </div>

          {/* Image */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">With image</h3>
            <p className="text-sm text-muted-foreground">
              Place an image before{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">AppCardHeader</code>{" "}
              and add{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">overflow-hidden</code>{" "}
              to the card to clip it to the card's border radius.
            </p>
            <ComponentPreview
              preview={<CardImagePreview />}
              code={`<AppCard className="w-[350px] overflow-hidden">
  <img src="/event.jpg" alt="Event" className="h-40 w-full object-cover" />
  <AppCardHeader>
    <AppBadge variant="secondary">Featured</AppBadge>
    <AppCardTitle>Design systems meetup</AppCardTitle>
    <AppCardDescription>
      Join us for an evening of talks on design tokens and component APIs.
    </AppCardDescription>
  </AppCardHeader>
  <AppCardFooter>
    <AppButton className="w-full">View Event</AppButton>
  </AppCardFooter>
</AppCard>`}
              filename="example.tsx"
            />
          </div>

          {/* Stats */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-foreground">Stats grid</h3>
            <p className="text-sm text-muted-foreground">
              Render multiple compact cards in a grid for dashboard-style metric
              displays.
            </p>
            <ComponentPreview
              preview={<CardStatsPreview />}
              code={`<div className="grid grid-cols-2 gap-4">
  <AppCard>
    <AppCardHeader>
      <AppCardDescription>Total Revenue</AppCardDescription>
      <AppCardTitle className="text-2xl">$45,231.89</AppCardTitle>
    </AppCardHeader>
    <AppCardContent>
      <p className="text-xs text-muted-foreground">+20.1% from last month</p>
    </AppCardContent>
  </AppCard>
  {/* repeat for other stats */}
</div>`}
              filename="example.tsx"
            />
          </div>
        </div>

        {/* Sub-components */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Sub-components
          </h2>
          <div className="overflow-hidden rounded-lg border border-border text-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-2.5 text-left font-medium text-foreground">Component</th>
                  <th className="px-4 py-2.5 text-left font-medium text-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["AppCard", "The root container. Accepts className for sizing and spacing overrides."],
                  ["AppCardHeader", "Groups title, description, and optional action. Uses CSS grid internally."],
                  ["AppCardTitle", "Heading element. Renders as a styled h3 by default."],
                  ["AppCardDescription", "Secondary text below the title. Muted foreground color."],
                  ["AppCardAction", "Slot in the header for a button or link, aligned to the trailing edge."],
                  ["AppCardContent", "Main body area with standard padding."],
                  ["AppCardFooter", "Footer row with flex layout for action buttons."],
                ].map(([component, description]) => (
                  <tr key={component}>
                    <td className="px-4 py-2.5 font-mono text-xs text-foreground">{component}</td>
                    <td className="px-4 py-2.5 text-muted-foreground">{description}</td>
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
            filename="src/components/primitives/AppCard.tsx"
            code={`import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "../ui/card"

function AppCard(props: React.ComponentProps<typeof Card>) {
  return <Card {...props} />
}

function AppCardHeader(props: React.ComponentProps<typeof CardHeader>) {
  return <CardHeader {...props} />
}

function AppCardTitle(props: React.ComponentProps<typeof CardTitle>) {
  return <CardTitle {...props} />
}

function AppCardDescription(props: React.ComponentProps<typeof CardDescription>) {
  return <CardDescription {...props} />
}

function AppCardAction(props: React.ComponentProps<typeof CardAction>) {
  return <CardAction {...props} />
}

function AppCardContent(props: React.ComponentProps<typeof CardContent>) {
  return <CardContent {...props} />
}

function AppCardFooter(props: React.ComponentProps<typeof CardFooter>) {
  return <CardFooter {...props} />
}

export {
  AppCard,
  AppCardHeader,
  AppCardTitle,
  AppCardDescription,
  AppCardAction,
  AppCardContent,
  AppCardFooter,
}`}
          />
        </div>
      </section>
    </article>
  );
}
