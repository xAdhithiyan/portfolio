/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
    fontFamily: {
      custom: ['VT323', 'monospace'],
    },
    backgroundColor: {
      dracula: '#282a36',
    },
  },
  plugins: [],
};
