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
      },
      colors: {
        foreground: "#0a0b0e",
        darkPurple: "#1c1678",
        lightPurple: "#8576ff",
        skyBlue: "#7bc9ff",
        tiffanyGreen: "#a3ffd6",
        summerRed: "#ff8080",
        summerOrange: "#ffcf96",
        summerYellow: "#f6fdc3",
        summerGreen: "#cdfad5",
        gray: "#a2a5a5",
      },
    },
  },
  plugins: [],
};
export default config;
