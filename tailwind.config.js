/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'Noto Sans SC', 'sans-serif'],
      },
      colors: {
        // 新的深空黑背景 (Deep Tech Black)
        void: '#02040A',
        // 科技蓝 (Electric Blue)
        brand: {
          100: '#e0f2fe', // 极淡的冰蓝色 (用于文字高亮背景)
          400: '#38bdf8', // 青空蓝 (用于副标题)
          500: '#0ea5e9', // 主品牌色 (用于按钮)
          600: '#2563eb', // 深一点的蓝 (用于渐变末端)
          900: '#0c4a6e', // 深海蓝 (用于标签背景 bg-brand-900/10)
        },
        starlight: '#F8FAFC',
      },
      backgroundImage: {
        // 新的遮罩：从深蓝到深黑的渐变，更有质感
        'hero-vignette': 'radial-gradient(circle at center, transparent 0%, #02040A 120%)',
        'blue-glow': 'conic-gradient(from 180deg at 50% 50%, #2563eb 0deg, #38bdf8 180deg, #2563eb 360deg)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
