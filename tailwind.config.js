/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '500px',
        'md': '601px',
        'lg': '901px',
        'xl': '1280px',
      },
    },
    
  },
  plugins: [],
}

