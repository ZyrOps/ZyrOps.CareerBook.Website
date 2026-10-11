import Link from "next/link";
import { ArrowRight, CircleCheck, Plus } from "lucide-react";
import { getRef, pageHref, sections, type ContentPage } from "@/content";
import { CtaBanner } from "@/components/home/cta-banner";
import { Visual } from "@/components/diagrams/visual";
import { JsonLd } from "@/components/seo/json-ld";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqSchema, webPageSchema } from "@/lib/seo";
import { PageHero } from "./page-hero";

function Features({ page }: { page: ContentPage }) {
  if (!page.features?.length) return null;
  return (
    <section className="py-16 lg:py-20" aria-labelledby="features-heading">
      <div className="container-x">
        <SectionHeading id="features-heading" title={page.featuresTitle ?? `Key capabilities`} align="left" />
        <ul className={`mt-10 grid gap-4 sm:grid-cols-2 ${page.features.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
          {page.features.map((f, i) => (
            <li key={f.title} className="rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-card">
              <span className={`grid size-11 place-items-center rounded-xl ${i % 2 ? "bg-accent-50 text-accent-600" : "bg-brand-50 text-brand-600"}`}>
                <Icon name={f.icon} className="size-5" />
              </span>
              <h3 className="mt-4 text-base font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{f.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Outcomes({ page }: { page: ContentPage }) {
  if (!page.outcomes?.length && !page.metrics?.length) return null;
  return (
    <section className="bg-brand-950 py-16 text-white lg:py-20">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold tracking-[0.14em] text-accent-400 uppercase">Outcomes</p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-[34px]">What institutions achieve</h2>
          {page.outcomes && (
            <ul className="mt-6 space-y-3">
              {page.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 text-[15px] text-white/85">
                  <CircleCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent-400" />
                  {o}
                </li>
              ))}
            </ul>
          )}
        </div>
        {page.metrics && (
          <ul className="grid grid-cols-2 gap-4">
            {page.metrics.map((m) => (
              <li key={m.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-3xl font-extrabold text-white">{m.value}</p>
                <p className="mt-1 text-sm text-white/70">{m.label}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function Resources({ page }: { page: ContentPage }) {
  if (!page.resources?.length) return null;
  return (
    <section className="py-16 lg:py-20">
      <div className="container-x">
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {page.resources.map((r) => (
            <li key={r.title}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-card">
                <div className="mb-5 grid aspect-[16/8] place-items-center rounded-xl bg-gradient-to-br from-brand-100 via-brand-50 to-accent-50">
                  <Icon name={page.icon} className="size-10 text-brand-500" />
                </div>
                <p className="text-[11px] font-bold tracking-[0.12em] text-accent-600 uppercase">{r.type}</p>
                <h2 className="mt-2 text-lg leading-snug font-bold">{r.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted">{r.summary}</p>
                <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-[13px]">
                  <span className="font-medium text-muted">{r.meta}</span>
                  <Link href="/contact" className="inline-flex items-center gap-1 font-bold text-brand-700 hover:text-brand-900">
                    Request access <ArrowRight aria-hidden="true" className="size-3.5" />
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Legal({ page }: { page: ContentPage }) {
  if (!page.legal?.length) return null;
  return (
    <section className="py-14 lg:py-16">
      <div className="container-x grid gap-12 lg:grid-cols-[240px_1fr]">
        <nav aria-label="On this page" className="top-24 self-start lg:sticky">
          <p className="text-xs font-bold tracking-[0.12em] text-muted uppercase">On this page</p>
          <ul className="mt-3 space-y-2 border-l border-line">
            {page.legal.map((b, i) => (
              <li key={b.heading}>
                <a href={`#s-${i}`} className="-ml-px block border-l border-transparent pl-4 text-sm text-body hover:border-brand-600 hover:text-brand-700">
                  {b.heading}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <article className="prose-legal max-w-3xl">
          {page.lastUpdated && (
            <p className="text-sm text-muted">
              Last updated: <time dateTime={page.lastUpdated}>{new Date(page.lastUpdated).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</time>
            </p>
          )}
          {page.legal.map((b, i) => (
            <div key={b.heading} id={`s-${i}`} className="scroll-mt-24">
              <h2>{b.heading}</h2>
              {b.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {b.bullets && (
                <ul>
                  {b.bullets.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}

function Faqs({ page }: { page: ContentPage }) {
  if (!page.faqs?.length) return null;
  return (
    <section className="bg-surface py-16 lg:py-20" aria-labelledby="faq-heading">
      <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading id="faq-heading" eyebrow="FAQ" title="Frequently asked questions" align="left" />
        <div className="divide-y divide-line rounded-2xl border border-line bg-white">
          {page.faqs.map((f) => (
            <details key={f.q} className="group p-5 sm:p-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-bold text-ink [&::-webkit-details-marker]:hidden">
                <h3 className="text-base font-bold">{f.q}</h3>
                <Plus aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-600 transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-3 text-[15px] leading-7 text-body">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd data={faqSchema(page.faqs)} />
    </section>
  );
}

function Related({ page }: { page: ContentPage }) {
  const related = (page.related ?? []).map(getRef).filter((p): p is ContentPage => Boolean(p));
  if (!related.length) return null;
  return (
    <section className="py-16 lg:py-20" aria-labelledby="related-heading">
      <div className="container-x">
        <SectionHeading id="related-heading" title="Explore related" align="left" />
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {related.map((r) => (
            <li key={pageHref(r)}>
              <Link href={pageHref(r)} className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card">
                <span className="text-[11px] font-bold tracking-[0.12em] text-muted uppercase">{sections[r.section].label}</span>
                <span className="mt-2 text-base font-bold text-ink group-hover:text-brand-700">{r.navLabel}</span>
                <span className="mt-2 line-clamp-2 flex-1 text-sm leading-6 text-muted">{r.description}</span>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-700">
                  Learn more <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ContentPageView({ page }: { page: ContentPage }) {
  const section = sections[page.section];
  const path = pageHref(page);
  const isLegal = Boolean(page.legal);
  const badge =
    page.status === "expanding" ? (
      <span className="rounded-full bg-accent-100 px-2.5 py-0.5 text-[11px] font-bold text-accent-700">GCC Expansion</span>
    ) : page.status === "live" ? (
      <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">Live market</span>
    ) : null;

  return (
    <>
      <PageHero
        crumbs={[
          { name: section.label, path: `/${section.key}` },
          { name: page.navLabel, path },
        ]}
        eyebrow={page.eyebrow}
        title={page.title}
        highlight={page.highlight}
        intro={page.intro}
        badge={badge}
        aside={page.visual ? <Visual kind={page.visual} /> : undefined}
        ctas={!isLegal}
        compact={isLegal || Boolean(page.resources)}
      />
      <Features page={page} />
      <Outcomes page={page} />
      <Resources page={page} />
      <Legal page={page} />
      <Faqs page={page} />
      <Related page={page} />
      {!isLegal && <CtaBanner />}
      <JsonLd data={webPageSchema({ name: page.title, description: page.description, path })} />
    </>
  );
}
