

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "5xl": ["56px", "66px"],
      "8xl": ["96px", "106px"],
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "1024px",
      // => @media (min-width: 1024px) { ... }

      lg: "1280px",
      // => @media (min-width: 1280px) { ... }
      promax: "430px",
      twelve: "390px",
      fold: "280px",
      padAir: "820px",
      se: "375px",
      spro: "912px",
      mini: "768px",
    },
    extend: {
            keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
           fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        lato: ['Lato', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
        'custom-purple': '#6a0dad',
        'custom-dark-purple': '#4b0082',
        'custom-light-blue': '#add8e6',
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
   
      },
      screens: {
        wide: "1440px",
      },
        animation: {
        slideIn: 'slideIn 0.5s ease-out',
        slideOut: 'slideOut 0.5s ease-out',
        slideUp: 'slideUp 0.5s ease-out',
        slideDown: 'slideDown 0.5s ease-out',
        fadeIn: 'fadeIn 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};


