import React from 'react';
import { 
  Briefcase, 
  Users, 
  Cog, 
  Globe, 
  Award, 
  Handshake, 
  Lightbulb, 
  BrainCircuit, 
  MessageSquareText, 
  Clock, 
  CheckCircle2, 
  Rocket, 
  BarChart3, 
  PieChart, 
  Landmark, 
  Target, 
  Presentation, 
  Puzzle, 
  ClipboardList, 
  UserCheck 
} from 'lucide-react';
import { PAGE_3_WHY_EBS, PAGE_3_SOFT_SKILLS, PEDAGOGY_STEPS } from '../../data/brochureData';

interface PageThreeProps {
  onItemClick?: (title: string, description: string) => void;
}

export const PageThree: React.FC<PageThreeProps> = ({ onItemClick }) => {
  const getWhyIcon = (icon: string) => {
    switch (icon) {
      case 'Briefcase': return Briefcase;
      case 'Users': return Users;
      case 'Cog': return Cog;
      case 'Globe': return Globe;
      case 'Award': return Award;
      case 'Handshake': return Handshake;
      case 'Lightbulb': return Lightbulb;
      default: return Briefcase;
    }
  };

  const getPedagogyIcon = (icon: string) => {
    switch (icon) {
      case 'Presentation': return Presentation;
      case 'Users': return Users;
      case 'BarChart3': return BarChart3;
      case 'Puzzle': return Puzzle;
      case 'ClipboardList': return ClipboardList;
      case 'UserCheck': return UserCheck;
      default: return Presentation;
    }
  };

  return (
    <div 
      id="pdf-page-3"
      className="a4-sheet mx-auto bg-white text-[#0a2540] shadow-2xl rounded-sm overflow-hidden flex flex-col justify-between print:shadow-none select-text border border-slate-200/80"
    >
      {/* Top Header & Photo with Blocks */}
      <div className="pt-7 px-10 pb-2 grid grid-cols-12 gap-5 items-center">
        <div className="col-span-6 pr-2">
          <h3 className="text-xl sm:text-2xl font-condensed font-black tracking-tight text-[#0a2540] leading-none uppercase">
            UNE FORMATION QUI
          </h3>
          <h1 className="text-4xl sm:text-5xl font-condensed font-black tracking-tight text-[#0096a6] leading-tight uppercase">
            VOUS DONNE
          </h1>
          <h2 className="text-2xl sm:text-3xl font-condensed font-black tracking-tight text-[#0a2540] leading-none uppercase">
            UNE LONGUEUR D'AVANCE
          </h2>

          <p className="text-[10.5px] leading-relaxed text-slate-600 font-normal mt-2.5 text-justify">
            La Licence en Finance à l'EBS vous apporte bien plus que des connaissances : 
            elle développe votre rigueur, votre esprit d'analyse et votre capacité à prendre 
            les bonnes décisions dans un environnement financier en constante évolution.
          </p>
        </div>

        {/* Top Right: Photo & 5 Skill Columns underneath */}
        <div className="col-span-6 flex flex-col">
          {/* Stacks of coins & finance photo */}
          <div className="relative h-[120px] rounded-xl overflow-hidden shadow-md border border-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80" 
              alt="Finance growth and strategy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {/* Overlay simulation of F-I-N-A-N-C-E blocks */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/80 via-transparent to-transparent flex items-end justify-center pb-2">
              <div className="flex gap-1.5 px-3 py-1 bg-black/40 backdrop-blur-xs rounded-md shadow-xs">
                {['F', 'I', 'N', 'A', 'N', 'C', 'E'].map((letter, i) => (
                  <span key={i} className="w-5 h-5 bg-white text-[#0a2540] font-condensed font-black text-xs flex items-center justify-center rounded-xs shadow">
                    {letter}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 5 Compact Skill Columns underneath */}
          <div className="grid grid-cols-5 gap-1 mt-2 bg-[#0096a6] text-white p-1.5 rounded-lg shadow-xs text-center">
            <div className="flex flex-col items-center">
              <Users className="w-3.5 h-3.5 mb-0.5" />
              <span className="text-[7.5px] font-condensed font-black uppercase leading-tight">ANALYSE<br/>DÉCISION<br/>IMPACT</span>
            </div>
            <div className="flex flex-col items-center border-l border-white/20">
              <BarChart3 className="w-3.5 h-3.5 mb-0.5" />
              <span className="text-[7.5px] font-condensed font-black uppercase leading-tight">COMPRÉHENSION<br/>STRATÉGIE<br/>PERFORMANCE</span>
            </div>
            <div className="flex flex-col items-center border-l border-white/20">
              <PieChart className="w-3.5 h-3.5 mb-0.5" />
              <span className="text-[7.5px] font-condensed font-black uppercase leading-tight">MAÎTRISE<br/>RISQUES<br/>OPPORTUNITÉS</span>
            </div>
            <div className="flex flex-col items-center border-l border-white/20">
              <Landmark className="w-3.5 h-3.5 mb-0.5" />
              <span className="text-[7.5px] font-condensed font-black uppercase leading-tight">EXPERTISE<br/>FINANCIÈRE<br/>RESPONSABLE</span>
            </div>
            <div className="flex flex-col items-center border-l border-white/20">
              <Target className="w-3.5 h-3.5 mb-0.5" />
              <span className="text-[7.5px] font-condensed font-black uppercase leading-tight">VISION<br/>VALEUR<br/>RÉSULTATS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dual Columns: Pourquoi Choisir EBS (Left) & Compétences Transversales (Right) */}
      <div className="px-10 py-1 grid grid-cols-12 gap-5 items-stretch">
        {/* Left Column: Pourquoi Choisir (7 reasons) */}
        <div className="col-span-6 bg-slate-50 p-3 rounded-xl border border-slate-200/80 flex flex-col justify-between">
          <div className="bg-[#0a2540] text-white py-1.5 px-3 rounded-lg text-center mb-2 shadow-xs">
            <h3 className="text-[10.5px] font-condensed font-extrabold uppercase tracking-wider">
              POURQUOI CHOISIR LA LICENCE EN FINANCE À L'EBS ?
            </h3>
          </div>

          <div className="space-y-1">
            {PAGE_3_WHY_EBS.map((item, idx) => {
              const Icon = getWhyIcon(item.icon);
              return (
                <div 
                  key={idx}
                  onClick={() => onItemClick?.(item.title, item.description)}
                  className="flex items-start gap-2 p-1 rounded-lg hover:bg-white hover:shadow-xs transition-all cursor-pointer group"
                >
                  <div className="w-5 h-5 rounded-full bg-[#0096a6] text-white flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-105 transition-transform shadow-xs">
                    <Icon className="w-3 h-3 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-[9.5px] font-condensed font-black text-[#0a2540] group-hover:text-[#0096a6] transition-colors leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[8.5px] text-slate-600 leading-tight mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Compétences Transversales Développées (4 soft skills) */}
        <div className="col-span-6 bg-slate-50 p-3 rounded-xl border border-slate-200/80 flex flex-col justify-between">
          <div>
            <div className="bg-[#0a2540] text-white py-1.5 px-3 rounded-lg text-center mb-2 shadow-xs">
              <h3 className="text-[10.5px] font-condensed font-extrabold uppercase tracking-wider">
                COMPÉTENCES TRANSVERSALES DÉVELOPPÉES
              </h3>
            </div>

            <div className="space-y-2 mt-2">
              {/* Item 1 */}
              <div 
                onClick={() => onItemClick?.(PAGE_3_SOFT_SKILLS[0].title, PAGE_3_SOFT_SKILLS[0].description)}
                className="flex items-start gap-2.5 p-2 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-[#0096a6] transition-all cursor-pointer group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#0a2540] text-cyan-300 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <BrainCircuit className="w-4 h-4 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-[10px] font-condensed font-black text-[#0a2540] group-hover:text-[#0096a6] transition-colors leading-tight">
                    {PAGE_3_SOFT_SKILLS[0].title}
                  </h4>
                  <p className="text-[8.5px] text-slate-600 leading-tight mt-0.5">
                    {PAGE_3_SOFT_SKILLS[0].description}
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div 
                onClick={() => onItemClick?.(PAGE_3_SOFT_SKILLS[1].title, PAGE_3_SOFT_SKILLS[1].description)}
                className="flex items-start gap-2.5 p-2 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-[#0096a6] transition-all cursor-pointer group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#0a2540] text-cyan-300 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquareText className="w-4 h-4 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-[10px] font-condensed font-black text-[#0a2540] group-hover:text-[#0096a6] transition-colors leading-tight">
                    {PAGE_3_SOFT_SKILLS[1].title}
                  </h4>
                  <p className="text-[8.5px] text-slate-600 leading-tight mt-0.5">
                    {PAGE_3_SOFT_SKILLS[1].description}
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div 
                onClick={() => onItemClick?.(PAGE_3_SOFT_SKILLS[2].title, PAGE_3_SOFT_SKILLS[2].description)}
                className="flex items-start gap-2.5 p-2 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-[#0096a6] transition-all cursor-pointer group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#0a2540] text-cyan-300 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Clock className="w-4 h-4 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-[10px] font-condensed font-black text-[#0a2540] group-hover:text-[#0096a6] transition-colors leading-tight">
                    {PAGE_3_SOFT_SKILLS[2].title}
                  </h4>
                  <p className="text-[8.5px] text-slate-600 leading-tight mt-0.5">
                    {PAGE_3_SOFT_SKILLS[2].description}
                  </p>
                </div>
              </div>

              {/* Item 4: Languages EN / FR */}
              <div 
                onClick={() => onItemClick?.(PAGE_3_SOFT_SKILLS[3].title, PAGE_3_SOFT_SKILLS[3].description)}
                className="flex items-start gap-2.5 p-2 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-[#0096a6] transition-all cursor-pointer group"
              >
                <div className="flex flex-col items-center justify-center w-7 h-7 rounded-lg bg-[#0a2540] text-white font-condensed font-black text-[9.5px] flex-shrink-0 leading-none group-hover:scale-105 transition-transform">
                  <span className="text-cyan-300">EN</span>
                  <span className="text-[8px] text-slate-300">FR</span>
                </div>
                <div>
                  <h4 className="text-[10px] font-condensed font-black text-[#0a2540] group-hover:text-[#0096a6] transition-colors leading-tight">
                    {PAGE_3_SOFT_SKILLS[3].title}
                  </h4>
                  <p className="text-[8.5px] text-slate-600 leading-tight mt-0.5">
                    {PAGE_3_SOFT_SKILLS[3].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Strip: Une Pédagogie Tournée vers l'Action */}
      <div className="px-10 py-1">
        <div className="border-t border-slate-200 pt-1.5">
          <h4 className="text-center text-[10.5px] font-condensed font-black uppercase tracking-wider text-[#0a2540] mb-1.5">
            UNE PÉDAGOGIE TOURNÉE VERS L'ACTION
          </h4>
          <div className="grid grid-cols-6 gap-2 text-center">
            {PEDAGOGY_STEPS.map((step, idx) => {
              const StepIcon = getPedagogyIcon(step.icon);
              return (
                <div key={idx} className="flex flex-col items-center p-1 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="w-7 h-7 rounded-md bg-white border border-slate-200 flex items-center justify-center text-[#0096a6] mb-1 shadow-xs">
                    <StepIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[8px] font-condensed font-bold text-slate-800 leading-tight">
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Card: L'IA au Service de votre Apprentissage */}
      <div className="mx-10 mb-1 p-3 bg-gradient-to-r from-[#0a2540] via-[#0d3b66] to-[#0a2540] text-white rounded-xl shadow-md border border-cyan-400/20">
        <div className="grid grid-cols-12 gap-3 items-center">
          {/* AI Visual Graphic */}
          <div className="col-span-3 h-18 rounded-lg overflow-hidden relative shadow-inner border border-cyan-400/30">
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80" 
              alt="Artificial Intelligence in Finance"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0a2540]/40 flex items-center justify-center">
              <span className="text-lg font-condensed font-black text-cyan-300 tracking-widest">AI</span>
            </div>
          </div>

          {/* Bullet points */}
          <div className="col-span-5 space-y-0.5">
            <h4 className="text-[9.5px] font-condensed font-black uppercase tracking-wider text-cyan-300 mb-1">
              L'IA AU SERVICE DE VOTRE APPRENTISSAGE
            </h4>
            <div className="space-y-0.5 text-[8.5px] text-slate-200">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                <span>Outils intelligents pour apprendre et progresser</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                <span>Analyse de données pour mieux comprendre et décider</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                <span>Cas pratiques augmentés par l'IA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                <span>Développement de compétences numériques indispensables</span>
              </div>
            </div>
          </div>

          {/* Right Callout Banner with Rocket */}
          <div className="col-span-4 bg-white/10 p-2 rounded-lg border border-white/15 flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center flex-shrink-0">
              <Rocket className="w-4 h-4 stroke-[2.5]" />
            </div>
            <p className="text-[8px] font-condensed font-black uppercase leading-tight text-white tracking-wide">
              L'IA N'EST PAS UN REMPLACEMENT, C'EST UN ACCÉLÉRATEUR DE VOTRE POTENTIEL ET DE VOTRE RÉUSSITE.
            </p>
          </div>
        </div>
      </div>

      {/* Page 3 Footer */}
      <div className="px-10 py-2.5 bg-white text-[#0a2540] flex items-center justify-between text-[10.5px] font-semibold border-t border-slate-200">
        <div className="flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-[#0096a6]" />
          <span className="font-extrabold tracking-wider">EBS.TN</span>
        </div>

        <div className="text-center font-condensed font-extrabold text-slate-700 tracking-wider text-[11px] uppercase">
          L'EXCELLENCE ACADÉMIQUE AU SERVICE DE VOTRE AVENIR
        </div>

        {/* 3x4 Dot matrix */}
        <div className="grid grid-cols-4 gap-1 opacity-70">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#0a2540]"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

