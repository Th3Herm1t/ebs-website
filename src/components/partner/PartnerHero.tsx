import { Badge } from "@/components/shared/Badge";
import { cn } from "@/lib/utils";

interface PartnerHeroProps {
  name: string;
  country: string;
  type: string;
  className?: string;
}

const countryColor: Record<string, string> = {
  "🇨🇦": "#E53935",
  "🇫🇷": "#1E88E5",
  "🇮🇹": "#43A047",
  "🇴🇲": "#FB8C00",
};

export function PartnerHero({ name, country, type, className }: PartnerHeroProps) {
  const flag = country.slice(0, 2); // Extract flag emoji prefix
  const accent = countryColor[flag] ?? "#2B8FAB";

  return (
    <section className={cn("pt-36 pb-20 bg-gradient-to-b from-penn-bg-light to-white", className)}>
      <div className="max-w-[1160px] mx-auto px-5 lg:px-12 text-center">
        <Badge variant="outline" size="lg" className="mb-4">
          {country}
        </Badge>
        <h1 className="text-[36px] md:text-[48px] font-extrabold text-penn-navy leading-[1.15] mb-3">
          Partenariat EBS × {name}
        </h1>
        <p className="text-[17px] text-penn-body">{type}</p>
      </div>
    </section>
  );
}
