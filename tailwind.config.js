/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "app/**/*.{js,jsx,ts,tsx}",
    "atoms/**/*.{js,jsx,ts,tsx}",
    "assets/**/*.{js,jsx,ts,tsx}",
    "components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    container: {
      center: true,
      padding: "24px",
    },
    extend: {},
  },
  plugins: [],
};
