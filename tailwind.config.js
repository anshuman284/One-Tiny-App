/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        logo: ['"Outfit"', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#7c3aed',
          secondary: '#ec4899',
          accent: '#f59e0b',
          dark: '#0f172a',
          surface: '#ffffff',
          light: '#f8fafc',
        }
      },
      boxShadow: {
        'glow': '0 0 20px rgba(124, 58, 237, 0.15)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
