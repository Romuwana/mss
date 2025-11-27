/** @type {import('tailwindcss').Config} */
module.exports = {
  // WE ARE NAMING index.html EXPLICITLY HERE:
  content: ["./index.html", "./src/**/*.{html,js}"], 
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#D4AF37',
        'primary-dark': '#b89a30',
        navy: '#001f3f',
        'navy-light': '#002b55',
        accent: '#e67e22',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}