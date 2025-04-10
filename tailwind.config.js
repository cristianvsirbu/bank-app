/** @type {import('tailwindcss').Config} */
export default {
  theme: {
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
      boxShadow: {
        '10': 'var(--shadow-10)',
        '15': 'var(--shadow-15)',
        '20': 'var(--shadow-20)',
        '30': 'var(--shadow-30)',
        '40': 'var(--shadow-40)',
        '50': 'var(--shadow-50)',
        '70': 'var(--shadow-70)'
      },
      borderRadius: {
        '10': 'var(--radius-10)',
        '15': 'var(--radius-15)',
        '20': 'var(--radius-20)',
        '30': 'var(--radius-30)',
        '40': 'var(--radius-40)',
        '50': 'var(--radius-50)',
        '70': 'var(--radius-70)'
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
  },
  plugins: ["@tailwindcss/postcss"],
}