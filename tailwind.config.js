/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./components/**/*.{html,js}", "./pages/**/*.{html,js}", "./index.html", "./index2.html", "node_modules/preline/dist/*.js"],

  theme: {
    extend: {},
  },
  plugins: [require("preline/plugin")],
};
