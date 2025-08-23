import { content } from "@planner/ui-kit/tailwind";
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  presets: [require("@planner/ui-kit/tailwind.config.cjs")],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", content()],
} satisfies Config;
