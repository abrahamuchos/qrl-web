/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontsize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '22px'],
        lg: ['19px', '30px'],
        xl: ['25px', '30px'],
        '2xl': ['32px', '48px'],
        '3xl': ['20px', '22px'],
        '4xl': ['25px', '30px'],
        '5xl': ['30px', '30px'],
        '6xl': ['42px', '48px'],
      },
      colors: {
        'Very-dark-blue': '#0E253F',
        'Dark-blue': '#092F51',
        'Intermediate-blue': '#254D70',
        'Blue': '#34658A',
        'Light-blue': '#4990B8',
        'Dark-gray': '#D4D7DE',
        'Light-gray': '#F0F4F7',
      },
      fontFamily: {
        'Inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

