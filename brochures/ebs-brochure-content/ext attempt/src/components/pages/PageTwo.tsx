import React from 'react';
import { 
  TrendingUp, 
  Search, 
  PieChart, 
  Landmark, 
  Calculator, 
  ClipboardCheck, 
  Coins, 
  UserCheck, 
  Briefcase, 
  Award, 
  Lightbulb, 
  Users, 
  Monitor, 
  Presentation, 
  Handshake, 
  Globe
} from 'lucide-react';
import { CURRICULUM_MODULES, CAREER_OPTIONS, CERTIFICATIONS } from '../../data/brochureData';
import { 
  GoogleIcon, 
  PwcLogo, 
  CiscoLogo, 
  CitiLogo, 
  IbmLogo, 
  BloombergBadge, 
  JPMorganLogo, 
  MayerBrownLogo 
} from '../BrandLogos';
import { CurriculumModule, CareerOption, CertificationItem } from '../../types';

interface PageTwoProps {
  onModuleClick?: (module: CurriculumModule) => void;
  onCareerClick?: (career: CareerOption) => void;
  onCertClick?: (cert: CertificationItem) => void;
}

export const PageTwo: React.FC<PageTwoProps> = ({ 
  onModuleClick, 
  onCareerClick, 
  onCertClick 
}) => {
  const getCareerIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp': return TrendingUp;
      case 'Search': return Search;
      case 'PieChart': return PieChart;
      case 'Landmark': return Landmark;
      case 'Calculator': return Calculator;
      case 'ClipboardCheck': return ClipboardCheck;
      case 'Coins': return Coins;
      case 'UserCheck': return UserCheck;
      default: return TrendingUp;
    }
  };

  return (
    <div 
      id="pdf-page-2"
      className="a4-sheet mx-auto bg-white text-[#0a2540] shadow-2xl rounded-sm overflow-hidden flex flex-col justify-between print:shadow-none select-text border border-slate-200/80"
    >
      {/* Top Banner & Header */}
      <div className="pt-7 px-10 pb-2 grid grid-cols-12 gap-5 items-center">
        <div className="col-span-8 pr-2">
          <h3 className="text-sm font-condensed font-black uppercase tracking-wide text-[#0a2540]">
            UN PROGRAMME COMPLET
          </h3>
          <h4 className="text-xs font-condensed font-bold uppercase tracking-wide text-slate-600">
            POUR DEVENIR UN EXPERT DE LA
          </h4>
          <h2 className="text-4xl font-condensed font-black tracking-tight text-[#0096a6] leading-none uppercase mt-0.5">
            FINANCE DE DEMAIN
          </h2>

          <div className="mt-2.5">
            <h5 className="text-[11px] font-condensed font-extrabold uppercase tracking-wider text-[#0a2540] mb-0.5">
              PROGRAMME SUR 6 SEMESTRES
            </h5>
            <p className="text-[10.5px] leading-relaxed text-slate-600 font-normal">
              Le programme est structuré autour des principaux modules de formation suivants, 
              répartis progressivement sur les six semestres de la Licence. Ce qui permet aux 
              étudiants de l'EBS d'évoluer progressivement vers une maîtrise des domaines essentiels de leur spécialité.
            </p>
          </div>
        </div>

        {/* Top Right: Campus Student Image */}
        <div className="col-span-4 relative h-[140px] rounded-xl overflow-hidden shadow-md border-2 border-slate-100">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" 
            alt="EBS Student on Campus"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute top-2 right-2 bg-[#0a2540] text-white px-2 py-0.5 rounded text-[8px] font-condensed font-extrabold uppercase tracking-wider shadow-xs">
            EBS CAMPUS
          </div>
          <div className="absolute bottom-2 left-2 bg-[#0096a6] text-white px-2 py-0.5 rounded text-[8px] font-condensed font-bold tracking-wider shadow-xs">
            FINANCE
          </div>
        </div>
      </div>

      {/* Main Grid: Modules on Left, Internship & Certifications on Right */}
      <div className="px-10 py-1 grid grid-cols-12 gap-5 items-stretch">
        {/* Left Column: 10 Curriculum Modules */}
        <div className="col-span-6 bg-slate-50 p-3 rounded-xl border border-slate-200/80 flex flex-col justify-between">
          {/* Section Header Banner */}
          <div className="bg-[#0a2540] text-white py-1.5 px-3 rounded-lg text-center mb-2 shadow-xs">
            <h3 className="text-[10.5px] font-condensed font-extrabold uppercase tracking-wider">
              MODULES CLÉS DE LA LICENCE EN FINANCE
            </h3>
          </div>

          {/* 10 Modules List */}
          <div className="space-y-1">
            {CURRICULUM_MODULES.map((mod) => (
              <div 
                key={mod.id}
                onClick={() => onModuleClick?.(mod)}
                className="group flex items-center justify-between text-[10.5px] py-1 px-1.5 rounded hover:bg-white hover:shadow-xs transition-all border-b border-dotted border-slate-200 last:border-b-0 cursor-pointer"
              >
                <div className="flex items-center gap-2 pr-1">
                  <span className="w-5 h-5 rounded-full bg-[#0096a6] text-white text-[9.5px] font-black flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                    {mod.id}
                  </span>
                  <span className="font-semibold text-slate-800 group-hover:text-[#0096a6] transition-colors leading-tight">
                    {mod.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Stage en Entreprise + Certifications */}
        <div className="col-span-6 flex flex-col justify-between space-y-2.5">
          {/* Stage en Entreprise Box */}
          <div className="p-2.5 bg-white rounded-xl border border-slate-200 shadow-xs">
            <div className="border-b border-slate-100 pb-1 mb-1.5">
              <span className="text-[9px] font-condensed font-extrabold uppercase tracking-wider text-[#0096a6]">
                EXPÉRIENCE PROFESSIONNELLE
              </span>
              <h4 className="text-[12px] font-condensed font-black uppercase tracking-wide text-[#0a2540]">
                STAGE EN ENTREPRISE
              </h4>
            </div>

            <div className="grid grid-cols-12 gap-2 items-center">
              <div className="col-span-8 text-[10px] leading-relaxed text-slate-600">
                <p>
                  Le programme inclut un stage en entreprise permettant aux étudiants d'acquérir une expérience concrète du monde professionnel et de développer leur réseau.
                </p>
                <p className="font-medium text-slate-700 mt-1">
                  Une opportunité unique de mettre en pratique vos connaissances et de vous préparer efficacement à votre future carrière.
                </p>
              </div>

              {/* Handshake Graphic */}
              <div className="col-span-4 h-[72px] rounded-lg overflow-hidden relative shadow-xs border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=400&q=80" 
                  alt="Stage en entreprise"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#0a2540]/30 mix-blend-multiply"></div>
              </div>
            </div>
          </div>

          {/* Certifications Incluses Box */}
          <div className="p-2.5 bg-white rounded-xl border border-slate-200 shadow-xs flex-1 flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-5 h-5 rounded-full bg-[#0096a6] text-white flex items-center justify-center flex-shrink-0">
                <Award className="w-3 h-3 stroke-[2.5]" />
              </div>
              <div>
                <h4 className="text-[11px] font-condensed font-black uppercase tracking-wider text-[#0a2540] leading-none">
                  CERTIFICATIONS INCLUSES
                </h4>
                <p className="text-[8.5px] text-slate-500 leading-tight mt-0.5">
                  Les étudiants bénéficient de certifications reconnues internationalement, sans frais supplémentaires :
                </p>
              </div>
            </div>

            {/* Certifications Grid (Authentic 2 columns) */}
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 pt-0.5">
              {/* Google */}
              <div 
                onClick={() => onCertClick?.(CERTIFICATIONS[0])}
                className="flex items-center gap-1.5 p-1 rounded hover:bg-slate-50 cursor-pointer transition-colors"
              >
                <GoogleIcon className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="text-[8.5px] font-semibold text-slate-800 leading-tight">Google Prompting Essentials</span>
              </div>

              {/* IBM */}
              <div 
                onClick={() => onCertClick?.(CERTIFICATIONS[5])}
                className="flex items-center gap-1.5 p-1 rounded hover:bg-slate-50 cursor-pointer transition-colors"
              >
                <IbmLogo className="h-3 flex-shrink-0" />
                <span className="text-[8.5px] font-semibold text-slate-800 leading-tight">Finance & Accounting Essentials</span>
              </div>

              {/* PwC 1 */}
              <div 
                onClick={() => onCertClick?.(CERTIFICATIONS[1])}
                className="flex items-center gap-1.5 p-1 rounded hover:bg-slate-50 cursor-pointer transition-colors"
              >
                <PwcLogo className="h-3 flex-shrink-0" />
                <span className="text-[8.5px] font-semibold text-slate-800 leading-tight">Productivité grâce aux outils d'IA</span>
              </div>

              {/* Bloomberg 1 */}
              <div 
                onClick={() => onCertClick?.(CERTIFICATIONS[6])}
                className="flex items-center gap-1.5 p-1 rounded hover:bg-slate-50 cursor-pointer transition-colors"
              >
                <BloombergBadge className="text-[7.5px] py-0.5 px-1 flex-shrink-0" />
                <span className="text-[8.5px] font-semibold text-slate-800 leading-tight">Bloomberg Finance Fundamentals</span>
              </div>

              {/* Cisco */}
              <div 
                onClick={() => onCertClick?.(CERTIFICATIONS[2])}
                className="flex items-center gap-1.5 p-1 rounded hover:bg-slate-50 cursor-pointer transition-colors"
              >
                <CiscoLogo className="h-3 flex-shrink-0" />
                <span className="text-[8.5px] font-semibold text-slate-800 leading-tight">Apply AI: Update Your Resume</span>
              </div>

              {/* Mayer Brown */}
              <div 
                onClick={() => onCertClick?.(CERTIFICATIONS[7])}
                className="flex items-center gap-1.5 p-1 rounded hover:bg-slate-50 cursor-pointer transition-colors"
              >
                <MayerBrownLogo className="h-3 flex-shrink-0" />
                <span className="text-[8.5px] font-semibold text-slate-800 leading-tight">Introduction to Finance</span>
              </div>

              {/* PwC 2 */}
              <div 
                onClick={() => onCertClick?.(CERTIFICATIONS[3])}
                className="flex items-center gap-1.5 p-1 rounded hover:bg-slate-50 cursor-pointer transition-colors"
              >
                <PwcLogo className="h-3 flex-shrink-0" />
                <span className="text-[8.5px] font-semibold text-slate-800 leading-tight">L'IA pour les leaders en finance</span>
              </div>

              {/* Bloomberg BMC */}
              <div 
                onClick={() => onCertClick?.(CERTIFICATIONS[8])}
                className="flex items-center gap-1.5 p-1 rounded hover:bg-slate-50 cursor-pointer transition-colors"
              >
                <BloombergBadge className="text-[7.5px] py-0.5 px-1 flex-shrink-0" />
                <span className="text-[8.5px] font-semibold text-slate-800 leading-tight">Bloomberg Market Concepts</span>
              </div>

              {/* Citi 1 */}
              <div 
                onClick={() => onCertClick?.(CERTIFICATIONS[4])}
                className="flex items-center gap-1.5 p-1 rounded hover:bg-slate-50 cursor-pointer transition-colors"
              >
                <CitiLogo className="h-3 flex-shrink-0" />
                <span className="text-[8.5px] font-semibold text-slate-800 leading-tight">Company Essentials</span>
              </div>

              {/* Citi Forage */}
              <div 
                onClick={() => onCertClick?.(CERTIFICATIONS[9])}
                className="flex items-center gap-1.5 p-1 rounded hover:bg-slate-50 cursor-pointer transition-colors"
              >
                <CitiLogo className="h-3 flex-shrink-0" />
                <span className="text-[8.5px] font-semibold text-slate-800 leading-tight">Finance - Simulation Forage</span>
              </div>

              {/* JPMorgan */}
              <div 
                onClick={() => onCertClick?.(CERTIFICATIONS[10])}
                className="col-span-2 flex items-center gap-1.5 p-1 rounded hover:bg-slate-50 cursor-pointer transition-colors border-t border-slate-100"
              >
                <JPMorganLogo className="h-3 flex-shrink-0" />
                <span className="text-[8.5px] font-semibold text-slate-800 leading-tight">Investment Banking</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle-Bottom Section: Débouchés Professionnels (8 Careers) */}
      <div className="px-10 py-2">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-5 h-5 rounded bg-[#0096a6] text-white flex items-center justify-center shadow-xs">
            <Briefcase className="w-3 h-3" />
          </div>
          <h4 className="text-[11.5px] font-condensed font-black uppercase tracking-wider text-[#0a2540]">
            DÉBOUCHÉS PROFESSIONNELS
          </h4>
        </div>
        <p className="text-[9.5px] text-slate-600 mb-2 font-medium">
          Les diplômés de la Licence en Finance peuvent évoluer dans une grande variété de métiers, tels que :
        </p>

        {/* 8 Career Icons Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
          {CAREER_OPTIONS.map((c) => {
            const IconComp = getCareerIcon(c.iconName);
            return (
              <div 
                key={c.id}
                onClick={() => onCareerClick?.(c)}
                className="flex flex-col items-center text-center p-1.5 rounded-lg bg-slate-50 hover:bg-[#0096a6]/10 hover:border-[#0096a6]/30 border border-slate-200/80 transition-all cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-full bg-white shadow-xs border border-slate-200 flex items-center justify-center text-[#0a2540] group-hover:text-[#0096a6] group-hover:scale-105 transition-all mb-1">
                  <IconComp className="w-3.5 h-3.5 stroke-[2]" />
                </div>
                <span className="text-[8.5px] font-condensed font-bold text-slate-800 group-hover:text-[#0096a6] transition-colors leading-tight">
                  {c.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Banner: Une Formation d'Excellence */}
      <div className="px-10 py-3 bg-[#0a2540] text-white">
        <div className="flex items-center gap-3 mb-2 border-b border-white/15 pb-2">
          <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-cyan-300 flex-shrink-0">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-[10.5px] font-condensed font-black uppercase tracking-wider text-cyan-300">
              UNE FORMATION D'EXCELLENCE
            </h5>
            <p className="text-[9px] text-slate-200 leading-tight">
              Alliant théorie, pratique et innovation, la Licence en Finance de l'EBS vous prépare à devenir un acteur clé de la performance financière et économique.
            </p>
          </div>
        </div>

        {/* 4 Pillars in Banner */}
        <div className="grid grid-cols-4 gap-2 text-center text-[9px] font-condensed font-black uppercase tracking-wide text-white/90">
          <div className="flex flex-col items-center">
            <Users className="w-3.5 h-3.5 text-cyan-300 mb-0.5" />
            <span>ENSEIGNANTS EXPERTS</span>
          </div>
          <div className="flex flex-col items-center">
            <Presentation className="w-3.5 h-3.5 text-cyan-300 mb-0.5" />
            <span>PÉDAGOGIE INTERACTIVE</span>
          </div>
          <div className="flex flex-col items-center">
            <Monitor className="w-3.5 h-3.5 text-cyan-300 mb-0.5" />
            <span>OUTILS & LOGICIELS PROS</span>
          </div>
          <div className="flex flex-col items-center">
            <Handshake className="w-3.5 h-3.5 text-cyan-300 mb-0.5" />
            <span>ACCOMPAGNEMENT SUR-MESURE</span>
          </div>
        </div>
      </div>

      {/* Page 2 Footer */}
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

