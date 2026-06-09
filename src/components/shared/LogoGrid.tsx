import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoItem {
  src: string;
  alt: string;
  href?: string;
}

interface LogoGridProps {
  logos: LogoItem[];
  columns?: 3 | 4 | 5 | 6;
  grayscale?: boolean;
  bordered?: boolean;
  className?: string;
}

const colClasses: Record<number, string> = {
  3: "grid-cols-2 sm:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4",
  5: "grid-cols-2 sm:grid-cols-3 md:grid-cols-5",
  6: "grid-cols-2 sm:grid-cols-3 md:grid-cols-6",
};

export function LogoGrid({
  logos,
  columns = 4,
  grayscale = false,
  bordered = true,
  className,
}: LogoGridProps) {
  const Wrapper = ({ href, children }: { href?: string; children: React.ReactNode }) => {
    if (href) {
      return (
        <Link href={href} className="block">
          {children}
        </Link>
      );
    }
    return <>{children}</>;
  };

  return (
    <div
      className={cn(
        "grid gap-px bg-penn-border",
        colClasses[columns],
        bordered && "border border-penn-border rounded-lg overflow-hidden",
        className
      )}
    >
      {logos.map((logo) => (
        <Wrapper key={logo.alt} href={logo.href}>
          <div
            className={cn(
              "flex items-center justify-center bg-white p-5 h-[100px] transition-all duration-200",
              "hover:shadow-md hover:relative hover:z-10",
              grayscale && "[&_img]:grayscale [&_img]:hover:grayscale-0"
            )}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={160}
              height={60}
              className="max-h-[60px] w-auto object-contain"
            />
          </div>
        </Wrapper>
      ))}
    </div>
  );
}
