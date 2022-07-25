/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./assets/**/*.css",
    "./components/*.vue",
    "./components/**/*.vue",
    "./layouts/**/*.vue",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.js",
    "./*.vue", 
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};