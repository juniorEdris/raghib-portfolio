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
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
