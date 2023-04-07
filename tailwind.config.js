/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      animation: {
        typing: `
          typing 3.5s steps(200, end),
          blink-caret .5s step-end infinite;
        `,
      },
      keyframes: {
        typing: {
          "0%": { width: 0 },
          "100%": { width: "100%" }
        },
        "blink-caret": {
          "0%, 100%": {
            "border-color": "transparent",
          },
          "50%": {
            "border-color": "#915eff",
          }
        }
      }
    },
  },
  plugins: [],
};