import React from 'react';
import { 
  TrendingUp, 
  PieChart, 
  Cpu, 
  Coins, 
  Landmark, 
  Award, 
  Globe, 
  Target, 
  Check, 
  Phone, 
  Mail,
  ChevronRight
} from 'lucide-react';
import { EbsLogo } from '../BrandLogos';

interface PageOneProps {
  onPillarClick?: (title: string) => void;
}

export const PageOne: React.FC<PageOneProps> = ({ onPillarClick }) => {
  return (
    <div 
      id="pdf-page-1"
      className="a4-sheet mx-auto bg-white text-[#0a2540] shadow-2xl rounded-sm overflow-hidden flex flex-col justify-between print:shadow-none select-text border border-slate-200/80"
    >
      {/* Top Header Section */}
      <div className="pt-8 px-10 pb-4 flex items-center justify-between relative z-10">
        {/* EBS Logo + Tagline */}
        <div className="flex items-center gap-4">
          <EbsLogo variant="dark" />
          <div className="h-10 w-[1.5px] bg-[#0a2540]/60"></div>
          <div className="flex flex-col font-condensed font-extrabold tracking-wider text-[13px] leading-tight text-[#0a2540]">
            <span>PENSEZ</span>
            <span>INNOVER</span>
            <span>RÉUSSIR</span>
          </div>
        </div>

        {/* Accreditation & Degree Badges */}
        <div className="flex flex-col items-end gap-2">
          <div className="bg-[#024b67] text-white px-4 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-xs flex items-center gap-1.5">
            <span>Licence</span>
            <span className="opacity-50">•</span>
            <span>Bac+3</span>
            <span className="opacity-50">•</span>
            <span>3 ans</span>
          </div>

          {/* Authentic Scalloped Rosette Accreditation Ribbon */}
          <div className="flex items-center gap-2.5 text-right">
            <div className="relative flex items-center justify-center">
              {/* Rosette ribbon tails */}
              <div className="absolute -bottom-2 flex gap-0.5 z-0">
                <div className="w-1.5 h-3 bg-[#007f8c] rotate-[15deg] transform origin-top"></div>
                <div className="w-1.5 h-3 bg-[#007f8c] -rotate-[15deg] transform origin-top"></div>
              </div>
              {/* Rosette scalloped seal */}
              <div className="relative z-10 w-7 h-7 rounded-full bg-gradient-to-br from-[#00b4d8] to-[#007f8c] text-white flex items-center justify-center shadow-xs border-2 border-white ring-1 ring-[#0096a6]/30">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
            </div>

            <div className="flex flex-col text-right leading-none">
              <span className="text-[11px] font-condensed font-extrabold text-[#0a2540] tracking-wider uppercase">
                DIPLÔME ACCRÉDITÉ
              </span>
              <span className="text-[10px] font-condensed font-extrabold text-[#0096a6] tracking-wider uppercase mt-0.5">
                PAR L'ÉTAT TUNISIEN
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Body with Curved Photo & Graphics */}
      <div className="relative flex-1 px-10 py-4 grid grid-cols-12 gap-6 items-center">
        {/* Left Column: Typography & Content */}
        <div className="col-span-6 z-10 pr-2 flex flex-col justify-center">
          {/* Main Title */}
          <div className="mb-4">
            <h2 className="text-3xl sm:text-4xl font-condensed font-black tracking-tight text-[#0a2540] leading-none uppercase">
              LICENCE EN
            </h2>
            <h1 className="text-6xl sm:text-7xl font-condensed font-black tracking-tight text-[#0a2540] leading-none uppercase mt-1">
              FINANCE
            </h1>
            <div className="w-20 h-1.5 bg-[#0096a6] mt-3 rounded-full"></div>
          </div>

          {/* Subtitle / Promise */}
          <div className="mt-2 mb-4">
            <h3 className="text-xs sm:text-[13px] font-condensed font-bold leading-snug uppercase tracking-wide text-[#0a2540]">
              MAÎTRISEZ <span className="text-[#0096a6] font-extrabold">LA FINANCE, LES DONNÉES</span> ET{' '}
              <span className="text-[#0096a6] font-extrabold">L'INTELLIGENCE ARTIFICIELLE</span> POUR ACCOMPAGNER LES DÉCISIONS FINANCIÈRES DE DEMAIN.
            </h3>
          </div>

          {/* Descriptive text */}
          <p className="text-[11.5px] leading-relaxed text-slate-600 text-justify font-normal">
            La Licence en Finance d'EBS prépare des spécialistes capables d'évoluer dans les domaines de la 
            finance d'entreprise, de la banque, des marchés financiers et de la FinTech. Grâce aux certifications 
            Bloomberg, à l'analyse de données et à l'Intelligence Artificielle, vous développerez des compétences 
            techniques et analytiques particulièrement recherchées par les entreprises et les institutions financières.
          </p>
        </div>

        {/* Right Column: Visual Photo Composition with Organic Curved Mask */}
        <div className="col-span-6 relative h-[480px] flex items-center justify-end overflow-visible">
          {/* Decorative curve backdrop */}
          <div 
            className="absolute top-0 right-[-40px] w-[118%] h-full rounded-l-[180px] overflow-hidden shadow-2xl border-l-[5px] border-[#0096a6]"
            style={{
              background: 'linear-gradient(145deg, #0a2540 0%, #0d3b66 60%, #0096a6 100%)'
            }}
          >
            {/* Background professional imagery with overlay */}
            <div className="relative w-full h-full">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80" 
                alt="Finance Executive"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center mix-blend-luminosity opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540] via-[#0a2540]/30 to-transparent"></div>
              
              {/* Financial Stock Candlestick Chart Glow Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-80">
                <svg className="w-full h-full" viewBox="0 0 400 500" fill="none">
                  {/* Candlestick 1 */}
                  <line x1="70" y1="210" x2="70" y2="140" stroke="#00e5ff" strokeWidth="1.5" />
                  <rect x="64" y="155" width="12" height="35" fill="#00e5ff" rx="1.5" />
                  <text x="56" y="132" fill="#00e5ff" fontSize="11" fontFamily="monospace" fontWeight="bold">31.012</text>

                  {/* Candlestick 2 */}
                  <line x1="160" y1="160" x2="160" y2="80" stroke="#38bdf8" strokeWidth="1.5" />
                  <rect x="154" y="95" width="12" height="45" fill="#38bdf8" rx="1.5" />
                  <text x="146" y="72" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">44.870</text>

                  {/* Candlestick 3 */}
                  <line x1="240" y1="190" x2="240" y2="120" stroke="#a5f3fc" strokeWidth="1.5" />
                  <rect x="234" y="130" width="12" height="30" fill="#a5f3fc" rx="1.5" />

                  {/* Upward trend curve */}
                  <path d="M 30 260 Q 110 200, 160 110 T 320 50" stroke="#00e5ff" strokeWidth="2.5" fill="none" strokeDasharray="5 3" />
                  <circle cx="160" cy="110" r="4" fill="#ffffff" stroke="#00e5ff" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>

          {/* Floating Badges along the right edge */}
          <div className="relative z-20 flex flex-col gap-2.5 my-auto mr-1">
            {[
              { icon: TrendingUp, title: "ANALYSE", subtitle: "FINANCIÈRE" },
              { icon: PieChart, title: "DATA", subtitle: "ANALYTICS" },
              { icon: Cpu, title: "INTELLIGENCE", subtitle: "ARTIFICIELLE" },
              { icon: Coins, title: "MARCHÉS", subtitle: "FINANCIERS" },
              { icon: Landmark, title: "GESTION", subtitle: "DES RISQUES" }
            ].map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div 
                  key={idx}
                  className="bg-[#0a2540]/90 hover:bg-[#0096a6] transition-all backdrop-blur-md text-white px-3 py-2 rounded-xl border border-white/20 hover:border-cyan-300 shadow-xl flex items-center gap-2.5 w-[150px] group cursor-default"
                >
                  <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center text-cyan-300 group-hover:text-white transition-colors flex-shrink-0">
                    <Icon className="w-4 h-4 stroke-[2.2]" />
                  </div>
                  <div className="text-[9px] font-condensed font-extrabold uppercase leading-tight tracking-wider">
                    <div>{badge.title}</div>
                    <div className="text-cyan-300 group-hover:text-white">{badge.subtitle}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 5 Bottom Pillars Section */}
      <div className="px-10 py-4 bg-slate-50 border-t border-b border-slate-200">
        <div className="grid grid-cols-5 gap-3 text-center divide-x divide-slate-200">
          {[
            { icon: TrendingUp, title: "EXPERTISE", sub: "FINANCIÈRE" },
            { icon: Landmark, title: "DÉCISIONS", sub: "ÉCLAIRÉES" },
            { icon: Award, title: "CERTIFICATIONS", sub: "INCLUSES" },
            { icon: Globe, title: "OUVERTURE", sub: "INTERNATIONALE" },
            { icon: Target, title: "CARRIÈRE", sub: "D'AVENIR" }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                onClick={() => onPillarClick?.(`${item.title} ${item.sub}`)}
                className={`flex flex-col items-center p-1.5 rounded-xl hover:bg-white hover:shadow-xs transition-all cursor-pointer group ${
                  idx !== 0 ? 'pl-3' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-[#0096a6] border border-slate-200 group-hover:border-[#0096a6] flex items-center justify-center text-[#0a2540] group-hover:text-white transition-all shadow-xs mb-1.5">
                  <Icon className="w-4 h-4 stroke-[2]" />
                </div>
                <div className="text-[10.5px] font-condensed font-black uppercase tracking-wider text-[#0a2540] leading-tight group-hover:text-[#0096a6] transition-colors">
                  <div>{item.title}</div>
                  <div>{item.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Contact Bar */}
      <div className="px-10 py-3 bg-white text-[#0a2540] flex items-center justify-between text-[11px] font-medium border-t border-slate-200">
        <div className="flex items-center gap-5">
          <a href="https://www.ebs.tn" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[#0096a6] transition-colors">
            <Globe className="w-3.5 h-3.5 text-[#0096a6]" />
            <span className="font-bold">www.ebs.tn</span>
          </a>
          <span className="text-slate-300">|</span>
          <a href="tel:+21671182625" className="flex items-center gap-1.5 hover:text-[#0096a6] transition-colors">
            <Phone className="w-3.5 h-3.5 text-[#0096a6]" />
            <span>+216 71 18 26 25</span>
          </a>
          <span className="text-slate-300">|</span>
          <a href="mailto:info@ebs.tn" className="flex items-center gap-1.5 hover:text-[#0096a6] transition-colors">
            <Mail className="w-3.5 h-3.5 text-[#0096a6]" />
            <span>info@ebs.tn</span>
          </a>
        </div>

        <div className="border-l-2 border-[#0a2540] pl-3">
          <span className="font-condensed font-extrabold text-[11px] tracking-wider uppercase text-[#0a2540]">
            UN PROGRAMME TOURNÉ VERS L'AVENIR
          </span>
        </div>
      </div>
    </div>
  );
};

