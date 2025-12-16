import clsx from "clsx";

const SPINNER_SIZES = {
  xs: "w-2.5 h-2.5",
  sm: "w-3 h-3",
  md: "w-3.5 h-3.5",
  lg: "w-4 h-4",
  xl: "w-4.5 h-4.5",
  icon: "w-3.5 h-3.5",
} as const;

type SpinnerSize = keyof typeof SPINNER_SIZES;

export function Spinner({ size = "md" }: { size?: SpinnerSize }) {
  return (
    <svg
      className={clsx("animate-spin text-current", SPINNER_SIZES[size])}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}
