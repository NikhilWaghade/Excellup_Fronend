/** @type {import('tailwindcss').Config} */
export default {
 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
  inter: ['"Inter Tight"', 'sans-serif'],
  exile: ['"Exile"', 'system-ui'], 
  lato: ["Lato", 'sans-serif'],
},

    },
  },
  plugins: [],
}

