/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      primary: "#00040f",
      secondary: "#4ea0ca",
      dimWhite: "#848484",
      dimmerWhite: "#2b2b2b",
      dimBlue: "#233e45",
      navbar: "#04060d",
    },
    fontFamily: {
      neue: ["Neue Montreal", "sans-serif"],
    },
  },
  screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1024px",
    lg: "1440px",
    xl: "1700px",
  },
};
export const plugins = [];