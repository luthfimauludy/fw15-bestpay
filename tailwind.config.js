/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        primary: "#99A98F",
        "base-100": "#FFFFFF",
        info: "#0CA5E9",
        success: "#22c55e",
        warning: "#F4BF50",
        error: "#e11d48",
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        nunito: ["var(--nunito-font)"],
      },
      backgroundImage: {
        header: "url('../../public/bg-header.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
