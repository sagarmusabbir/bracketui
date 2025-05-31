// packages/bracketui/src/lib/tailwind/index.ts
import plugin from "tailwindcss/plugin";

export const bracketui = plugin(function ({ addUtilities }) {
  addUtilities({
    ".hover-opacity": {
      "@media (hover: hover)": {
        "&:hover": {
          opacity: "0.9",
        },
      },
    },
    ".hover-bg": {
      "@media (hover: hover)": {
        "&:hover": {
          "--tw-bg-opacity": "0.7",
          backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))",
        },
        "&.dark &:hover": {
          backgroundColor: "rgb(17 24 39 / var(--tw-bg-opacity))",
        },
      },
    },
  });
});
