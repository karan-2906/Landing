/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/Frame 502.png')",
        'last1':"url('/src/assets/Frame 570.png')",
        'last2':"url('/src/assets/Frame 448.png')",
        'last3':"url('/src/assets/Frame 659.png')",
        'last4':"url('/src/assets/Frame 448-1.png')",
        'banner' : "url('/src/assets/juice.png')"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      scale: {
        '175': '1.75',
      }
    },
  },
  plugins: [],
}