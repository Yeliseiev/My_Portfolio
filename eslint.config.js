import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";

export default tseslint.config(
  { ignores: ["dist", "vite.config.ts", "node_modules"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked, // Заміна конфігурації
      ...tseslint.configs.stylisticTypeChecked, // Додано для стилістичних правил,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"], // Шляхи до ваших tsconfig
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      react, // Плагін для React
    },
    settings: {
      react: { version: "18.3" }, // Версія React
    },
    rules: {
      ...react.configs.recommended.rules, // Рекомендовані правила React
      ...react.configs["jsx-runtime"].rules, // Для використання JSX Runtime
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-console": "error",
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "space-in-parens": "error",
      quotes: ["error", "single"],
      "jsx-quotes": ["error", "prefer-double"],
      "max-len": ["error", { code: 80 }],
      "comma-dangle": ["error", "always-multiline"],
      "comma-spacing": "error",
      semi: ["error", "always"],
      "semi-spacing": "error",
      "no-trailing-spaces": "error",
      "no-multi-spaces": ["error"],
      "key-spacing": "error",
      "react/jsx-first-prop-new-line": ["error", "multiline"],
      "react/jsx-indent": ["error", 2],
      "react/jsx-indent-props": ["error", 2],
      "react/jsx-tag-spacing": [
        "error",
        {
          beforeSelfClosing: "proportional-always",
          beforeClosing: "never",
        },
      ],
      "react/jsx-closing-bracket-location": [2, "line-aligned"],
    },
  }
);
