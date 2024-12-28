/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-image': "url('src/assets/background.png')",
      },
      filter: {
        'grayscale': 'grayscale(100%)',
      }
    }
  },
  plugins: [],
}

