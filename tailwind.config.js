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
      screens: {
        '1280px': { max: '1280px' },
        '1024px': { max: '1024px' },
        '1400px': { max: '1440px' },
        '1690px': { max: '1690px' },
        '900px': { max: '900px' },
      },
    },
  },

  plugins: [],
};
