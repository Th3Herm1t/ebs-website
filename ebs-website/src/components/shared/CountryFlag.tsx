import { cn } from "@/lib/utils";

type FlagPath = {
  d: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
};

const flags: Record<string, { viewBox: string; paths: FlagPath[] }> = {
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
      { d: "M201 232l-14-22 43 4-9-42 34 24 8-40 9 40 33-24-8 42 42-4-14 22 33 13-46 17 2 47-27-34-31 33 2-46-46-17z", fill: "#f00" },
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
  TN: {
    viewBox: "0 0 640 480",
    paths: [
      { d: "M0 0h640v480H0z", fill: "#e70013" },
      { d: "M320 240m-120 0a120 120 0 1 0 240 0a120 120 0 1 0-240 0", fill: "#fff" },
      { d: "M340 240m-96 0a96 96 0 1 0 192 0a96 96 0 1 0-192 0", fill: "#e70013" },
      { d: "M364 204l-31 95 81-59H284l81 59z", fill: "#e70013" },
    ],
  },
  DE: {
    viewBox: "0 0 640 480",
    paths: [
      { d: "M0 0h640v160H0z", fill: "#000" },
      { d: "M0 160h640v160H0z", fill: "#d00" },
      { d: "M0 320h640v160H0z", fill: "#ffce00" },
    ],
  },
  BE: {
    viewBox: "0 0 640 480",
    paths: [
      { d: "M0 0h213.3v480H0z", fill: "#000" },
      { d: "M213.3 0h213.4v480H213.3z", fill: "#fae042" },
      { d: "M426.7 0H640v480H426.7z", fill: "#ed2939" },
    ],
  },
  CH: {
    viewBox: "0 0 640 480",
    paths: [
      { d: "M0 0h640v480H0z", fill: "#d52b1e" },
      { d: "M280 180h80v120h-80z", fill: "#fff" },
      { d: "M220 270h200v-60H220z", fill: "#fff" },
    ],
  },
  AE: {
    viewBox: "0 0 640 480",
    paths: [
      { d: "M0 0h160v480H0z", fill: "#ff0000" },
      { d: "M160 0h480v160H160z", fill: "#00732f" },
      { d: "M160 160h480v160H160z", fill: "#fff" },
      { d: "M160 320h480v160H160z", fill: "#000" },
    ],
  },
  QA: {
    viewBox: "0 0 640 480",
    paths: [
      { d: "M0 0h640v480H0z", fill: "#fff" },
      { d: "M0 0h640v480H0z", fill: "#8d1b3d" },
      { d: "M0 0h160v480H0z", fill: "#fff" },
      { d: "M160 0l160 60-160 60 160 60-160 60 160 60-160 60 160 60-160 60 160 60-160 60z", fill: "#fff" },
    ],
  },
  SA: {
    viewBox: "0 0 640 480",
    paths: [
      { d: "M0 0h640v480H0z", fill: "#006c35" },
      { d: "M160 120l40 120-100-80h120l-100 80z", fill: "#fff" },
    ],
  },
  MA: {
    viewBox: "0 0 640 480",
    paths: [
      { d: "M0 0h640v480H0z", fill: "#c1272d" },
      { d: "M320 150l40 120-100-80h120l-100 80z", fill: "#006233" },
    ],
  },
  CI: {
    viewBox: "0 0 640 480",
    paths: [
      { d: "M0 0h213.3v480H0z", fill: "#009e60" },
      { d: "M213.3 0h213.4v480H213.3z", fill: "#fff" },
      { d: "M426.7 0H640v480H426.7z", fill: "#ff7f00" },
    ],
  },
  SN: {
    viewBox: "0 0 640 480",
    paths: [
      { d: "M0 0h213.3v480H0z", fill: "#00853f" },
      { d: "M213.3 0h213.4v480H213.3z", fill: "#ff0" },
      { d: "M426.7 0H640v480H426.7z", fill: "#e31b23" },
    ],
  },
  GB: {
    viewBox: "0 0 640 480",
    paths: [
      { d: "M0 0h640v480H0z", fill: "#012169" },
      { d: "M0 0l640 480m0-480L0 480", fill: "none", stroke: "#fff", strokeWidth: "60" },
      { d: "M0 0l640 480m0-480L0 480", fill: "none", stroke: "#c8102e", strokeWidth: "30" },
      { d: "M300 0v480m40-480v480", fill: "none", stroke: "#fff", strokeWidth: "60" },
      { d: "M300 0v480m40-480v480", fill: "none", stroke: "#c8102e", strokeWidth: "30" },
      { d: "M0 200h640v80H0z", fill: "#fff" },
      { d: "M0 200h640v80H0z", fill: "none", stroke: "#c8102e", strokeWidth: "30" },
    ],
  },
  TR: {
    viewBox: "0 0 640 480",
    paths: [
      { d: "M0 0h640v480H0z", fill: "#e30a17" },
      { d: "M280 240m-100 0a100 100 0 1 0 200 0a100 100 0 1 0-200 0", fill: "#fff" },
      { d: "M290 240m-80 0a80 80 0 1 0 160 0a80 80 0 1 0-160 0", fill: "#e30a17" },
      { d: "M320 200l30 120-80-60h100l-80 60z", fill: "#fff" },
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
        <path key={i} d={p.d} fill={p.fill ?? undefined} stroke={p.stroke ?? undefined} strokeWidth={p.strokeWidth ?? undefined} />
      ))}
    </svg>
  );
}
