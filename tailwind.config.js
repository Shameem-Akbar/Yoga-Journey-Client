/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#038c73",

          "secondary": "#25bfd1",

          "accent": "#ede747",

          "neutral": "#18171C",

          "base-100": "#fcfcfc",

          "info": "#3D9AE1",

          "success": "#60E2BB",

          "warning": "#E09006",

          "error": "#F64C54",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}


/* 
#fcfcfc
#056499
#04718c
#037e7f
#038c73
*/