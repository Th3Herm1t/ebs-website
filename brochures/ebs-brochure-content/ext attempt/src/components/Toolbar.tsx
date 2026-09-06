import React from 'react';
import { 
  Printer, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  LayoutGrid, 
  FileText, 
  Tv, 
  Download 
} from 'lucide-react';
import { ViewMode } from '../types';

interface ToolbarProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  zoom: number;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onPrint: () => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  viewMode,
  setViewMode,
  currentPage,
  setCurrentPage,
  totalPages,
  zoom,
  setZoom,
  searchQuery,
  setSearchQuery,
  onPrint,
}) => {
  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.1, 1.6));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.1, 0.6));
  const handleResetZoom = () => setZoom(1);

  return (
    <header className="sticky top-0 z-40 bg-[#0a2540] text-white border-b border-cyan-500/30 shadow-lg px-4 py-2.5 print:hidden">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="font-serif font-black text-xl tracking-tight text-white">EBS</span>
            <div className="h-4 w-[1px] bg-cyan-400"></div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 hidden sm:inline">
              Brochure Interactive • Licence en Finance
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-[11px] bg-white/10 px-2.5 py-1 rounded-full text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>4 pages officielles reconstituées</span>
          </div>
        </div>

        {/* Center: Search & Navigation */}
        <div className="flex items-center gap-2">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Rechercher (ex: Bloomberg, Python, Citi, Stage)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-44 sm:w-60 bg-white/10 text-white placeholder-slate-400 text-xs pl-8 pr-3 py-1.5 rounded-lg border border-white/15 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all"
            />
          </div>

          {/* View mode switcher */}
          <div className="flex bg-white/10 p-0.5 rounded-lg border border-white/10">
            <button
              onClick={() => setViewMode('all')}
              className={`px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1.5 transition-all ${
                viewMode === 'all' ? 'bg-[#0096a6] text-white shadow-xs' : 'text-slate-300 hover:text-white'
              }`}
              title="Toutes les pages (Défilement continu)"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Document</span>
            </button>
            <button
              onClick={() => setViewMode('single')}
              className={`px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1.5 transition-all ${
                viewMode === 'single' ? 'bg-[#0096a6] text-white shadow-xs' : 'text-slate-300 hover:text-white'
              }`}
              title="Page par page"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Page</span>
            </button>
            <button
              onClick={() => setViewMode('presentation')}
              className={`px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1.5 transition-all ${
                viewMode === 'presentation' ? 'bg-[#0096a6] text-white shadow-xs' : 'text-slate-300 hover:text-white'
              }`}
              title="Mode Présentation plein écran"
            >
              <Tv className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Diapo</span>
            </button>
          </div>
        </div>

        {/* Right: Page Selector, Zoom & Print Action */}
        <div className="flex items-center gap-2">
          {/* Page numbers selector */}
          <div className="flex items-center bg-white/10 rounded-lg p-0.5 border border-white/10">
            <button
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              className="p-1 rounded text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center px-1 gap-1">
              {[1, 2, 3, 4].map((p) => (
                <button
                  key={p}
                  onClick={() => setCurrentPage(p)}
                  className={`w-6 h-6 rounded text-xs font-bold transition-all ${
                    currentPage === p ? 'bg-[#0096a6] text-white' : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            <button
              disabled={currentPage >= totalPages}
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              className="p-1 rounded text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Zoom controls */}
          <div className="hidden sm:flex items-center bg-white/10 rounded-lg p-0.5 border border-white/10">
            <button
              onClick={handleZoomOut}
              className="p-1 text-slate-300 hover:text-white"
              title="Zoom arrière"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleResetZoom}
              className="px-1.5 text-[11px] font-bold text-cyan-300 hover:text-white"
              title="Réinitialiser zoom"
            >
              {Math.round(zoom * 100)}%
            </button>
            <button
              onClick={handleZoomIn}
              className="p-1 text-slate-300 hover:text-white"
              title="Zoom avant"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Print / Save PDF button */}
          <button
            onClick={onPrint}
            className="bg-[#0096a6] hover:bg-[#00838f] text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-md hover:shadow-cyan-500/20 transition-all cursor-pointer"
            title="Imprimer ou enregistrer au format PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Imprimer / PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
};
