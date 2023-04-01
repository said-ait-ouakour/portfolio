/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#c2bbbb",
        primary: "#f88923",
        antiquewhite: "#ffe3ce",
        white: "#fff",
        "dark-gray": "#848181",
        "darken-gray": "#393939",
      },
      fontFamily: { rubik: "Rubik", inter: "Inter" },
      borderRadius: { "8xs": "5px", lgi: "19px", xl: "20px" },
    },
    fontSize: {
      "5xl": "1.5rem",
      "31xl": "3.13rem",
      "17xl": "2.25rem",
      xl: "1.25rem",
    },
  },
  corePlugins: { preflight: false },
};
