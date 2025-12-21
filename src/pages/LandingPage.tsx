import { motion } from 'framer-motion';
import { ArrowRight, Globe2, Sparkles } from 'lucide-react';

const LandingPage = () => {
  const APP_URL = "https://flow.inresonancewell.com";

  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-indigo-500/30">

      {/* --- 全局噪点层 (Texture) --- */}
      <div className="noise-overlay" />

      {/* --- 背景层 --- */}
      <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, zIndex: 0 }}>
        {/* 主背景渐变 - 明亮紫色渐变 */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: 'linear-gradient(135deg, #4338ca 0%, #7c3aed 25%, #a855f7 50%, #4c1d95 75%, #312e81 100%)'
          }}
        />

        {/* 视频层 - 可选增强 */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.15,
            mixBlendMode: 'screen'
          }}
        >
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* 柔和暗角 - 只在底部 */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: 'linear-gradient(to bottom, transparent 0%, transparent 70%, rgba(0,0,0,0.3) 100%)'
          }}
        />
      </div>

      {/* --- 顶部导航 --- */}
      <nav className="relative z-20 w-full px-8 py-8 flex justify-between items-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3"
        >
          <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse-slow" />
          <span className="text-sm font-light tracking-[0.2em] uppercase text-white/80">
            In Resonance Well
          </span>
          <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-gray-400 uppercase tracking-wider font-sans">
            LABS
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
          style={{ textShadow: '0 4px 6px rgba(0,0,0,0.3)' }}
        >
          Tune Your <br/>
          <span
            className="font-bold"
            style={{
              background: 'linear-gradient(90deg, #a5b4fc 0%, #e9d5ff 50%, #fbcfe8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Frequency.
          </span>
        </motion.h1>

        {/* 副标题 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg text-gray-300 max-w-xl mb-12 leading-relaxed font-light tracking-wide"
        >
          Building the next generation of digital wellbeing tools.<br className="hidden md:block"/>
          <span className="text-gray-400 text-sm mt-2 block">
            Experience our flagship product: Flow.
          </span>
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
      <footer className="relative z-20 w-full py-12 border-t border-white/10">
        <div className="flex flex-col items-center justify-center gap-6 text-center">

          {/* 位置信息 */}
          <div className="flex items-center gap-2 text-indigo-200/80">
            <Globe2 size={14} />
            <span className="text-xs font-bold tracking-[0.2em] uppercase font-sans">
              London, UK
            </span>
          </div>

          {/* 技术特性 - 关键修复：用点分隔 */}
          <div className="flex flex-wrap justify-center gap-4 text-[10px] font-medium text-gray-500 uppercase tracking-widest font-sans">
            <span>WebGL Powered</span>
            <span className="text-indigo-500">•</span>
            <span>432Hz Audio</span>
            <span className="text-indigo-500">•</span>
            <span>AI Diagnosis</span>
          </div>

          {/* 版权信息 */}
          <div className="text-[10px] text-gray-600 font-light font-sans">
            &copy; 2025 In Resonance Well Ltd. All rights reserved.
          </div>

        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
