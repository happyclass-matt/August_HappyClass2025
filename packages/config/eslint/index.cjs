/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: false,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-hooks", "jsx-a11y"],
  settings: { react: { version: "detect" } },
  env: { browser: true, es2022: true, node: true, jest: true },
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/consistent-type-imports": ["warn", { prefer: "type-imports" }]
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: { project: false }
    }
  ]
};

