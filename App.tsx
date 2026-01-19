import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  ShieldCheck, 
  Target, 
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Globe,
  GraduationCap,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// --- Interfaces ---
interface Achievement {
  agency: string;
  item: string;
  performance: string;
}

interface PainPoint {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

// --- Data ---
const PAIN_POINTS: PainPoint[] = [
  {
    icon: <Target className="w-10 h-10 text-indigo-600" />,
    title: "정보의 한계",
    description: <>수만 개의 공고 중 <br /> 우리 회사가 이길 공고를 <br /> 선별하지 못해 <br /> 발생하는 리소스 낭비</>
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-indigo-600" />,
    title: "행정의 리스크",
    description: <>까다로운 나라장터 시스템과 <br /> 서류 실수로 인한 <br /> 투찰 자격 박탈 및 결격 사유 발생</>
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-indigo-600" />,
    title: "가격 설계의 한계",
    description: <>과거 데이터를 무시한 채 <br /> ‘운’에 맡기는 <br /> 투찰가 산정으로 인한 <br /> 지속적인 탈락</>
  },
  {
    icon: <AlertCircle className="w-10 h-10 text-indigo-600" />,
    title: "상품 전략의 공백",
    description: <>실제 납품 가능한 아이템이 없어 <br /> 시작조차 못 하는 상황</>
  }
];

const STRATEGIES = [
  {
    id: "01",
    icon: <Globe className="w-8 h-8 text-white" />,
    title: "NETWORK",
    subtitle: "업계 사람만 아는 ‘진짜 정보’",
    points: [
      "인터넷 검색으로는 알기 어려운 실제 현장 사례 공유",
      "공공조달 과정에서 자주 막히는 지점 정리"
    ]
  },
  {
    id: "02",
    icon: <BarChart3 className="w-8 h-8 text-white" />,
    title: "DATA",
    subtitle: "통계로 이해하는 낙찰 가격",
    points: [
      "기존 공공조달 데이터 분석·해석 방법",
      "‘운’이 아닌 수치 기준의 금액 판단 방식"
    ]
  },
  {
    id: "03",
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    title: "COACHING",
    subtitle: "실무 기준을 익히는 1:1 가이드",
    points: [
      "성공 가능성이 있는 공고 선별 기준 학습",
      "나라장터 절차와 서류 단계별 정리",
      "낙찰 이후 행정·납품 과정 사전 이해"
    ]
  },
  {
    id: "04",
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    title: "ADMIN",
    subtitle: "실수를 줄이는 기본기 정리",
    points: [
      "나라장터 등록 및 기본 행정 절차 이해",
      "자주 발생하는 실수와 탈락 사례 예방 기준"
    ]
  }
];

const ACHIEVEMENTS: Achievement[] = [
  { agency: "OO 고등학교", item: "기자재 2종 구매 건", performance: "2,500만 원" },
  { agency: "OO 시청", item: "시립도서관 열람용 잡지 구매 건", performance: "3,300만 원" },
  { agency: "OO 공공기관", item: "사무용 가구 및 전산 장비 교체", performance: "6,500만 원" },
  { agency: "OO 초등학교", item: "교육용 콘텐츠 및 교구재 납품", performance: "1,500만 원" },
  { agency: "OO 시청", item: "폭염피해 예방 물품 구매 건", performance: "2,000만 원" },
  { agency: "OO 부대", item: "리프트(자동차용) 구매 건", performance: "2,200만 원" }
];

// --- Components ---

const Logo = ({ className = "h-8" }: { className?: string }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`flex items-center ${className}`}>
      {!hasError ? (
        <img 
          src="https://raw.githubusercontent.com/StackBlitz/stackblitz-images/main/j-company-logo.png" 
          alt="Jcompany Logo" 
          className="h-full w-auto object-contain"
          onError={() => setHasError(true)}
        />
      ) : (
        <span className="text-xl font-black text-slate-900 tracking-tighter">JCOMPANY</span>
      )}
    </div>
  );
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <Logo className="h-10" />
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden bg-slate-950">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-900/20 to-transparent pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="max-w-3xl">
        <h1 className="text-[2rem] sm:text-4xl md:text-7xl font-black text-white leading-[1.3] mb-6 tracking-tighter break-keep">
          공공조달<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
            낙찰의 공식을 깨우다
          </span>
        </h1>
        <div className="text-lg md:text-2xl text-slate-400 font-medium mb-10 leading-relaxed break-keep">
          <p>데이터는 거짓말을 하지 않습니다.</p>
          <p>전략가들이 설계하는 압도적인 수주 성과,</p>
          <p>이제 귀사의 비즈니스가 증명할 차례입니다.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => {
              const el = document.getElementById('apply-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }} 
            className="group bg-indigo-600 text-white px-10 py-5 rounded-xl text-xl font-black flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all transform hover:-translate-y-1 shadow-2xl shadow-indigo-600/30 text-center"
          >
            실전 교육 신청하기
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
  </section>
);

const MarketOpportunity = () => (
  <section id="market" className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-2xl shadow-indigo-500/5 border border-slate-100 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-8 leading-tight tracking-tight break-keep">
          "2026년, <br className="md:hidden" />
          대한민국 예산이 <br className="md:hidden" />
          향하는 곳은 <br className="md:hidden" />
          <span className="text-indigo-600">결국 조달 시장입니다."</span>
        </h2>
        <div className="space-y-6 text-sm md:text-xl text-slate-600 font-medium leading-relaxed break-keep">
          <p>
            남들은 불황이라는데, <br className="md:hidden" />
            <span className="text-slate-900 font-bold underline decoration-indigo-500 decoration-4 underline-offset-4">
              연간 225조 원이 <br className="md:hidden" /> 
              풀리는 시장이 있습니다.
            </span>
          </p>
          <p>
            대한민국 GDP의 9%, <br className="md:hidden" />
            그중 63%는 중소기업의 몫입니다. <br className="md:hidden" />
            준비된 사람에게는 <span className="text-indigo-600 font-bold">'역대급 기회'</span>, <br className="md:hidden" />
            <span className="inline-block">모르는 사람에게는 '남의 나라 이야기'입니다.</span>
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Agitation = () => (
  <section id="problem" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-slate-900 leading-tight break-keep">
          우리는 왜 <br className="md:hidden" /> 공공조달에 실패하는가?
        </h2>
        <div className="w-16 h-1 mx-auto mt-6 rounded-full bg-indigo-600"></div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PAIN_POINTS.map((point, idx) => (
          <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all group">
            <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
              {point.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{point.title}</h3>
            <div className="text-slate-600 leading-relaxed font-medium text-sm md:text-base break-keep">
              {point.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CoreStrategySection = () => (
  <section id="strategy" className="py-24 bg-slate-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-slate-900 leading-tight break-keep">
          당신의 낙찰을 확정 짓는 <br className="md:hidden" /> 4대 핵심 전략
        </h2>
        <div className="w-16 h-1 mx-auto mt-6 rounded-full bg-indigo-600"></div>
      </div>
      
      <div className="max-w-4xl mx-auto mb-24 text-center px-2">
        <div className="space-y-6 text-lg md:text-2xl font-medium text-slate-800 leading-relaxed break-keep">
          <p className="font-black text-slate-900 inline-block border-b-4 border-indigo-600/30 pb-1">
            시행착오는 비용입니다.
          </p>
          
          <div className="space-y-3">
            <p>혼자서 1년을 헤매며 잃는 시간과 기회비용,</p>
            <p>이제 <span className="text-indigo-600 font-black">제이컴퍼니</span> 교육을 통해 해결해보세요.</p>
          </div>

          <div className="space-y-3 pt-4">
            <p className="text-slate-600 font-bold">실제 낙찰 데이터와 현장 기준으로</p>
            <p className="text-indigo-600 font-black text-xl md:text-3xl">
              공공조달의 방향을 제시합니다.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {STRATEGIES.map((item) => (
          <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 flex flex-col h-full group hover:shadow-2xl hover:shadow-indigo-500/10 transition-all">
            <div className="bg-slate-900 p-8 flex flex-col items-center text-center border-b border-slate-800">
              <div className="mb-4 w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-600/20 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="text-indigo-500 font-black text-sm tracking-widest mb-1">{item.id}. {item.title}</span>
              <h3 className="text-xl font-bold text-white tracking-tight">{item.subtitle}</h3>
            </div>
            <div className="p-8 flex-1 bg-white">
              <ul className="space-y-4">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-bold text-sm leading-tight break-keep">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SocialProof = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ACHIEVEMENTS.length);
    }, 4000); 
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % ACHIEVEMENTS.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + ACHIEVEMENTS.length) % ACHIEVEMENTS.length);

  return (
    <section id="proof" className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-slate-900 break-keep">
            🏆 공공조달 낙찰 기록
          </h2>
          <p className="text-lg md:text-xl font-medium text-slate-600 break-keep">
            다음 낙찰 통지서의 주인공은 당신입니다.
          </p>
          <div className="w-16 h-1 mx-auto mt-6 rounded-full bg-indigo-600"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          <div className="hidden md:block space-y-3">
            {ACHIEVEMENTS.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-between p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-white hover:shadow-lg transition-all transform hover:-translate-y-1"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex-1">
                  <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest block mb-1">수요 기관</span>
                  <p className="text-lg font-black text-slate-900">{item.agency}</p>
                </div>
                <div className="flex-[2] px-6">
                  <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest block mb-1">입찰 품목</span>
                  <p className="text-base font-bold text-slate-600">{item.item}</p>
                </div>
                <div className="text-right min-w-[120px]">
                  <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest block mb-1">낙찰 금액</span>
                  <p className="text-xl font-black text-emerald-600">{item.performance}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="md:hidden relative">
            <div className="relative h-[280px] w-full overflow-hidden rounded-3xl">
              {ACHIEVEMENTS.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`absolute inset-0 w-full transition-all duration-700 ease-in-out transform flex flex-col justify-center bg-slate-50 border border-slate-200 rounded-3xl p-8 ${
                    idx === currentIndex ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                  }`}
                  style={{
                    transform: `translateX(${(idx - currentIndex) * 100}%)`,
                  }}
                >
                  <div className="space-y-4">
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold mb-1 uppercase tracking-widest">수요 기관</p>
                      <h4 className="text-xl font-black text-slate-900 break-keep">{item.agency}</h4>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold mb-1 uppercase tracking-widest">입찰 품목</p>
                      <p className="text-base font-bold text-slate-600 leading-snug break-keep">{item.item}</p>
                    </div>
                    <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">낙찰 금액</p>
                      <span className="text-xl font-black text-emerald-600">{item.performance}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between items-center mt-6">
              <button onClick={prevSlide} className="p-2 rounded-full bg-white border border-slate-200 text-slate-400">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {ACHIEVEMENTS.map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-indigo-600 w-6' : 'bg-slate-200'}`} />
                ))}
              </div>
              <button onClick={nextSlide} className="p-2 rounded-full bg-white border border-slate-200 text-slate-400">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="text-center p-10 md:p-14 bg-slate-900 rounded-[32px] md:rounded-[40px] shadow-2xl shadow-indigo-500/10">
            <p className="text-white text-xl md:text-2xl font-black italic leading-relaxed break-keep tracking-tight">
              "성공은 운이 아니라 선택입니다. <br className="md:hidden" /> 
              우리가 그 선택을 실력으로 증명해 드립니다."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section id="apply-section" className="py-24 md:py-32 bg-slate-50 border-t border-slate-200">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <div className="space-y-4 md:space-y-6 mb-16 text-base md:text-xl font-medium text-slate-800 leading-relaxed break-keep">
        <p className="font-black text-slate-900 underline decoration-indigo-600/20 underline-offset-8 mb-10">
          준비된 기업에게만 보이는 공고가 있습니다.
        </p>
        
        <div className="space-y-3 mb-10">
          <p>공공조달이 처음이라면,</p>
          <p>막연한 도전보다, <br className="md:hidden" /> <span className="text-indigo-600 font-bold">기준과 흐름</span>을 먼저 익히는 선택이 필요합니다.</p>
        </div>

        <div className="space-y-4">
          <p>참여 의지가 분명한 분들께</p>
          <p className="text-base md:text-xl font-bold text-slate-800 leading-relaxed">
            실전 전략과 <br className="md:hidden" /> 
            함께 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 font-black tracking-tight">공공조달에 활용 가능한 물품 공급</span>의 <br className="md:hidden" /> 
            기회를 제공합니다.
          </p>
        </div>
      </div>
      
      <a 
        href="https://forms.gle/xWm1TsE1NwNcy85AA" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-indigo-600 text-white px-8 py-6 md:px-12 md:py-7 rounded-2xl text-lg md:text-2xl font-black hover:bg-indigo-700 transition-all transform hover:-translate-y-1 shadow-2xl shadow-indigo-600/40 mt-8"
      >
        📍 실전 공공조달 교육 신청하기
        <ArrowRight className="w-6 h-6 shrink-0" />
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-950 text-slate-500 py-16 border-t border-slate-900">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-center">
        <Logo className="h-10 brightness-0 invert opacity-50" />
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <MarketOpportunity />
        <Agitation />
        <CoreStrategySection />
        <SocialProof />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}