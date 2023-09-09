/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'home-background': "url('./app/assets/bgHome.png)"
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"), require("@tailwindcss/forms")
  ],
}
