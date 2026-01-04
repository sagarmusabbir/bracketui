// src/components/Card/styles.ts

import { tv } from "tailwind-variants";
import { focus } from "../../lib/system/tokens";
import { cardVariants, cardInteractions, cardContent } from "./tokens";
import { cardSizes, cardImageSizes } from "./sizes";

export const cardStyles = tv({
  base: [
    "rounded-lg overflow-hidden flex flex-col",
    "transition-all duration-200 ease-in-out",
    focus.ring,
  ],

  variants: {
    variant: {
      default: cardVariants.default,
      elevated: cardVariants.elevated,
      flat: cardVariants.flat,
      glass: cardVariants.glass,
      outline: cardVariants.outline,
      ghost: cardVariants.ghost,
    },

    clickable: {
      true: cardInteractions.clickable,
      false: cardInteractions.static,
    },
  },

  defaultVariants: {
    variant: "default",
    clickable: false,
  },
});

export const cardContentStyles = tv({
  variants: {
    size: {
      sm: `${cardSizes.sm.padding} ${cardSizes.sm.spacing}`,
      md: `${cardSizes.md.padding} ${cardSizes.md.spacing}`,
      lg: `${cardSizes.lg.padding} ${cardSizes.lg.spacing}`,
      xl: `${cardSizes.xl.padding} ${cardSizes.xl.spacing}`,
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const cardTitleStyles = tv({
  base: cardContent.title,
  variants: {
    size: {
      sm: cardSizes.sm.titleSize,
      md: cardSizes.md.titleSize,
      lg: cardSizes.lg.titleSize,
      xl: cardSizes.xl.titleSize,
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const cardDescriptionStyles = tv({
  base: cardContent.description,
  variants: {
    size: {
      sm: cardSizes.sm.descriptionSize,
      md: cardSizes.md.descriptionSize,
      lg: cardSizes.lg.descriptionSize,
      xl: cardSizes.xl.descriptionSize,
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const cardImageStyles = tv({
  base: "w-full object-cover",
  variants: {
    size: {
      sm: cardImageSizes.sm,
      md: cardImageSizes.md,
      lg: cardImageSizes.lg,
      xl: cardImageSizes.xl,
    },
  },
  defaultVariants: {
    size: "md",
  },
});