/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-green": "#3B5D4F",
        "brand-yellow": "#f8bf29",
        "brand-blue": "#DDE5E5",
        "brand-gray": "#F1F3F1",
      },
    },
  },
  plugins: [],
}