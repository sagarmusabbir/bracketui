// icons.tsx

// Facebook Icon
export const FacebookIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} fill="currentColor" {...props}>
    <path fill="none" d="M0 0h24v24H0z"></path>{" "}
    <path
      fillRule="nonzero"
      d="M13 9h4.5l-.5 2h-4v9h-2v-9H7V9h4V7.128c0-1.783.186-2.43.534-3.082a3.635 3.635 0 0 1 1.512-1.512C13.698 2.186 14.345 2 16.128 2c.522 0 .98.05 1.372.15V4h-1.372c-1.324 0-1.727.078-2.138.298-.304.162-.53.388-.692.692-.22.411-.298.814-.298 2.138V9z"
    ></path>
  </svg>
);

// LinkedIn Icon
export const LinkedInIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path d="M12 9.55C12.917 8.613 14.111 8 15.5 8a5.5 5.5 0 0 1 5.5 5.5V21h-2v-7.5a3.5 3.5 0 0 0-7 0V21h-2V8.5h2v1.05zM5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-1 2h2V21H4V8.5z"></path>
  </svg>
);

// Email Icon
export const EmailIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19.7505 9.02905C19.7652 9.443 20.1127 9.76663 20.5267 9.75189C20.9406 9.73715 21.2643 9.38962 21.2495 8.97567L19.7505 9.02905ZM16.214 5.00236V5.75236C16.2224 5.75236 16.2307 5.75222 16.2391 5.75194L16.214 5.00236ZM9.786 5.00236L9.76095 5.75194C9.7693 5.75222 9.77765 5.75236 9.786 5.75236V5.00236ZM4.75048 8.97567C4.73573 9.38962 5.05936 9.73715 5.47331 9.75189C5.88726 9.76663 6.23478 9.443 6.24952 9.02905L4.75048 8.97567ZM21.25 9.00236C21.25 8.58815 20.9142 8.25236 20.5 8.25236C20.0858 8.25236 19.75 8.58815 19.75 9.00236H21.25ZM20.5 15.0024L21.2495 15.029C21.2498 15.0202 21.25 15.0113 21.25 15.0024H20.5ZM16.214 19.0024L16.2391 18.2528C16.2307 18.2525 16.2224 18.2524 16.214 18.2524V19.0024ZM9.786 19.0024V18.2524C9.77765 18.2524 9.7693 18.2525 9.76095 18.2528L9.786 19.0024ZM5.5 15.0024H4.75C4.75 15.0113 4.75016 15.0202 4.75048 15.029L5.5 15.0024ZM6.25 9.00236C6.25 8.58815 5.91421 8.25236 5.5 8.25236C5.08579 8.25236 4.75 8.58815 4.75 9.00236H6.25ZM20.8783 9.64996C21.236 9.44103 21.3565 8.98172 21.1476 8.62406C20.9387 8.2664 20.4794 8.14583 20.1217 8.35476L20.8783 9.64996ZM15.236 12.0774L14.8577 11.4297L14.8515 11.4334L15.236 12.0774ZM10.764 12.0774L11.1486 11.4334L11.1423 11.4298L10.764 12.0774ZM5.8783 8.35476C5.52064 8.14583 5.06133 8.2664 4.8524 8.62406C4.64347 8.98172 4.76404 9.44103 5.1217 9.64996L5.8783 8.35476ZM21.2495 8.97567C21.1534 6.27536 18.8895 4.16252 16.1889 4.25278L16.2391 5.75194C18.1129 5.68931 19.6838 7.15537 19.7505 9.02905L21.2495 8.97567ZM16.214 4.25236H9.786V5.75236H16.214V4.25236ZM9.81105 4.25278C7.11054 4.16252 4.84663 6.27536 4.75048 8.97567L6.24952 9.02905C6.31625 7.15537 7.88712 5.68931 9.76095 5.75194L9.81105 4.25278ZM19.75 9.00236V15.0024H21.25V9.00236H19.75ZM19.7505 14.9757C19.6838 16.8494 18.1129 18.3154 16.2391 18.2528L16.1889 19.7519C18.8895 19.8422 21.1534 17.7294 21.2495 15.029L19.7505 14.9757ZM16.214 18.2524H9.786V19.7524H16.214V18.2524ZM9.76095 18.2528C7.88712 18.3154 6.31624 16.8494 6.24952 14.9757L4.75048 15.029C4.84663 17.7294 7.11054 19.8422 9.81105 19.7519L9.76095 18.2528ZM6.25 15.0024V9.00236H4.75V15.0024H6.25ZM20.1217 8.35476L14.8577 11.4298L15.6143 12.725L20.8783 9.64996L20.1217 8.35476ZM14.8515 11.4334C13.7111 12.1145 12.2889 12.1145 11.1485 11.4334L10.3795 12.7213C11.9935 13.6852 14.0065 13.6852 15.6205 12.7213L14.8515 11.4334ZM11.1423 11.4298L5.8783 8.35476L5.1217 9.64996L10.3857 12.725L11.1423 11.4298Z"
      fill="currentColor"
    ></path>
  </svg>
);

