/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        "light-golden": "#dfae8b",
        "dark-golden": "#c89676",
        "light-beige": "#ddb892",
        "dark-brown": "#cb997e",
        "medium-brown": "#eddcd2",
        "light-brown": "#fff1e6",
        "neutral-blue": "#f0efeb",
        "neutral-brown": "#ddbea9",
        "dark-green": "#a5a58d",
        "light-green": "#b7b7a4",
      },
    },
  },
  plugins: [],
};
