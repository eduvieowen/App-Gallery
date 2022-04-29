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
        counter: "url('/media/counter-bg.jpg')",
      }
    },
  },
  plugins: [],
}
