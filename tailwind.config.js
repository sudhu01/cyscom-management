/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'valorant-bg': "url('.src/assets/valorant_bg')"
      },
      fontFamily: {
        "afacad": ['Afacad Flux', 'sans-serif'],
        "oswald" : ['Oswald', 'sans-serif'],
        "poppins": ['Poppins', 'sans-serif'],
        "chakra": ['Chakra Petch', 'sans-serif'],
      },
      backgroundImage: {
        'LandingPgBg': "url('/src/app/assets/cyscom-bg.jpg')" 
      }
    },
  },
  plugins: [],
}

