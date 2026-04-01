/**
 * no-raw-html-elements
 *
 * Disallows raw HTML elements where a Viana Kit primitive exists.
 * Does not apply to files inside src/components/ui/ (shadcn base layer).
 */

/** @type {Record<string, string>} */
const elementMap = {
  // Form elements
  button: "AppButton",
  input: "AppInput",
  textarea: "AppTextarea",
  select: "AppSelect",
  label: "AppLabel",
  progress: "AppProgress",
  // Typography
  h1: 'AppText variant="h1"',
  h2: 'AppText variant="h2"',
  h3: 'AppText variant="h3"',
  h4: 'AppText variant="h4"',
  p: 'AppText variant="body"',
  // Layout / misc
  hr: "AppSeparator",
  // Table
  table: "AppTable",
  thead: "AppTableHeader",
  tbody: "AppTableBody",
  tfoot: "AppTableFooter",
  tr: "AppTableRow",
  th: "AppTableHead",
  td: "AppTableCell",
  caption: "AppTableCaption",
}

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description:
        "Disallow raw HTML elements where a Viana Kit primitive exists.",
      recommended: true,
    },
    messages: {
      useVianaPrimitive:
        "Use <{{replacement}}> instead of a raw <{{element}}>. Raw HTML elements bypass the Viana Kit design system.",
    },
    schema: [],
  },

  create(context) {
    // Skip files inside the shadcn base layer (src/components/ui/)
    const filename = context.filename ?? context.getFilename()
    if (filename.includes("components/ui/")) return {}

    return {
      JSXOpeningElement(node) {
        const name = node.name.name
        if (typeof name !== "string") return

        const replacement = elementMap[name]
        if (!replacement) return

        context.report({
          node,
          messageId: "useVianaPrimitive",
          data: { element: name, replacement },
        })
      },
    }
  },
}
