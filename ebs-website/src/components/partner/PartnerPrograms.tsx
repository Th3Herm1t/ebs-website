interface Programme {
  nom: string;
  duree: string;
  details: string;
}

interface PartnerProgramsProps {
  programmes: Programme[];
  className?: string;
}

export function PartnerPrograms({ programmes, className }: PartnerProgramsProps) {
  return (
    <div className={className}>
      <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy leading-[1.2] mb-5">
        Programmes d&apos;accueil disponibles
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-penn-green">
              <th className="py-3 pr-4 text-[14px] font-extrabold text-penn-navy uppercase tracking-wide">Programme</th>
              <th className="py-3 px-4 text-[14px] font-extrabold text-penn-navy uppercase tracking-wide">Durée</th>
              <th className="py-3 pl-4 text-[14px] font-extrabold text-penn-navy uppercase tracking-wide">Détails</th>
            </tr>
          </thead>
          <tbody>
            {programmes.map((p) => (
              <tr key={p.nom} className="border-b border-penn-border hover:bg-penn-bg-light transition-colors">
                <td className="py-4 pr-4 text-[14px] font-bold text-penn-navy">{p.nom}</td>
                <td className="py-4 px-4 text-[14px] text-penn-body">{p.duree}</td>
                <td className="py-4 pl-4 text-[13px] text-penn-body">{p.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
