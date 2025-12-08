/** @type {import('tailwindcss').Config} */

import { bracketuiPlugin } from "@thirdbracket/bracketui";

module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

    // "./node_modules/@thirdbracket/bracketui/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/@thirdbracket/bracketui/src/**/*.{js,ts,jsx,tsx}",

    // // Path to Bracketui component library
    "../../packages/bracketui/src/**/*.{js,ts,jsx,tsx}", // During development. You can safely remove this line.
    "./node_modules/@thirdbracket/bracketui/**/*.{js,ts,jsx,tsx}", // When installed from npm
  ],
  theme: {
    extend: {},
  },
  plugins: [bracketuiPlugin],
};
