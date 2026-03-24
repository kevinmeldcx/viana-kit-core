"use client";

import {
  AppContextMenu,
  AppContextMenuTrigger,
  AppContextMenuContent,
  AppContextMenuItem,
  AppContextMenuSeparator,
  AppContextMenuShortcut,
} from "@viana/ui";
import { CopyIcon, ClipboardIcon, ScissorsIcon, RefreshCwIcon } from "lucide-react";

export function ContextMenuDefaultPreview() {
  return (
    <AppContextMenu>
      <AppContextMenuTrigger className="flex h-[150px] w-full items-center justify-center border border-dashed text-sm">
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
  );
}
