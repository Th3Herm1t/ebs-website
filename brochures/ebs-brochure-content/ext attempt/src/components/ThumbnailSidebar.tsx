import React from 'react';
import { FileText, Eye, Layers } from 'lucide-react';

interface ThumbnailSidebarProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  onPageSelect: (page: number) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const ThumbnailSidebar: React.FC<ThumbnailSidebarProps> = ({
  currentPage,
  onPageSelect,
  isOpen,
  onToggle,
}) => {
  const pages = [
    { num: 1, title: "Couverture & Programme", subtitle: "Finance, Data & IA" },
    { num: 2, title: "Curriculum & Métiers", subtitle: "10 modules, Stage & Certifications" },
    { num: 3, title: "Atouts & Pédagogie", subtitle: "Compétences & IA accélérateur" },
    { num: 4, title: "International & Partenaires", subtitle: "Italie, France, Canada & 12 Écoles" }
  ];

  if (!isOpen) {
    return (
      <button
        onClick={onToggle}
        className="fixed left-3 top-16 z-30 bg-[#0a2540] text-white p-2 rounded-r-lg shadow-lg border-y border-r border-cyan-400/40 hover:bg-[#0096a6] transition-all print:hidden"
        title="Ouvrir le panneau des pages"
      >
        <Layers className="w-4 h-4" />
      </button>
    );
  }

  return (
    <aside className="fixed left-0 top-14 bottom-0 w-64 bg-[#0a2540]/95 backdrop-blur-md text-white border-r border-cyan-500/20 z-30 p-4 flex flex-col justify-between shadow-2xl transition-all print:hidden">
      <div>
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-200">
              Pages du Document
            </span>
          </div>
          <button
            onClick={onToggle}
            className="text-slate-400 hover:text-white text-xs px-2 py-0.5 rounded bg-white/5 hover:bg-white/10"
          >
            Masquer
          </button>
        </div>

        <div className="space-y-3">
          {pages.map((p) => {
            const isActive = currentPage === p.num;
            return (
              <button
                key={p.num}
                onClick={() => onPageSelect(p.num)}
                className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-start gap-3 group ${
                  isActive
                    ? 'bg-[#0096a6]/20 border-cyan-400 text-white shadow-md'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div
                  className={`w-8 h-10 rounded-md border flex items-center justify-center font-bold text-xs flex-shrink-0 transition-colors ${
                    isActive
                      ? 'bg-[#0096a6] border-cyan-300 text-white'
                      : 'bg-slate-800 border-slate-700 text-slate-400 group-hover:text-white'
                  }`}
                >
                  {p.num}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold truncate group-hover:text-cyan-300 transition-colors">
                      Page {p.num}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    )}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-200 truncate mt-0.5">
                    {p.title}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate mt-0.5">
                    {p.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer Info inside Sidebar */}
      <div className="pt-3 border-t border-white/10 text-[10.5px] text-slate-400">
        <div className="text-white font-semibold mb-1">Espima Business School</div>
        <div className="flex items-center gap-1 text-cyan-300">
          <Eye className="w-3 h-3" />
          <span>Fidélité 100% au document officiel</span>
        </div>
      </div>
    </aside>
  );
};