// Phone Call Icon
export const PhoneIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <rect
      x="6.5"
      y="3"
      width="12"
      height="18"
      rx="3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      stroke-linejoin="round"
    ></rect>
    <path
      d="M12.5 18.5C12.3665 18.5 12.2409 18.448 12.1465 18.3536C12.052 18.2591 12 18.1336 12 18C12 17.9008 12.0291 17.8047 12.0843 17.7222C12.1394 17.6397 12.217 17.576 12.3086 17.5381C12.3696 17.5128 12.434 17.5 12.5 17.5C12.5327 17.5 12.5655 17.5032 12.5975 17.5096C12.6949 17.529 12.7834 17.5763 12.8536 17.6464C12.9237 17.7166 12.971 17.8051 12.9904 17.9025C13.0098 17.9998 12.9999 18.0997 12.9619 18.1913C12.924 18.283 12.8603 18.3606 12.7778 18.4157C12.6953 18.4709 12.5992 18.5 12.5 18.5Z"
      fill="currentColor"
    ></path>
    <path
      d="M12.5 19C12.2348 19 11.9804 18.8946 11.7929 18.7071C11.6054 18.5196 11.5 18.2652 11.5 18C11.5 17.8022 11.5586 17.6089 11.6685 17.4444C11.7784 17.28 11.9346 17.1518 12.1173 17.0761C12.3 17.0004 12.5011 16.9806 12.6951 17.0192C12.8891 17.0578 13.0673 17.153 13.2071 17.2929C13.347 17.4327 13.4422 17.6109 13.4808 17.8049C13.5194 17.9989 13.4996 18.2 13.4239 18.3827C13.3482 18.5654 13.22 18.7216 13.0556 18.8315C12.8911 18.9414 12.6978 19 12.5 19Z"
      fill="currentColor"
    ></path>
  </svg>
);

// WhatsApp Icon
export const WhatsAppIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 400 400" fill="none" {...props}>
    <path
      d="M84.7925 257.334C1.81069 106.044 237.525 -11.6463 321.16 119.453C396.366 237.339 251.357 391.573 150.736 312.145"
      stroke="currentColor"
      strokeWidth="24"
      strokeLinecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M89.5909 265.912C34.5405 357.344 49.8143 347.445 133.267 311.303"
      stroke="currentColor"
      strokeWidth="24"
      strokeLinecap="round"
      stroke-linejoin="round"
    ></path>{" "}
    <path
      d="M170.381 113.42C60.1005 141.74 240.793 341.184 288.582 236.047"
      stroke="currentColor"
      strokeWidth="10"
      strokeLinecap="round"
      stroke-linejoin="round"
    ></path>{" "}
    {/* <path
      d="M177.338 175.365C186.032 197.073 208.905 214.528 227.906 227.195"
      stroke="currentColor"
      strokeWidth="10"
      strokeLinecap="round"
      stroke-linejoin="round"
      strokeOpacity={0.9}
    ></path>{" "} */}
    <path
      d="M177.338 126.062C187.693 143.231 203.319 159.586 178.602 168.412"
      stroke="currentColor"
      strokeWidth="10"
      strokeLinecap="round"
      stroke-linejoin="round"
    ></path>{" "}
    {/* <path
      d="M285.431 228.46C262.184 210.573 250.584 200.134 232.965 225.301"
      stroke="currentColor"
      strokeWidth="10"
      strokeOpacity={0.9}
      strokeLinecap="round"
      stroke-linejoin="round"
    ></path> */}
  </svg>
);

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
