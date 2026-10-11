import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/button";
import { Highlight } from "@/components/ui/section-heading";
import { Breadcrumbs, type Crumb } from "./breadcrumbs";

export function PageHero({
  crumbs,
  eyebrow,
  title,
  highlight,
  intro,
  aside,
  badge,
  ctas = true,
  compact = false,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  highlight?: string;
  intro: string;
  aside?: ReactNode;
  badge?: ReactNode;
  ctas?: boolean;
  compact?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/80 via-white to-white">
      <div aria-hidden="true" className="dot-grid absolute inset-y-0 right-0 w-2/3 [mask-image:radial-gradient(ellipse_at_80%_30%,black,transparent_70%)]" />
      <div
        className={`container-x relative grid items-center gap-12 ${compact ? "py-12 lg:py-14" : "py-12 lg:py-20"} ${
          aside ? "lg:grid-cols-[1fr_1.05fr]" : ""
        }`}
      >
        <div className="animate-rise">
          <Breadcrumbs items={crumbs} />
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <p className="eyebrow">{eyebrow}</p>
            {badge}
          </div>
          <h1 className={`mt-3 leading-[1.1] font-extrabold text-brand-950 ${compact ? "text-3xl sm:text-4xl" : "text-[34px] sm:text-[44px] lg:text-5xl"}`}>
            <Highlight text={title} highlight={highlight} className="text-accent-500" />
          </h1>
          <p className={`mt-5 text-[16.5px] leading-7 text-body ${aside ? "max-w-xl" : "max-w-3xl"}`}>{intro}</p>
          {ctas && (
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/request-demo" arrow>
                Request a Demo
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                Contact Sales
              </ButtonLink>
            </div>
          )}
        </div>
        {aside && <div className="animate-rise [animation-delay:120ms]">{aside}</div>}
      </div>
    </section>
  );
}
