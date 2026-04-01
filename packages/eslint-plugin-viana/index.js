const noRawHtmlElements = require("./rules/no-raw-html-elements")

/** @type {import('eslint').ESLint.Plugin} */
const plugin = {
  meta: {
    name: "@viana/eslint-plugin",
    version: "0.1.0",
  },
  rules: {
    "no-raw-html-elements": noRawHtmlElements,
  },
  configs: {},
}

// Recommended config — enables the rule as an error
plugin.configs.recommended = {
  plugins: { viana: plugin },
  rules: {
    "viana/no-raw-html-elements": "error",
  },
}

module.exports = plugin
