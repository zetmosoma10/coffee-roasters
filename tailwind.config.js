/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        barlow: ["Barlow", "sans-serif"],
      },
      colors: {
        pale_orange: "#FDD6BA",
        dark_grey: "#333D4B",
        grey: "#83888F",
        dark_cyan: "#0E8784",
        light_cream: "#FEFCF7",
      },
    },
  },
  plugins: [],
};
