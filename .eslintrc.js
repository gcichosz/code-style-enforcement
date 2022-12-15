module.exports = {
  parser: "@typescript-eslint/parser",

  env: {
    node: true,
  },

  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2022,
  },

  plugins: ["@typescript-eslint"],

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
};
