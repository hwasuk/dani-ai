
import React from 'react';

const Strengths: React.FC = () => {
  const strengths = [
    {
      title: '기술의 일상화',
      desc: '복잡한 AI 기술을 누구나 바로 쓸 수 있는 실무 언어로 변환',
      stat: '98%'
    },
    {
      title: '실전형 커리큘럼',
      desc: '이론을 넘어 즉각적인 결과물을 만들어내는 핸즈온 강의',
      stat: '100+'
    },
    {
      title: '트렌드 분석력',
      desc: '급변하는 AI 생태계에서 핵심 도구를 선별하는 통찰력',
      stat: 'Elite'
    },
    {
      title: '솔루션 중심 접근',
      desc: '클라이언트 업무 현장에 즉시 도입 가능한 실용적인 해결책',
      stat: 'Expert'
    }
  ];

  return (
    <section id="strengths" className="py-24 bg-gradient-to-b from-transparent to-black/60 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold font-futuristic mb-8">
              Why Choose <br />
              <span className="text-cyan-400">Expertise in Action</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              단순히 지식을 전달하는 것에 그치지 않습니다. 
              비즈니스의 현장에서 가치를 창출하는 '진짜 AI'를 경험하게 해드립니다. 
              최신 기술의 파도를 넘어 안정적인 항해를 돕는 나침반이 되겠습니다.
            </p>
            <div className="p-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600">
               <div className="bg-slate-950 rounded-[calc(1rem-4px)] p-6">
                  <p className="text-cyan-400 font-bold mb-2">Success Rate</p>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-400 animate-pulse" style={{width: '95%'}} />
                  </div>
               </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {strengths.map((s, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="text-2xl font-black font-futuristic text-cyan-500 mb-2">{s.stat}</div>
                <h4 className="text-lg font-bold mb-2">{s.title}</h4>
                <p className="text-sm text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strengths;
