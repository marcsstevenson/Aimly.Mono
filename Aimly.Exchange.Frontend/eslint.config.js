export default [
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    plugins: {
      import: await import('eslint-plugin-import')
    },
    rules: {
      'no-restricted-imports': ['error', {
        patterns: [{
          group: ['../*', './*'],
          message: 'Use absolute imports instead of relative imports'
        }]
      }],
      'import/no-relative-parent-imports': 'error'
    }
  }
];