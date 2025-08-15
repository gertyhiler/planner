import glob from "fast-glob";
import path from "path";
import preserveDirectives from "rollup-preserve-directives";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";

import packageJson from "./package.json";

const componentEntries = await glob("src/components/**/index.ts", {
  ignore: ["src/**/__docs__", "src/**/__test__"],
});
const entries = [
  "src/tailwind.ts",
  "src/lib/utils.ts",
  "src/hooks/index.ts",
  ...componentEntries,
];

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: true,
    lib: {
      entry: entries,
      name: "ui-kit", // Sets the name of the generated library.
      fileName: "[name]", // Generates the output file name based on the format.
    },
    rollupOptions: {
      input: entries,
      output: [
        {
          format: "es",
          dir: `dist/esm`,
          entryFileNames: "[name].mjs",
          preserveModules: true,
        },
        {
          format: "cjs",
          dir: `dist/cjs`,
          entryFileNames: "[name].cjs",
          preserveModules: true,
        },
      ],
      external: [
        "next/image",
        "react/jsx-runtime",
        "date-fns",
        "date-fns/locale",
        ...Object.keys({
          ...packageJson.dependencies,
          ...packageJson.peerDependencies,
        }),
      ], // Defines external dependencies for Rollup bundling.

      plugins: [preserveDirectives()],
    },
    emptyOutDir: true, // Clears the output directory before building.
  },
  plugins: [
    dts({
      outDir: "dist/types",
      tsconfigPath: "./tsconfig.json",
    }),
    viteStaticCopy({
      targets: [
        {
          src: "src/styles/style.css",
          dest: ".",
        },
        {
          src: "tailwind.config.cjs",
          dest: ".",
        },
      ],
    }),
  ], // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
});
