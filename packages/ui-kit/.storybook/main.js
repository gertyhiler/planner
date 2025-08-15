import { createRequire } from "node:module";
import { dirname, join } from "node:path";

const require = createRequire(import.meta.url);
/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/__docs__/*.stories.tsx"],
  addons: [getAbsolutePath("@storybook/addon-onboarding")],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
};
export default config;

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
