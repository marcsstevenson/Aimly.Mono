const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class', // This means that dark mode is controlled by a class=dark on the base html element
  content: ["./src/**/*.{ts,tsx,js,jsx}", "./public/index.html"],
  colors: {},
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      green: colors.green,
      yellow: colors.yellow,
      indigo: colors.indigo,
      primary: colors.indigo,
    },
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
