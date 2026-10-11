import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageHref, pagesIn, type Section } from "@/content";
import { CtaBanner } from "@/components/home/cta-banner";
import { ExecutiveIntelligence } from "@/components/home/executive-intelligence";
import { GlobalMap } from "@/components/home/global-presence";
import { LifecycleDiagram } from "@/components/home/student-lifecycle";
import { ArchitectureDiagram } from "@/components/diagrams/architecture-diagram";
import { JsonLd } from "@/components/seo/json-ld";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { absoluteUrl } from "@/lib/site";
import { webPageSchema } from "@/lib/seo";
import { PageHero } from "./page-hero";

export function SectionIndex({ section }: { section: Section }) {
  const pages = pagesIn(section.key);
  const path = `/${section.key}`;
  const aside =
    section.key === "platform" ? <ArchitectureDiagram /> : section.key === "countries" ? (
      <div className="rounded-2xl border border-line bg-white p-4 shadow-float">
        <GlobalMap showList={false} />
      </div>
    ) : undefined;

  return (
    <>
      <PageHero
        crumbs={[{ name: section.label, path }]}
        eyebrow={section.eyebrow}
        title={section.title}
        highlight={section.highlight}
        intro={section.intro}
        aside={aside}
        ctas={section.key !== "trust"}
      />

      <section className="py-16 lg:py-20">
        <div className="container-x">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pages.map((p, i) => (
              <li key={p.slug}>
                <Link
                  href={pageHref(p)}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card"
                >
                  <div className="flex items-center justify-between">
                    <span className={`grid size-12 place-items-center rounded-xl ${i % 2 ? "bg-accent-50 text-accent-600" : "bg-brand-50 text-brand-600"}`}>
                      <Icon name={p.icon} className="size-6" />
                    </span>
                    {p.status === "expanding" && (
                      <span className="rounded-full bg-accent-100 px-2.5 py-0.5 text-[11px] font-bold text-accent-700">Expanding</span>
                    )}
                  </div>
                  <h2 className="mt-5 text-lg font-bold text-ink group-hover:text-brand-700">{p.navLabel}</h2>
                  <p className="mt-2 flex-1 text-sm leading-6 text-muted">{p.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand-700">
                    Learn more <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {section.key === "solutions" && (
        <section className="bg-surface py-16 lg:py-20">
          <div className="container-x">
            <SectionHeading
              title="The Complete Student Lifecycle"
              highlight="Student Lifecycle"
              subtitle="Every suite connects to a single student record — from enquiry to alumni."
            />
            <div className="mt-12">
              <LifecycleDiagram />
            </div>
          </div>
        </section>
      )}
      {section.key === "solutions" && <ExecutiveIntelligence />}

      {section.key !== "trust" && <CtaBanner />}

      <JsonLd
        data={[
          webPageSchema({ name: section.title, description: section.description, path }),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: section.title,
            itemListElement: pages.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.navLabel,
              url: absoluteUrl(pageHref(p)),
            })),
          },
        ]}
      />
    </>
  );
}
