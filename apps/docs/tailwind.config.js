/** @type {import('tailwindcss').Config} */

const { bracketuiPlugin } = require("@thirdbracket/bracketui");
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // Path to your component library
    "../../packages/bracketui/src/**/*.{js,ts,jsx,tsx}", // During development

    // OR
    // "./node_modules/@thirdbracket/bracketui/**/*.{js,ts,jsx,tsx}" // When installed from npm
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   anta: ["Anta"],
      // },
    },
  },
  plugins: [bracketuiPlugin],
};
