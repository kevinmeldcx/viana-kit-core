import { Metadata } from "next"
import { AppContextMenu, AppContextMenuTrigger, AppContextMenuContent, AppContextMenuItem, AppContextMenuSeparator, AppContextMenuShortcut } from "@viana/ui"
import { CopyIcon, ClipboardIcon, ScissorsIcon, RefreshCwIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Context Menu - Viana Kit",
  description: "Displays a menu when the user right-clicks.",
}

export default function ContextMenuPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Context Menu
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Displays a menu when the user right-clicks.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
          Basic Example
        </h2>
        <p className="text-muted-foreground">Right-click on the box to see the context menu.</p>
        <div className="rounded-lg border p-8">
          <AppContextMenu>
            <AppContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
              Right click here
            </AppContextMenuTrigger>
            <AppContextMenuContent className="w-56">
              <AppContextMenuItem>
                <CopyIcon className="mr-2 h-4 w-4" />
                <span>Copy</span>
                <AppContextMenuShortcut>⌘C</AppContextMenuShortcut>
              </AppContextMenuItem>
              <AppContextMenuItem>
                <ClipboardIcon className="mr-2 h-4 w-4" />
                <span>Paste</span>
                <AppContextMenuShortcut>⌘V</AppContextMenuShortcut>
              </AppContextMenuItem>
              <AppContextMenuItem>
                <ScissorsIcon className="mr-2 h-4 w-4" />
                <span>Cut</span>
                <AppContextMenuShortcut>⌘X</AppContextMenuShortcut>
              </AppContextMenuItem>
              <AppContextMenuSeparator />
              <AppContextMenuItem>
                <RefreshCwIcon className="mr-2 h-4 w-4" />
                <span>Refresh</span>
              </AppContextMenuItem>
            </AppContextMenuContent>
          </AppContextMenu>
        </div>
      </div>
    </div>
  )
}