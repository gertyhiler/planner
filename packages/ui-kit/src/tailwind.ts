interface Content {
  /**
   * Path to `node_modules` where `@planner/ui-kit` is installed
   *
   * ===============================================
   *
   * For monorepo setup where `@planner/ui-kit` is installed in the root `node_modules` but used in `apps/web` directory
   * @example
   * ```
   * // tailwind.config.(js|cjs|mjs) file
   *
   * // cjs
   * const flowbite = require("@planner/ui-kit/tailwind");
   * // esm
   * import flowbite from "@planner/ui-kit/tailwind";
   *
   * {
   *   content: [
   *     // ...
   *     flowbite.content({ base: "../../" })
   *   ],
   *   plugins: [
   *     // ...
   *     flowbite.plugin()
   *   ]
   * }
   * ```
   *
   * @default "./"
   */
  base?: string;
}

export function content({ base = "./" }: Content = {}) {
  const path = "node_modules/@planner/ui-kit/dist/esm/**/*.mjs";

  return `${base}${path}`;
}
