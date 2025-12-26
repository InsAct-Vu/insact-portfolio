/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-teal': '#14b8a6',
        'brand-dark': '#0f172a',
      }
    },
  },
  plugins: [],
}
