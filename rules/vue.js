module.exports = {
  "@typescript-eslint/interface-name-prefix": "off",
  "@typescript-eslint/no-explicit-any": "off",
  "arrow-body-style": [
    "error",
    "as-needed",
    {
      requireReturnForObjectLiteral: false,
    },
  ],
  "class-methods-use-this": "off",
  "comma-dangle": ["error", "never"],
  "comma-spacing": [
    1,
    {
      after: true,
      before: false,
    },
  ],
  curly: ["error", "all"],
  "id-length": [
    "error",
    {
      exceptions: ["e", "i", "h"],
    },
  ],
  "id-match": [
    "error",
    "^_$|^[a-zA-Z][a-zA-Z0-9]*$|^[A-Z][_A-Z0-9]+[A-Z0-9]$",
    {
      onlyDeclarations: true,
      properties: true,
    },
  ],
  "import/first": "error",
  "import/newline-after-import": "error",
  "import/no-duplicates": "error",
  "import/order": "off",
  "import/prefer-default-export": "off",
  indent: [
    "error",
    2,
    {
      flatTernaryExpressions: true,
      offsetTernaryExpressions: false,
      SwitchCase: 1,
    },
  ],
  "jsx-quotes": ["error", "prefer-single"],
  "lines-around-comment": [
    "error",
    {
      afterBlockComment: false,
      allowBlockStart: true,
      beforeBlockComment: true,
    },
  ],
  "max-len": [
    "error",
    {
      code: 120,
      comments: 100,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreTrailingComments: false,
      ignoreUrls: true,
      tabWidth: 2,
    },
  ],
  "max-params": ["error", 4],
  "no-console": [
    "error",
    {
      allow: ["error", "info"],
    },
  ],
  "no-multiple-empty-lines": [
    "error",
    {
      max: 1,
    },
  ],
  "no-restricted-syntax": [
    "error",
    {
      message:
        "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      selector: "ForInStatement",
    },
    {
      message:
        "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      selector: "LabeledStatement",
    },
    {
      message:
        "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      selector: "WithStatement",
    },
  ],
  "object-curly-newline": "off",
  "prefer-arrow-callback": [
    "error",
    {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    },
  ],
  "prefer-destructuring": [
    "error",
    {
      array: false,
      object: true,
    },
  ],
  quotes: ["error", "single"],
  semi: "error",
  "semi-spacing": "error",
  "simple-import-sort/imports": "error",
  "sort-destructure-keys/sort-destructure-keys": [
    "error",
    {
      caseSensitive: true,
    },
  ],
  "sort-imports": "off",
  "sort-keys": [
    "error",
    "asc",
    {
      natural: true,
    },
  ],
  "space-before-blocks": "error",
  "space-before-function-paren": [
    "error",
    {
      anonymous: "never",
      named: "never",
    },
  ],
  "space-in-parens": "error",
  "space-infix-ops": "error",
  "space-unary-ops": "error",
  "spaced-comment": "error",
  "vue/order-in-components": "off",
};
