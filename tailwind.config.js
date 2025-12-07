/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colors: {
          brand: {
            red: '#601f1c',
            cream: '#efebd4',
            green: '#366e42',
          },
          christmas: {
            red: {
              50: '#fef2f2',
              100: '#fee2e2',
              200: '#fecaca',
              300: '#fca5a5',
              400: '#f87171',
              500: '#ef4444',
              600: '#dc2626',
              700: '#601f1c', // Primary Dark Red
              800: '#4d1916',
              900: '#3a1311',
            },
            green: {
              50: '#f0fdf4',
              100: '#dcfce7',
              200: '#bbf7d0',
              300: '#86efac',
              400: '#4ade80',
              500: '#366e42', // Primary Green
              600: '#2d5a36',
              700: '#24472b',
              800: '#1b3520',
              900: '#122215',
            },
            gold: {
              50: '#fefce8',
              100: '#fef9c3',
              200: '#fef08a',
              300: '#fde047',
              400: '#facc15',
              500: '#eab308',
              600: '#ca8a04',
              700: '#a16207',
              800: '#854d0e',
              900: '#713f12',
            },
            cream: {
              50: '#fefcf9',
              100: '#fdf9f3',
              200: '#fbf4e8',
              300: '#f7eedc',
              400: '#f3e7cf',
              500: '#efebd4', // Primary Cream/Beige
            },
          },
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'snow-fall': 'snowFall 10s linear infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        snowFall: {
          '0%': { transform: 'translateY(-10vh) translateX(0)' },
          '100%': { transform: 'translateY(100vh) translateX(10px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-christmas': 'linear-gradient(135deg, #601f1c 0%, #366e42 100%)',
      },
      boxShadow: {
        'christmas': '0 10px 40px rgba(96, 31, 28, 0.3)',
        'glow': '0 0 20px rgba(54, 110, 66, 0.5)',
      },
    },
  },
  plugins: [],
}
