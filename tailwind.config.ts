import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          black: "#050510",
          navy: "#0a0a2e",
          purple: "#1a0a3e",
          gold: "#d4a853",
          "gold-light": "#f0d48a",
        },
        jupiter: {
          orange: "#c4651a",
          brown: "#3d2b1f",
          amber: "#e8a317",
          smoke: "#4a4a4a",
          ember: "#ff6b2b",
        },
        pluto: {
          teal: "#00d4aa",
          marine: "#0066cc",
          citrus: "#ffd700",
          lavender: "#b399d4",
          crystal: "#e8f4f8",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        twinkle: "twinkle 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        orbit: "orbit 20s linear infinite",
        "ember-rise": "ember-rise 4s ease-out infinite",
        "bubble-rise": "bubble-rise 5s ease-in infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        wave: "wave 8s ease-in-out infinite",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(150px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(150px) rotate(-360deg)",
          },
        },
        "ember-rise": {
          "0%": { transform: "translateY(0) scale(1)", opacity: "1" },
          "100%": { transform: "translateY(-200px) scale(0)", opacity: "0" },
        },
        "bubble-rise": {
          "0%": { transform: "translateY(0) scale(0.5)", opacity: "0" },
          "20%": { opacity: "0.8" },
          "100%": { transform: "translateY(-300px) scale(1)", opacity: "0" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212, 168, 83, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(212, 168, 83, 0.6)" },
        },
        wave: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-50px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
