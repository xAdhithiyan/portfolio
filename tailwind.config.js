/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['VT323', 'monospace'],
      },
      backgroundColor: {
        dracula: '#282a36',
        'semi-dracula': '#474A5E',
      },
      fill: {
        dracula: '#282a36',
      },
      borderColor: {
        dracula: '#282a36',
      },
      textColor: {
        dracula: '#282a36',
      },
    },
  },

  plugins: [],
};
