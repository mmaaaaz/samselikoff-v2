// const colors = require('tailwindcss/colors')

// https://play.tailwindcss.com/YelhilBeHb

// helper to get opacity value when using theming from css variables
const withOpacityValue =
  (colorValue) =>
  ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgb(var(${colorValue}), ${opacityValue})`
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(${colorValue}), var(${opacityVariable}, 1))`
    }
    return `rgb(var(${colorValue}))`
  }

function px(pixels) {
  return `${pixels / 16}rem`
}

function pxToEm(pixels) {
  return `${pixels / 16}em`
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      screens: {
        xs: pxToEm(375),
        smm: pxToEm(425),
        sm: pxToEm(640),
        md: pxToEm(768),
        lg: pxToEm(1024),
        xl: pxToEm(1280),
      },

      fontSize: {
        xxs: px(10),
        xs: px(12),
        'sm-': px(13),
        sm: px(14),
        base: px(16),
        'lg-': px(17),
        lg: px(18),
        lgg: px(19),
        xl: px(20),
        '1-5xl': px(22),
        '2xl': px(24),
        '2-5xl': px(27),
        '3xl': px(30),
        '4xl': px(36),
        '4-5xl': px(42),
        '5xl': px(48),
        '6xl': px(64),
        '7xl': px(80),
        '8xl': px(96),
      },

      colors: {
        primary: withOpacityValue('--primary'),
        secondary: withOpacityValue('--secondary'),
        'link-base': 'var(--link-base)',
        'link-active': 'var(--link-active)',
      },

      textColor: {
        primary: withOpacityValue('--text-primary'),
        secondary: withOpacityValue('--text-secondary'),
      },

      spacing: {
        'escape-xl': 'calc((100vw -528px)/2)',
      },

      lineHeight: {
        tighter: '1.15',
      },

      width: {
        28: '7rem',
        36: '9rem',
      },

      maxWidth: {
        measure: '34em',
      },

      letterSpacing: {
        'tight-': '-0.0125em',
      },

      height: {
        11: '2.75rem',
        28: '7rem',
        36: '9rem',
      },
    },
  },
  plugins: [],
}
