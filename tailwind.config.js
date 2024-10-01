const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'mbold':['Montserrat Bold', 'sans-serif'],
        'mblack': ['Montserrat Black', 'sans-serif'],
        'msemibold': ['Montserrat SemiBold', 'sans-serif'],
        'monmedium':['Montserrat Medium', 'sans-serif'],
        'averta': ['Averta', 'sans-serif'],
        'avertalight': ['Averta Light', 'sans-serif'],
        'alexa': ['Alexa', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'merriwheather': ['Merriweather', 'sans-serif'],
      },
      fontStyle: {
        'italic': 'italic',
      },
      fontWeight: {
        'thin': 100,
        'extralight': 200,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
      },
      colors: {
        'rie-yellow': '#F2BE31', 
        'rie-lightyellow': '#FCDC88',
        'rie-dark': '#0c0c31',
        'rie-transparent': '#0000008f',
        'rie-pink': '#FF346E',
        'rie-blue':'#16055E'
      },

      animation: {
        'pulse': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1)',
      },
      keyframes: {
        pulse: {
          '0%': {
            transform: 'scale(0)'         
          },
   
          '100%': {
            opacity: 1
            
          },
        }
      }
 
    },
  },
  plugins: [
    require("flowbite/plugin"),
    
  ],
};
