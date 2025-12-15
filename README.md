# Bracket UI

[BracketUI](https://www.npmjs.com/package/@thirdbracket/bracketui) is an open source TailwindCSS based UI component library from [Third Bracket](https://www.thirdbracket.co.uk) designed for React/Next.js projects. This monorepo contains the core component library, CLI tools for bootstrapping new projects, and example applications.

## Roadmap

- [x] The main package: *[/bracketui](./packages/bracketui)* which is published as an [Npm Package](https://www.npmjs.com/package/@thirdbracket/bracketui)  
- [x] Custom CLI tool: *[/create-bracketui-app](./packages/create-bracketui-app)* to quickly bootstrap with [Bracket UI Next.js Template](https://bracketui-web.vercel.app/)  
- [ ] Official website showcasing BracketUI components. *Coming Soon*  
- [ ] Documentation website. *Coming Soon*  




## Features

- **Ready-to-Use Components**: Includes commonly used components for modern web development.
- **TailwindCSS Integration**: Built primarily for TailwindCSS v3 projects.
- **ES6 Module Support**: Full ES6 import/export support for modern development workflows.
- **Security First**: Uses latest Next.js versions with security patches (CVE-2025-66478 fixed).
- **Theme Support**: Offers a theme toggle feature that syncs with system preferences and allows manual switching.
- **Highly Customizable**: Easily customize the components in your own way with our component specific *theme* props.
- **React/Next.js Friendly**: All components are optimized for React and Next.js projects.


## Getting Started

Learn how to get started with Bracket UI to use premium react components for free.

### Quick Start

The fastest way to get started with BracketUI is to use the CLI:

```bash
npx @thirdbracket/create-bracketui-app my-app
```

### Add to an existing React/Next.js project

If you prefer to add BracketUI to an existing project:

#### Install the package

```bash
npm install @thirdbracket/bracketui
```

#### Then update your Tailwind CSS configuration:

**ES6 Modules (Recommended):**
```js
// tailwind.config.mjs
import { bracketuiPlugin } from "@thirdbracket/bracketui";

export default {
  darkMode: "class", // Required for BracketUI's dark/light theming
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@thirdbracket/bracketui/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [bracketuiPlugin],
};
```

**CommonJS (Legacy):**
```js
// tailwind.config.js
const { bracketuiPlugin } = require("@thirdbracket/bracketui");

module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@thirdbracket/bracketui/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [bracketuiPlugin],
};
```

## Available Components

Here is a list of components currently available in BracketUI:

- *Button*
- *Navbar*
- *Megamenu*
- *ThemeToggle*
- *Tab*
- *Card*

### Example Usage

To use a BracketUI component like the Button:

*Simply Import the Button and then use it anywhere you want*

```jsx
import { Button } from "@thirdbracket/bracketui";

export default function App() {
  return <Button href="/path" outline size="md">Click Me</Button>;
}
```

For detailed usage, consult the component documentation (coming soon).


## Customization & Theming

From day one, BracketUI is built for root level customization with component specific *theme* props. Detailed documenation is coming soon.

## Dark Mode
Bracket UI utilizes TailwindCSS dark mode functionality. You just need to add ```darkMode: "class",``` inside your TailwinCSS config.

### Theme Toggle

Bracket UI extends dark mode functionality into an improved feature we call *ThemeToggle*. This component uses *ThemeScript* and custom hook to determine the system/device theme state. After that the component can be used to switch between theme states. It supports:
- *System Preferences*: Syncs your app theme with the device's default (dark or light).
- *Manual Toggling*: Allows users to switch themes via the toggle button.

Example:

*If you are using Next.js app router first import ThemeScript into your layout.tsx file and then use it inside the head element of the component to enable site wide Theming functionality*  

```jsx
import { ThemeScript } from "@thirdbracket/bracketui";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeScript /> 
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
```

*After that you can use the ThemeToggle in any part of your website. Here the ThemeToggle is used on a Navbar component.* 

```jsx
import { ThemeToggle } from "@thirdbracket/bracketui";

export default function Navbar() {
  return (
    <header>
      ...
      <ThemeToggle /> //The exact ThemeToggle
    </header>
  );
}
}
```

## Development

This project uses [Turborepo](https://turbo.build/repo) for monorepo management and [Changesets](https://github.com/changesets/changesets) for versioning and publishing.

- To get started first clone the repository and go to project directory:
```bash
git clone https://github.com/sagarmusabbir/bracketui.git
cd bracketui
```

- Install dependencies
```npm install```

- Start development server for all packages
```npm run dev```


## Contribution

We welcome contributions! Open an issue or submit a pull request for fixes, new components, or features.

### Scripts

- *Development Mode*: ```npm run dev```
- *Build Package*: ```npm run build```
- *Create a new changeset*: ```npm run changeset```
- *Lint Code*: ```npm run lint```
- *Version packages based on changesets*: ```npm run version```
- *Release a New Version*: ```npm run release```


---

## FAQs

### 1. Which versions of TailwindCSS are supported?
BracketUI is developed for TailwindCSS v3. TailwindCSS v4 or higher is currently *not supported*.

### 2. Can I extend or customize the components provided?
Yes! The library is designed to be utility-first. You can easily override the styles of any component using Tailwind classes.

### 3. How can I report a bug or request a feature?
Please create an issue in the [GitHub Repository](https://github.com/sagarmusabbir/bracketui/issues).

---

## License

BracketUI is distributed under the MIT License. See the [LICENSE](https://github.com/sagarmusabbir/bracketui/blob/dev/LICENSE) file for more information.
