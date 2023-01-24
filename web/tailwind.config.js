/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090A"
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))'
      }
    },
    screens: {
      'sm': { 'min': '640px' },
      'md': { 'min': '768px' },
      'lg': { 'min': '1024px' },
      'xl': { 'min': '1280px' },
      'max-xl': { 'max': '1280px' },
      'max-lg': { 'max': '1024px' },
      'max-md': { 'max': '768px' },
      'max-sm': { 'max': '640px' },
    },
  },
  plugins: [],
}
