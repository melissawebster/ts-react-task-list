/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        turquoise: '#0be7fa',
        pink: '#c70ffe',
        purple: '#7e53fb',
      },
    },
  },
  plugins: [],
}

