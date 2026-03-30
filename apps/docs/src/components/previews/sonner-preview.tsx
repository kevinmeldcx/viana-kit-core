"use client";

import { AppButton, sonnerToast } from "@viana/ui";

export function SonnerDescriptionPreview() {
  return (
    <AppButton
      onClick={() =>
        sonnerToast.success("Event created", {
          description: "Monday, January 3rd at 6:00pm",
        })
      }
    >
      Show with description
    </AppButton>
  );
}

export function SonnerPositionPreview() {
  const positions = [
    "top-left",
    "top-center",
    "top-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ] as const;

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {positions.map((position) => (
        <AppButton
          key={position}
          variant="outline"
          onClick={() =>
            sonnerToast("Toast", {
              description: position,
              position,
            })
          }
        >
          {position}
        </AppButton>
      ))}
    </div>
  );
}

export function SonnerDefaultPreview() {
  return (
    <div className="flex gap-4">
      <AppButton
        onClick={() => {
          sonnerToast.success("Event has been created");
        }}
      >
        Show Success
      </AppButton>
      <AppButton
        onClick={() => {
          sonnerToast.error("Event has been created");
        }}
      >
        Show Error
      </AppButton>
      <AppButton
        onClick={() => {
          sonnerToast("Event has been created");
        }}
      >
        Show Default
      </AppButton>
    </div>
  );
}
