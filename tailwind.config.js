/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, rgba(187,207,214,1) 0%, rgba(108,178,179,1) 100%);',
        'radial-gradient-2': ' radial-gradient(circle, rgba(64,80,85,1) 0%, rgba(4,44,45,1) 100%);',
      },

    },
  },

  plugins: [],
}