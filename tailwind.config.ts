import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "landing-image": "url('../public/landing-bg.webp')",
        "about-card-image": "url('../public/about-card-bg.png')",
      },
      colors: {
        "font-white": "#E8EFFF",
        "font-white-hover": "#ADB5C6",
        "nav-bg-start": "#113758",
        "nav-bg-end": "#174C79",
        "custom-gold": "#C69A0D",
      },
    },
  },
  plugins: [],
};
export default config;
