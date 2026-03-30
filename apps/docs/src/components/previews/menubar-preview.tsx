"use client";

import {
  AppMenubar,
  AppMenubarContent,
  AppMenubarItem,
  AppMenubarMenu,
  AppMenubarSeparator,
  AppMenubarShortcut,
  AppMenubarTrigger,
} from "@viana/ui";

export function MenubarDefaultPreview() {
  return (
    <AppMenubar>
      <AppMenubarMenu>
        <AppMenubarTrigger>File</AppMenubarTrigger>
        <AppMenubarContent>
          <AppMenubarItem>
            New Tab <AppMenubarShortcut>⌘T</AppMenubarShortcut>
          </AppMenubarItem>
          <AppMenubarItem>
            New Window <AppMenubarShortcut>⌘N</AppMenubarShortcut>
          </AppMenubarItem>
          <AppMenubarSeparator />
          <AppMenubarItem>
            Print <AppMenubarShortcut>⌘P</AppMenubarShortcut>
          </AppMenubarItem>
        </AppMenubarContent>
      </AppMenubarMenu>
      <AppMenubarMenu>
        <AppMenubarTrigger>Edit</AppMenubarTrigger>
        <AppMenubarContent>
          <AppMenubarItem>
            Undo <AppMenubarShortcut>⌘Z</AppMenubarShortcut>
          </AppMenubarItem>
          <AppMenubarItem>
            Redo <AppMenubarShortcut>⇧⌘Z</AppMenubarShortcut>
          </AppMenubarItem>
          <AppMenubarSeparator />
          <AppMenubarItem>
            Cut <AppMenubarShortcut>⌘X</AppMenubarShortcut>
          </AppMenubarItem>
          <AppMenubarItem>
            Copy <AppMenubarShortcut>⌘C</AppMenubarShortcut>
          </AppMenubarItem>
          <AppMenubarItem>
            Paste <AppMenubarShortcut>⌘V</AppMenubarShortcut>
          </AppMenubarItem>
        </AppMenubarContent>
      </AppMenubarMenu>
      <AppMenubarMenu>
        <AppMenubarTrigger>View</AppMenubarTrigger>
        <AppMenubarContent>
          <AppMenubarItem>Zoom In</AppMenubarItem>
          <AppMenubarItem>Zoom Out</AppMenubarItem>
          <AppMenubarSeparator />
          <AppMenubarItem>Full Screen</AppMenubarItem>
        </AppMenubarContent>
      </AppMenubarMenu>
    </AppMenubar>
  );
}
