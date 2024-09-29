/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx, html}",
    "./src/components/**/*.{js,ts,jsx,tsx, html}",
    // "./src/pages/**/*.{js,ts,jsx,tsx, html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#4F9CF9",
          200: "#043873",
        },
        secondary: {
          100: "#FFFFFF",
          200: "#A7CEFC",
          300: "#FFE492",
          400: "#212529",
        },
      },
      borderRadius: {
        8: "0.5rem",
        10: "0.625rem",
      },
      fontSize: {
        h1: "4.5rem",
        h2: "4rem",
        h3: "3.375rem",
        h4: "2.25rem",
        h5: "1.75rem",
        "p1-semibold": "1.5rem",
        "p1-regular": "1.875rem",
        "p2-bold": "1.125rem",
        "p2-medium": "1.125rem",
        "p2-regular": "1.125rem",
        "p3-medium": "1rem",
        "p3-regular": "1rem",
      },
      backgroundColor: {
        white: "#FFFFFF",
        "dark-blue": "#043873",
        black: "#212529",
        yellow: "#FFE492",
        "light-blue": "#4F9CF9",
      },
      spacing: {},
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
