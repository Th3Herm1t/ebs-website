import { Check } from "lucide-react";

interface PartnerAdvantagesProps {
  avantages: string[];
  className?: string;
}

export function PartnerAdvantages({ avantages, className }: PartnerAdvantagesProps) {
  return (
    <div className={className}>
      <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy leading-[1.2] mb-5">
        Avantages & Facilités
      </h2>
      <div className="space-y-3">
        {avantages.map((a) => (
          <div key={a} className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-penn-green/10 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3.5 h-3.5 text-penn-green" />
            </div>
            <span className="text-[15px] text-penn-body leading-relaxed">{a}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
