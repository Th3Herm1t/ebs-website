import React from 'react';
import { AcademicPartner } from '../types';

export const PartnerBadge: React.FC<{ partner: AcademicPartner; onClick?: () => void }> = ({ partner, onClick }) => {
  const renderLogoContent = () => {
    switch (partner.logoType) {
      case 'uqat':
        return (
          <div className="flex flex-col items-center text-center">
            <span className="text-xl sm:text-2xl font-black tracking-tighter text-[#1e293b]">UQAT</span>
            <span className="text-[6.5px] leading-tight text-slate-500 font-medium uppercase mt-0.5">
              UNIVERSITÉ DU QUÉBEC<br />EN ABITIBI-TÉMISCAMINGUE
            </span>
          </div>
        );
      case 'link':
        return (
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#004b87] rounded flex items-center justify-center text-white text-[10px] font-bold">
              <span className="transform rotate-180">▲</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[7.5px] tracking-wider font-semibold text-slate-600 uppercase">UNIVERSITÀ DEGLI STUDI</span>
              <span className="text-lg font-black text-[#004b87] tracking-tight leading-none">LINK</span>
            </div>
          </div>
        );
      case 'epitech':
        return (
          <div className="flex flex-col items-center">
            <div className="text-xl font-black tracking-tight text-[#002f6c] flex items-center">
              <span className="text-slate-400 font-light">[</span>
              <span>EPITECH.</span>
              <span className="text-slate-400 font-light">]</span>
            </div>
            <span className="text-[6px] text-slate-500 uppercase tracking-tight">
              L'ÉCOLE DE L'INNOVATION ET DE L'EXPERTISE INFORMATIQUE
            </span>
          </div>
        );
      case 'psb':
        return (
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center justify-center text-[#1e3a8a]">
              <span className="text-lg font-serif font-black">🏛</span>
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-sm font-bold text-slate-900">Paris</span>
              <span className="text-xs font-semibold text-slate-700">School of</span>
              <span className="text-sm font-bold text-[#1e3a8a]">Business</span>
            </div>
          </div>
        );
      case 'eklore':
        return (
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <span className="text-red-500 text-sm">✦</span>
              <span className="text-base font-extrabold text-[#7c2d12] tracking-tight">éklore</span>
              <span className="text-xs font-bold text-red-500">&gt;</span>
            </div>
          </div>
        );
      case 'excelia':
        return (
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full border border-amber-500 flex items-center justify-center text-amber-600 text-xs font-serif italic">
              xl
            </div>
            <div className="flex flex-col text-left">
              <span className="text-base font-bold text-slate-900 leading-none">excelia</span>
              <span className="text-[6.5px] uppercase tracking-widest text-slate-500 font-semibold mt-0.5">BUSINESS SCHOOL</span>
            </div>
          </div>
        );
      case 'em-normandie':
        return (
          <div className="flex items-center gap-1.5">
            <div className="bg-[#b91c1c] text-white px-1.5 py-1 text-center leading-none rounded-sm">
              <div className="text-[6px] font-bold">1871</div>
              <div className="text-xs font-black tracking-tighter">EM</div>
              <div className="text-[5.5px] tracking-tight">NORMANDIE</div>
            </div>
          </div>
        );
      case 'idrac':
        return (
          <div className="flex flex-col items-center">
            <span className="text-lg font-black tracking-tight text-[#991b1b]">IDRAC</span>
            <span className="text-[7px] font-bold tracking-widest text-slate-700 uppercase">BUSINESS SCHOOL</span>
          </div>
        );
      case 'igefi':
        return (
          <div className="flex flex-col items-center text-center">
            <span className="text-lg font-black tracking-tight text-[#047857]">IGEFI®</span>
            <span className="text-[6px] leading-tight text-slate-500">
              École des métiers de la finance d'entreprise<br />et de l'expertise comptable
            </span>
          </div>
        );
      case 'epsi':
        return (
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 bg-gradient-to-br from-amber-400 to-indigo-600 rounded-sm"></div>
            <div className="flex flex-col text-left">
              <span className="text-base font-black text-slate-900 lowercase leading-none">epsi®</span>
              <span className="text-[6.5px] text-slate-500 leading-tight">l'école d'ingénierie informatique</span>
            </div>
          </div>
        );
      case 'ifag':
        return (
          <div className="flex flex-col items-center text-center">
            <span className="text-base font-black tracking-tight text-[#dc2626]">IFAG®</span>
            <span className="text-[7px] text-slate-600 font-medium">Ecole de management</span>
          </div>
        );
      case 'sup-de-com':
        return (
          <div className="flex items-center gap-1">
            <div className="flex flex-col text-right font-black leading-none text-slate-900 text-[10px]">
              <span>SUP</span>
              <span>DE</span>
            </div>
            <div className="text-base font-black text-[#0284c7] leading-none">COM</div>
          </div>
        );
      default:
        return <span className="font-bold text-slate-800">{partner.name}</span>;
    }
  };

  return (
    <button
      onClick={onClick}
      className="p-2 sm:p-3 bg-white hover:bg-slate-50 transition-all rounded-md border border-slate-200/80 hover:border-cyan-500/50 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-md flex flex-col items-center justify-center min-h-[64px] group text-center cursor-pointer"
      title={`${partner.name} - ${partner.country}`}
    >
      <div className="group-hover:scale-105 transition-transform duration-200">
        {renderLogoContent()}
      </div>
    </button>
  );
};
