export default function Logo({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
      </defs>
      {/* Rounded square base */}
      <rect width="48" height="48" rx="12" fill="url(#logo-gradient)" />
      {/* Cloud / stratus layers */}
      <path
        d="M14 28c0-3.3 2.7-6 6-6 .5 0 1 .1 1.5.2C22.6 19.3 25.1 17 28 17c3.9 0 7 3.1 7 7h.5c2.5 0 4.5 2 4.5 4.5S38 33 35.5 33H14.5c-2.5 0-4.5-2-4.5-4.5.6-.3 2-1.2 4-.5z"
        fill="rgba(255,255,255,0.95)"
      />
      {/* Lower stratus line */}
      <rect x="12" y="35" width="24" height="2.5" rx="1.25" fill="rgba(255,255,255,0.4)" />
    </svg>
  )
}
