/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "colorPrimary": "#2196f3",
        "colorlight": "#e8f4fd"
      }
    },
  },
  plugins: [],
}

