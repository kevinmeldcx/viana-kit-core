"use client";

import { AppAspectRatio } from "@viana/ui";

export function AspectRatioDefaultPreview() {
  return (
    <div className="space-y-8 w-120">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">16:9 Aspect Ratio</h3>
        <AppAspectRatio ratio={16 / 9}>
          <img
            src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=800&h=450&fit=crop"
            alt="Demo image"
            className="h-full w-full object-cover"
          />
        </AppAspectRatio>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">4:3 Aspect Ratio</h3>
        <AppAspectRatio ratio={4 / 3}>
          <img
            src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=800&h=600&fit=crop"
            alt="Demo image"
            className="h-full w-full object-cover"
          />
        </AppAspectRatio>
      </div>
    </div>
  );
}
