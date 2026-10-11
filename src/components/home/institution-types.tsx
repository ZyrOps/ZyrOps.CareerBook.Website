import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { institutionTypes } from "@/content/home";
import { Scene } from "./scene";
import { SectionHeader } from "./section-header";

export function InstitutionTypes() {
  return (
    <section className="py-16 lg:py-20" aria-labelledby="types-heading">
      <div className="container-x">
        <SectionHeader
          id="types-heading"
          title="Built for Every Type of Educational Institution"
          highlight="Every Type of Educational Institution"
          link={{ label: "Explore Industries", href: "/industries" }}
        />
        <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {institutionTypes.map((t, i) => (
            <li key={t.title}>
              <Link
                href={t.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  {t.image ? (
                    <Image src={t.image} alt={t.title} fill sizes="(min-width:1024px) 200px, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <Scene kind={t.scene} className="size-full transition-transform duration-500 group-hover:scale-105" />
                  )}
                </div>
                <div className="relative flex flex-1 flex-col px-4 pt-7 pb-4">
                  <span
                    className={`absolute -top-5 left-4 grid size-10 place-items-center rounded-full text-white ring-4 ring-white ${
                      i % 2 ? "bg-accent-500" : "bg-brand-600"
                    }`}
                  >
                    <Icon name={t.icon} className="size-5" />
                  </span>
                  <h3 className="text-[15px] font-bold text-ink group-hover:text-brand-700">{t.title}</h3>
                  <p className="mt-1 text-[12.5px] leading-5 text-muted">{t.text}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
