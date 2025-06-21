import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginPrettier from 'eslint-plugin-prettier';
import json from '@eslint/json';
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: [
      'node_modules',
      'dist',
      'build',
      'coverage',
      'tsconfig*.json',
      'package.json',
    ],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: { globals: globals.browser },
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      prettier: pluginPrettier,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'prettier/prettier': 'warn',
    },
    extends: [js.configs.recommended, pluginReact.configs.flat.recommended],
  },
  { files: ['**/*.{ts,tsx}'], ...tseslint.configs.recommended[0] },
  {
    files: ['**/*.json'],
    plugins: { json },
    extends: [json.configs.recommended],
  },
]);
