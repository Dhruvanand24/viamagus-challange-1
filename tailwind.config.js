/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        JF: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
