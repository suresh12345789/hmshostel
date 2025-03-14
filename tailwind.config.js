/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        customFonts: 600, 
      },
      colors: {
        customBlue: "#EAF5FC",
        customYellow:"#F2FDA7"
      },
    },
  },
  plugins: [],
}
