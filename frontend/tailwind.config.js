/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/main-page.jpg')"
      }
    },
  },
  plugins: [],
}
