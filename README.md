# Bracketui

This is an official Bracketui component librry for React.

## Installation

1. Install the package:

```bash
npm install @thirdbracket/bracketui
```

2. Ensure you have required peer dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
```

3. Add our components to your Tailwind config:

```js
// tailwind.config.js
module.exports = {
  content: [
    // ... your other content paths
    "./node_modules/@thirdbracket/bracketui/**/*.{js,ts,jsx,tsx}",
  ],
};
```
