/**
 * Tailwind CSS configuration file
 *
 * docs: https://tailwindcss.com/docs/configuration
 * default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const path = require('path')

module.exports = {
  theme: {
    important: true,
    container: {
      padding: {
        default: '1rem',
      },
      screens: {
        'sm': '100%',
        'md': '100%',
        'lg': '1440px',
      },
    },
    fontWeight: {
      // light: 300,
      // roman: 500,
      'medium': 600,
      'bold': 700
    },
    gridTemplateColumns: {
      'product-greed-10': 'repeat(10, minmax(90px, 1fr))',
      'product-greed-5': 'repeat(10 , 1fr)',
      'product-greed-2': 'repeat(2, minmax(130px, 1fr))',
      'product-greed-3': 'repeat(3, minmax(147px, 1fr))',
      'product-greed-3-mobile': 'repeat(auto-fill, minmax(125px, 1fr))',
      'product-greed-2-mobile': 'repeat(auto-fill, minmax(145px, 1fr))',
      'product-greed-4': 'repeat(4, minmax(147px, 1fr))',
      'grid-10': 'repeat(10, 1fr)',
      'grid-6': 'repeat(6, 1fr)',
    },
    colors: {
      white: '#F1F0EF',
      black: '#0C140B',
      gray: '#858985',
      transparent: '#00000000',
      currentColor: 'currentColor',
    },
    fontSize: {
      'xl': ['3rem', '1'], // 48px
      'lg': ['2rem', '1'], // 32px
      'base': ['1rem', '1.5'], // 16px
      'sm': ['0.75rem', '1.6'], // 12px
      'xs': ['0.625rem', '1.2'], // 10px
    },
    // lineHeight: {
    //   '48': '3rem',
    //   '32': '2rem',
    //   '24': '1.5rem',
    //   '16': '1rem',
    //   '12': '0.75rem'
    // },
    boxShadow: {
      default: "box-shadow: 0px 8px 48px rgba(0, 0, 0, 0.08);",
    },
    borderWidth: {
      DEFAULT: '0.5px',
      '0': '0'
    },
    blur: {
      default: '32px',
    },
    // screens: {
    //   'xs': '375px',
    //   'sm': '575px',
    //   'md': '768px',
    //   'lg': '1024px',
    //   'xl': '1280px',
    //   '2xl': '1536px',
    // },
    fontFamily: {
      default: ["neue-haas-grotesk-display", "Neue Haas Grotesk Display Pro", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      transitionProperty: {
        'backgroundColor': 'background',
        'opacity': 'opacity',
      },
      transitionDuration: {
        '0': '0ms',
        '300': '300ms',
        '500': '500ms'
      },
      textOpacity: {
        '85': '0.85',
      },
      inset: {
        '2': '2rem',
      },
    },

  },
  plugins: [],
  content: [
    path.resolve(__dirname, '**/*.js'),
    path.resolve(__dirname, '../shopify/**/*.liquid')
  ]
}