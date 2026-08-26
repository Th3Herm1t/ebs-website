interface PartnerPresentationProps {
  children: React.ReactNode;
  className?: string;
}

export function PartnerPresentation({ children, className }: PartnerPresentationProps) {
  return (
    <div className={className}>
      <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy leading-[1.2] mb-5">
        Présentation de l&apos;établissement
      </h2>
      <div className="text-[15px] md:text-[16px] text-penn-body leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );
}
