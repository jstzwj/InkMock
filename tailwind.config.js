/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        newspaper: {
          bg: '#f5f1e8',
          text: '#2c2c2c',
          headline: '#1a1a1a',
          border: '#d4c5a9'
        }
      },
      fontFamily: {
        'serif': ['Times New Roman', 'serif'],
        'sans': ['Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}