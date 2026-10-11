import { Quote } from "lucide-react";
import { testimonials } from "@/content/home";
import { SectionHeading } from "@/components/ui/section-heading";
import { Portrait } from "./portrait";

const initials = (name: string) =>
  name
    .replace(/^(Dr|Fr|Mr|Mrs|Ms|Prof)\.\s*/i, "")
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

export function Testimonials() {
  return (
    <section className="pb-16 lg:pb-20" aria-labelledby="testimonials-heading">
      <div className="container-x">
        <SectionHeading id="testimonials-heading" title="What Our Clients Say" highlight="Clients" />
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={t.name}>
              <figure className="flex h-full gap-4 rounded-2xl border border-line bg-white p-6 transition-shadow duration-300 hover:shadow-card">
                <Portrait name={t.name} initials={initials(t.name)} index={i} className="size-14" />
                <div className="flex flex-1 flex-col">
                  <Quote aria-hidden="true" className="size-6 fill-accent-500 text-accent-500" />
                  <blockquote className="mt-2 flex-1 text-[14px] leading-6 text-body">{t.quote}</blockquote>
                  <figcaption className="mt-4">
                    <span className="block text-[14px] font-extrabold text-brand-700">{t.name}</span>
                    <span className="block text-[12.5px] text-muted">{t.role}</span>
                  </figcaption>
                </div>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
