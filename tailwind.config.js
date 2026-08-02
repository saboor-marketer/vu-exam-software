/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vu: {
          blue: '#1e40af',
          light: '#3b82f6',
          dark: '#1e3a8a',
          lavender: '#e6e6fa'
        }
      }
    },
  },
  plugins: [],
}
