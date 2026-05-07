import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        velora: {
          bg: "#070812",
          surface: "#0D1020",
          elevated: "#12162A",
          purple: "#8B5CF6",
          cyan: "#22D3EE"
        }
      }
    }
  },
  plugins: []
};

export default config;
