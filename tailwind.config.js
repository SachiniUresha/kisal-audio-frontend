/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary : "#003090",
        secondary : "#E8F9FF",
        accent : "#0f0cebff"
      }
    },
  },
  plugins: [],
}
