// src/packages/Button/styles.ts

import { tv } from "tailwind-variants";
import { colors, focus } from "../../lib/system/tokens";
import { sizes } from "../../lib/system/sizes";

export const buttonStyles = tv({
  base: [
    "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium",
    "transition-all motion-reduce:transition-none",
    "disabled:opacity-50 disabled:pointer-events-none",
    focus.ring, // Apply focus ring styles
  ],
  variants: {
    variant: {
      default: `${colors.primary} ${focus.primary}`,
      destructive: `${colors.destructive} focus-visible:ring-red-500`,
      outline: `${colors.outline} bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 ${focus.primary}`,
      secondary: `${colors.secondary} ${focus.primary}`,
      ghost: `${colors.ghost} ${focus.primary}`,
      link: "text-gray-900 dark:text-gray-50 underline-offset-4 hover:underline",
    },
    size: {
      ...sizes, // Use all the predefined sizes
      icon: "h-10 w-10", // Add a component-specific size
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});
