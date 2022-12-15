# Code style enforcement

# Table of contents

- [Plan](#plan)
- [Prettier](#prettier)
- [ESLint](#eslint)
- [GitHub Actions](#github-actions)

# Plan

1. Intro - what is code style enforcement about?
2. Problem #1 - tabs vs. spaces (single vs. double quotes etc., during code review, during file saving)
3. Solution #1 - Prettier
4. Problem #2 - common mistakes
5. Solution #2 - ESLint
6. Problem #3 - forgetfulness
7. Solution #3 - continuous inspection
8. Problem #4 - long feedback loop
9. Solution #4 - Husky
10. Problem #5 - could be shorter feedback loop
11. Solution #5 - lint-staged
12. Problem #6 - laziness
13. Solution #6 - branch protection
14. Problem #7 - legacy
15. Solution #7 - configuration and incremental refactoring
16. Outro - why do we need all of this?

# Prettier

[Prettier](https://prettier.io/) is an opinionated code formatter.

## Why?

- To format your code
- To stop code style debates
- To make code reviews about code, not code style and nits
- Many more, [read here](https://prettier.io/docs/en/why-prettier.html)

## Installation

`npm install --save-dev prettier`

## Configuration

[Prettier configuration file reference](https://prettier.io/docs/en/configuration.html).

See `./.prettierrc.js` for example configuration, but it could be as simple as:

```javascript
module.exports = {};
```

## Ignoring files

Use `.prettierignore` to ignore files and/or directories. See `./.prettierignore` for an example.

Use [Prettier's CLI `--ignore-unknown` option](https://prettier.io/docs/en/cli.html#--ignore-unknown) to ignore files with extensions Prettier has no parser for, e.g.: `npx prettier --check --ignore-unknown .`

## Usage

To check code style issues in all files run `npx prettier --check .`.
To fix code style issues in all files run `npx prettier --write .`.

# ESLint

[ESLint](https://eslint.org/) is a static code analyzer for JavaScript, and by extension for TypeScript.

## Why?

- To quickly find common problems in code

## Installation

In a TypeScript codebase, alongside Prettier:

`npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-prettier eslint-plugin-prettier`

In a JavaScript codebase, alongside Prettier:

`npm install --save-dev eslint @babel/core @babel/eslint-parser @babel/preset-env eslint-config-prettier eslint-plugin-prettier`

## Configuration

[ESLint configuration reference](https://eslint.org/docs/latest/user-guide/configuring/).

See `./.eslintrc.js` for example configuration for TypeScript codebase with Prettier. For JavaScript codebase with Babel and Prettier it would be something like:

```javascript
module.exports = {
  parser: "@babel/eslint-parser",

  env: {
    node: true,
  },

  extends: ["eslint:recommended", "plugin:prettier/recommended"],
};
```

## Ignoring files

Use `.eslintignore` to ignore files and/or directories. See `./.eslintignore` for an example.

## Usage

To check code problems in all files run `npx eslint .`.
To fix code problems in all files run `npx eslint --fix .`.

# GitHub Actions

[GitHub Actions](https://github.com/features/actions) is only an example of a CI/CD tool. There are many, many more, both paid and free. Here are a few examples:

- [Azure Pipelines](https://azure.microsoft.com/en-us/products/devops/pipelines/)
- [CircleCI](https://circleci.com/)
- [GitLab CI/CD](https://docs.gitlab.com/ee/ci/)
- [Jenkins](https://www.jenkins.io/)
- [Travis CI](https://www.travis-ci.com/)

## Why?

- To automate code inspection, builds, and tests before adding it to a codebase
- To automate deployments

## Installation

GitHub Actions are available out-of-the box in, drum roll, GitHub repositories.

## Configuration

[GitHub Actions workflow reference](https://docs.github.com/en/actions/using-workflows/about-workflows).

See `./.github/workflows/continuous-inspection.yaml` for example continuous inspection workflow.
