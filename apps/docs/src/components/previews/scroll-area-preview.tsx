"use client";

import { AppScrollArea } from "@viana/ui";

export function ScrollAreaDefaultPreview() {
  return (
    <AppScrollArea className="h-[200px] w-[300px] border p-4">
      <p>Scrollable content here...</p>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <p key={i} className="py-2">Line {i}</p>
      ))}
    </AppScrollArea>
  );
}
