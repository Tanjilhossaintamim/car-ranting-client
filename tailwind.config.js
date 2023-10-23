/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fira-sans': "'Fira Sans', sans-serif"
      },
      colors: {
        'color-black': '#2f2f2f',
        'color-black-1': '#201f1d',
        'color-orange': '#FFA633'
      }
    },
  },
  plugins: [],
}

