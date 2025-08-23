/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: {
    relative: true,
    files: ["./src/**/*.tsx", "./src/**/*.ts"],
  },
  presets: [require("./preset.cjs")],
};
