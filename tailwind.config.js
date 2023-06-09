/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Lato','Inter', 'Roboto', 'Montserrat', 'Source Sans Pro', 'Open Sans', 'Raleway', 'Nunito', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['Merriweather', 'Georgia', 'Playfair Display','Times New Roman', 'serif'],
      mono: ['"font-mono"', 'monospace'],
      babita: ['Child Babita', 'monospace'],
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
