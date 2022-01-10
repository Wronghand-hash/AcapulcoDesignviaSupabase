const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',

    './layouts/**/*.vue',

    './pages/**/*.vue',

    './plugins/**/*.{js,ts}',

    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        rem26: '26rem',
        dialog: '32rem',
      },
      fontFamily: {
        mainFont: ['Yanone Kaffeesatz'],
      },
      fontSize: {
        '10xl': '14rem',
      },
    },

    screens: {
      xs: { max: '767px' },
      sm: { min: '768px', max: '991px' },
      md: { min: '992px', max: '1199px' },
      lg: { min: '1200px' },
    },
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      mainBlue: '#120129',
      mainRed: '#ff4a68',
      darkPurple: '#240046',
      goldie: '#ff9e00',
      white: colors.white,
      black: colors.black,
      gray: colors.trueGray,
      LightBlue: colors.lightBlue,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.yellow,
      blueGray: colors.blueGray,
      Lime: colors.lime,
      CoolGray: colors.coolGray,
      Fuchsia: colors.fuchsia,
      purple: colors.purple,
      green: colors.green,
      pink: colors.pink,
      Rose: colors.rose,
      Indigo: colors.indigo,
      Amber: colors.amber,
      Cyan: colors.cyan,
      Emerald: colors.emerald,
      Sky: colors.sky,
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
