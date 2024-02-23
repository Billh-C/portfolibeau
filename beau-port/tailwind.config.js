/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'homeBG': "url('/assets/home.png')",
        'worksBG': "url('/assets/worksBG.png')",
      },
      fontFamily: {
        averia: ["Averia Serif Libre", "serif libre"]
      }
    },
  },
  plugins: [],
}

