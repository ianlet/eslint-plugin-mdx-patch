# eslint-plugin-mdx-jsx

Enforce blank lines in block-level JSX

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
$ yarn add -D eslint
```

Next, install `eslint-plugin-mdx-jsx`:

```
$ npm install eslint-plugin-mdx-jsx --save-dev
$ yarn add -D eslint-plugin-mdx-jsx
```


## Usage

Add `mdx-jsx` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "mdx-jsx"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "mdx-jsx/enforce-blank-lines": 2
    }
}
```

## Supported Rules

* `mdx-jsx/enforce-blank-lines`





