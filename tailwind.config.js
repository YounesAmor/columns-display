/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    extend: {
      backgroundImage: {
        mobile: "url('/src/assets/images/image-product-mobile.jpg')",
      },
      colors: {
        brightOrange: "hsl(31, 77%, 52%)",
        transparentWhite: "hsla(0, 0%, 100%, 0.75)",
        veryTransparentWhite: "hsl(0, 0%, 95%)",
        darkCyan: "hsl(184, 100%, 22%)",
        veryDarkCyan: "hsl(179, 100%, 13%)",
      },
      fontFamily: {
        bigShouldersDisplay: ["'Big Shoulders Display'", "cursive"],
        lexandDeca: ["Lexand Deca", "sans-serif"],
      },
    },
  },
  "tailwindCSS.includeLanguages": {
    javascript: "javascript",
    html: "HTML",
  },
  "editor.quickSuggestions": {
    strings: true,
  },
  plugins: [],
};
