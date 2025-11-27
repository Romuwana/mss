/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"], // Looks at your index.html
  darkMode: 'class',          // Keeps your dark mode working
  theme: {
    extend: {
      colors: {
        primary: '#D4AF37',       // Your Gold
        'primary-dark': '#b89a30',
        navy: '#001f3f',          // Your Navy
        'navy-light': '#002b55',
        accent: '#e67e22',        // Your Orange
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}