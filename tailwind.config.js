/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          black: '#000000',
          green: '#00ff00',
          gray: {
            dark: '#1a1a1a',
            light: '#f0f0f0'
          }
        }
      },
      fontFamily: {
        mono: ['Fira Code', 'Courier New', 'monospace']
      }
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
}
