/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        yellow: '#fdc632',
        blue: '#002347',
        gray: '#7b838a',
        pink1: '#ece7e7',
        pink2: "#f8f9fa"
      },
      container:{
        center: true
      }
    },
    fontFamily: {
      'roboto': ['Roboto Mono'],
      'rubik': ['Rubik'],
    },
  },
  plugins: [require("daisyui")],
});