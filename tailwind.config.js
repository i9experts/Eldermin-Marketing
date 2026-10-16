/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Current marketing-site design tokens (the redesign).
        navy: { DEFAULT: '#122e4e', deep: '#0b2038', mid: '#154E86', pale: '#E7EEF6' },
        blue: { DEFAULT: '#174b80', light: '#3e7cb1' },
        sky: '#e9f2fa',
        gold: { DEFAULT: '#efa728', light: '#ffcc76', dark: '#b4771e' },
        ink: '#142b43',
        muted: '#5f7184',
        line: '#dde5ec',
        paper: '#f7f9fb',
        green: { DEFAULT: '#277864', pale: '#e7f4ec' },
        // Kept for the /wizard flow, which predates this redesign and is
        // deliberately left alone - removing these would silently break
        // its existing styling even though its own code never changed.
        amber: { DEFAULT: '#EF9F27', light: '#F6BC64', dark: '#C97E12' },
        emerald: { DEFAULT: '#1E8E5A', light: '#3FAE79', pale: '#E8F5EF' },
        slate: { DEFAULT: '#4B5768', light: '#8A94A3' },
        mist: '#F4F7FA',
      },
      fontFamily: {
        display: ['"Manrope"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      borderRadius: {
        card: '22px',
      },
      boxShadow: {
        soft: '0 30px 70px -20px rgba(37,77,118,0.25)',
        float: '0 12px 32px -8px rgba(18,54,83,0.18)',
        dialog: '0 35px 100px -20px rgba(16,43,76,0.35)',
      },
    },
  },
  plugins: [],
}
