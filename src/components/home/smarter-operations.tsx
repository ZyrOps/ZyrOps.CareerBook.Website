import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/icon";
import { operations } from "@/content/home";
import { SectionHeader } from "./section-header";

export function SmarterOperations() {
  return (
    <section className="py-16 lg:py-20" aria-labelledby="operations-heading">
      <div className="container-x">
        <SectionHeader
          id="operations-heading"
          eyebrow="Integrated Financial and Administrative Control"
          title="Stronger Institutions with Smarter Operations"
          highlight="Smarter Operations"
          link={{ label: "Explore All Solutions", href: "/solutions" }}
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {operations.map((o) => (
            <li key={o.title}>
              <Link
                href={o.href}
                className="group relative flex h-full flex-col rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
              >
                <span className={`grid size-11 place-items-center rounded-xl ${o.tone}`}>
                  <Icon name={o.icon} className="size-5" />
                </span>
                <ArrowRight aria-hidden="true" className="absolute top-5 right-5 size-4 text-accent-500 transition-transform group-hover:translate-x-0.5" />
                <span className="mt-4 block text-[15px] font-bold text-ink group-hover:text-brand-700">{o.title}</span>
                <span className="mt-1 block text-[13px] leading-5 text-muted">{o.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
