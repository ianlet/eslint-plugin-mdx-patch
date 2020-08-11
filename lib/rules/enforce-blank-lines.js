/**
 * @fileoverview Enforce blank lines in block-level JSX
 * @author Ian Letourneau
 */
"use strict";

var mdx = require("eslint-mdx");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Enforce blank lines in block-level JSX",
      category: "Possible errors",
      recommended: true
    },
    fixable: "code",  // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create: function(context) {
    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    function traverse(node, elements) {
      if (node.type === 'JSXText') {
        elements.push(node);
        return;
      }

      for (var i = 0; i < node.children.length; i++) {
        traverse(node.children[i], elements);
      }
    }

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      ExpressionStatement(node) {
        if (!mdx.isJsxNode(node.expression)) {
          return;
        }

        var elements = [];
        traverse(node.expression, elements);

        for (var i = 0; i < elements.length; i++) {
          var element = elements[i];

          if (element.value === "\n" || element.value.startsWith("\n\n")) {
            continue;
          }

          context.report({
            node: element,
            loc: element.loc.start,
            message: "Expected blank lines at the start of block-level JSX",
            fix: function(fixer) {
              if (element.value.startsWith("\n")) {
                return fixer.insertTextBefore(element, "\n")
              } else {
                return fixer.insertTextBefore(element, "\n\n")
              }
            }
          })
        }
      },
    };
  }
};
