import { cn } from "@/lib/utils";

const variants = {
  default: "bg-penn-green/10 text-penn-green border-penn-green/20",
  "penn-green": "bg-penn-green text-white border-penn-green",
  "penn-navy": "bg-penn-navy text-white border-penn-navy",
  outline: "bg-transparent text-penn-green border-penn-green",
  muted: "bg-penn-border/50 text-penn-body border-penn-border",
};

const sizes = {
  sm: "px-2 py-0.5 text-[11px]",
  default: "px-3 py-1 text-[13px]",
  lg: "px-4 py-1.5 text-[14px]",
};

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}

export function Badge({
  variant = "default",
  size = "default",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-bold tracking-wide uppercase whitespace-nowrap",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
