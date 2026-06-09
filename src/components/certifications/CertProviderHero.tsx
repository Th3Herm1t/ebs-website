import { Badge } from "@/components/shared/Badge";
import { cn } from "@/lib/utils";

interface CertProviderHeroProps {
  name: string;
  tagline?: string;
  className?: string;
}

export function CertProviderHero({ name, tagline, className }: CertProviderHeroProps) {
  return (
    <section className={cn("pt-36 pb-20 bg-gradient-to-b from-penn-bg-light to-white", className)}>
      <div className="max-w-[1160px] mx-auto px-5 lg:px-12 text-center">
        <Badge variant="default" size="lg" className="mb-4">
          Fournisseur de certifications
        </Badge>
        <h1 className="text-[36px] md:text-[48px] font-extrabold text-penn-navy leading-[1.15] mb-3">
          Certifications {name}
        </h1>
        {tagline && (
          <p className="text-[17px] text-penn-body max-w-[600px] mx-auto">
            {tagline}
          </p>
        )}
      </div>
    </section>
  );
}
