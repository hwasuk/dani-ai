
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: '생성형 AI 실무 워크숍',
      desc: '프롬프트 엔지니어링 및 AI 툴 활용 능력 강화 교육',
      details: ['Prompt Design', 'Tool Mastery', 'Creative AI']
    },
    {
      title: 'AI 기반 업무 자동화 컨설팅',
      desc: '노코드 툴과 AI를 결합한 스마트 워크플레이스 구축',
      details: ['No-Code Automation', 'Workflow Optimization', 'Efficiency']
    },
    {
      title: 'AI 리터러시 강연',
      desc: '비전공자도 쉽게 이해하는 인공지능 기술의 현재와 미래',
      details: ['Tech For Everyone', 'Future Trends', 'Insight Sharing']
    },
    {
      title: '기업 맞춤형 AI 가이드라인',
      desc: '효율적이고 안전한 AI 도입을 위한 전략 수립',
      details: ['Risk Management', 'Ethics', 'Custom Strategy']
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-futuristic mb-4">Core Services</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-cyan-500 rounded-full blur-2xl" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 relative z-10 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm mb-6 relative z-10">
                {service.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {service.details.map((tag, tIdx) => (
                  <span key={tIdx} className="px-2 py-1 text-[10px] uppercase tracking-wider bg-white/5 rounded-md border border-white/10 text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                <button className="text-cyan-400 text-sm font-bold flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
