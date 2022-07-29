const animationDelay = require('./src/plugins/tailwind/animationDelay');

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
    },
  },
  plugins: [
    animationDelay,
  ],
  extend: {
  },
};
