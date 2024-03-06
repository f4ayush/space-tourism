import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'home-image-desktop': "url('../assets/home/background-home-desktop.jpg')",
        'home-image-tablet': "url('../assets/home/background-home-tablet.jpg')",
        'home-image-mobile': "url('../assets/home/background-home-mobile.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
        'bellefair': ['Bellefair', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
