module.exports = {
  purge: ["./app/**/*.tsx", "./app/**/*.jsx", "./app/**/*.js", "./app/**/*.ts"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        32: "8rem",
      },
      colors: {
        primary: "#afc3c0",
        "primary-light": "#d1dbd9",
        "primary-dark": "#688d87",
      },
    },
  },
  variants: {},
  plugins: [],
};
