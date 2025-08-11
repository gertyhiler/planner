/** @type {import("prettier").Config} */
const config = {
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  printWidth: 90,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  bracketSameLine: true,
  trailingComma: "es5",
  quoteProps: "consistent",
  importOrder: [
    "^next",
    "^react",
    "^@/shared",
    "^@/entity",
    "^@/features",
    "^@/widgets",
    "^@/app",
    "\\.svg|icon|SVG|Icon",
    "^lucide-react",
    "^../(.*)$",
    "^./(.*)$",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ["prettier-plugin-tailwindcss", "@trivago/prettier-plugin-sort-imports"],
};

module.exports = config;
