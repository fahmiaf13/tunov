/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sun: "#F7D26C",
        whiter: "#F3F3F3",
        peach: "#E594B9",
        darker: "#272729",
        pome: "#F09181",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        pacifico: ["Pacifico", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
