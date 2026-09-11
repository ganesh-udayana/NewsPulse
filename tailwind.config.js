/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9eaff',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
          900: '#0f172a'
        },
        pulse: {
          red: '#ef4444',
          amber: '#f59e0b',
          emerald: '#10b981',
          cyan: '#06b6d4'
        }
      }
    },
  },
  plugins: [],
}
