/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E1F5EE',
          100: '#9FE1CB',
          200: '#5DCAA5',
          300: '#2DB88A',
          400: '#1D9E75',
          500: '#0F6E56',
          600: '#085041',
          700: '#04342C',
        },
        accent: {
          400: '#EF9F27',
          500: '#BA7517',
        },
        surface: {
          50: '#FAFAF7',
          100: '#F5F0E8',
          200: '#EDE8DC',
        },
        dark: {
          700: '#444441',
          800: '#2C2C2A',
          900: '#1A1A18',
        },
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
