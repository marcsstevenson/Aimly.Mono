/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class', // This means that dark mode is controlled by a class=dark on the base html element
  content: ["./src/**/*.{ts,tsx,js,jsx}", "./public/index.html"],
  colors: {},
  theme: {
    colors: {
      primary: colors.slate,
      secondary: colors.sky,
      validation: colors.red,
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      green: colors.green,
      yellow: colors.yellow,
      red: colors.red,
      // teal: colors.teal,
      // blue: colors.blue,
      //sky: colors.sky,
      // blueGray: colors.blueGray,
    },
    extend: {
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // This is added so that we can style articles made from a content editor
    // https://tailwindcss.com/docs/typography-plugin
    require('@tailwindcss/typography'),
  ],
}
