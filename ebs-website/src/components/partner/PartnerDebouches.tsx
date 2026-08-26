interface PartnerDebouchesProps {
  debouches: string[];
  className?: string;
}

export function PartnerDebouches({ debouches, className }: PartnerDebouchesProps) {
  return (
    <div className={className}>
      <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy leading-[1.2] mb-5">
        Débouchés
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {debouches.map((d) => (
          <div
            key={d}
            className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg border border-penn-border text-[14px] font-semibold text-penn-navy border-l-[3px] border-l-penn-green"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-penn-green shrink-0" />
            {d}
          </div>
        ))}
      </div>
    </div>
  );
}
