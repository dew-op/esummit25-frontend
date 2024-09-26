// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')
const typographyPlugin = require('@tailwindcss/typography')

module.exports = {
  content: [
    //"./pages/**/*.{js,ts,jsx,tsx}",
    //"./components/**/*.{js,ts,jsx,tsx}",
    //"./styles/**/*.css", // Ensure your globals.css path is covered
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  darkMode: 'selector', // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '2rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.5rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      /*fontFamily: {
        sans: 'var(--font-inter)',
        display: ['var(--font-lexend)', { fontFeatureSettings: '"ss01"' }],
      },*/
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Make sure plugins are correctly installed and imported
    typographyPlugin,
  ],
}
