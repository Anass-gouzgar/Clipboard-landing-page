/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        StrongCyan: "hsl(171, 66%, 44%)",
        LightBlue: "hsl(233, 100%, 69%)",
        DarkGrayishBlue: "hsl(210, 10%, 33%)",
        GrayishBlue: "hsl(201, 11%, 66%)",
      },
      fontFamily: {
        Bai: ["var(--font-Bai)", "sans-serif"],
      },
      backgroundImage: {
        desktop: "url('/images/bg-header-desktop.png')",
        mobile: "url('/images/bg-header-mobile.png')",
      },
    },
  },
  plugins: [],
};
