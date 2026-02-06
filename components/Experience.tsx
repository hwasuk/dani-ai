
import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: '생성형 AI 실무 교육 전문가',
      description: '다양한 기업 및 기관 대상 AI 툴(제미나이, 챗GPT 등) 활용 강의 수행',
      icon: '🎓'
    },
    {
      role: 'AI 도입 전략 수석 컨설턴트',
      description: '조직 내 업무 효율 극대화를 위한 AI 워크플로우 설계',
      icon: '⚡'
    },
    {
      role: 'AI 커뮤니티 및 콘텐츠 디렉터',
      description: '최신 AI 기술 동향 분석 및 실무 적용 사례 전파',
      icon: '📡'
    }
  ];

  return (
    <section id="experience" className="py-24 bg-black/40 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-futuristic mb-4">Career Summary</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"></div>
          <p className="mt-6 text-slate-400 max-w-xl">
            AI 기술의 실질적인 활용과 혁신적인 변화를 이끌어온 Dain의 발자취입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-md hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{exp.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">{exp.role}</h3>
              <p className="text-slate-400 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
