import { exec } from "child_process";
import pkg from "fast-glob";
import { writeFileSync } from "fs";
import { join, relative } from "path";

const { glob } = pkg;

if (process.argv.length !== 3) {
  console.error("Usage: node reexport.mjs <folder> <outputFile>");
  process.exit(1);
}

const folder = process.argv[2];

glob(join(folder, "**/index.ts"))
  .then((paths) => {
    const content = paths
      .map((path) => {
        const relativePath =
          "./" + relative(folder, path).split("/").slice(0, -1).join("/");
        if (relativePath === "./") {
          return;
        }
        return `export * from "${relativePath}";`;
      })
      .join("\n");

    writeFileSync(folder + "/index.ts", content);
    exec(`npx prettier --write ${folder}/index.ts`);
    exec(`npx eslint --fix ${folder}/index.ts`);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
