// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // Set to 'class' if you want to support dark mode toggle
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: '#0f0f0f',
        text: '#f1f1f1',
        primary: '#02DAF8',
        primaryHover: '#02c4df',
        subtext: '#bbbbbb',
      },
      fontSize: {
        h2: ['1.5rem', { lineHeight: '2rem' }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
      },
    },
  },
  plugins: [],
};
