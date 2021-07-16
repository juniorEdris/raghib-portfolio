module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      '8xl':'6rem',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#FF4D00',
    }),
    extend: {
      inset: {
      // '-72.7':'-21.2rem'
      '-72.7':'-300%'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
