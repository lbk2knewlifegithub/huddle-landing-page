const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const { join } = require("path");

module.exports = {
  content: [join(__dirname, "src/**/*.{html,ts}")],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "0rem",
      },
    },
    extend: {
      colors: {
        "primary-900": "hsl(257, 40%, 49%)",
        "primary-800": "hsl(300, 69%, 71%)",
      },
      // create custom fonts here
      fontFamily: {
        heading: ["'Poppins'", ...defaultTheme.fontFamily.mono],
        mono: ["'Open Sans'", ...defaultTheme.fontFamily.mono],
      },
      // create custom text colors here
      textColor: {},
      // create custom background colors here
      backgroundColor: {},
      borderColor: {},
      // create custom gradient color here
      gradientColorStops: {},
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "1280px",
        },
      });
    }),
  ],
};
