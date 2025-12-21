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
        void: '#030305', // 比纯黑更有质感的深空黑
        starlight: '#F3F4F6', // 柔和白
        glass: 'rgba(255, 255, 255, 0.05)', // 玻璃底色
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-vignette': 'radial-gradient(circle at center, transparent 0%, #030305 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
