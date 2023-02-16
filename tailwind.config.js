/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx}",
],
plugins: [require("daisyui")],
  theme: {
    extend: {
      height: {
        '112': '28rem',
        '192': '48rem',
        '144': '36rem',
      },
      fontSize: {
        '10xl': '10rem',
      }
    },
  },
  plugins: [],
}
