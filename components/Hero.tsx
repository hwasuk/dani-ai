
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest animate-pulse">
          AI Transformation Consultant
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black font-futuristic mb-6 leading-tight">
          Experience the Future<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            with Dain
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          인공지능 교육 전문가 및 AI 트랜스포메이션 컨설턴트.<br />
          복잡한 기술을 실무의 언어로 변환하여 기업의 잠재력을 깨웁니다.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Start Journey</span>
            <div className="absolute inset-0 bg-cyan-400 translate-y-full transition-transform group-hover:translate-y-0" />
          </button>
          
          <button 
             onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
             className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white font-bold rounded-xl transition-all hover:bg-slate-700 active:scale-95"
          >
            View Career
          </button>
        </div>
      </div>

      {/* 3D Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>
        <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
