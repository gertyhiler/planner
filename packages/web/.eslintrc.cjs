/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "next/typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "@tanstack/query", "boundaries"],
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    "boundaries/include": ["src/**/*"],
    "boundaries/elements": [
      {
        type: "app",
        pattern: "app",
      },
      {
        type: "pages",
        pattern: "src/_pages/*",
        capture: ["page"],
      },
      {
        type: "widgets",
        pattern: "widgets/*",
        capture: ["widget"],
      },
      {
        type: "features",
        pattern: "features/*",
        capture: ["feature"],
      },
      {
        type: "entity",
        pattern: "entity/*",
        capture: ["entity"],
      },
      {
        type: "shared",
        pattern: "shared/*",
        capture: ["segment"],
      },
    ],
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@tanstack/query/exhaustive-deps": "off",
    "@tanstack/query/no-rest-destructuring": "warn",
    "@tanstack/query/stable-query-client": "error",
    "import/order": "off",
    "react-refresh/only-export-components": 0,
    "boundaries/entry-point": [
      2,
      {
        default: "disallow",
        rules: [
          {
            target: [
              [
                "shared",
                {
                  segment: "lib",
                },
              ],
            ],
            allow: "**",
          },
          {
            target: [
              [
                "shared",
                {
                  segment: "helpers",
                },
              ],
            ],
            allow: "**",
          },
          {
            target: [
              [
                "shared",
                {
                  segment: "components",
                },
              ],
            ],
            allow: "*/index.(ts|tsx)",
          },
          {
            target: [
              [
                "shared",
                {
                  segment: "utils",
                },
              ],
            ],
            allow: "*.(ts|tsx)",
          },
          {
            target: [
              [
                "shared",
                {
                  segment: "store",
                },
              ],
            ],
            allow: "**",
          },
          {
            target: [
              [
                "shared",
                {
                  segment: "constants",
                },
              ],
            ],
            allow: "**",
          },
          {
            target: [
              [
                "shared",
                {
                  segment: "ui",
                },
              ],
            ],
            allow: "**",
          },
          {
            target: [
              [
                "shared",
                {
                  segment: "mock",
                },
              ],
            ],
            allow: "**",
          },
          {
            target: [
              [
                "shared",
                {
                  segment: "icons",
                },
              ],
            ],
            allow: "**",
          },
          {
            target: [
              [
                "shared",
                {
                  segment: "hooks",
                },
              ],
            ],
            allow: "**",
          },
          {
            target: [
              [
                "shared",
                {
                  segment: "HOCs",
                },
              ],
            ],
            allow: "**",
          },
          {
            target: [
              [
                "shared",
                {
                  segment: "configs",
                },
              ],
            ],
            allow: "**",
          },
          {
            target: [
              [
                "shared",
                {
                  segment: "api",
                },
              ],
            ],
            allow: "**",
          },
          {
            target: ["app", "pages", "widgets", "features", "entity"],
            allow: "index.(ts|tsx)",
          },
          {
            target: [
              [
                "features",
                {
                  segment: "*",
                },
              ],
            ],
            allow: "index.(ts|tsx)",
          },
        ],
      },
    ],
    "boundaries/element-types": [
      2,
      {
        default: "allow",
        message: "${file.type} is not allowed to import (${dependency.type})",
        rules: [
          {
            from: ["shared"],
            disallow: ["app", "pages", "widgets", "features", "entity"],
            message: "Shared module must not import upper layers (${dependency.type})",
          },
          {
            from: ["entity"],
            message: "Entity must not import upper layers (${dependency.type})",
            disallow: ["app", "pages", "widgets", "features"],
          },
          {
            from: ["entity"],
            message: "Entity must not import other entity",
            disallow: [
              [
                "entity",
                {
                  entity: "!${entity}",
                },
              ],
            ],
          },
          {
            from: ["features"],
            message: "Feature must not import upper layers (${dependency.type})",
            disallow: ["app", "pages", "widgets"],
          },
          {
            from: ["features"],
            message: "Feature must not import other feature",
            disallow: [
              [
                "features",
                {
                  feature: "!${feature}",
                },
              ],
            ],
          },
          {
            from: ["widgets"],
            message: "Feature must not import upper layers (${dependency.type})",
            disallow: ["app", "pages"],
          },
          {
            from: ["widgets"],
            message: "Widget must not import other widget",
            disallow: [
              [
                "widgets",
                {
                  widget: "!${widget}",
                },
              ],
            ],
          },
          {
            from: ["pages"],
            message: "Page must not import upper layers (${dependency.type})",
            disallow: ["app"],
          },
          {
            from: ["pages"],
            message: "Page must not import other page",
            disallow: [
              [
                "pages",
                {
                  page: "!${page}",
                },
              ],
            ],
          },
        ],
      },
    ],
  },
};
