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

          "secondary": "#056499",

          "accent": "#ede747",

          "neutral": "#18171C",

          "base-100": "#fcfcfc",

          "info": "#050A30",

          "success": "#22C55E",

          "warning": "#DC2626",

          "error": "#0F172A",
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