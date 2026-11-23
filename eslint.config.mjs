// eslint.config.mjs

import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import prettierPlugin from 'eslint-plugin-prettier';

const eslintConfig = [
  { ignores: ['.next/**', 'next-env.d.ts'] },

  ...nextVitals,
  ...nextTypescript,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'react/no-unescaped-entities': 'off',
    },
  },
];

export default eslintConfig;
