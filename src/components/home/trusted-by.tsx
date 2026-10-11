import Image from "next/image";
import { customers, type Customer } from "@/content/customers";
import { ScrollButton } from "./scroll-button";
import { SectionHeader } from "./section-header";

function Wordmark({ c }: { c: Customer }) {
  if (c.logo) {
    return <Image src={c.logo} alt={c.name} width={150} height={52} className="h-11 w-auto object-contain" />;
  }
  const font = c.style === "serif" ? "font-serif tracking-wide" : c.style === "caps" ? "tracking-[0.12em]" : "tracking-tight";
  return (
    <span className="flex flex-col items-center leading-none" role="img" aria-label={c.name} style={{ color: c.color }}>
      <span className={`font-extrabold whitespace-nowrap ${c.mark.length > 8 ? "text-lg" : "text-[22px]"} ${font}`}>{c.mark}</span>
      {c.sub && <span className="mt-1.5 max-w-[10rem] truncate text-[8px] font-bold tracking-[0.18em] opacity-75">{c.sub}</span>}
    </span>
  );
}

export function TrustedBy() {
  return (
    <section className="py-16 lg:py-20" aria-labelledby="trusted-heading">
      <div className="container-x">
        <SectionHeader
          id="trusted-heading"
          eyebrow="Trusted by Renowned Educational Institutions"
          title="Growing Together with Our Customers"
          highlight="Our Customers"
          link={{ label: "View All Customer Stories", href: "/resources/case-studies" }}
        />
        <div className="mt-8 flex items-center gap-3">
          <ul
            id="customer-logos"
            className="flex flex-1 snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {customers.map((c) => (
              <li
                key={c.name}
                className="grid h-24 w-[190px] shrink-0 snap-start place-items-center rounded-2xl border border-line bg-white px-4 transition-shadow duration-300 hover:shadow-card"
              >
                <Wordmark c={c} />
              </li>
            ))}
          </ul>
          <ScrollButton targetId="customer-logos" label="Show more customers" />
        </div>
      </div>
    </section>
  );
}
