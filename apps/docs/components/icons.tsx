export const BracketUIIcon = () => (
  <svg
    width="160"
    height="160"
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="size-40 mx-auto"
  >
    {/* Main Container */}
    <rect
      x="20"
      y="20"
      width="120"
      height="120"
      rx="16"
      className="fill-gray-100 dark:fill-gray-800"
    />

    {/* Left Bracket */}
    <path
      d="M45 40 L60 40 L60 50 L55 50 L55 110 L60 110 L60 120 L45 120"
      className="stroke-gray-900 dark:stroke-gray-100"
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Right Bracket */}
    <path
      d="M115 40 L100 40 L100 50 L105 50 L105 110 L100 110 L100 120 L115 120"
      className="stroke-gray-900 dark:stroke-gray-100"
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Component Grid */}
    <g className="fill-gray-200 dark:fill-gray-700">
      <rect x="65" y="45" width="30" height="20" rx="4" />
      <rect x="65" y="70" width="30" height="20" rx="4" />
      <rect x="65" y="95" width="30" height="20" rx="4" />
    </g>

    {/* Active Component Highlight */}
    <rect
      x="65"
      y="70"
      width="30"
      height="20"
      rx="4"
      className="fill-gray-900 dark:fill-gray-100"
    />

    {/* Decorative Elements */}
    <circle
      cx="40"
      cy="80"
      r="3"
      className="fill-gray-400 dark:fill-gray-500"
    />
    <circle
      cx="120"
      cy="80"
      r="3"
      className="fill-gray-400 dark:fill-gray-500"
    />

    {/* Modern Dots Pattern */}
    <g className="fill-gray-200 dark:fill-gray-700">
      <circle cx="35" cy="35" r="2" />
      <circle cx="125" cy="35" r="2" />
      <circle cx="35" cy="125" r="2" />
      <circle cx="125" cy="125" r="2" />
    </g>
  </svg>
);

// components/icons/CardIcon.tsx
export const CardIcon = () => (
  <svg
    width="160"
    height="160"
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="size-40"
  >
    {/* Background */}
    <rect
      x="20"
      y="20"
      width="120"
      height="120"
      rx="8"
      className="fill-gray-100 dark:fill-gray-800"
    />

    {/* Image Card (Top Left) */}
    <g transform="translate(30, 30)">
      <rect
        width="45"
        height="55"
        rx="4"
        className="fill-gray-200 dark:fill-gray-700"
      />
      {/* Image Area */}
      <rect
        x="5"
        y="5"
        width="35"
        height="25"
        rx="2"
        className="fill-gray-300 dark:fill-gray-600"
      />
      {/* Title */}
      <rect
        x="5"
        y="35"
        width="35"
        height="6"
        rx="1"
        className="fill-gray-900 dark:fill-gray-100"
      />
      {/* Description */}
      <rect
        x="5"
        y="45"
        width="25"
        height="4"
        rx="1"
        className="fill-gray-400 dark:fill-gray-500"
      />
    </g>

    {/* Simple Card (Top Right) */}
    <g transform="translate(85, 30)">
      <rect
        width="45"
        height="35"
        rx="4"
        className="fill-gray-200 dark:fill-gray-700"
      />
      {/* Title */}
      <rect
        x="5"
        y="5"
        width="35"
        height="6"
        rx="1"
        className="fill-gray-900 dark:fill-gray-100"
      />
      {/* Description */}
      <rect
        x="5"
        y="15"
        width="35"
        height="4"
        rx="1"
        className="fill-gray-400 dark:fill-gray-500"
      />
      <rect
        x="5"
        y="22"
        width="25"
        height="4"
        rx="1"
        className="fill-gray-400 dark:fill-gray-500"
      />
    </g>

    {/* Action Card (Bottom Left) */}
    <g transform="translate(30, 95)">
      <rect
        width="45"
        height="35"
        rx="4"
        className="fill-gray-200 dark:fill-gray-700"
      />
      {/* Title */}
      <rect
        x="5"
        y="5"
        width="35"
        height="6"
        rx="1"
        className="fill-gray-900 dark:fill-gray-100"
      />
      {/* Button */}
      <rect
        x="5"
        y="20"
        width="35"
        height="8"
        rx="4"
        className="fill-gray-900 dark:fill-gray-100"
      />
    </g>

    {/* Icon Card (Bottom Right) */}
    <g transform="translate(85, 75)">
      <rect
        width="45"
        height="55"
        rx="4"
        className="fill-gray-200 dark:fill-gray-700"
      />
      {/* Icon Circle */}
      <circle
        cx="22.5"
        cy="20"
        r="12"
        className="fill-gray-300 dark:fill-gray-600"
      />
      {/* Title */}
      <rect
        x="5"
        y="35"
        width="35"
        height="6"
        rx="1"
        className="fill-gray-900 dark:fill-gray-100"
      />
      {/* Description */}
      <rect
        x="5"
        y="45"
        width="35"
        height="4"
        rx="1"
        className="fill-gray-400 dark:fill-gray-500"
      />
    </g>
  </svg>
);

