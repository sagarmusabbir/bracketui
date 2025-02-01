# @thirdbracket/bracketui

BracketUI is a React component library that provides a set of reusable UI components.

## Installation

```bash
npm install @thirdbracket/bracketui
```

## Add the plugin to your Tailwind config

```js
// tailwind.config.js
const { bracketuiPlugin } = require("@thirdbracket/bracketui");

module.exports = {
  darkMode: "class", // Required for @thirdbracket/bracketui
  content: [
    // ... your content paths
    "./node_modules/@thirdbracket/bracketui/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    bracketuiPlugin,
    // ... other plugins
  ],
};
```

## Usage

Import components from the library:

```jsx
import { Component } from "@thirdbracket/bracketui";
```

## Development

- Build: `npm run build`
- Development: `npm run dev`
- Lint: `npm run lint`
- Release: `npm run release`
