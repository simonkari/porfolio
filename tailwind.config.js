// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // You can switch this to 'class' later if you want a dark/light toggle
  theme: {
    extend: {
      colors: {
        background: '#0f0f0f',
        text: '#f1f1f1',
        accent: '#00FFB3',
        accentHover: '#00e6a3',
        subtext: '#bbbbbb',
      },
    },
  },
  plugins: [],
};

