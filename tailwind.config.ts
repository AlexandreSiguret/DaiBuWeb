import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        darkbg: "#0F1115",
        glass: "#0AFFFFFF",
        borderglass: "#24FFFFFF",
        accent: "#28C98A",
        daiblue: "#5B86FF",
        warn: "#E53935",
      },
      backgroundImage: {
        "soft-radial":
          "radial-gradient(60%_60%_at_10%_0%, rgba(91,134,255,0.12) 0%, rgba(15,17,21,0) 60%), radial-gradient(60%_60%_at_100%_100%, rgba(40,201,138,0.10) 0%, rgba(15,17,21,0) 60%)",
      },
      keyframes: {
        wobble: {
          "0%, 100%": { transform: "rotate(-1.5deg)" },
          "50%": { transform: "rotate(1.5deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.6", filter: "blur(18px)" },
          "50%": { opacity: "1", filter: "blur(10px)" },
        },
      },
      animation: {
        wobble: "wobble 1.2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
