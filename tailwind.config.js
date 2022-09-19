/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'dark': '#21243D',
      'black': '#000000',
      'light': '#8695A4',
      'primary': '#FF6464',
      'secondary': '##00A8CC',
      'posts': '#EDF7FA',
      'dark-blue': '#142850',
      'horizontal-line': '#E0E0E0'
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui',],
      'serif': ['ui-serif', 'Georgia',],
      'heebo': ['Heebo',],
    }
  },
  plugins: [],
}