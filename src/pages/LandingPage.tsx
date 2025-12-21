import { motion } from 'framer-motion';
import { ArrowRight, Globe2, Sparkles } from 'lucide-react';

const LandingPage = () => {
  const APP_URL = "https://flow.inresonancewell.com";

  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-brand-500/30 font-sans">

      {/* --- 全局噪点 --- */}
      <div className="noise-overlay" />

      {/* --- 背景层 (深海蓝渐变 - 不依赖视频) --- */}
      <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, zIndex: 0 }}>
        {/* 主背景：深邃的蓝黑渐变 */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: 'radial-gradient(ellipse at top, #0c4a6e 0%, #1e3a8a 20%, #1e1b4b 40%, #0f172a 60%, #020617 100%)'
        }} />

        {/* 动态光晕效果 - 增强版 */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: 'radial-gradient(circle at 30% 20%, rgba(56, 189, 248, 0.4) 0%, rgba(14, 165, 233, 0.2) 30%, transparent 60%)',
          animation: 'pulse 8s ease-in-out infinite'
        }} />

        {/* 第二层光晕 - 右下角 */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: 'radial-gradient(circle at 70% 80%, rgba(37, 99, 235, 0.3) 0%, rgba(14, 165, 233, 0.15) 25%, transparent 50%)',
          animation: 'pulse 10s ease-in-out infinite reverse'
        }} />

        {/* 底部暗角 */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: 'linear-gradient(to bottom, transparent 0%, transparent 70%, rgba(2, 4, 10, 0.8) 100%)'
        }} />
      </div>

      {/* --- 顶部导航 --- */}
      <nav style={{
        position: 'relative',
        zIndex: 20,
        width: '100%',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '80rem',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>

        {/* Left Side: Logo & Brand Name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* 关键修复：使用 inline style 强制尺寸（Tailwind 4.x 兼容性问题）*/}
          <img
            src="/assets/logo.png"
            alt="In Resonance Well"
            style={{ width: '40px', height: '40px', objectFit: 'contain' }}
            className="drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]"
          />

          <div className="flex flex-col justify-center">
            <span className="text-sm font-bold tracking-[0.15em] text-white uppercase leading-tight">
              In Resonance Well
            </span>
            <span className="text-[10px] font-medium tracking-[0.3em] text-brand-400 uppercase leading-tight">
              Labs
            </span>
          </div>
        </div>

        {/* Right Side: Contact */}
        <a
          href="mailto:support@inresonancewell.com"
          style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            color: '#9ca3af',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            borderRadius: '9999px',
            transition: 'all 0.3s',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#9ca3af';
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
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

        {/* 主标题: 蓝白渐变 - 使用 Orbitron 艺术字体 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 300,
            letterSpacing: '0.05em',
            color: 'white',
            marginBottom: '1.5rem',
            lineHeight: 1
          }}
        >
          Tune Your <br/>
          <span
            style={{
              fontWeight: 900,
              background: 'linear-gradient(90deg, #67e8f9 0%, #38bdf8 50%, #3b82f6 100%)',
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
          className="text-base md:text-lg text-gray-400 max-w-lg mb-12 leading-relaxed font-light"
        >
          Building the next generation of digital wellbeing tools.<br/>
          Experience our flagship product: <strong className="text-white">Flow</strong>.
        </motion.p>

        {/* 核心按钮: 白底黑字高对比 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href={APP_URL}
            style={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              paddingLeft: '2.5rem',
              paddingRight: '2.5rem',
              paddingTop: '1rem',
              paddingBottom: '1rem',
              background: '#ffffff',
              color: '#000000',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '0.875rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              transition: 'all 0.5s',
              boxShadow: '0 0 40px rgba(56, 189, 248, 0.5)',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 0 60px rgba(56, 189, 248, 0.8)';
              const arrow = e.currentTarget.querySelector('.arrow-icon');
              if (arrow) (arrow as HTMLElement).style.transform = 'rotate(-45deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 0 40px rgba(56, 189, 248, 0.5)';
              const arrow = e.currentTarget.querySelector('.arrow-icon');
              if (arrow) (arrow as HTMLElement).style.transform = 'rotate(0deg)';
            }}
          >
            <span>Enter Flow</span>
            <div
              className="arrow-icon"
              style={{
                background: '#000000',
                color: '#ffffff',
                borderRadius: '9999px',
                padding: '0.25rem',
                transition: 'transform 0.3s'
              }}
            >
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
