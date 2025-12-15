# BracketUI Template

This is a [Next.js](https://nextjs.org) project template showcasing [BracketUI](https://github.com/thirdbracket-solutions/bracketui) components. It's designed to be a starting point for your applications and is the same template used by the `create-bracketui-app` CLI.

## Features

- ⚡ [Next.js](https://nextjs.org) with App Router
- 🎨 [Tailwind CSS](https://tailwindcss.com) for styling
- 🧩 [BracketUI](https://github.com/thirdbracket-solutions/bracketui) components
- 🌙 Dark mode support
- 📱 Responsive design
- 🔍 TypeScript for type safety

## Getting Started

You can use this template directly with our CLI:

```bash
npx @thirdbracket/create-bracketui-app my-app
cd my-app
npm run dev
```

Or clone this repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/thirdbracket-solutions/bracketui.git
cd bracketui/apps/bracketui-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
my-app/
├── public/          # Static assets
├── src/
│   ├── app/         # App Router pages
│   │   ├── layout.tsx  # Root layout with BracketUI providers
│   │   └── page.tsx    # Home page with example components
│   └── globals.css  # Global styles
├── tailwind.config.js  # Tailwind configuration
└── package.json     # Project dependencies
```

## Customizing

### Tailwind Configuration

The template includes a Tailwind CSS configuration that's already set up for BracketUI:

```js
// tailwind.config.js
const { bracketuiPlugin } = require("@thirdbracket/bracketui");

module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@thirdbracket/bracketui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [bracketuiPlugin],
};
```

You can extend this configuration to customize your design system.

## Learn More

- [BracketUI Documentation](https://github.com/thirdbracket-solutions/bracketui)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

MIT
