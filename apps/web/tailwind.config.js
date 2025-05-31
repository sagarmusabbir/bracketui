/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

    // Path to Bracketui component library during development
    "../../packages/bracketui/src/**/*.{js,ts,jsx,tsx}", // During development

    // OR

    // "./node_modules/@thirdbracket/bracketui/**/*.{js,ts,jsx,tsx}" // When installed from npm
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
