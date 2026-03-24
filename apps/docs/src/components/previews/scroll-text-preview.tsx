"use client";

import { AppScrollText } from "@viana/ui";

export function ScrollTextDefaultPreview() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Default (Scroll Left)</h3>
        <AppScrollText direction="left" className="text-2xl font-bold">
          <span className="mx-4">Welcome to Viana Kit</span>
          <span className="mx-4">Build faster with shadcn/ui style</span>
          <span className="mx-4">Open source and free to use</span>
        </AppScrollText>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Faster Scroll (Scroll Right)</h3>
        <AppScrollText direction="right" speed={100} className="text-lg">
          <span className="mx-4">Faster scrolling with speed prop</span>
          <span className="mx-4">Default speed is 50</span>
          <span className="mx-4">Higher numbers = faster</span>
        </AppScrollText>
      </div>
    </div>
  );
}
