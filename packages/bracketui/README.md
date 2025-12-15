# BracketUI

[![npm version](https://badge.fury.io/js/@thirdbracket%2Fbracketui.svg)](https://badge.fury.io/js/@thirdbracket%2Fbracketui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, accessible React component library built with TailwindCSS. Perfect for Next.js applications with built-in dark mode support and theme management.

## ✨ Features

- 🎨 **TailwindCSS Integration** - Built-in styling with full customization
- 🌙 **Dark Mode Support** - Automatic system preference detection + manual toggle
- ⚡ **Next.js Optimized** - Perfect for App Router and Pages Router
- 🎯 **TypeScript First** - Full type safety out of the box
- 📱 **Responsive Design** - Mobile-first approach
- ♿ **Accessibility** - WCAG compliant components
- 🎛️ **Highly Customizable** - Theme props for easy customization

## 🚀 Quick Start

### Installation

```bash
npm install @thirdbracket/bracketui
```

### Setup TailwindCSS

Add BracketUI to your `tailwind.config.js`:

```js
const { bracketuiPlugin } = require("@thirdbracket/bracketui");

module.exports = {
  darkMode: "class", // Required for dark mode
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@thirdbracket/bracketui/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    bracketuiPlugin,
    // Your other plugins
  ],
};
```

### Basic Usage

```jsx
import { Button, ThemeToggle, ThemeScript } from "@thirdbracket/bracketui";

// Add ThemeScript to your layout (Next.js App Router)
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeScript />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

// Use components anywhere
export default function App() {
  return (
    <div>
      <Button href="/dashboard" size="lg">
        Get Started
      </Button>
      <ThemeToggle />
    </div>
  );
}
```

## 📦 Available Components

| Component | Description |
|-----------|-------------|
| `Button` | Versatile button with multiple variants and sizes |
| `Card` | Flexible container for content |
| `Navbar` | Navigation bar with responsive design |
| `Megamenu` | Advanced dropdown navigation |
| `Tab` | Tabbed interface component |
| `ThemeToggle` | Dark/light mode toggle button |
| `ThemeScript` | Theme initialization script |

## 🎨 Customization

BracketUI components accept theme props for easy customization:

```jsx
<Button 
  theme={{
    background: "bg-purple-600 hover:bg-purple-700",
    text: "text-white",
    border: "border-purple-600"
  }}
>
  Custom Button
</Button>
```

## 🌙 Dark Mode

BracketUI includes a complete dark mode solution:

1. **Add ThemeScript** to your layout
2. **Use ThemeToggle** component anywhere
3. **Automatic system detection** with manual override

```jsx
import { ThemeScript, ThemeToggle } from "@thirdbracket/bracketui";

// In your layout
<head>
  <ThemeScript />
</head>

// Anywhere in your app
<ThemeToggle />
```

## 🛠️ CLI Tool

Quickly scaffold new projects with BracketUI:

```bash
npx @thirdbracket/create-bracketui-app my-app
cd my-app
npm run dev
```

## 📚 Documentation

- [Component Documentation](https://github.com/sagarmusabbir/bracketui) (Coming Soon)
- [Examples](https://github.com/sagarmusabbir/bracketui/tree/dev/apps)
- [Changelog](https://github.com/sagarmusabbir/bracketui/blob/dev/packages/bracketui/CHANGELOG.md)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](https://github.com/sagarmusabbir/bracketui/blob/dev/CONTRIBUTING.md).

## 📄 License

MIT © [Third Bracket](https://www.thirdbracket.co.uk)

## 🔗 Links

- [GitHub Repository](https://github.com/sagarmusabbir/bracketui)
- [npm Package](https://www.npmjs.com/package/@thirdbracket/bracketui)
- [Third Bracket](https://www.thirdbracket.co.uk)
- [Report Issues](https://github.com/sagarmusabbir/bracketui/issues)