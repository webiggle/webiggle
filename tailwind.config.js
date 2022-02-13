const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', ...fontFamily.sans],
      'mono': [...fontFamily.mono],
    },
    extend: {
      fontFamily: {
        'brand': ['"Archivo Narrow"', ...fontFamily.serif],
      },
    },
  },
  plugins: [],
}
