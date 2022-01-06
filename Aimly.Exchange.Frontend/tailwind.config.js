module.exports = {
  darkMode: 'class', // This means that dark mode is controlled by a class=dark on the base html element
  content: ["./src/**/*.{ts,tsx,js,jsx}", "./public/index.html"],
  colors: {},
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
