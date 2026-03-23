interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const label = filename ?? language;
  return (
    <div className="relative overflow-hidden rounded-lg border border-border bg-muted/40">
      {label && (
        <div className="border-b border-border bg-muted/60 px-4 py-2 text-xs font-medium text-muted-foreground">
          {label}
        </div>
      )}
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
        <code className="font-mono text-foreground">{code}</code>
      </pre>
    </div>
  );
}
