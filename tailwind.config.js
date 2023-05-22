/** @type {import('tailwindcss').Config} */
module.exports = {
  jit: true,
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
}
