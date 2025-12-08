# Bracket UI

[BracketUI](https://www.npmjs.com/package/@thirdbracket/bracketui) is an open source TailwindCSS based UI component library from [Third Bracket](https://www.thirdbracket.co.uk) designed for React/Next.js projects. This monorepo contains the core component library, CLI tools for bootstrapping new projects, and example applications.

## Roadmap

- [x] The main package: _[/bracketui](./packages/bracketui)_ which is published as an [Npm Package](https://www.npmjs.com/package/@thirdbracket/bracketui)
- [x] Custom CLI tool: _[/create-bracketui-app](./packages/create-bracketui-app)_ to quickly bootstrap with [Bracket UI Next.js Template](https://bracketui-web.vercel.app/)
- [ ] Official website: _[/website](./apps/web)_ showcasing BracketUI components. _Coming Soon_
- [ ] Our _[/documentation](./apps/docs)_ _is in progress_.

## Features

- **Ready-to-Use Components**: Includes commonly used components for modern web development.
- **TailwindCSS Integration**: Built primarily for TailwindCSS v3 projects.
- **Theme Support**: Offers a theme toggle feature that syncs with system preferences and allows manual switching.
- **Highly Customizable**: Easily customize the components in your own way with our component specific _theme_ props.
- **React/Next.js Friendly**: All components are optimized for React and Next.js projects.

## Getting Started

Learn how to get started with Bracket UI to use premium react components for free.

### Quick Start

The fastest way to get started with BracketUI is to use the CLI:

```bash
npx create-bracketui-app my-app
```

### Add to an exisitng React/Next.js project

If you prefer to add BracketUI to an existing project:

#### Install the package

```bash
npm install @thirdbracket/bracketui
```

#### Then update your Tailwind CSS configuration with this:

```js
// tailwind.config.js
const { bracketuiPlugin } = require("@thirdbracket/bracketui");

module.exports = {
  darkMode: "class", // Required for BracketUI's dark/light theming
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@thirdbracket/bracketui/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    bracketuiPlugin,
    // Add other plugins here
  ],
};
```

## Available Components

Here is a list of components currently available in BracketUI:

- _Button_
- _Navbar_
- _Megamenu_
- _ThemeToggle_
- _Tab_
- _Card_

### Example Usage

To use a BracketUI component like the Button:

_Simply Import the Button and then use it anywhere you want_

```
import { Button } from "@thirdbracket/bracketui";

export default function App() {
  return <Button href="/path" outline size="md">Click Me</Button>;
}
```

For detailed usage, consult the component documentation (coming soon).

## Customization & Theming

From day one, BracketUI is built for root level customization with component specific _theme_ props. Detailed documenation is coming soon.

## Dark Mode

Bracket UI utilizes TailwindCSS dark mode functionality. You just need to add `darkMode: "class",` inside your TailwinCSS config.

### Theme Toggle

Bracket UI extends dark mode functionality into an improved feature we call _ThemeToggle_. This component uses _ThemeScript_ and custom hook to determine the system/device theme state. After that the component can be used to switch between theme states. It supports:

- _System Preferences_: Syncs your app theme with the device's default (dark or light).
- _Manual Toggling_: Allows users to switch themes via the toggle button.

Example:

_If you are using Next.js app router first import ThemeScript into your layout.tsx file and then use it inside the head element of the component to enable site wide Theming functionality_

```
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

_After that you can use the ThemeToggle in any part of your website. Here the ThemeToggle is used on a Navbar component._

```
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
  `npm install`

- Start development server for all packages
  `npm run dev`

## Contribution

We welcome contributions! Open an issue or submit a pull request for fixes, new components, or features.

### Scripts

- _Development Mode_: `npm run dev`
- _Build Package_: `npm run build`
- _Create a new changeset_: `npm run changeset`
- _Lint Code_: `npm run lint`
- _Version packages based on changesets_: `npm run version`
- _Release a New Version_: `npm run release`

---

## FAQs

### 1. Which versions of TailwindCSS are supported?

BracketUI is developed for TailwindCSS v3. TailwindCSS v4 or higher is currently _not supported_.

### 2. Can I extend or customize the components provided?

Yes! The library is designed to be utility-first. You can easily override the styles of any component using Tailwind classes.

### 3. How can I report a bug or request a feature?

Please create an issue in the [GitHub Repository](https://github.com/sagarmusabbir/bracketui/issues).

---

## License

BracketUI is distributed under the MIT License. See the [LICENSE](https://github.com/sagarmusabbir/bracketui/blob/dev/LICENSE) file for more information.
