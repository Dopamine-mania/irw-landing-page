import { motion } from 'framer-motion';
import { ArrowRight, Globe2, Sparkles } from 'lucide-react';

const LandingPage = () => {
  const APP_URL = "https://flow.inresonancewell.com";

  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-brand-500/30 font-sans">

      {/* --- 全局噪点 --- */}
      <div className="noise-overlay" />

      {/* --- 背景视频层 (色调调整) --- */}
      <div className="fixed inset-0 z-0 bg-void">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50 scale-105"
        >
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* 蓝黑色调遮罩 - 打造深海科技感 */}
        <div className="absolute inset-0 bg-void/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-hero-vignette opacity-90" />
      </div>

      {/* --- 顶部导航 --- */}
      <nav className="relative z-20 w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">

        {/* Left Side: Logo & Brand Name */}
        <div className="flex items-center gap-4">
          {/* 关键修复：限制 Logo 宽高，防止撑爆页面 */}
          <img
            src="/assets/logo.png"
            alt="In Resonance Well"
            className="w-10 h-10 object-contain drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]"
          />

          <div className="flex flex-col justify-center">
            <span className="text-sm font-bold tracking-[0.15em] text-white uppercase leading-tight">
              In Resonance
            </span>
            <span className="text-[10px] font-medium tracking-[0.3em] text-brand-400 uppercase leading-tight">
              Well Labs
            </span>
          </div>
        </div>

        {/* Right Side: Contact */}
        <a
          href="mailto:support@inresonancewell.com"
          className="text-xs font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full hover:bg-white/5"
        >
          Contact
        </a>

      </nav>

      {/* --- 核心内容区 --- */}
      <main className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 text-center">

        {/* 标签: 科技感边框 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-900/10 backdrop-blur-md shadow-[0_0_20px_rgba(14,165,233,0.15)]"
        >
          <Sparkles size={12} className="text-brand-400" />
          <span className="text-[10px] font-bold tracking-[0.2em] text-brand-100 uppercase">
            The Cyber-Spiritual Metaverse
          </span>
        </motion.div>

        {/* 主标题: 蓝白渐变 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-8xl font-light tracking-tight text-white mb-6 leading-none"
        >
          Tune Your <br/>
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-400 to-brand-600">
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
          Building the next generation of digital wellbeing tools.<br/>
          Experience our flagship product: <strong className="text-white">Flow</strong>.
        </motion.p>

        {/* 核心按钮: 蓝色辉光 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href={APP_URL}
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-white text-black rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-500 hover:scale-105 shadow-[0_0_40px_rgba(56,189,248,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)]"
          >
            <span>Enter Flow</span>
            <div className="bg-black text-white rounded-full p-1 group-hover:-rotate-45 transition-transform duration-300">
              <ArrowRight size={14} />
            </div>
          </a>

          <p className="mt-6 text-[10px] text-gray-600 uppercase tracking-widest">
            WebGL Powered • Headphones Recommended
          </p>
        </motion.div>

      </main>

      {/* --- 底部 (方案 A: 极简版) --- */}
      <footer className="relative z-20 w-full py-8 border-t border-white/5 bg-void">
        <div className="flex flex-col items-center justify-center gap-2 text-center">

          {/* 地点 */}
          <div className="flex items-center gap-2 text-indigo-200/90">
            <Globe2 size={14} />
            <span className="text-xs font-bold tracking-[0.25em] uppercase font-sans">
              London, UK
            </span>
          </div>

          {/* 版权 */}
          <div className="text-[10px] text-gray-400 font-bold font-sans tracking-wide">
            &copy; 2025 In Resonance Well Ltd. All rights reserved.
          </div>

        </div>
      </footer>

    </div>
  );
};

export default LandingPage;
