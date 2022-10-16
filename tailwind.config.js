/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#e7e9ea',
        blueLight: '#308cd8',
        grayblack: '#2f3336',
        graylight: '#71767b',
        dark: '#17181c'
      }
    },
  },
  plugins: [],
}
