/** @type {import {'tailwindcss'}.config} */
module.exports = {
  content:[
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-gray': '#A6A485',
        'custom-green': '#5A824E',
        'custom-oscuro' : '#3F402B'
        // Add your custom background color here
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
    },
    },
  
  plugins: [],
}


