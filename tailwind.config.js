const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        bgColor: "#112240",
        primaryColor: "#64FFDA",
        textColor: "#8892B0",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
