interface PartnerEligibilityProps {
  children: React.ReactNode;
  className?: string;
}

export function PartnerEligibility({ children, className }: PartnerEligibilityProps) {
  return (
    <div className={className}>
      <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy leading-[1.2] mb-4">
        Éligibilité depuis EBS
      </h2>
      <div className="text-[15px] md:text-[16px] text-penn-body leading-relaxed">
        {children}
      </div>
    </div>
  );
}
