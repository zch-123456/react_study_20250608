import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfigPlugin from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"]
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser }
  },
  pluginReact.configs.flat.recommended,
  {
    rules: {
      semi: "off",
      "prefer-const": "warn",
      "prettier/prettier": "error" //规范prettier规则报error
    },
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/*.config.js",
      "**/.storybook/**"
    ],
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      prettier: prettierPlugin
    }
  },
  prettierConfigPlugin
]);
