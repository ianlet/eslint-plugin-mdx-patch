/**
 * @fileoverview Enforce blank lines in block-level JSX
 * @author Ian Letourneau
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// module.exports.configs = {
//   parser: "eslint-mdx",
//   plugins: ["mdx-jsx"],
//   rules: {
//     "mdx-jsx/enforce-blank-lines": 2,
//   }
// }

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");
