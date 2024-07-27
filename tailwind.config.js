/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        BG: {
          main: 'var(--bg-main)',
          soft: 'var(--bg-soft)',
          dark: 'var(--bg-dark)',
        },

        TX: {
          main: 'var(--bg-main)',
          soft: 'var(--bg-soft)',
          dark: 'var(--bg-dark)',
        },
      },
    },
  },
  plugins: [],
};
