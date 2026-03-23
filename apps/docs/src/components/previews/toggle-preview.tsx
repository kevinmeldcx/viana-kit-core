"use client";

import { useState } from "react";
import { Bookmark, Bold, Italic } from "lucide-react";
import { AppToggle } from "@viana/ui";

export function ToggleDefaultPreview() {
  const [pressed, setPressed] = useState(false);
  return <AppToggle pressed={pressed} onPressedChange={setPressed}>Toggle</AppToggle>;
}

export function ToggleOutlinePreview() {
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  return (
    <div className="flex gap-2">
      <AppToggle variant="outline" pressed={bold} onPressedChange={setBold} aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </AppToggle>
      <AppToggle variant="outline" pressed={italic} onPressedChange={setItalic} aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </AppToggle>
    </div>
  );
}

export function ToggleSizesPreview() {
  const [sm, setSm] = useState(false);
  const [default_, setDefault] = useState(false);
  const [lg, setLg] = useState(false);
  return (
    <div className="flex items-center gap-2">
      <AppToggle size="sm" pressed={sm} onPressedChange={setSm}>Small</AppToggle>
      <AppToggle size="default" pressed={default_} onPressedChange={setDefault}>Default</AppToggle>
      <AppToggle size="lg" pressed={lg} onPressedChange={setLg}>Large</AppToggle>
    </div>
  );
}

export function ToggleBookmarkPreview() {
  const [bookmarked, setBookmarked] = useState(false);
  return (
    <AppToggle variant="outline" pressed={bookmarked} onPressedChange={setBookmarked} aria-label="Toggle bookmark">
      <Bookmark className="h-4 w-4 group-data-[state=on]/toggle:fill-foreground" />
      Bookmark
    </AppToggle>
  );
}
