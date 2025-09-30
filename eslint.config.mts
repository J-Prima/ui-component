import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([
   {
    ignores: [
      "package-lock.json",
      "node_modules/**",
      "dist/**",
      "build/**",
      "storybook-static/**",
      ".turbo/**",
      "**/generated/**",
      "**/*.d.ts",
      "**/coverage/**",
      "**/.*/**", // ignore all hidden files/folders
    ],
  },
  // JavaScript & TypeScript
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },

  // TypeScript recommended config
  tseslint.configs.recommended,

  // ✅ React config scoped only to JS/TS files
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // ✅ Markdown config — disables React rules
  {
    files: ["**/*.md"],
    plugins: { markdown },
    processor: markdown.processors.markdown,
    rules: {
      "react/display-name": "off",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
    },
  },

  // ✅ JSON config
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.jsonc"],
    plugins: { json },
    language: "json/jsonc",
    extends: ["json/recommended"],
  },

  // ✅ CSS config
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
  },
]);
