/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        zoomIn: {
          '0%': { scale: '1.2' },
          '100%': { scale: '1' },
        }
      },
      // animation: {
      //   zoomIn: 'zoomIn 3s ease-in-out'
      // }
    },
  },
  plugins: [],
}

// animate-[zoomIn_3s_ease-in-out]