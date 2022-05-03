module.exports = {
  content: [],
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "390px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      orange: "#F7931A",
      yellow: "#FEC34A",
      green: "#00C4C6",
      black: "#000000",
    },
    fontFamily: {
      sans: "Comfortaa",
    },
    extend: {
      128: "32rem",
      144: "36rem",
    },
  },
  plugins: [],
};
