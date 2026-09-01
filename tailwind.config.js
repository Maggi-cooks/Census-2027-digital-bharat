/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ashoka: {
          50: '#f0f5fa',
          100: '#dde8f4',
          200: '#bfd5ec',
          300: '#92bbdf',
          400: '#5e9bce',
          500: '#397ebd',
          600: '#2864a1',
          700: '#215083',
          800: '#1e446d',
          900: '#002b49', // Primary Ashoka Navy
          950: '#0b1b2d',
        },
        saffron: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#fedba8',
          300: '#fdbf71',
          400: '#fb9b37',
          500: '#ff9933', // Official Indian Saffron
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        tiranga: {
          green: '#138808',
          white: '#ffffff',
          saffron: '#ff9933',
          navy: '#000080',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'gov': '0 4px 20px -2px rgba(0, 43, 73, 0.08), 0 2px 6px -1px rgba(0, 43, 73, 0.04)',
        'gov-lg': '0 10px 30px -4px rgba(0, 43, 73, 0.12), 0 4px 10px -2px rgba(0, 43, 73, 0.06)',
        'saffron-glow': '0 0 15px rgba(255, 153, 51, 0.35)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
