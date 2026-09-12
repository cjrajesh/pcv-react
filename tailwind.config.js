/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#0070c0",
        "brand-dark": "#00254a",
        "brand-light": "#1b92e6",
        "brand-hover": "#48c7ec",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        opensans: ["'Open Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};