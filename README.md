# Code style enforcement

# Table of contents

- [Plan](#plan)
- [Prettier](#prettier)

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

npm: `npm install --save-dev prettier`
Yarn: `yarn add --dev prettier`

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

To check code style issues in all files run `npx prettier --check .` for npm, and `yarn prettier --check .` for Yarn
To fix code style issues in all files run `npx prettier --write .` for npm, and `yarn write --check .` for Yarn
