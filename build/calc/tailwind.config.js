/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
      },
      gap: {
        '2': '0.5rem',
      },
    },
  },
  plugins: [],
} 