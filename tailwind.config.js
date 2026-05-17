/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /** Sand + baby pink: warm neutrals for type, borders, focus */
        sea: {
          50: "#fffaf8",
          100: "#fceff0",
          200: "#f5dfe3",
          300: "#e8c8cf",
          400: "#d4a3ae",
          500: "#b87a87",
          600: "#9e5f6c",
          700: "#834d58",
          800: "#6a3f48",
          900: "#52333a",
          deep: "#9d5c6b",
          abyss: "#7a4752",
        },
        shore: {
          light: "#faf6f0",
          DEFAULT: "#e8d4c4",
          dark: "#b8957a",
        },
        /** Light baby pink accents */
        blush: {
          50: "#fff8f9",
          100: "#fcecef",
          200: "#f9d6df",
          300: "#f4b8c8",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
