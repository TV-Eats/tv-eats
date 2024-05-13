const { builtinModules } = require('module');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: '#0f4876',
        sky: '#b5c2d3',
        orange: '#fc7e2f'
      },
      fontFamily: {
        'jomhuria': 'Jomhuria'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

