const FreeIcon = ({ className, size = 24 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Free"
  >
    {/* Gift box base */}
    <rect
      x="4"
      y="10"
      width="16"
      height="10"
      rx="1"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Gift box ribbon - vertical */}
    <line
      x1="12"
      y1="10"
      x2="12"
      y2="20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Gift box ribbon - horizontal */}
    <line
      x1="4"
      y1="14"
      x2="20"
      y2="14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Bow - left loop */}
    <path
      d="M8 10C8 8 10 6 12 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* Bow - right loop */}
    <path
      d="M16 10C16 8 14 6 12 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* Bow center knot */}
    <circle cx="12" cy="8" r="1" fill="currentColor" />

    {/*  star indicator */}
    <circle cx="17" cy="7" r="2" fill="currentColor" />

    {/* Star points inside the circle */}
    <path
      d="M17 6l.5 1h1l-.8.6.3 1-.5-.8-.5.8.3-1-.8-.6h1L17 6z"
      fill="white"
      stroke="none"
    />
  </svg>
);

export default FreeIcon;
