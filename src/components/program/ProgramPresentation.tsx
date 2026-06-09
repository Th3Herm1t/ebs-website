import { cn } from "@/lib/utils";

interface ProgramPresentationProps {
  surtitre: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function ProgramPresentation({
  surtitre,
  title,
  children,
  className,
}: ProgramPresentationProps) {
  return (
    <div className={cn("max-w-[900px]", className)}>
      <span className="text-penn-green font-bold text-[13px] uppercase tracking-widest mb-3 block">
        {surtitre}
      </span>
      <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy leading-tight mb-4">
        {title}
      </h2>
      <div className="text-[15px] md:text-[16px] text-penn-body leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );
}
