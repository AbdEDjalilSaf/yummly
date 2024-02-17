/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'green':'#3a9691',
      'body':'#fdfdfd',
      'titcolor':'#494949',
      'orange':'#e16120',
    },
    fontSize: {
      'small':'14px',
      'medium':'17px',
      'large':'20px',
      'xtralarge':'34px',
      'twoxtralarge':'40px',
    },
    extend: {
      screens: {
        'sl': '480px'
      }
    },
  },
  plugins: [],
}
