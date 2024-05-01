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
        "background-1": "hsla(220, 17%, 7%, 1)",
        "on-background": "hsla(220, 100%, 95%, 1)",
        "banner-background": "hsla(250, 6%, 20%, 1)",
        "on-surface": "hsla(250, 100%, 95%, 1)",
        "white-alpha-20": "hsla(0, 0%, 100%, 0.2)",
        "primary-1": "hsla(349, 100%, 43%, 1)",
        "on-surface-variant": "hsla(250, 1%, 44%, 1)",
        "primary-variant": "hsla(349, 69%, 51%, 1)",
        "text-color": "hsla(250, 2%, 59%, 1)",
        "white-hs": "hsla(0, 0%, 100%, 1)",
        "surface-l": "hsla(250, 13%, 11%, 1)",
        "rating-color": "hsla(44, 100%, 49%, 1)",
      },
      boxShadow: {
        around: "0 0 0 2px hsla(250, 1%, 44%, 1)",
      },
      backgroundImage: {
        overlay:
          "linear-gradient(90deg, hsl(220, 17%, 7%) 0%, hsla(220, 17%, 7%, 0.3) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
