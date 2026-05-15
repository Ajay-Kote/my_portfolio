import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: "#0a0a0a",
        surface: "#121212",
        accent: "#00f5ff",
        muted: "#8b8b8b"
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"]
      },
      boxShadow: {
        glow: "0 0 24px rgba(0,245,255,0.25)"
      },
      backgroundImage: {
        "section-grid":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)"
      },
      backgroundSize: {
        "grid-size": "28px 28px"
      }
    }
  },
  plugins: []
};

export default config;
