/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#0d9488', // A calming teal
        'brand-secondary': '#f0f9ff', // A very soft blue/white
        'text-base': '#1e293b', // A dark slate for text
        'text-muted': '#64748b', // A lighter slate for subtitles
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}