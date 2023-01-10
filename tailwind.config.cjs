/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = withMT({
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("@tailwindcss/forms")({
      strategy: 'base', // only generate global styles
      strategy: 'class', // only generate classes
    }),
  ],
});
