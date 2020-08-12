# eslint-plugin-mdx-patch

Enforce some rules to patch a couple of issues from the current MDX parser

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
$ yarn add -D eslint
```

Next, install `eslint-plugin-mdx-patch`:

```
$ npm install eslint-plugin-mdx-patch --save-dev
$ yarn add -D eslint-plugin-mdx-patch
```


## Usage

Add `mdx-patch` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```js
overrides: [
  {
    files: '*.md',
    plugins: ['mdx-patch'],
    extends: ['plugin:mdx/recommended'],
    rules: {
      'mdx-patch/block-level-blank-lines': 2,
    },
  },
],
```

If you use `eslint-plugin-prettier`, make sure to use the correct parser:

```js
overrides: [
  {
    files: '*.md',
    plugins: ['mdx-patch'],
    extends: ['plugin:mdx/recommended'],
    rules: {
      'prettier/prettier': [ 'error', { parser: 'mdx' } ],
      'mdx-patch/block-level-blank-lines': 2,
    },
  },
],
```

## Supported Rules

* [mdx-patch/block-level-blank-lines](./docs/rules/block-level-blank-lines.md)
