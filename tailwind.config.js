/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0C447C', deep: '#071A2C', mid: '#154E86', pale: '#E7EEF6' },
        amber: { DEFAULT: '#EF9F27', light: '#F6BC64', dark: '#C97E12' },
        emerald: { DEFAULT: '#1E8E5A', light: '#3FAE79', pale: '#E8F5EF' },
        slate: { DEFAULT: '#4B5768', light: '#8A94A3' },
        mist: '#F4F7FA',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
