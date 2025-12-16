import React from 'react';
import { ArrowRight, Waves, Zap, Mic } from 'lucide-react';

const LandingPage = () => {
  // 产品跳转链接
  const APP_URL = "https://flow.inresonancewell.com";
  const CONTACT_EMAIL = "support@inresonancewell.com";

  return (
    <div className="relative min-h-screen flex flex-col font-sans selection:bg-indigo-500/30">

      {/* --- Background Video Layer --- */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[#0a0a0f]/60 z-10" /> {/* 黑色遮罩，确保文字可读 */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/hero-poster.jpg" // 移动端兜底图
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* --- Navbar (Minimalist) --- */}
      <nav className="relative z-20 w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="text-xl font-bold tracking-widest uppercase text-white/90">
          In Resonance Well
        </div>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-sm text-gray-300 hover:text-white transition-colors tracking-wide"
        >
          Contact
        </a>
      </nav>

      {/* --- Hero Section --- */}
      <main className="relative z-20 flex-1 flex flex-col items-center justify-center px-6 text-center mt-10 mb-20">

        {/* Badge: 公司愿景 */}
        <div className="mb-8 animate-fade-in-up">
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium tracking-[0.2em] text-indigo-200 uppercase">
            Cyber-Spiritual Studio
          </span>
        </div>

        {/* H1: 产品发布 */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-2xl max-w-4xl leading-tight">
          Tune your frequency <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            with Elemental Flow.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300/90 max-w-2xl mb-12 font-light leading-relaxed">
          首个融合东方五行智慧与 WebGL 粒子的 3D 疗愈元宇宙。
          <br className="hidden md:block"/>
          Discover the first AI-powered healing space for the spatial web.
        </p>

        {/* CTA Button (The Portal Key) */}
        <a
          href={APP_URL}
          className="group relative px-8 py-4 bg-white text-[#0a0a0f] rounded-full font-bold text-lg tracking-wide hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(99,102,241,0.6)]"
        >
          <span className="flex items-center gap-2">
            ENTER THE VOID
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </a>

        {/* Social Proof / Tech Stack */}
        <p className="mt-12 text-xs text-gray-500 tracking-widest uppercase">
          Powered by React Three Fiber & OpenAI
        </p>
      </main>

      {/* --- Features Grid (Why Flow?) --- */}
      <section className="relative z-20 w-full max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Feature 1 */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <Waves className="text-cyan-400 mb-4" size={32} />
            <h3 className="text-xl font-bold text-white mb-2">Immersive Particles</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              漫游于由 50,000 个光粒子构建的赛博山水。
              <br/>Travel through 3D landscapes built from light.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <Mic className="text-rose-400 mb-4" size={32} />
            <h3 className="text-xl font-bold text-white mb-2">AI Voice Diagnosis</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              AI 语音情绪分析，为你匹配水(静)或火(动)的能量。
              <br/>Voice analysis determines your missing element.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <Zap className="text-amber-400 mb-4" size={32} />
            <h3 className="text-xl font-bold text-white mb-2">432Hz Resonance</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              校准脉轮能量的空间音频。
              <br/>Spatial audio aligned with your energy centers.
            </p>
          </div>

        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="relative z-20 py-8 text-center text-xs text-gray-600 border-t border-white/5">
        <p>&copy; 2025 In Resonance Well Ltd. Registered in UK.</p>
        <div className="flex justify-center gap-4 mt-2">
           <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
           <span>•</span>
           <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gray-400">Support</a>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;
