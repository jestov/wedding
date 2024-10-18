/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#9F217E",
        secondary: "#274065",
        tertiary: "#470C2C",
      },
    },
  },
  plugins: [],
};
