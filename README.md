# @thirdbracket/bracketui

BracketUI is a flexible and reusable React UI component library built with TailwindCSS. Designed for developers who value simplicity and a utility-first approach, BracketUI provides ready-to-use components like `Megamenu`, `Mobile Nav`, `ThemeToggle`, and more, all optimized for TailwindCSS projects.

---

## Features

- **Ready-to-Use Components**: Includes commonly used components for modern web development.
- **TailwindCSS Integration**: Built primarily for TailwindCSS v3 projects.
- **Theme Support**: Offers a theme toggle feature that syncs with system preferences and allows manual switching.
- **Highly Customizable**: Minimalistic design that is easily extendable.
- **React-Friendly**: All components are optimized for ReactJS and Next.js projects.

---

## Table of Contents

1. [Installation](#installation)
2. [Configuration](#configuration)
3. [Available Components](#available-components)
4. [Theming](#theming)
5. [Development and Contribution](#development-and-contribution)
6. [FAQs](#faqs)
7. [License](#license)

---

## Installation

To use BracketUI in your project, install the package via npm:

```bash
npm install @thirdbracket/bracketui
```

---

## Configuration

BracketUI is designed to work seamlessly with TailwindCSS. To configure it, follow these steps:

1. **Add the Plugin to Your Tailwind Config**  
   Update your `tailwind.config.js` as follows:
   
   ```js
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

2. **Enable Dark Mode**  
   BracketUI requires `darkMode: "class"` for theming.

---

## Available Components

Here is a list of components currently available in BracketUI:

- **Button**: A customizable button component (`<Button />`).
- **Navbar**: A responsive and extendable navigation bar (`<Navbar />`).
- **Megamenu**: Multi-level dropdown menu for navigation.
- **ThemeToggle**: Syncs with the system theme or toggles manually.
- **Tab**: Tab navigation for organizing content.
- **Card**: A container component with support for titles, images, and more.

### Example Usage

To use a BracketUI component like the Button:

```jsx
import { Button } from "@thirdbracket/bracketui";

export default function App() {
  return <Button className="bg-blue-500 text-white">Click Me</Button>;
}
```

For detailed usage, consult the component documentation (coming soon).

---

## Theming

BracketUI provides built-in support for a dark/light theme toggle.

### Enabling Theme Toggle

The `ThemeToggle` component can be used to switch between light and dark modes. It supports:
- **System Preferences**: Syncs your app theme with the device's default (dark or light).
- **Manual Toggling**: Allows users to switch themes via the toggle button.

Example:

```jsx
import { ThemeToggle } from "@thirdbracket/bracketui";

export default function Navbar() {
  return (
    <header>
      ...
      <ThemeToggle />
    </header>
  );
}
}
```

---

## Development and Contribution

### Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/sagarmusabbir/bracketui.git
cd bracketui
npm install
```

### Scripts

- **Development Mode**: `npm run dev`
- **Build Package**: `npm run build`
- **Lint Code**: `npm run lint`
- **Release a New Version**: `npm run release`

### Contribution Guidelines

We welcome contributions! Open an issue or submit a pull request for fixes, new components, or features.

---

## FAQs

### 1. Which versions of TailwindCSS are supported?
BracketUI is developed for TailwindCSS v3. TailwindCSS v4 or higher is currently **not supported**.

### 2. Can I extend or customize the components provided?
Yes! The library is designed to be utility-first. You can easily override the styles of any component using Tailwind classes.

### 3. How can I report a bug or request a feature?
Please create an issue in the [GitHub Repository](https://github.com/sagarmusabbir/bracketui/issues).

---

## License

BracketUI is distributed under the MIT License. See the [LICENSE](https://github.com/sagarmusabbir/bracketui/blob/dev/LICENSE) file for more information.
