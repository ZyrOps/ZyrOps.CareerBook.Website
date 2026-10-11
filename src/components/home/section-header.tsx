import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Highlight } from "@/components/ui/section-heading";

export function SectionHeader({
  id,
  eyebrow,
  title,
  highlight,
  highlightClass = "text-brand-600",
  link,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  highlight?: string;
  highlightClass?: string;
  link?: { label: string; href: string };
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
        <h2 id={id} className="text-[28px] leading-tight font-extrabold text-ink sm:text-[32px]">
          <Highlight text={title} highlight={highlight} className={highlightClass} />
        </h2>
      </div>
      {link && (
        <Link href={link.href} className="group inline-flex items-center gap-1.5 text-sm font-bold text-accent-600 hover:text-accent-700">
          {link.label}
          <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
}
