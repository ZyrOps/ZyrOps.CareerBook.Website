import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { customers, type Customer } from "@/content/customers";
import { SectionHeading } from "@/components/ui/section-heading";

function Wordmark({ c }: { c: Customer }) {
  if (c.logo) {
    return <Image src={c.logo} alt={c.name} width={140} height={48} className="h-10 w-auto object-contain" />;
  }
  const font = c.style === "serif" ? "font-serif tracking-wide" : c.style === "caps" ? "tracking-[0.12em]" : "tracking-tight";
  return (
    <span className="flex flex-col items-center leading-none" role="img" aria-label={c.name}>
      <span className={`text-xl font-extrabold text-ink/75 ${font}`}>{c.mark}</span>
      {c.sub && <span className="mt-1 max-w-[9rem] truncate text-[7.5px] font-bold tracking-[0.18em] text-muted">{c.sub}</span>}
    </span>
  );
}

export function TrustedBy() {
  return (
    <section className="py-20 lg:py-24" aria-labelledby="trusted-heading">
      <div className="container-x">
        <SectionHeading
          id="trusted-heading"
          title="Trusted by Leading Educational Institutions"
          highlight="Leading Educational Institutions"
          subtitle="From schools to universities, our partners trust CareerBook ERP™ to power their growth."
        />
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {customers.map((c) => (
            <li
              key={c.name}
              className="grid h-24 place-items-center rounded-xl border border-line bg-white px-4 grayscale transition-all duration-300 hover:border-brand-200 hover:shadow-card hover:grayscale-0"
            >
              <Wordmark c={c} />
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Link href="/resources/case-studies" className="group inline-flex items-center gap-2 text-sm font-bold text-accent-600 hover:text-accent-700">
            View All Customer Stories
            <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
