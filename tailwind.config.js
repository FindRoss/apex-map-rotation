// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      // default breakpoints but with 40px removed
      screens: {
        sm: '640px',
        md: '768px',
        lg: '980px',
        xl: '980px',
        '2xl': '980px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}