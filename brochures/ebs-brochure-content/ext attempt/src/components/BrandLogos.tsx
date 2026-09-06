import React from 'react';

// Official EBS Espima Business School Logo
export const EbsLogo: React.FC<{ variant?: 'dark' | 'light'; className?: string }> = ({ variant = 'dark', className = '' }) => {
  const isDark = variant === 'dark';
  return (
    <div className={`flex items-stretch select-none ${className}`}>
      <div className={`px-2.5 py-1 flex flex-col justify-center border-2 ${isDark ? 'border-[#0a2540] bg-[#0a2540] text-white' : 'border-white bg-white text-[#0a2540]'}`}>
        <div className="text-2xl sm:text-3xl font-black tracking-tight font-serif leading-none flex items-baseline gap-0.5">
          <span>EBS</span>
        </div>
        <div className="text-[7.5px] sm:text-[8.5px] font-bold tracking-widest uppercase flex items-center gap-1 mt-0.5 border-t border-current/30 pt-0.5">
          <span>ESPIMA</span>
          <span className="opacity-80">BUSINESS</span>
          <span className="opacity-80">SCHOOL</span>
          <span className="w-1.5 h-1.5 bg-[#ef4444] inline-block ml-0.5"></span>
        </div>
      </div>
    </div>
  );
};

// Google "G" Icon
export const GoogleIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" />
    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" />
    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.98 0 12s.45 3.84 1.25 5.42l4.03-3.15z" />
    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
  </svg>
);

// PwC Logo
export const PwcLogo: React.FC<{ className?: string }> = ({ className = "h-5" }) => (
  <div className={`font-serif font-black tracking-tighter text-[#D04A02] inline-flex items-baseline ${className}`}>
    <span className="text-xl">p</span>
    <span className="text-lg">w</span>
    <span className="text-xl">c</span>
  </div>
);

// Cisco Logo
export const CiscoLogo: React.FC<{ className?: string }> = ({ className = "h-5" }) => (
  <div className={`flex flex-col items-center justify-center ${className}`}>
    <div className="flex items-end gap-[1.5px] h-3">
      <span className="w-[1.5px] h-1.5 bg-[#00bceb]"></span>
      <span className="w-[1.5px] h-2.5 bg-[#00bceb]"></span>
      <span className="w-[1.5px] h-3 bg-[#00bceb]"></span>
      <span className="w-[1.5px] h-2 bg-[#00bceb]"></span>
      <span className="w-[1.5px] h-3.5 bg-[#00bceb]"></span>
      <span className="w-[1.5px] h-2 bg-[#00bceb]"></span>
      <span className="w-[1.5px] h-3 bg-[#00bceb]"></span>
      <span className="w-[1.5px] h-2.5 bg-[#00bceb]"></span>
      <span className="w-[1.5px] h-1.5 bg-[#00bceb]"></span>
    </div>
    <span className="text-[9px] font-extrabold tracking-widest text-[#00bceb] mt-0.5">CISCO</span>
  </div>
);

// Citi Logo
export const CitiLogo: React.FC<{ className?: string }> = ({ className = "h-5" }) => (
  <div className={`relative inline-flex items-center text-[#003B70] font-black tracking-tight ${className}`}>
    <span className="text-xl font-sans tracking-tight lowercase">citi</span>
    <svg className="absolute -top-1 left-2 w-4 h-2" viewBox="0 0 20 10">
      <path d="M 0 10 A 10 10 0 0 1 20 10" fill="none" stroke="#ED1C24" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  </div>
);

// IBM Logo
export const IbmLogo: React.FC<{ className?: string }> = ({ className = "h-5" }) => (
  <div className={`font-mono font-black text-[#0530AD] tracking-widest text-lg flex items-center select-none ${className}`}>
    <span className="border-y-2 border-[#0530AD] py-0.5 leading-none">IBM</span>
  </div>
);

// Bloomberg Logo Badge
export const BloombergBadge: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`bg-[#4d107a] text-white px-2 py-1 rounded text-xs font-semibold tracking-wide flex items-center justify-center ${className}`}>
    <span>Bloomberg</span>
  </div>
);

// JPMorgan Logo
export const JPMorganLogo: React.FC<{ className?: string }> = ({ className = "h-5" }) => (
  <div className={`flex items-center gap-1 select-none ${className}`}>
    <div className="w-3.5 h-3.5 bg-[#00529B] rounded-sm flex items-center justify-center text-white text-[8px] font-bold">JP</div>
    <span className="font-serif text-sm font-bold text-slate-800 tracking-tight">JPMorgan</span>
  </div>
);

// Mayer Brown Logo
export const MayerBrownLogo: React.FC<{ className?: string }> = ({ className = "h-4" }) => (
  <div className={`flex flex-col text-slate-900 leading-none select-none ${className}`}>
    <span className="font-serif font-bold text-xs tracking-wider">MAYER</span>
    <span className="font-serif font-semibold text-xs tracking-wider text-slate-700">BROWN</span>
  </div>
);
