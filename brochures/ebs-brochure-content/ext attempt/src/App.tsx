import React, { useState, useEffect } from 'react';
import { Toolbar } from './components/Toolbar';
import { ThumbnailSidebar } from './components/ThumbnailSidebar';
import { SearchOverlay } from './components/SearchOverlay';
import { InteractiveModal } from './components/InteractiveModal';
import { PageOne } from './components/pages/PageOne';
import { PageTwo } from './components/pages/PageTwo';
import { PageThree } from './components/pages/PageThree';
import { PageFour } from './components/pages/PageFour';
import { ViewMode, CurriculumModule, CareerOption, CertificationItem, InternationalPathway, AcademicPartner } from './types';
import { ChevronLeft, ChevronRight, Sparkles, Layers } from 'lucide-react';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [zoom, setZoom] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'module' | 'career' | 'certification' | 'pathway' | 'partner' | null;
    item: any;
  }>({
    isOpen: false,
    type: null,
    item: null,
  });

  // Keyboard navigation for page flipping
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalState.isOpen) {
        if (e.key === 'Escape') {
          setModalState({ isOpen: false, type: null, item: null });
        }
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        setCurrentPage((p) => Math.min(4, p + 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setCurrentPage((p) => Math.max(1, p - 1));
      } else if (e.key === 'Escape' && searchQuery) {
        setSearchQuery('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalState.isOpen, searchQuery]);

  const handlePrint = () => {
    window.print();
  };

  const openModal = (type: any, item: any) => {
    setModalState({
      isOpen: true,
      type,
      item,
    });
  };

  const handlePageSelect = (pageNum: number) => {
    setCurrentPage(pageNum);
    if (viewMode === 'all') {
      const el = document.getElementById(`pdf-page-${pageNum}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-200/70 text-slate-800 flex flex-col font-sans selection:bg-[#0096a6] selection:text-white">
      {/* Top Application Bar */}
      <Toolbar
        viewMode={viewMode}
        setViewMode={setViewMode}
        currentPage={currentPage}
        setCurrentPage={handlePageSelect}
        totalPages={4}
        zoom={zoom}
        setZoom={setZoom}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onPrint={handlePrint}
      />

      {/* Sidebar Thumbnail Drawer */}
      <ThumbnailSidebar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onPageSelect={handlePageSelect}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Search results popup */}
      <SearchOverlay
        searchQuery={searchQuery}
        onClose={() => setSearchQuery('')}
        onNavigateToPage={handlePageSelect}
        onSelectResult={(type, item) => openModal(type, item)}
      />

      {/* Interactive Item Details Modal */}
      <InteractiveModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false, type: null, item: null })}
        data={{ type: modalState.type, item: modalState.item }}
      />

      {/* Main Document Workspace */}
      <main className="flex-1 p-3 sm:p-6 md:p-8 flex flex-col items-center justify-start overflow-x-auto print:p-0 print:m-0 print:overflow-visible">
        {/* Document scale wrapper for zoom */}
        <div
          className="transition-transform duration-200 origin-top flex flex-col items-center w-full"
          style={{ transform: `scale(${zoom})` }}
        >
          {/* Continuous Document Mode: Show all 4 pages stacked */}
          {viewMode === 'all' && (
            <div className="space-y-8 print:space-y-0 w-full flex flex-col items-center">
              {/* Page 1 */}
              <div className="relative group w-full flex flex-col items-center">
                <div className="w-full max-w-[820px] flex items-center justify-between text-xs text-slate-500 font-semibold mb-1.5 px-2 print:hidden">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0096a6]"></span>
                    Page 1 : Présentation & Vision
                  </span>
                  <span>1 / 4</span>
                </div>
                <PageOne onPillarClick={(title) => openModal('module', { title, description: "Un des 5 piliers cardinaux de la formation en Finance à l'EBS.", id: 0, semester: "Programme global", category: "Finance", keyConcepts: ["Excellence", "Méthode", "Carrière"] })} />
              </div>

              {/* Page 2 */}
              <div className="relative group w-full flex flex-col items-center">
                <div className="w-full max-w-[820px] flex items-center justify-between text-xs text-slate-500 font-semibold mb-1.5 px-2 print:hidden">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0096a6]"></span>
                    Page 2 : Programme, Stage & Certifications
                  </span>
                  <span>2 / 4</span>
                </div>
                <PageTwo
                  onModuleClick={(mod) => openModal('module', mod)}
                  onCareerClick={(career) => openModal('career', career)}
                  onCertClick={(cert) => openModal('certification', cert)}
                />
              </div>

              {/* Page 3 */}
              <div className="relative group w-full flex flex-col items-center">
                <div className="w-full max-w-[820px] flex items-center justify-between text-xs text-slate-500 font-semibold mb-1.5 px-2 print:hidden">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0096a6]"></span>
                    Page 3 : Atouts, Pédagogie & IA
                  </span>
                  <span>3 / 4</span>
                </div>
                <PageThree
                  onItemClick={(title, description) =>
                    openModal('career', {
                      id: title,
                      title,
                      description,
                      iconName: 'TrendingUp',
                      sectors: ["Banques", "Directions Financières", "Cabinets de conseil"]
                    })
                  }
                />
              </div>

              {/* Page 4 */}
              <div className="relative group w-full flex flex-col items-center">
                <div className="w-full max-w-[820px] flex items-center justify-between text-xs text-slate-500 font-semibold mb-1.5 px-2 print:hidden">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0096a6]"></span>
                    Page 4 : International & Partenaires
                  </span>
                  <span>4 / 4</span>
                </div>
                <PageFour
                  onPathwayClick={(p) => openModal('pathway', p)}
                  onPartnerClick={(partner) => openModal('partner', partner)}
                />
              </div>
            </div>
          )}

          {/* Single Page Mode */}
          {viewMode === 'single' && (
            <div className="w-full flex flex-col items-center">
              <div className="w-full max-w-[820px] flex items-center justify-between text-xs text-slate-500 font-semibold mb-2 px-2 print:hidden">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage <= 1}
                  className="flex items-center gap-1 text-slate-700 hover:text-[#0096a6] disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Page précédente</span>
                </button>

                <span className="bg-white px-3 py-1 rounded-full shadow-xs border border-slate-200 font-bold text-slate-700">
                  Page {currentPage} sur 4
                </span>

                <button
                  onClick={() => setCurrentPage(Math.min(4, currentPage + 1))}
                  disabled={currentPage >= 4}
                  className="flex items-center gap-1 text-slate-700 hover:text-[#0096a6] disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <span>Page suivante</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {currentPage === 1 && <PageOne />}
              {currentPage === 2 && (
                <PageTwo
                  onModuleClick={(mod) => openModal('module', mod)}
                  onCareerClick={(career) => openModal('career', career)}
                  onCertClick={(cert) => openModal('certification', cert)}
                />
              )}
              {currentPage === 3 && (
                <PageThree
                  onItemClick={(title, description) =>
                    openModal('career', {
                      id: title,
                      title,
                      description,
                      iconName: 'TrendingUp',
                      sectors: ["Finance", "Audit", "Management"]
                    })
                  }
                />
              )}
              {currentPage === 4 && (
                <PageFour
                  onPathwayClick={(p) => openModal('pathway', p)}
                  onPartnerClick={(partner) => openModal('partner', partner)}
                />
              )}
            </div>
          )}

          {/* Presentation Mode */}
          {viewMode === 'presentation' && (
            <div className="w-full flex flex-col items-center max-w-5xl">
              {/* Progress Bar */}
              <div className="w-full max-w-[820px] bg-slate-300 h-1 rounded-full mb-3 overflow-hidden">
                <div
                  className="bg-[#0096a6] h-full transition-all duration-300"
                  style={{ width: `${(currentPage / 4) * 100}%` }}
                ></div>
              </div>

              <div className="relative">
                {currentPage === 1 && <PageOne />}
                {currentPage === 2 && (
                  <PageTwo
                    onModuleClick={(mod) => openModal('module', mod)}
                    onCareerClick={(career) => openModal('career', career)}
                    onCertClick={(cert) => openModal('certification', cert)}
                  />
                )}
                {currentPage === 3 && (
                  <PageThree
                    onItemClick={(title, description) =>
                      openModal('career', {
                        id: title,
                        title,
                        description,
                        iconName: 'TrendingUp',
                        sectors: ["Finance", "Banque", "Conseil"]
                      })
                    }
                  />
                )}
                {currentPage === 4 && (
                  <PageFour
                    onPathwayClick={(p) => openModal('pathway', p)}
                    onPartnerClick={(partner) => openModal('partner', partner)}
                  />
                )}

                {/* Floating On-Screen Nav Arrows */}
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage <= 1}
                  className="absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0a2540]/80 hover:bg-[#0096a6] text-white flex items-center justify-center shadow-xl disabled:opacity-0 transition-all cursor-pointer"
                  title="Page précédente (Flèche gauche)"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={() => setCurrentPage(Math.min(4, currentPage + 1))}
                  disabled={currentPage >= 4}
                  className="absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0a2540]/80 hover:bg-[#0096a6] text-white flex items-center justify-center shadow-xl disabled:opacity-0 transition-all cursor-pointer"
                  title="Page suivante (Flèche droite)"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-4 flex items-center gap-4 text-xs text-slate-500 font-medium">
                <span>Astuce : Utilisez les touches ← et → de votre clavier pour naviguer</span>
                <span>•</span>
                <span>{currentPage} / 4</span>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