// components/icons/ButtonIcon.tsx
export const ButtonIcon = () => (
  <svg
    width="160"
    height="160"
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="size-40"
  >
    <rect
      x="20"
      y="40"
      width="120"
      height="80"
      rx="8"
      className="fill-gray-100 dark:fill-gray-800"
    />
    <g transform="translate(30, 55)">
      {/* Primary Button */}
      <rect
        width="60"
        height="24"
        rx="12"
        className="fill-gray-900 dark:fill-gray-100"
      />
      {/* Secondary Button */}
      <rect
        x="70"
        width="30"
        height="24"
        rx="12"
        className="fill-gray-200 dark:fill-gray-700 stroke-gray-400 dark:stroke-gray-500"
      />
      {/* Text Button Group */}
      <rect
        y="34"
        width="40"
        height="20"
        rx="4"
        className="fill-gray-200 dark:fill-gray-700"
      />
      <rect
        x="45"
        y="34"
        width="40"
        height="20"
        rx="4"
        className="fill-gray-200 dark:fill-gray-700"
      />
    </g>
  </svg>
);

// components/icons/NavbarIcon.tsx
export const NavbarIcon = () => (
  <svg
    width="160"
    height="160"
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="size-40"
  >
    {/* Simple Navbar */}
    <rect
      x="20"
      y="20"
      width="120"
      height="35"
      rx="4"
      className="fill-gray-100 dark:fill-gray-800"
    />
    <circle
      cx="35"
      cy="37"
      r="8"
      className="fill-gray-900 dark:fill-gray-100"
    />
    <rect
      x="50"
      y="34"
      width="20"
      height="6"
      rx="3"
      className="fill-gray-400 dark:fill-gray-500"
    />
    <rect
      x="80"
      y="34"
      width="20"
      height="6"
      rx="3"
      className="fill-gray-400 dark:fill-gray-500"
    />

    {/* Complex Navbar */}
    <rect
      x="20"
      y="65"
      width="120"
      height="45"
      rx="4"
      className="fill-gray-100 dark:fill-gray-800"
    />
    <circle
      cx="35"
      cy="87"
      r="8"
      className="fill-gray-900 dark:fill-gray-100"
    />
    <rect
      x="50"
      y="77"
      width="30"
      height="20"
      rx="3"
      className="fill-gray-200 dark:fill-gray-700"
    />
    <rect
      x="90"
      y="77"
      width="30"
      height="20"
      rx="3"
      className="fill-gray-200 dark:fill-gray-700"
    />

    {/* Mobile Navbar */}
    <rect
      x="20"
      y="120"
      width="120"
      height="25"
      rx="4"
      className="fill-gray-100 dark:fill-gray-800"
    />
    <rect
      x="110"
      y="127"
      width="20"
      height="10"
      rx="2"
      className="fill-gray-400 dark:fill-gray-500"
    />
  </svg>
);

