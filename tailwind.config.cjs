/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      background: colors.zinc,
      surface: colors.gray,
      primary: colors.blue,
    },
  },
  plugins: [],
}
