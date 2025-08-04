/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Poppins"', 'sans-serif'],
        garamond: ['"EB Garamond"', 'serif'],
      },
      colors: {
        primary: {
          50: '#fdf4f0',
          100: '#fbe7d8',
          200: '#f7ccb1',
          300: '#f2a980',
          400: '#ec7c4d',
          500: '#e85a29',
          600: '#d9421f',
          700: '#b5331c',
          800: '#912c1e',
          900: '#76261c',
        },
        peach: {
          50: '#FFF5F2',
          100: '#FFEBE5',
          200: '#FFD5C8',
          300: '#FFB8A1',
          400: '#FF9273',
          500: '#FF7D5E',
          600: '#F25C3D',
        },
        blush: {
          50: '#fef7f6',
          100: '#fdeceb',
          200: '#fcddd9',
          300: '#f9c3bd',
          400: '#f39d93',
          500: '#eb7169',
          600: '#d85044',
          700: '#b63c32',
          800: '#96362e',
          900: '#7c322c',
        },
        ivory: {
          50: '#fffdf7',
          100: '#fffaeb',
          200: '#fff2cc',
          300: '#ffe6a3',
          400: '#ffd470',
          500: '#ffbc3d',
          600: '#ff9f18',
          700: '#cc7711',
          800: '#a15d17',
          900: '#844e18',
        }
      },
      backgroundImage: {
        'gradient-peach': 'linear-gradient(135deg, #fff7f4 0%, #ffede6 50%, #ffd9cc 100%)',
        'gradient-blush': 'linear-gradient(135deg, #fef7f6 0%, #fdeceb 50%, #fcddd9 100%)',
        'gradient-ivory': 'linear-gradient(135deg, #fffdf7 0%, #fffaeb 50%, #fff2cc 100%)',
        'gradient-hero': 'linear-gradient(135deg, #fff7f4 0%, #fef7f6 30%, #fffdf7 60%, #ffede6 100%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        sparkle: 'sparkle 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
};
