"use client"

import * as React from "react"
import { AppToggleGroup, AppToggleGroupItem } from "@viana/ui"
import { Bold, Italic, Underline } from "lucide-react"

export function ToggleGroupDemo() {
  const [formats, setFormats] = React.useState<string[]>([])

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Default</h3>
        <AppToggleGroup type="single">
          <AppToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </AppToggleGroupItem>
          <AppToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </AppToggleGroupItem>
          <AppToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </AppToggleGroupItem>
        </AppToggleGroup>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Outline</h3>
        <AppToggleGroup type="single" variant="outline">
          <AppToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </AppToggleGroupItem>
          <AppToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </AppToggleGroupItem>
          <AppToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </AppToggleGroupItem>
        </AppToggleGroup>
      </div>
    </div>
  )
}