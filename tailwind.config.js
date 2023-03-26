/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./**/*.html",
  ],
  theme: {
    fontFamily: {
      sans: ["Source Code Pro", "Source Code Pro"],
      serif: ["Source Code Pro", "Source Code Pro"],
      mono: ["ui-monospace", "SFMono-Regular"],
      extend: {
        spacing: {
          "2xl": "24rem",
          "4xl": "48rem",
          "6xl": "72rem",
          "8xl": "96rem",
          "10xl": "120rem",
        },
      },
    },
    extend: {
      colors: {
        primary: '#FF00FF',
        secondary: '#00FFFF',
      },
    },
  },
  variants: {},
  plugins: [],
};

