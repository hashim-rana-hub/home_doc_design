/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '.8rem',
      base: '1rem',
      lg: '1.125rem',
      '2xl': '1.563rem',
      '3xl': '2rem',
      '4xl': '2.375rem',
      '5xl': '2.5rem',
    },

    extend: {
      boxShadow: {
        'sm': '0px 0px 15px rgba(179, 56, 255, 0.1)',
      }
    },
  },
  plugins: [],
}