// components/icons/HeaderIcon.tsx
export const HeaderIcon = () => (
  <svg
    width="160"
    height="160"
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="size-40"
  >
    {/* Simple Header */}
    <rect
      x="20"
      y="20"
      width="120"
      height="35"
      rx="8"
      className="fill-gray-100 dark:fill-gray-800"
    />
    <rect
      x="30"
      y="32"
      width="60"
      height="10"
      rx="2"
      className="fill-gray-900 dark:fill-gray-100"
    />

    {/* Hero Header */}
    <rect
      x="20"
      y="65"
      width="120"
      height="45"
      rx="8"
      className="fill-gray-100 dark:fill-gray-800"
    />
    <rect
      x="30"
      y="75"
      width="80"
      height="10"
      rx="2"
      className="fill-gray-900 dark:fill-gray-100"
    />
    <rect
      x="30"
      y="90"
      width="40"
      height="8"
      rx="4"
      className="fill-gray-400 dark:fill-gray-500"
    />

    {/* Complex Header */}
    <rect
      x="20"
      y="120"
      width="120"
      height="25"
      rx="8"
      className="fill-gray-100 dark:fill-gray-800"
    />
    <rect
      x="30"
      y="127"
      width="40"
      height="10"
      rx="2"
      className="fill-gray-900 dark:fill-gray-100"
    />
    <circle
      cx="120"
      cy="132"
      r="6"
      className="fill-gray-400 dark:fill-gray-500"
    />
  </svg>
);

// components/icons/FooterIcon.tsx
export const FooterIcon = () => (
  <svg
    width="160"
    height="160"
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="size-40"
  >
    {/* Simple Footer */}
    <rect
      x="20"
      y="20"
      width="120"
      height="35"
      rx="8"
      className="fill-gray-100 dark:fill-gray-800"
    />
    <rect
      x="30"
      y="32"
      width="100"
      height="6"
      rx="2"
      className="fill-gray-400 dark:fill-gray-500"
    />

    {/* Multi-Column Footer */}
    <rect
      x="20"
      y="65"
      width="120"
      height="75"
      rx="8"
      className="fill-gray-100 dark:fill-gray-800"
    />
    {/* Column 1 */}
    <rect
      x="30"
      y="75"
      width="25"
      height="8"
      rx="2"
      className="fill-gray-900 dark:fill-gray-100"
    />
    <rect
      x="30"
      y="88"
      width="20"
      height="6"
      rx="2"
      className="fill-gray-400 dark:fill-gray-500"
    />
    <rect
      x="30"
      y="98"
      width="20"
      height="6"
      rx="2"
      className="fill-gray-400 dark:fill-gray-500"
    />
    {/* Column 2 */}
    <rect
      x="70"
      y="75"
      width="25"
      height="8"
      rx="2"
      className="fill-gray-900 dark:fill-gray-100"
    />
    <rect
      x="70"
      y="88"
      width="20"
      height="6"
      rx="2"
      className="fill-gray-400 dark:fill-gray-500"
    />
    <rect
      x="70"
      y="98"
      width="20"
      height="6"
      rx="2"
      className="fill-gray-400 dark:fill-gray-500"
    />
    {/* Copyright */}
    <rect
      x="30"
      y="120"
      width="100"
      height="6"
      rx="2"
      className="fill-gray-300 dark:fill-gray-600"
    />
  </svg>
);

// components/icons/ThemeToggleIcon.tsx
export const ThemeToggleIcon = () => (
  <svg
    width="160"
    height="160"
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="size-40"
  >
    {/* Background */}
    <rect
      x="20"
      y="20"
      width="120"
      height="120"
      rx="60"
      className="fill-gray-100 dark:fill-gray-800"
    />

    {/* Light Mode (Left) */}
    <g transform="translate(40, 60)">
      <circle cx="20" cy="20" r="15" className="fill-gray-900" />
      <path
        d="M20 0L20 10M0 20L10 20M20 30L20 40M30 20L40 20"
        stroke="currentColor"
        strokeWidth="2"
        className="stroke-gray-900"
      />
    </g>

    {/* Dark Mode (Right) */}
    <g transform="translate(90, 60)">
      <path
        d="M25 20C25 28.2843 18.2843 35 10 35C1.71573 35 -5 28.2843 -5 20C-5 11.7157 1.71573 5 10 5C18.2843 5 25 11.7157 25 20Z"
        className="fill-gray-100 dark:fill-gray-900"
      />
      <path
        d="M23 15C23 23.2843 16.2843 30 8 30C-0.284271 30 -7 23.2843 -7 15"
        className="fill-gray-800 dark:fill-gray-100"
      />
    </g>

    {/* Toggle Indicator */}
    <circle
      cx="80"
      cy="80"
      r="5"
      className="fill-gray-400 dark:fill-gray-500"
    />
  </svg>
);
