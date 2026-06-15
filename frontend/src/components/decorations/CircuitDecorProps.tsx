type CircuitDecorProps = {
  className?: string
}

export default function CircuitDecor({ className = "" }: CircuitDecorProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 220"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="#0D5BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 40 H90 L120 70 H190" />
        <path d="M20 80 H70 L105 115 H210" />
        <path d="M40 130 H110 L145 95 H250" />
        <path d="M80 180 H140 L180 140 H300" />

        <path d="M120 70 V35" />
        <path d="M145 95 V55" />
        <path d="M210 115 V160" />
        <path d="M250 95 V50" />
      </g>

      <g fill="#38BDF8" className="drop-shadow-[0_0_6px_rgba(13,91,255,0.9)]">
        <circle cx="20" cy="40" r="4" />
        <circle cx="20" cy="80" r="4" />
        <circle cx="40" cy="130" r="4" />
        <circle cx="80" cy="180" r="4" />
        <circle cx="190" cy="70" r="4" />
        <circle cx="300" cy="140" r="4" />
        <circle cx="120" cy="35" r="4" />
        <circle cx="250" cy="50" r="4" />
      </g>
    </svg>
  )
}