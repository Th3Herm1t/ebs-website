interface CertProviderIntroProps {
  presentation: string;
  pourquoi: string;
  className?: string;
}

export function CertProviderIntro({ presentation, pourquoi, className }: CertProviderIntroProps) {
  return (
    <div className={className}>
      <div className="space-y-6">
        <div>
          <h2 className="text-[28px] font-extrabold text-penn-navy mb-3">Présentation</h2>
          <p className="text-[15px] md:text-[16px] text-penn-body leading-relaxed">{presentation}</p>
        </div>
        <div>
          <h2 className="text-[28px] font-extrabold text-penn-navy mb-3">Pourquoi ces certifications comptent</h2>
          <p className="text-[15px] md:text-[16px] text-penn-body leading-relaxed">{pourquoi}</p>
        </div>
      </div>
    </div>
  );
}
