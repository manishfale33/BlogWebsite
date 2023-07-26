/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'title-green': '#196562',
        'back_color': '#CAE6FA',
        'font_color': '#0D226B',
        'patch_color':'#E2F6FF'
      },
    },
  },
  plugins: [],
}

