import { motion } from 'framer-motion';
import { ArrowRight, Globe2, Sparkles } from 'lucide-react';

const LandingPage = () => {
  const APP_URL = "https://flow.inresonancewell.com";

  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-indigo-500/30">

      {/* --- 全局噪点层 (Texture) --- */}
      <div className="noise-overlay" />

      {/* --- 背景视频层 --- */}
      <div className="fixed inset-0 z-0">
        {/* 视频 */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 scale-105" // 稍微放大防止白边
        >
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* 暗角遮罩 (Vignette) - 让视线集中在中间 */}
        <div className="absolute inset-0 bg-hero-vignette opacity-80" />
        {/* 底部渐变 - 保证文字可读 */}
        <div className="absolute inset-0 bg-gradient-to-b from-void/30 via-transparent to-void/90" />
      </div>

      {/* --- 顶部导航 --- */}
      <nav className="relative z-20 w-full px-8 py-8 flex justify-between items-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse-slow" />
          <span className="text-sm font-light tracking-[0.2em] uppercase text-white/80">
            In Resonance Well
          </span>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          href="mailto:support@inresonancewell.com"
          className="text-xs font-medium text-white/60 hover:text-white transition-colors uppercase tracking-widest border-b border-transparent hover:border-white/50 pb-1"
        >
          Contact
        </motion.a>
      </nav>

      {/* --- 核心内容区 (Hero) --- */}
      <main className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 text-center">

        {/* 标签 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <Sparkles size={12} className="text-indigo-400" />
          <span className="text-[10px] font-bold tracking-[0.15em] text-indigo-100 uppercase">
            The Cyber-Spiritual Metaverse
          </span>
        </motion.div>

        {/* 主标题 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-8xl font-light tracking-tight text-white mb-6 leading-none"
        >
          Tune Your <br/>
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-white to-purple-200">
            Frequency.
          </span>
        </motion.h1>

        {/* 副标题 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg text-gray-400 max-w-lg mb-12 leading-relaxed font-light"
        >
          通过古老的五行智慧与 WebGL 数字艺术，<br className="hidden md:block"/>
          在浏览器中重建你的内在能量场。
        </motion.p>

        {/* 核心按钮 (Portal) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href={APP_URL}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium text-sm tracking-widest uppercase transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]"
          >
            <span>Enter Flow</span>
            <div className="bg-black text-white rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
              <ArrowRight size={14} />
            </div>
          </a>

          <p className="mt-4 text-[10px] text-gray-500 uppercase tracking-widest">
            No Install Required • Headphones Recommended
          </p>
        </motion.div>

      </main>

      {/* --- 底部状态栏 --- */}
      <footer className="relative z-20 w-full px-8 py-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 uppercase tracking-widest border-t border-white/5">
        <div className="flex items-center gap-2">
          <Globe2 size={12} />
          <span>London, UK</span>
        </div>

        <div className="flex gap-6">
          <span>WebGL Powered</span>
          <span>432Hz Audio</span>
          <span>AI Diagnosis</span>
        </div>

        <div>
          © 2025 In Resonance Well Ltd.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
