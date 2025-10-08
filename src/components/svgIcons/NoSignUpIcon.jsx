const NoSignUpIcon = ({ className, size = 24 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="No sign up allowed"
  >
    {/* Background circle  */}
    <circle
      cx="12"
      cy="12"
      r="11"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.2"
    />

    {/* User icon - head */}
    <circle
      cx="12"
      cy="9"
      r="3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* User icon - body */}
    <path
      d="M6 20v-1a6 6 0 0 1 12 0v1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Prohibition symbol - diagonal line */}
    <line
      x1="4.93"
      y1="4.93"
      x2="19.07"
      y2="19.07"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    {/* Main prohibition circle */}
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default NoSignUpIcon;
