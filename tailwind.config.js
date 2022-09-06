module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ['dark']
  },
  plugins: [require('tailwind-scrollbar-hide', 'tailwindcss-dark-mode')],
}
