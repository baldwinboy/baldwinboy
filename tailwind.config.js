/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      gold: '#d48430',
      blush: '#fdedf0',
      blossom: '#f9c8d1',
      plum: '#612940',
    },
    fontFamily: {
      heading: '"Syncopate", sans-serif',
      subheading: '"Saira", sans-serif',
      body: '"Montagu Slab", "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", Georgia, serif',
    },
  },
};
