/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0d253f",
        },
        secondary: {
          DEFAULT: "#01b4e4",
        },
        accent: {
          DEFAULT: "#90cea1",
        },
      },
      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          '"Hiragino Sans"',
          '"Hiragino Kaku Gothic ProN"',
          '"Yu Gothic"',
          "Meiryo",
          '"M PLUS 1p"',
          "Inter",
          "sans-serif"
        ],
        heading: [
          '"M PLUS Rounded 1c"',
          '"Hiragino Maru Gothic ProN"',
          "Meiryo",
          "sans-serif"
        ],
        ethosNova: ['"EthosNova"', "serif"],
        shuriken: ['"TheLastShuriken"', "serif"],
      },
    },
  },
  plugins: [],
} 