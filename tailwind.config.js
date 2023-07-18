/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: {
          min: "600px",
          max: "639px"
        },
        alg: {
          min: "800px",
          max: "1536px"
        },
        blg: {
          min: "992px",
          max: "1536px"
        },
        plg: {
          min: "1200px",
          max: "1536px"
        }
      }
    },
  },
  plugins: [],
}


