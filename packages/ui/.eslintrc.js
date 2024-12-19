/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      // Define files that should be parsed as JavaScript
      files: ["*.js", "*.jsx", "*.config.js"],
      parser: "espree", // Use regular ESLint parser for JS files
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
      env: {
        node: true, // Add Node.js environment
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: ["./tsconfig.lint.json"],
        tsconfigRootDir: __dirname,
      },
    },
  ],
  settings: {
    "import/resolver": {
      typescript: {
        project: "./tsconfig.lint.json",
      },
    },
  },
};
