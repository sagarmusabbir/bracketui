/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Path to your component library
    "../../packages/bracketui/src/**/*.{js,ts,jsx,tsx}", // During development

    // OR
    // "./node_modules/@thirdbracket/bracketui/**/*.{js,ts,jsx,tsx}" // When installed from npm
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
