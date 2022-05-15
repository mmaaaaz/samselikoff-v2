const plugin = require('tailwindcss/plugin')

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

function pxToRem(pixels) {
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
        xxs: pxToRem(10),
        xs: pxToRem(12),
        'sm-': pxToRem(13),
        sm: pxToRem(14),
        base: pxToRem(16),
        'lg-': pxToRem(17),
        lg: pxToRem(18),
        lgg: pxToRem(19),
        xl: pxToRem(20),
        '1-5xl': pxToRem(22),
        '2xl': pxToRem(24),
        '2-5xl': pxToRem(27),
        '3xl': pxToRem(30),
        '4xl': pxToRem(36),
        '4-5xl': pxToRem(42),
        '5xl': pxToRem(48),
        '6xl': pxToRem(64),
        '7xl': pxToRem(80),
        '8xl': pxToRem(96),
        '9xl': '8rem',
      },

      colors: {
        primary: withOpacityValue('--primary'),
        secondary: withOpacityValue('--secondary'),
        'link-primary': 'var(--link-primary)',
        'link-active': 'var(--link-active)',
        'icon-primary': 'var(--icon-primary)',
        'icon-hover': 'var(--icon-hover)',

        // Borders
        0: 'var(--border-0)',

        // Accents
        a1: 'var(--a1)',
        a2: 'var(--a2)',
        a3: 'var(--a3)',
        a4: 'var(--a4)',
        a5: 'var(--a5)',
        a6: 'var(--a6)',
        a7: 'var(--a7)',
        a8: 'var(--a8)',
        a9: 'var(--a9)',

        gray: {
          // Cool, but less cool than default: https://hihayk.github.io/scale/#4/4/82/91/0/0/-19/-5/a6afb9/166/175/185
          // "100": "#F7F8F9",
          // "200": "#E3E6E8",
          // "300": "#CFD3D8",
          // "400": "#BBC1C9",
          // "500": "#A6AFB9",
          // "600": "#848B93",
          // "700": "#62676D",
          // "800": "#404347",
          // "900": "#1E2021",

          // Another (darker darks): https://hihayk.github.io/scale/#4/4/91/91/0/0/-19/-5/a6afb9/166/175/185
          // But swapped 900 with above
          50: '#fbfbfc',
          100: '#F7F8F9',
          200: '#E3E6E8',
          300: '#CFD3D8',
          400: '#BBC1C9',
          500: '#A6AFB9',
          600: '#80878F',
          700: '#5B5F65',
          800: '#35383B',
          900: '#1E2021',
        },
      },

      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',

        lead: 'var(--text-lead)',
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

      height: {
        11: '2.75rem',
        28: '7rem',
        36: '9rem',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const fontSizes = theme('fontSize')

      Object.keys(fontSizes).forEach((key) => {
        let fontSize = fontSizes[key]
        let pixels = +fontSize.replace('rem', '') * 16
        let tracking = -0.0223 + 0.185 * Math.exp(-0.1745 * pixels)

        addUtilities(
          {
            [`.text-${key}`]: {
              'font-size': fontSize,
              'letter-spacing': `${tracking}rem`,
            },
          },
          ['responsive']
        )
      })
    }),
  ],
}
