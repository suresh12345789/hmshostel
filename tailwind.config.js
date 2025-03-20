/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        customFonts: 600,
        semi: 600, 
      },
      colors: {
        primary: "#dceef7",
        secondary: "#f3e2e2",
        customwhite:'#F8F8F8', 
        customblack:'#212121',
      },
      
    },
  },
  plugins: [],
};
