module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'className'
  theme: {
    extend: {
      colors: {
        "bdazzled-blue": "#3D5A80",
        "pale-cerulean": "#98C1D9",
        "light-cyan": "#E0FBFC",
        "burnt-sienna": "#EE6C4D",
        "gunmetal": "#293241",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
