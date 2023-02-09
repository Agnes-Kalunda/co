/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT")
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {backgroundImage:
                {
                  'lapt': "url(/src/assets/lapt.jpeg)"
                }},
  },
  plugins: [],
})
