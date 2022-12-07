const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Titillium Web", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
