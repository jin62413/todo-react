/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pre: ['Pretendard Variable', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      primary: '#E55D87',
      secondary: '#5FC3E4',
      white: '#fff',
      black: '#333',
    },
  },
  plugins: [],
};
