/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#06A3DA',
        secondary: '#F57E57',
        light: '#EEF9FF',
        dark: '#091E3E',
      },
      fontFamily: {
        'jost': ['Jost', 'sans-serif'],
      },
      // You can also add spacing, screens, etc.
    },
  },
  plugins: [],
}
