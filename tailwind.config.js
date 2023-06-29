/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["components/**/*.vue", "layouts/**/*.vue", "pages/**/*.vue"],
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "320px",
      md: "640x",
      lg: "720px",
      xl: "1028px",
    },
  },
};
