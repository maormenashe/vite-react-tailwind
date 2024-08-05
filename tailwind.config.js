/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "550px",
      md: "800px",
      lg: "1200px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        primary: "#ff5733",
        secondary: "#fffc33",
      },
      spacing: {
        6: "2.5rem",
        128: "32rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      transitionDuration: {
        2000: "2000ms",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-12deg)" },
          "50%": { transform: "rotate(12deg)" },
        },
      },
    },
  },
  plugins: [],
};
