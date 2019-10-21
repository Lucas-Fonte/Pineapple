 
module.exports = {
    env: {
      es6: true,
      jest: true,
      browser: true
    },
    extends: ["airbnb", "prettier", "prettier/react"],
    globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly",
      __DEV__: true
    },
    parser: "babel-eslint",
    parserOptions: {
      ecmaVersion: 6,
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 2018,
      sourceType: "module"
    },
    plugins: ["react", "jsx-a11y", "import", "react-hooks", "prettier"],
    rules: {
      "prettier/prettier": "error",
      "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
      "import/prefer-default-export": "off",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "react/jsx-one-expression-per-line": "off",
      "global-require": "off",
      "react-native/no-raw-text": "off",
      "no-param-reassign": "off",
      "import/no-unresolved ": "off",
      "no-underscore-dangle": "off",
      "react/state-in-constructor": "off",
      camelcase: "off",
      "no-console": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
    },
  };