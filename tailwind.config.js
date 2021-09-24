module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['"Prompt"', 'sans-serif'],

      // body: ['Prompt','Roboto'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
