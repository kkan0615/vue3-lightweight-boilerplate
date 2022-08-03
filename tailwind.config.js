/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  important: true,
  prefix: 'tw-',
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'primary': {
          '100': {
            light: '#41B883',
            DEFAULT: '#41B883',
            dark: '#41B883',
          },
          '200': {
            light: '#41B883',
            DEFAULT: '#41B883',
            dark: '#41B883',
          },
          '300': {
            light: '#41B883',
            DEFAULT: '#41B883',
            dark: '#41B883',
          },
          '400': {
            light: '#41B883',
            DEFAULT: '#41B883',
            dark: '#41B883',
          },
          '500': {
            light: '#41B883',
            DEFAULT: '#41B883',
            dark: '#41B883',
          },
          '600': {
            light: '#41B883',
            DEFAULT: '#41B883',
            dark: '#41B883',
          },
          '700': {
            light: '#41B883',
            DEFAULT: '#41B883',
            dark: '#41B883',
          },
          '800': {
            light: '#41B883',
            DEFAULT: '#41B883',
            dark: '#41B883',
          },
          '900': {
            light: '#41B883',
            DEFAULT: '#41B883',
            dark: '#41B883',
          }
        }, // primary ends
        'secondary': {
          '100': {
            light: '#34495E',
            DEFAULT: '#34495E',
            dark: '#34495E',
          },
          '200': {
            light: '#34495E',
            DEFAULT: '#34495E',
            dark: '#34495E',
          },
          '300': {
            light: '#34495E',
            DEFAULT: '#34495E',
            dark: '#34495E',
          },
          '400': {
            light: '#34495E',
            DEFAULT: '#34495E',
            dark: '#34495E',
          },
          '500': {
            light: '#34495E',
            DEFAULT: '#34495E',
            dark: '#34495E',
          },
          '600': {
            light: '#34495E',
            DEFAULT: '#34495E',
            dark: '#34495E',
          },
          '700': {
            light: '#34495E',
            DEFAULT: '#34495E',
            dark: '#34495E',
          },
          '800': {
            light: '#34495E',
            DEFAULT: '#34495E',
            dark: '#34495E',
          },
          '900': {
            light: '#34495E',
            DEFAULT: '#34495E',
            dark: '#34495E',
          }
        }, // secondary ends
      }, // colors end
      maxWidth: {
        'content': '1200px',
      }, // maxWidth ends
    },
  },
  plugins: [],
}
