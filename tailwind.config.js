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
        primary: "#FFE5C8",
        secondary:"#FFB96D",
        customRed:"#CA3A03",
        customLight:"#FFEDD3"



      },
      fontFamily:{
        
      }
    },
  },
  plugins: [],
}
