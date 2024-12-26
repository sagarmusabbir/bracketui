// module.exports = {
//   extends: ["@thirdbracket/eslint-config/react-library"],
// };

module.exports = {
  root: true,
  extends: ["@thirdbracket/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
