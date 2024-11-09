/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primery: {
          100: "hsl(180, 52%, 96%)",
          200: "hsl(175, 41%, 95%)",
          300: "hsl(180, 29%, 50%)",
          500: "hsl(180, 8%, 52%)",
          700: "hsl(180, 8%, 52%)",
          900: "hsl(180, 14%, 20%)",
        },
      },
      backgroundImage: {
        desktopHeader: "url('./assets/images/bg-header-desktop.svg')",
        mobileHeader: "url('./assets/images/bg-header-mobile.svg')",
      },
    },
  },
  plugins: [],
};
