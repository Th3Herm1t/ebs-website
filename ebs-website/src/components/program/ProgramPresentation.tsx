import { cn } from "@/lib/utils";
import { Badge } from "@/components/shared";

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
      <Badge variant="default" size="sm" className="mb-3">
        {surtitre}
      </Badge>
      <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy leading-tight mb-4">
        {title}
      </h2>
      <div className="text-[15px] md:text-[16px] text-penn-body leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );
}
