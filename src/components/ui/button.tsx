import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps } from "react";

type Variant = "primary" | "outline" | "ghost" | "white";

const styles: Record<Variant, string> = {
  primary:
    "bg-accent-500 text-white shadow-[0_8px_20px_-8px_rgb(249_115_22/0.7)] hover:bg-accent-600",
  outline: "border border-brand-600 text-brand-700 bg-white hover:bg-brand-50",
  ghost: "text-brand-700 hover:text-brand-900",
  white: "bg-white text-brand-800 hover:bg-brand-50",
};

export function ButtonLink({
  variant = "primary",
  arrow = false,
  size = "md",
  className = "",
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; arrow?: boolean; size?: "sm" | "md" }) {
  return (
    <Link
      className={`group inline-flex items-center justify-center gap-2 rounded-lg font-bold transition-colors duration-200 ${
        size === "sm" ? "h-10 px-4 text-[13px]" : "h-12 px-6 text-sm"
      } ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
      {arrow && <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </Link>
  );
}
