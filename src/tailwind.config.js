/**
 * Tailwind CSS configuration file
 *
 * docs: https://tailwindcss.com/docs/configuration
 * default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const path = require('path')

module.exports = {
  theme: {
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
        // normal: 400,
        medium: 600,
        bold: 700
      },
      colors: {
        white: '#F1F0EF',
        black: '#0C140B',
        gray: '#858985',
        transparent: '#00000000',
        currentColor: 'currentColor',
      },
      fontSize: {
        'heading': ['48px', '1'],
        'headingMobile': ['32px', '1'],
        'bodyLarge': ['1rem', '1.5'],
        'bodySmall': ['12px', '1.6'],
        'label': ['10px', '1.2'],
      },
      lineHeight: {
        '48': '3rem',
        '32': '2rem',
        '24': '1.5rem',
        '16': '1rem',
        '12': '0.75rem'
      },
      boxShadow: {
        default: "box-shadow: 0px 8px 48px rgba(0, 0, 0, 0.08);",
      },
      blur: {
        default: '32px',
      },
      extend: {
        transitionProperty: {
          'backgroundColor': 'background',
          'opacity': 'opacity',
        },
        transitionDuration: {
          '0': '0ms',
          '300': '300ms',
        },
        textOpacity: {
          '85': '0.85',
        },
        backgroundImage: theme => ({
          'hero-pattern': "url('../images/Hero.png')",
        }),
        inset: {
          '2': '2rem',
        }
      
    },
    fontFamily: {
      default: ["neue-haas-grotesk-display", "Neue Haas Grotesk Display Pro", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
  content: [
    path.resolve(__dirname, '**/*.js'),
    path.resolve(__dirname, '../shopify/**/*.liquid')
  ]
}