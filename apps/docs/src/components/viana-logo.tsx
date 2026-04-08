type VianaLogoProps = {
  className?: string
}

export function VianaLogo({ className }: VianaLogoProps) {
  return (
    <svg
      width="110"
      height="24"
      viewBox="0 0 110 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Viana Kit"
    >
      {/* Mark — geometric V diamond */}
      <path
        d="M10 3L16 12L10 21L4 12L10 3Z"
        className="fill-primary"
      />
      <path
        d="M10 7L14 12L10 17L6 12L10 7Z"
        className="fill-background"
      />

      {/* Wordmark */}
      <text
        x="24"
        y="16.5"
        fontFamily="inherit"
        fontSize="13"
        fontWeight="600"
        letterSpacing="-0.3"
        className="fill-foreground"
      >
        Viana Kit
      </text>
    </svg>
  )
}
