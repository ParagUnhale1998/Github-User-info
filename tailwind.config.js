/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',    
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        header_bg: '#010409',
        main_bg: '#0A0C10',
        text_white: '#fff',
        repo_name: '#60AEFF',
      },
    },
  },
  plugins: [],
}