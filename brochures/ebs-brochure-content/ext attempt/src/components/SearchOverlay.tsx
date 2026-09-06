import React from 'react';
import { Search, ArrowRight, X } from 'lucide-react';
import { CURRICULUM_MODULES, CAREER_OPTIONS, CERTIFICATIONS, INTERNATIONAL_PATHWAYS, ACADEMIC_PARTNERS } from '../data/brochureData';

interface SearchOverlayProps {
  searchQuery: string;
  onClose: () => void;
  onNavigateToPage: (page: number) => void;
  onSelectResult: (type: string, item: any) => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({
  searchQuery,
  onClose,
  onNavigateToPage,
  onSelectResult,
}) => {
  if (!searchQuery.trim()) return null;

  const q = searchQuery.toLowerCase();

  // Search across modules
  const matchingModules = CURRICULUM_MODULES.filter(
    (m) =>
      m.title.toLowerCase().includes(q) ||
      m.description.toLowerCase().includes(q) ||
      m.keyConcepts.some((k) => k.toLowerCase().includes(q))
  );

  // Search across careers
  const matchingCareers = CAREER_OPTIONS.filter(
    (c) =>
      c.title.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.sectors.some((s) => s.toLowerCase().includes(q))
  );

  // Search across certifications
  const matchingCerts = CERTIFICATIONS.filter(
    (cert) =>
      cert.title.toLowerCase().includes(q) ||
      cert.partner.toLowerCase().includes(q) ||
      cert.description.toLowerCase().includes(q)
  );

  // Search across international pathways
  const matchingPathways = INTERNATIONAL_PATHWAYS.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.destinationName.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.partners.some((pt) => pt.toLowerCase().includes(q))
  );

  // Search across partners
  const matchingPartners = ACADEMIC_PARTNERS.filter(
    (prt) =>
      prt.name.toLowerCase().includes(q) ||
      prt.tagline?.toLowerCase().includes(q) ||
      prt.country.toLowerCase().includes(q)
  );

  const totalResults =
    matchingModules.length +
    matchingCareers.length +
    matchingCerts.length +
    matchingPathways.length +
    matchingPartners.length;

  return (
    <div className="fixed top-14 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 overflow-hidden text-slate-800 animate-in fade-in slide-in-from-top-2 duration-200 print:hidden">
      <div className="bg-[#0a2540] text-white px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Search className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
            Résultats de recherche pour "{searchQuery}" ({totalResults})
          </span>
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white p-1 rounded-md"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="max-h-96 overflow-y-auto p-4 space-y-4 divide-y divide-slate-100">
        {totalResults === 0 ? (
          <div className="text-center py-6 text-slate-500 text-xs">
            Aucun résultat trouvé pour "{searchQuery}". Essayez un autre mot-clé (ex: Bloomberg, Stage, Audit, Python, Rome).
          </div>
        ) : (
          <>
            {matchingModules.length > 0 && (
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Modules de cours (Page 2)
                </h4>
                <div className="space-y-1.5">
                  {matchingModules.map((m) => (
                    <div
                      key={m.id}
                      onClick={() => {
                        onNavigateToPage(2);
                        onSelectResult('module', m);
                      }}
                      className="p-2 rounded-lg hover:bg-slate-50 border border-slate-100 flex items-center justify-between cursor-pointer group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#0096a6] text-white text-[10px] font-bold flex items-center justify-center">
                          {m.id}
                        </span>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#0096a6]">
                          {m.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-xs">
                        <span>Page 2</span>
                        <ArrowRight className="w-3.5 h-3.5 text-cyan-600" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {matchingCareers.length > 0 && (
              <div className="pt-3">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Débouchés professionnels (Page 2)
                </h4>
                <div className="space-y-1.5">
                  {matchingCareers.map((c) => (
                    <div
                      key={c.id}
                      onClick={() => {
                        onNavigateToPage(2);
                        onSelectResult('career', c);
                      }}
                      className="p-2 rounded-lg hover:bg-slate-50 border border-slate-100 flex items-center justify-between cursor-pointer group"
                    >
                      <span className="text-xs font-bold text-slate-800 group-hover:text-[#0096a6]">
                        {c.title}
                      </span>
                      <div className="flex items-center gap-2 text-slate-400 text-xs">
                        <span>Page 2</span>
                        <ArrowRight className="w-3.5 h-3.5 text-cyan-600" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {matchingCerts.length > 0 && (
              <div className="pt-3">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Certifications incluses (Page 2)
                </h4>
                <div className="space-y-1.5">
                  {matchingCerts.map((cert) => (
                    <div
                      key={cert.id}
                      onClick={() => {
                        onNavigateToPage(2);
                        onSelectResult('certification', cert);
                      }}
                      className="p-2 rounded-lg hover:bg-slate-50 border border-slate-100 flex items-center justify-between cursor-pointer group"
                    >
                      <div>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#0096a6]">
                          {cert.title}
                        </span>
                        <span className="text-[10px] ml-2 text-slate-500 font-medium">
                          ({cert.partner})
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-xs">
                        <span>Page 2</span>
                        <ArrowRight className="w-3.5 h-3.5 text-cyan-600" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {matchingPathways.length > 0 && (
              <div className="pt-3">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Parcours Internationaux (Page 4)
                </h4>
                <div className="space-y-1.5">
                  {matchingPathways.map((p) => (
                    <div
                      key={p.number}
                      onClick={() => {
                        onNavigateToPage(4);
                        onSelectResult('pathway', p);
                      }}
                      className="p-2 rounded-lg hover:bg-slate-50 border border-slate-100 flex items-center justify-between cursor-pointer group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{p.flag}</span>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#0096a6]">
                          {p.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-xs">
                        <span>Page 4</span>
                        <ArrowRight className="w-3.5 h-3.5 text-cyan-600" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {matchingPartners.length > 0 && (
              <div className="pt-3">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Partenaires Académiques (Page 4)
                </h4>
                <div className="space-y-1.5">
                  {matchingPartners.map((prt) => (
                    <div
                      key={prt.id}
                      onClick={() => {
                        onNavigateToPage(4);
                        onSelectResult('partner', prt);
                      }}
                      className="p-2 rounded-lg hover:bg-slate-50 border border-slate-100 flex items-center justify-between cursor-pointer group"
                    >
                      <div>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#0096a6]">
                          {prt.name}
                        </span>
                        <span className="text-[10px] ml-2 text-slate-500">
                          {prt.country}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-xs">
                        <span>Page 4</span>
                        <ArrowRight className="w-3.5 h-3.5 text-cyan-600" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
