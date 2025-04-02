/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        handlee: ['Handlee', 'cursive'],
        inter: ['Inter', 'sans-serif'],
        hannotate: ['Hannotate SC', 'cursive'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 