/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {},
    colors: {
     'very-dark-gray': 'hsl(0, 0%, 17%)',
     'dark-gray': 'hsl(0, 0%, 59%)',
     'white':  '#fff',
    },
    fontFamily: {
      'rubik': ['Rubik', 'sans-serif']
    },
    backgroundImage: {
      'mobile-pattern': "url('/src/assets/images/pattern-bg-mobile.png')",
      'desktop-pattern': "url('/src/assets/images/pattern-bg-desktop.png')",

    } 
  },
  plugins: [],
}

