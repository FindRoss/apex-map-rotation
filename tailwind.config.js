// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: '0.75rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '768px',
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



