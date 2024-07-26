/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      container: {
        'xs': "320px",
        '3xl': '1920px',
        margin: 'a',
      },
      colors: {
        'main': {
          primary: '#b7cd00',
          secondary: '#343434',
          tertiary: '#fffcf8',
          tertiary: '#424242',
        }
      },
      fontSize: {
        'heading-one': ['4rem', { lineHeight: '5rem', fontWeight: '600' }],
        'heading-two': ['3rem', { lineHeight: '3.875rem', fontWeight: '600' }],
        'heading-three': ['2.5rem', { lineHeight: '3rem', fontWeight: '600' }],
        'heading-four': ['2rem', { lineHeight: '2.5rem', fontWeight: '600' }],
        'heading-five': ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }],
        'heading-six': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '600' }],
      }
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        [`body`]: {
          overflowX: 'hidden',
        },
        // [`a`]: {
        // },
        [`.container`]: {
          marginInlineStart: "auto",
          marginInlineEnd: "auto",
        },
        [`.container-fluid`]: {
          paddingInlineStart: "1rem",
          paddingInlineEnd: "1rem",
          width: '100%'
        },
      })
    },
  ],
}

