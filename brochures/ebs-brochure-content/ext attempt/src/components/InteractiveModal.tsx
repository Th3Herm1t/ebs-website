import React from 'react';
import { X, CheckCircle2, Award, BookOpen, Briefcase, Globe, ExternalLink } from 'lucide-react';
import { CurriculumModule, CareerOption, CertificationItem, InternationalPathway, AcademicPartner } from '../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    type: 'module' | 'career' | 'certification' | 'pathway' | 'partner' | null;
    item: CurriculumModule | CareerOption | CertificationItem | InternationalPathway | AcademicPartner | null;
  };
}

export const InteractiveModal: React.FC<ModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data.item) return null;

  const { type, item } = data;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0a2540] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {type === 'module' && <BookOpen className="w-5 h-5 text-cyan-400" />}
            {type === 'career' && <Briefcase className="w-5 h-5 text-cyan-400" />}
            {type === 'certification' && <Award className="w-5 h-5 text-cyan-400" />}
            {type === 'pathway' && <Globe className="w-5 h-5 text-cyan-400" />}
            {type === 'partner' && <Award className="w-5 h-5 text-cyan-400" />}
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              {type === 'module' && 'Module du Programme'}
              {type === 'career' && 'Débouché Professionnel'}
              {type === 'certification' && 'Certification Internationale'}
              {type === 'pathway' && 'Parcours International'}
              {type === 'partner' && 'Partenaire Universitaire'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {type === 'module' && (() => {
            const m = item as CurriculumModule;
            return (
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-cyan-100 text-cyan-800">
                      Module #{m.id} • {m.semester}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-1">{m.title}</h3>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full border border-slate-200 whitespace-nowrap">
                    {m.category}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{m.description}</p>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Compétences & Notions Clés</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {m.keyConcepts.map((c, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs bg-slate-50 p-2 rounded-lg border border-slate-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0" />
                        <span className="font-medium text-slate-700">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

          {type === 'career' && (() => {
            const c = item as CareerOption;
            return (
              <div className="space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-xl font-bold text-slate-900">{c.title}</h3>
                  <p className="text-xs text-cyan-700 font-semibold mt-0.5">Métier accessible post-Licence ou après Master EBS</p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{c.description}</p>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Secteurs Recruteurs</h4>
                  <div className="flex flex-wrap gap-2">
                    {c.sectors.map((s, i) => (
                      <span key={i} className="text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-800 rounded-full border border-blue-100">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

          {type === 'certification' && (() => {
            const cert = item as CertificationItem;
            return (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-xs font-bold px-2 py-0.5 rounded text-white" style={{ backgroundColor: cert.color }}>
                      {cert.partner}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-1">{cert.title}</h3>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-xl text-xs font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Inclus dans le cursus de la Licence EBS sans frais supplémentaires.</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{cert.description}</p>
                <div className="text-xs text-slate-500">
                  <strong className="text-slate-700">Niveau visé :</strong> {cert.level}
                </div>
              </div>
            );
          })()}

          {type === 'pathway' && (() => {
            const p = item as InternationalPathway;
            return (
              <div className="space-y-4">
                <div className="relative h-36 rounded-xl overflow-hidden shadow-inner">
                  <img src={p.image} alt={p.destinationName} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 text-white">
                    <div>
                      <span className="text-2xl mr-2">{p.flag}</span>
                      <span className="font-bold text-lg">{p.destinationName}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{p.description}</p>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Universités partenaires impliquées</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {p.partners.map((pt, i) => (
                      <span key={i} className="text-xs bg-slate-100 text-slate-800 px-2.5 py-1 rounded-md font-medium border border-slate-200">
                        {pt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

          {type === 'partner' && (() => {
            const prt = item as AcademicPartner;
            return (
              <div className="space-y-3">
                <div className="border-b border-slate-100 pb-2">
                  <h3 className="text-xl font-bold text-slate-900">{prt.name}</h3>
                  <p className="text-xs font-medium text-slate-500">{prt.country} {prt.city ? `• ${prt.city}` : ''}</p>
                </div>
                <p className="text-sm text-slate-700 font-semibold">{prt.tagline}</p>
                <p className="text-xs text-slate-500">
                  Établissement conventionné avec Espima Business School pour les passerelles de Licence, mobilité d'études ou poursuite en Master / MSc.
                </p>
              </div>
            );
          })()}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
          <span>Licence en Finance • Espima Business School</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#0a2540] text-white rounded-lg font-medium hover:bg-[#133863] transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
