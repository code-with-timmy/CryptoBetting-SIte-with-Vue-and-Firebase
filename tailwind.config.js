/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#151515",
        secondary: "#DC143C",
        primaryLight: "rgb(89 87 87)",
      },
    },

    fontFamily: {
      Rj: ["Rajdhani", "sans-serif"],
    },
    keyframes: {
      slideIn: {
        "0%": { transform: "translateX(-200px)" },
        "100%": { transform: "translateX(0)" },
      },
      slideOut: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-200px)" },
      },
    },
    animation: {
      slideIn: "slideIn 1s ease-in",
      slideOut: "slideout 1s ease-out",
    },
  },
  plugins: [],
};
