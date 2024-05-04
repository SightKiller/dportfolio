/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#20e326',
        'primary': '#1f1e1e',
      },
      boxShadow: {
        'before-btn': '0px 2px 3px white',
        'after-btn': '0px 2px 3px #20e326',
        'card': '0 2px 5px white',
      },
      keyframes: {
        spin: {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
      },
      fontFamily: {
        'pop': ['Poppins', 'sans-serif']  // Assuming you want to use Poppins and fallback to sans-serif
      },
    },
  },
  plugins: [],
}
