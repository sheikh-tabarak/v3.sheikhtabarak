/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {


    extend: {
      colors: {
        primary: {
          DEFAULT: '#4CD684',
          500: '#4CD684',
          400: '#67db91',
          300: '#7ee09f',
          200: '#93e5ac',
          100: '#a6eaba',
        },
        background: {
          DEFAULT: '#0A192F',
          500: '#0A192F',
          400: '#232e43',
          300: '#3b4458',
          200: '#555c6e',
          100: '#CCD6F6',
        }
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sfmono: ["SF Mono Regular", "sans-serif"],
        eurostile: ["Eurostile", "sans-serif"],
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}

