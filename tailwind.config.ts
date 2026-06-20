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
        primary: {
          50: "#e8f0fe",
          100: "#d1e0fd",
          200: "#a3c1fb",
          300: "#75a2f9",
          400: "#4783f7",
          500: "#1a64f5",
          600: "#1550c4",
          700: "#103c93",
          800: "#0a2862",
          900: "#051431",
        },
        secondary: {
          50: "#e6f7ed",
          100: "#ccefdb",
          200: "#99dfb7",
          300: "#66cf93",
          400: "#33bf6f",
          500: "#00af4b",
          600: "#008c3c",
          700: "#00692d",
          800: "#00461e",
          900: "#00230f",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
