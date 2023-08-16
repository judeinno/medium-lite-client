/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FFC116",
        grey: "#FFFFFF",
      },
      fontFamily: {
        garamond: ["EB Garamond", ...defaultTheme.fontFamily.sans],
        sora: ["Sora", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
