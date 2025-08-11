#!/usr/bin/env node
import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

/**
 * @example
 * Usage:
 *  node create-component.mjs ./src/components button
 * @param {*} pathToFolder
 * @param {*} componentName
 */

const createComponent = (pathToFolder, componentName) => {
  const componentPath = join(pathToFolder, componentName);
  mkdirSync(componentPath);

  writeFileSync(
    join(componentPath, "index.ts"),
    `export { default } from './${componentName}';`
  );
  writeFileSync(join(componentPath, `${componentName}.tsx`), "");
  mkdirSync(join(componentPath, "__docs__"));
  writeFileSync(
    join(componentPath, "__docs__", `${componentName}.stories.tsx`),
    `import type { Meta, StoryObj } from "@storybook/react";

import React from "react";

import "@/styles/interior.css";`
  );
};

const [, , pathToFolder, componentName] = process.argv;
createComponent(pathToFolder, componentName);
