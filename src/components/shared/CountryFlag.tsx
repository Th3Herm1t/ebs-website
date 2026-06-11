import { cn } from "@/lib/utils";

const flags: Record<string, { viewBox: string; paths: { d: string; fill: string }[] }> = {
  FR: {
    viewBox: "0 0 640 480",
    paths: [
      { d: "M0 0h213.3v480H0z", fill: "#002654" },
      { d: "M213.3 0h213.4v480H213.3z", fill: "#fff" },
      { d: "M426.7 0H640v480H426.7z", fill: "#ce1126" },
    ],
  },
  CA: {
    viewBox: "0 0 640 480",
    paths: [
      { d: "M150.1 0h339.7v480H150z", fill: "#fff" },
      { d: "M-19.7 0h169.8v480H-19.7zm509.5 0h169.8v480H489.9z", fill: "#f00" },
      {
        d: "M201 232l-14-22 43 4-9-42 34 24 8-40 9 40 33-24-8 42 42-4-14 22 33 13-46 17 2 47-27-34-31 33 2-46-46-17z",
        fill: "#f00",
      },
    ],
  },
  IT: {
    viewBox: "0 0 640 480",
    paths: [
      { d: "M0 0h213.3v480H0z", fill: "#009246" },
      { d: "M213.3 0h213.4v480H213.3z", fill: "#fff" },
      { d: "M426.7 0H640v480H426.7z", fill: "#ce2b37" },
    ],
  },
  OM: {
    viewBox: "0 0 640 480",
    paths: [
      { d: "M0 0h640v480H0z", fill: "#fff" },
      { d: "M0 0h640v160H0z", fill: "#db161b" },
      { d: "M0 320h640v160H0z", fill: "#008000" },
      { d: "M0 0h160v480H0z", fill: "#db161b" },
    ],
  },
};

interface CountryFlagProps {
  code: string;
  className?: string;
}

export function CountryFlag({ code, className }: CountryFlagProps) {
  const flag = flags[code];
  if (!flag) return null;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={flag.viewBox}
      className={cn("w-5 h-3.5 shrink-0 rounded-sm", className)}
    >
      {flag.paths.map((p, i) => (
        <path key={i} d={p.d} fill={p.fill} />
      ))}
    </svg>
  );
}
