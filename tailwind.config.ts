import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        asg: {
          black: "#0B0B0C",
          charcoal: "#1A1B1D",
          ink: "#1A1A1A",
          muted: "#5A5C60",
          cream: "#FAF8F4",
          white: "#FFFFFF",
          gold: "#C6A15B",
          "gold-light": "#E4C77E",
          "gold-deep": "#9A7B3A",
          silver: "#C9CBCE",
          "silver-deep": "#8A8D91",
          hairline: "rgba(198,161,91,0.35)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-cinzel)", "Georgia", "serif"],
      },
      letterSpacing: {
        eyebrow: "0.2em",
        cinzel: "0.18em",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #9A7B3A 0%, #E4C77E 45%, #C6A15B 100%)",
        "gold-line":
          "linear-gradient(90deg, rgba(154,123,58,0) 0%, #C6A15B 20%, #E4C77E 50%, #C6A15B 80%, rgba(154,123,58,0) 100%)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,11,12,0.04), 0 8px 24px rgba(11,11,12,0.06)",
        gold: "0 8px 24px rgba(198,161,91,0.18)",
      },
      maxWidth: {
        container: "1200px",
        prose: "68ch",
      },
      keyframes: {
        "fade-rise": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-rise": "fade-rise 500ms ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
