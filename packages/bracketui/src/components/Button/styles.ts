// src/packages/Button/styles.ts

import { tv } from "tailwind-variants";
import { colors, focus } from "../../lib/system/tokens";
import { iconSizes, sizes } from "../../lib/system/sizes";

export const buttonStyles = tv({
  base: [
    "inline-flex items-center justify-center whitespace-nowrap font-medium",
    "relative select-none",
    "transition-all motion-reduce:transition-none",
    "disabled:pointer-events-none disabled:opacity-50",
    focus.ring,
  ],

  variants: {
    variant: {
      default: `${colors.primary} ${focus.primary}`,
      secondary: `${colors.secondary} ${focus.primary}`,
      destructive: `${colors.destructive} focus-visible:ring-red-500`,
      outline: `bg-transparent ${colors.outline} hover:bg-gray-100 dark:hover:bg-gray-800 ${focus.primary}`,
      ghost: `${colors.ghost} ${focus.primary}`,
      link: `${colors.link} ${focus.primary}`,
      flat: `${colors.flat} ${focus.primary}`,
      glass: `
        backdrop-blur-2xl saturate-200
        hover:backdrop-blur-xl
        ${colors.glass}
        ${focus.primary}
      `,
      avatar: `rounded-full ${colors.primary} ${focus.primary}`,
    },

    /** Text buttons */
    size: {
      ...sizes, // h + px + text-size
    },

    /** Icon / avatar buttons */
    iconSize: {
      ...iconSizes,
    },
  },

  defaultVariants: {
    variant: "default",
    size: "md",
  },
});
