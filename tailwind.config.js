module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      textColor: {
        skin:{
          base: "var(--text-color)",
          hoverbase: "var(--text-color-hover)",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        pressstart: ["Press Start 2P", "cursive"],
        llpixel: ["LLPIXEL", "cursive"],
      },
  },
  plugins: [require('tailwind-scrollbar-hide'),],
  }
}
