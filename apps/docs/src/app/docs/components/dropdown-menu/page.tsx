import { Metadata } from "next"
import { AppDropdownMenu, AppDropdownMenuTrigger, AppDropdownMenuContent, AppDropdownMenuLabel, AppDropdownMenuSeparator, AppDropdownMenuItem } from "@viana/ui"
import { UserIcon, SettingsIcon, CreditCardIcon, KeyboardIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Dropdown Menu - Viana Kit",
  description: "Displays a menu to the user — such as a set of actions or functions — triggered by a button.",
}

export default function DropdownMenuPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Dropdown Menu
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Displays a menu to the user — such as a set of actions or functions — triggered by a button.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
          Basic Example
        </h2>
        <div className="rounded-lg border p-8">
          <AppDropdownMenu>
            <AppDropdownMenuTrigger asChild>
              <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                Open Menu
              </button>
            </AppDropdownMenuTrigger>
            <AppDropdownMenuContent className="w-56">
              <AppDropdownMenuLabel>My Account</AppDropdownMenuLabel>
              <AppDropdownMenuSeparator />
              <AppDropdownMenuItem>
                <UserIcon className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </AppDropdownMenuItem>
              <AppDropdownMenuItem>
                <SettingsIcon className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </AppDropdownMenuItem>
              <AppDropdownMenuItem>
                <CreditCardIcon className="mr-2 h-4 w-4" />
                <span>Billing</span>
              </AppDropdownMenuItem>
              <AppDropdownMenuSeparator />
              <AppDropdownMenuItem>
                <KeyboardIcon className="mr-2 h-4 w-4" />
                <span>Keyboard shortcuts</span>
              </AppDropdownMenuItem>
            </AppDropdownMenuContent>
          </AppDropdownMenu>
        </div>
      </div>
    </div>
  )
}