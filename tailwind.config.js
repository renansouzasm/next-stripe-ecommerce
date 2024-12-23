/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor1: "#121212",
        bgColor2: "#292929",
        bgColor3: "#FFFFFF",
        textColor1: "#E9E9E9",
        textColor2: "#262626",
        textColor3: "#BE7749",
        btnCountColor1: "#E9E9E9",
        btnCountColor2: "#C9C9C9",
        btnColor1: "#D9D9D9",
        btnColor2: "#D9D9D9",
        btnColor3: "#CF4242",
        placeHolder: "#E9E9E9",
      },
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
  },
  plugins: [],
};
