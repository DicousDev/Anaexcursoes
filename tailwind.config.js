/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'sans-serif']
    },
    extend: {
      screens: {
        'max-430': { 'max': '430px'},
        'max-414': { 'max': '414px'},
        'max-390': { 'max': '390px'},
        'max-360': { 'max': '360px'},
        'max-344': { 'max': '344px'}
      }
    }
  },
  plugins: [],
}

