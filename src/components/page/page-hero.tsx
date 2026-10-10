import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/button";
import { Highlight } from "@/components/ui/section-heading";
import { Breadcrumbs } from "./breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  highlight,
  intro,
  crumbs,
  aside,
  badge,
  ctas = true,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  intro: string;
  crumbs: { name: string; path: string }[];
  aside?: ReactNode;
  badge?: ReactNode;
  ctas?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/80 to-white">
      <div aria-hidden="true" className="dot-grid absolute inset-y-0 right-0 w-2/3 [mask-image:radial-gradient(ellipse_at_70%_30%,black,transparent_70%)]" />
      <div
        className={`container-x relative grid gap-12 pt-10 pb-16 lg:pt-12 lg:pb-20 ${aside ? "items-center lg:grid-cols-[1fr_1.05fr]" : ""}`}
      >
        <div className={`animate-rise ${aside ? "" : "max-w-3xl"}`}>
          <Breadcrumbs items={crumbs} />
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <p className="eyebrow">{eyebrow}</p>
            {badge}
          </div>
          <h1 className="mt-4 text-4xl leading-[1.1] font-extrabold text-brand-950 sm:text-5xl">
            <Highlight text={title} highlight={highlight} className="text-accent-500" />
          </h1>
          <p className="mt-5 max-w-2xl text-[17px] leading-7 text-body">{intro}</p>
          {ctas && (
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/request-demo" arrow>
                Request a Demo
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                Talk to an Expert
              </ButtonLink>
            </div>
          )}
        </div>
        {aside && <div className="animate-rise [animation-delay:120ms]">{aside}</div>}
      </div>
    </section>
  );
}
