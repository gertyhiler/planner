interface Content {
  /**
   * Path to `node_modules` where `@hornymarket/ui-kit` is installed
   *
   * ===============================================
   *
   * For monorepo setup where `@hornymarket/ui-kit` is installed in the root `node_modules` but used in `apps/web` directory
   * @example
   * ```
   * // tailwind.config.(js|cjs|mjs) file
   *
   * // cjs
   * const flowbite = require("@hornymarket/ui-kit/tailwind");
   * // esm
   * import flowbite from "@hornymarket/ui-kit/tailwind";
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
  const path = "node_modules/@nanananaorg/ui-kit/dist/esm/**/*.mjs";

  return `${base}${path}`;
}
