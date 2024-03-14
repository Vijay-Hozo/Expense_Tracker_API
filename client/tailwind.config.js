/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    color : {
      background: '#222831',
      button : '#74E291',
      text : '#FFFBF5',
      nav : '#35374B',
    },
    extend: {
      fontFamily: {
        title: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

