"use client";

import { useState } from "react";

interface ComponentPreviewProps {
  preview: React.ReactNode;
  code: string;
  filename?: string;
  fullWidth?: boolean;
}

export function ComponentPreview({
  preview,
  code,
  filename,
  fullWidth,
}: ComponentPreviewProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div className="flex border-b border-border bg-muted/30">
        {(["preview", "code"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 text-sm font-medium capitalize transition-colors ${
              tab === t
                ? "border-b-2 border-primary text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
        {filename && (
          <span className="ml-auto self-center pr-4 text-xs text-muted-foreground font-mono">
            {filename}
          </span>
        )}
      </div>

      {tab === "preview" ? (
        <div className={`flex min-h-[180px] bg-muted-background ${fullWidth ? "p-6" : "items-center justify-center p-10"}`}>
          <div className={fullWidth ? "w-full" : "flex flex-wrap items-center justify-center gap-3"}>
            {preview}
          </div>
        </div>
      ) : (
        <div className="bg-muted/40">
          <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
            <code className="font-mono text-foreground">{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
