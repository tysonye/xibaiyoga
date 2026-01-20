/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#2D5A3D',      // 森林绿 - 主色
          secondary: '#4A7C5F',    // 柔和绿 - 悬停/强调
          accent: '#E8B4A6',       // 暖粉 - 高亮/CTA
          dark: '#1A2F23',         // 深绿 - 背景/文字
          light: '#F5F8F6',        // 浅绿灰 - 分区背景
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Georgia', 'serif'], // 标题用衬线体，更有品质感
      }
    },
  },
  plugins: [],
}