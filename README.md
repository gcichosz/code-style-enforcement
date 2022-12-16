# Code style enforcement

# Table of contents

- [Plan](#plan)
- [Prettier](#prettier)
- [ESLint](#eslint)
- [GitHub Actions](#github-actions)
- [Husky](#husky)
- [lint-staged](#lint-staged)

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
12. Problem #6 - manual fixes
13. Solution #6 - automated fixes
14. Problem #7 - laziness
15. Solution #7 - branch protection
16. Problem #8 - legacy
17. Solution #8 - configuration and incremental refactoring
18. Outro - why do we need all of this?

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

# Husky

[Husky](https://typicode.github.io/husky/#/) is a Git hooks tool.

## Why?

- To inspect the code before it reaches the remote
- To shorten the feedback loop regarding code changes

## Installation

`npx husky-init && npm install`

## Configuration

[How to create a hook](https://typicode.github.io/husky/#/?id=create-a-hook).

See `./.husky/pre-commit` for an example hook.

## Bypassing hooks

There is a way, but please, don't do this 🙏

## Usage

Just run Git commands which hooks you subscribed to and Husky will run automatically 🐶 woof!

# lint-staged

[lint-staged](https://github.com/okonet/lint-staged) is a tool to run commands on Git staged files only.

## Why?

- To inspect only the code relevant to current change
- To shorten the feedback loop regarding code changes even more

## Installation

`npm install --save-dev lint-staged`

## Configuration

[Lint-staged configuration reference](https://github.com/okonet/lint-staged#Configuration).

See `./lint-staged.config.js` for example configuration.

**Subscribe lint-staged to a Git hook for maximum effect.** For example using [Husky](#husky)

## Ignoring files

Files lint-stages runs on are configured using glob patterns in [lint-staged configuration file](#configuration-4), so ignore files simply by not include them in lint-staged configuration.

## Usage

It's possible to run lint-staged using `npx lint-staged`, but the power of lint-staged comes from running it on Git hooks. Therefore, subscribe lint-staged to Git hooks, using [Husky](#husky) for example, and just run Git commands.
