/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#2D5A3D',
        'brand-secondary': '#4A7C5F',
        'brand-accent': '#E8B4A6',
        'brand-dark': '#1A2F23',
        'brand-light': '#F5F8F6',
      },
    },
  },
  plugins: [],
}