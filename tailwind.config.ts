import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      white: "#fff",
      black: "#212529",
      pink: {
        300: "#FFBBE0",
        400: "#E994C2",
      },
      green: "#42754b",
      dark: "#29294A",
      darker: "#1D1D27",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateRows: { main: "1fr 20fr 1fr" },
    },
  },
  plugins: [],
};
export default config;
