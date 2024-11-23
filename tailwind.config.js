/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screen:{
        '3xl': '1650px'
      },
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '1.23'],
        lg: ['19px', '1.1'],
        xl: ['22px', '1.1'],
        '2xl': ['27px', '1.2'],
        '3xl': ['32px', '1.3'],
        '4xl': ['37px', '1.3'],
        '5xl': ['42px', '1.4'],
      },
      colors: {
        'Very-dark-blue': '#0E253F',
        'Dark-blue': '#092F51',
        'Intermediate-blue': '#254D70',
        'Blue': '#34658A',
        'Medium-blue': '#1370C4',
        'Light-blue': '#4990B8',
        'Dark-gray': '#D4D7DE',
        'Light-gray': '#F0F4F7',
        'Regular-gray': '#667080',
        'Dark-Violet': '#100D2C',
      },
      fontFamily: {
        'Inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

