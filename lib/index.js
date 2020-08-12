/**
 * @fileoverview Enforce some rules to patch a couple of issues from the current MDX parser
 * @author Ian Letourneau
 */
"use strict";

var requireIndex = require("requireindex");

module.exports.rules = requireIndex(__dirname + "/rules");
