# Create BracketUI App

[![npm version](https://badge.fury.io/js/@thirdbracket%2Fcreate-bracketui-app.svg)](https://badge.fury.io/js/@thirdbracket%2Fcreate-bracketui-app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The fastest way to create a new React/Next.js project with [BracketUI](https://www.npmjs.com/package/@thirdbracket/bracketui) component library pre-configured and ready to use.

## 🚀 Quick Start

Create a new project in seconds:

```bash
npx @thirdbracket/create-bracketui-app my-app
cd my-app
npm run dev
```

## ✨ What's Included

Your new project comes with:

- ⚡ **Next.js 15.3.7+** - Latest App Router with security patches
- 🔒 **Security First** - CVE-2025-66478 vulnerability fixes included
- 🎨 **BracketUI Components** - Pre-installed and configured
- 🌙 **Dark Mode** - ThemeScript and ThemeToggle ready to use
- 📦 **ES6 Module Support** - Modern Tailwind config with ES6 imports
- 🎯 **TypeScript** - Full type safety
- 📱 **TailwindCSS** - Utility-first styling
- 🔧 **ESLint** - Code quality and consistency
- 📦 **Optimized Build** - Production-ready configuration

## 📋 Usage Options

### Interactive Mode
```bash
npx @thirdbracket/create-bracketui-app
# You'll be prompted to enter a project name
```

### Direct Project Name
```bash
npx @thirdbracket/create-bracketui-app my-awesome-app
```

### With Specific Version
```bash
npx @thirdbracket/create-bracketui-app@latest my-app
```

## 🏗️ Project Structure

Your generated project will have this structure:

```
my-app/
├── src/
│   └── app/
│       ├── globals.css
│       ├── layout.tsx      # ThemeScript included
│       └── page.tsx        # Sample BracketUI components
├── public/
├── tailwind.config.js      # BracketUI plugin configured
├── package.json
└── tsconfig.json
```

## 🎨 Pre-configured Components

The template includes examples of:

- **Button** - Various sizes and styles
- **ThemeToggle** - Dark/light mode switcher
- **ThemeScript** - Automatic theme detection

```jsx
// Already set up in your new project
import { Button, ThemeToggle, ThemeScript } from "@thirdbracket/bracketui";

export default function Home() {
  return (
    <div>
      <Button href="/dashboard">Get Started</Button>
      <ThemeToggle />
    </div>
  );
}
```

## 🛠️ Development

After creating your project:

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on http://localhost:3000 |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

## 🎯 Next Steps

After creating your project:

1. **Explore Components** - Check out the [BracketUI documentation](https://www.npmjs.com/package/@thirdbracket/bracketui)
2. **Customize Theme** - Modify `tailwind.config.js` for your brand
3. **Add Pages** - Create new routes in the `src/app` directory
4. **Deploy** - Deploy to Vercel, Netlify, or your preferred platform

## 🔧 Customization

### TailwindCSS Configuration
The generated project includes a pre-configured `tailwind.config.mjs` with ES6 imports:

```js
// tailwind.config.mjs
import { bracketuiPlugin } from "@thirdbracket/bracketui";

export default {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@thirdbracket/bracketui/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [bracketuiPlugin],
};
```

### Adding More Components
Install additional BracketUI components as needed:

```jsx
import { 
  Button, 
  Card, 
  Navbar, 
  Megamenu, 
  Tab 
} from "@thirdbracket/bracketui";
```

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Next.js will automatically use the next available port
# Or specify a different port:
npm run dev -- -p 3001
```

**Module not found:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 🤝 Contributing

Found a bug or want to contribute? 

- [Report Issues](https://github.com/sagarmusabbir/bracketui/issues)
- [Submit Pull Requests](https://github.com/sagarmusabbir/bracketui/pulls)

## 📄 License

MIT © [Third Bracket](https://www.thirdbracket.co.uk)

## 🔗 Related

- [BracketUI Components](https://www.npmjs.com/package/@thirdbracket/bracketui) - The component library
- [GitHub Repository](https://github.com/sagarmusabbir/bracketui) - Source code
- [Third Bracket](https://www.thirdbracket.co.uk) - Our company

---

**Happy coding with BracketUI! 🚀**