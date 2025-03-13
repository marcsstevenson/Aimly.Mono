import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: { globals: globals.browser },
    rules: {
      // Turn off prefer-const rule
      'prefer-const': 'off',
      // Turn off unused variables rule
      'no-unused-vars': 'off',
      // Or set to warn instead of error
      // '@typescript-eslint/no-unused-vars': 'warn',

      // If you want more granular control, you can configure it like this:
      /*
      '@typescript-eslint/no-unused-vars': ['off', {
        'vars': 'all',
        'args': 'none',
        'ignoreRestSiblings': true
      }]
      */
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];