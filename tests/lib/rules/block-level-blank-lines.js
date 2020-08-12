/**
 * @fileoverview Enforce blank lines in block-level JSX
 * @author Ian Letourneau
 */
"use strict";

var rule = require("../../../lib/rules/block-level-blank-lines");
var RuleTester = require("eslint").RuleTester;

var parserOptions = require("eslint-mdx").DEFAULT_PARSER_OPTIONS;
var parser = require.resolve("eslint-mdx");

var errors = [{
  message: "Expected blank lines at the start of block-level JSX"
}]

var ruleTester = new RuleTester();
ruleTester.run("block-level-blank-lines", rule, {
  valid: [
    {
      code: "<Note>\n\n# This will be parsed\n\n</Note>",
      parser,
      parserOptions,
    },
    {
      code: "<Note><p>\n\n# This will be parsed\n\n</p></Note>",
      parser,
      parserOptions,
    }
  ],
  invalid: [
    {
      code: "<Note>\n# This won't be parsed\n</Note>",
      parser,
      parserOptions,
      errors,
      output: "<Note>\n\n# This won't be parsed\n</Note>"
    },
    {
      code: "<Note><p># This won't be parsed</p></Note>",
      parser,
      parserOptions,
      errors,
      output: "<Note><p>\n\n# This won't be parsed</p></Note>"
    },
    {
      code: "<Note>\n\n<p># This won't be parsed</p>\n\n</Note>",
      parser,
      parserOptions,
      errors,
      output: "<Note>\n\n<p>\n\n# This won't be parsed</p>\n\n</Note>"
    }
  ]
});
