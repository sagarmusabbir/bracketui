// packages/bracketui/src/lib/tailwind/index.ts
import plugin from "tailwindcss/plugin";

export const bracketui = plugin(function ({ addComponents, theme }) {
  addComponents({
    ".bracketui-container": {
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: theme("spacing.4"),
      paddingRight: theme("spacing.4"),
      "@screen sm": {
        paddingLeft: theme("spacing.6"),
        paddingRight: theme("spacing.6"),
        maxWidth: theme("screens.sm"),
      },
      "@screen md": {
        maxWidth: theme("screens.md"),
      },
      "@screen lg": {
        paddingLeft: theme("spacing.8"),
        paddingRight: theme("spacing.8"),
        maxWidth: theme("screens.lg"),
      },
      "@screen xl": {
        maxWidth: theme("screens.xl"),
      },
      "@screen 2xl": {
        maxWidth: theme("screens.2xl"),
      },
    },
  });
});
