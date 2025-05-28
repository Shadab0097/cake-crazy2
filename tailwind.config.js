/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF0F5',
          100: '#FFE1EC',
          200: '#FFC3D9',
          300: '#FFA5C6',
          400: '#FF7EB3',
          500: '#FF5C8D', // Main primary color
          600: '#FF2D6F',
          700: '#FF0051',
          800: '#D10042',
          900: '#A30033',
        },
        secondary: {
          50: '#F4F9FF',
          100: '#E9F3FF',
          200: '#D3E7FF',
          300: '#BDDAFF',
          400: '#A7CEFF',
          500: '#91C1FF', // Main secondary color
          600: '#6AABFF',
          700: '#4395FF',
          800: '#1C7FFF',
          900: '#0065F2',
        },
        accent: {
          50: '#FFFAEB',
          100: '#FFF5D6',
          200: '#FFEEAD',
          300: '#FFE683',
          400: '#FFDF5A',
          500: '#FFD831', // Main accent color
          600: '#FFC700',
          700: '#D6A700',
          800: '#AD8700',
          900: '#846800',
        },
        success: {
          500: '#22C55E',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
}