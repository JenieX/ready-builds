module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    //
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:comment-length/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 'off',
    'no-await-in-loop': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'comment-length/limit-single-line-comments': [
      'off',
      { maxLength: 80, ignoreUrls: false },
    ],
    'comment-length/limit-multi-line-comments': [
      'error',
      { maxLength: 80, ignoreUrls: false },
    ],
    'no-use-before-define': ['error', { functions: false }],
  },
};
