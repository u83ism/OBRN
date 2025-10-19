import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import refreshPlugin from "eslint-plugin-react-refresh";


export default [
  {
    ignores: ["dist", "node_modules", "batch/import"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      "react-refresh": refreshPlugin,
      "@typescript-eslint": tseslint.plugin,
      "react": pluginReact,
      "react-hooks": hooksPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];