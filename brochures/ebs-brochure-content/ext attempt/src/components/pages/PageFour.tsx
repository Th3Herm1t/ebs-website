import React from 'react';
import { 
  GraduationCap, 
  Laptop, 
  TrendingUp, 
  Phone, 
  Mail, 
  MapPin, 
  Globe 
} from 'lucide-react';
import { EbsLogo } from '../BrandLogos';
import { PartnerBadge } from '../PartnerLogos';
import { INTERNATIONAL_PATHWAYS, ACADEMIC_PARTNERS } from '../../data/brochureData';
import { InternationalPathway, AcademicPartner } from '../../types';

interface PageFourProps {
  onPathwayClick?: (pathway: InternationalPathway) => void;
  onPartnerClick?: (partner: AcademicPartner) => void;
}

export const PageFour: React.FC<PageFourProps> = ({ 
  onPathwayClick, 
  onPartnerClick 
}) => {
  return (
    <div 
      id="pdf-page-4"
      className="a4-sheet mx-auto bg-white text-[#0a2540] shadow-2xl rounded-sm overflow-hidden flex flex-col justify-between print:shadow-none select-text border border-slate-200/80"
    >
      {/* Top Header Section with Logo & Photo */}
      <div className="pt-7 px-10 pb-2 grid grid-cols-12 gap-5 items-center">
        {/* Left: Logo & Excellence Heading */}
        <div className="col-span-7 pr-2">
          <div className="mb-2">
            <EbsLogo variant="dark" />
          </div>

          <h3 className="text-xl sm:text-2xl font-condensed font-black tracking-tight text-[#0a2540] uppercase leading-none">
            L'EXCELLENCE ACADÉMIQUE
          </h3>
          <h1 className="text-4xl sm:text-5xl font-condensed font-black tracking-tight text-[#0096a6] uppercase leading-none mt-1">
            AU SERVICE
          </h1>
          <h2 className="text-3xl sm:text-4xl font-condensed font-black tracking-tight text-[#0a2540] uppercase leading-none mt-0.5">
            DE VOTRE AVENIR
          </h2>

          <p className="text-[10.5px] leading-relaxed text-slate-600 font-normal mt-2.5 text-justify">
            Un parcours structuré et progressif qui vous permet d'acquérir les compétences 
            essentielles pour construire votre avenir et réaliser vos ambitions.
          </p>
        </div>

        {/* Right: Collaboration Photo */}
        <div className="col-span-5 h-[145px] rounded-xl overflow-hidden shadow-md border-2 border-slate-100 relative">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" 
            alt="Business school academic excellence"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/30 to-transparent"></div>
        </div>
      </div>

      {/* 3 Core Value Speech Bubbles: Diplôme, Expérience, Carrière */}
      <div className="px-10 py-1">
        <div className="grid grid-cols-3 gap-3">
          {/* Diplôme */}
          <div className="flex items-start gap-2.5 p-2 bg-slate-50 rounded-xl border border-slate-200/80 shadow-xs">
            <div className="w-8 h-8 rounded-full bg-[#0096a6] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
              <GraduationCap className="w-4 h-4 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="text-[11px] font-condensed font-black uppercase tracking-wider text-[#0a2540]">
                DIPLÔME
              </h4>
              <p className="text-[9px] text-slate-600 leading-tight mt-0.5">
                Une formation académique reconnue et alignée sur les exigences du monde professionnel.
              </p>
            </div>
          </div>

          {/* Expérience */}
          <div className="flex items-start gap-2.5 p-2 bg-slate-50 rounded-xl border border-slate-200/80 shadow-xs">
            <div className="w-8 h-8 rounded-full bg-[#0a2540] text-cyan-300 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
              <Laptop className="w-4 h-4 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="text-[11px] font-condensed font-black uppercase tracking-wider text-[#0a2540]">
                EXPÉRIENCE
              </h4>
              <p className="text-[9px] text-slate-600 leading-tight mt-0.5">
                Des projets concrets, des mises en situation et des activités qui développent vos compétences et votre confiance.
              </p>
            </div>
          </div>

          {/* Carrière */}
          <div className="flex items-start gap-2.5 p-2 bg-slate-50 rounded-xl border border-slate-200/80 shadow-xs">
            <div className="w-8 h-8 rounded-full bg-[#0096a6] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
              <TrendingUp className="w-4 h-4 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="text-[11px] font-condensed font-black uppercase tracking-wider text-[#0a2540]">
                CARRIÈRE
              </h4>
              <p className="text-[9px] text-slate-600 leading-tight mt-0.5">
                Un accompagnement personnalisé pour vous aider à atteindre vos objectifs et réussir votre insertion professionnelle.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Section: 3 Parcours pour poursuivre vos études à l'international */}
      <div className="px-10 py-1">
        <div className="flex items-baseline justify-between border-b-2 border-[#0096a6] pb-1 mb-2">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-condensed font-black text-[#0a2540]">3 PARCOURS</span>
            <span className="text-xs font-condensed font-extrabold uppercase tracking-wide text-slate-700">
              POUR POURSUIVRE VOS ÉTUDES
            </span>
          </div>
          <span className="text-lg font-condensed font-black tracking-tight text-[#0096a6] uppercase">
            À L'INTERNATIONAL
          </span>
        </div>

        {/* 3 Pathway Cards Grid */}
        <div className="space-y-2">
          {INTERNATIONAL_PATHWAYS.map((p, idx) => (
            <div 
              key={idx}
              onClick={() => onPathwayClick?.(p)}
              className="grid grid-cols-12 gap-3 items-stretch bg-slate-50 hover:bg-white rounded-xl p-2 border border-slate-200 hover:border-[#0096a6]/50 transition-all cursor-pointer group shadow-xs"
            >
              {/* Left: Destination Photo with Flag Badge */}
              <div className="col-span-3 relative h-18 rounded-lg overflow-hidden border border-slate-200">
                <img 
                  src={p.image} 
                  alt={p.destinationName} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-1 left-1 bg-white/95 backdrop-blur-xs px-1.5 py-0.5 rounded shadow text-xs">
                  {p.flag}
                </div>
              </div>

              {/* Center/Right: Number Badge + Content */}
              <div className="col-span-9 flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#0096a6] text-white font-condensed font-black text-base flex items-center justify-center flex-shrink-0 shadow-xs">
                  {p.number}
                </div>

                <div className="flex-1">
                  <div className="flex items-baseline justify-between">
                    <h4 className="text-[11px] font-condensed font-extrabold text-[#0a2540] group-hover:text-[#0096a6] transition-colors leading-tight">
                      {p.title}
                    </h4>
                  </div>
                  <div className="text-[10px] font-condensed font-bold text-[#0096a6] mb-0.5">
                    {p.destinationName}
                  </div>
                  <p className="text-[9px] leading-relaxed text-slate-600">
                    {p.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Academic Partners Showcase (12 Partners) */}
      <div className="px-10 py-1">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="h-[1px] w-12 bg-[#0096a6]"></div>
          <h4 className="text-xs font-condensed font-black uppercase tracking-widest text-[#0a2540]">
            PARTENAIRES ACADÉMIQUES
          </h4>
          <div className="h-[1px] w-12 bg-[#0096a6]"></div>
        </div>

        {/* 12 Partners Grid (6 columns x 2 rows) */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {ACADEMIC_PARTNERS.map((partner) => (
            <PartnerBadge 
              key={partner.id} 
              partner={partner} 
              onClick={() => onPartnerClick?.(partner)}
            />
          ))}
        </div>
      </div>

      {/* Page 4 Dark Navy Footer */}
      <div className="px-10 py-3 bg-[#0a2540] text-white flex items-center justify-between text-[10.5px] font-medium border-t-2 border-[#0096a6]">
        <div className="flex items-center gap-4">
          <a href="tel:+21671182635" className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            <span>+216 71 182 635</span>
          </a>
          <span className="text-slate-600">|</span>
          <a href="mailto:info@ebs.tn" className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>info@ebs.tn</span>
          </a>
          <span className="text-slate-600">|</span>
          <div className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Les berges du Lac 3 - Tunis</span>
          </div>
          <span className="text-slate-600">|</span>
          <a href="https://www.ebs.tn" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors font-bold text-cyan-300">
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>www.ebs.tn</span>
          </a>
        </div>

        {/* 3x4 Dot matrix */}
        <div className="grid grid-cols-4 gap-1 opacity-70">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-cyan-300"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

