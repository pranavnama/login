/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-brown': '#5b5f97',
        'custom-brown-2': '#ffc145',
        'custom-brown-3': '#ff6700',
      },
    },
  },
  plugins: [],
}



