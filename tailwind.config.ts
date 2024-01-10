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
        primaryBackground: "#1C1C24",
        secondaryBackground: "#13131A",
        tertiaryBackground:'#292932',
        tableSeperator: '#393939',
        primaryText: "#FAFAFB",
        hoverColor:'#92929D',
        secondaryText: "#B5B5BE",
      },
    },
  },
  plugins: [],
};
export default config;
