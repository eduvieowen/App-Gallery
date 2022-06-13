module.exports = {
  content: [
    "./scripts/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {

      fontFamily: {
        main: ['Nunito'],
        body: ['SF Mono'],
      },

      backgroundImage: {
        'brown-square': "url('/media/brown-square.png')",
      }
    },
  },
  plugins: [],
}
