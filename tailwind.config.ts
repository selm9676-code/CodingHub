import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        hub: {
          bg: "#020617",
          panel: "#081121",
          line: "#16314f",
          blue: "#38bdf8",
          blueStrong: "#0ea5e9",
          textSoft: "#cbd5e1"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(56,189,248,0.18), 0 18px 70px rgba(14,165,233,0.14)"
      }
    }
  },
  plugins: []
};

export default config;