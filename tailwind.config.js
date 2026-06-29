/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#1B4F8A', deep: '#0C2547', mid: '#2260A0' },
        amber: { DEFAULT: '#F5A623', light: '#FAC05A', dark: '#C8811A' },
        blue: { DEFAULT: '#4A90C4', pale: '#E8F4FD' },
      },
    },
  },
  plugins: [],
}
