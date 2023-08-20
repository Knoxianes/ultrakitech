/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily:{
        'heebo': ['Heebo', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'jura': ['Jura', 'sans-serif'],
      },
      colors:{
        primary: '#da6e00',
        primary_light: '#f7b500',
        primary_dark: '#a64e00',
        secondary: '#FF880E',
        text: '#f1f1f1',
        footer: '#000',
        white: '#f1f1f1'
      },
      screens:{
        'xs': '450px',
        'xm': '1280px',
        'xl': '1440px',
        '2xl': '1920px',
        '3xl': '2560px',
        '4xl': '3840px',
      }
    },
  },
  plugins: [],
}
