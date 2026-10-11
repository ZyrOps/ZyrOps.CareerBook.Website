import { CircleCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/brand/social-icons";
import { LeadForm } from "@/components/forms/lead-form";
import { StatsRow } from "@/components/home/hero";
import { Icon } from "@/components/ui/icon";
import { Highlight } from "@/components/ui/section-heading";
import { site } from "@/lib/site";
import { Breadcrumbs } from "./breadcrumbs";

export function LeadPage({
  intent,
  crumb,
  eyebrow,
  title,
  highlight,
  intro,
  points,
}: {
  intent: "demo" | "contact";
  crumb: { name: string; path: string };
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
  points: string[];
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/80 via-white to-white">
      <div aria-hidden="true" className="dot-grid absolute inset-y-0 left-0 w-1/2 [mask-image:radial-gradient(ellipse_at_20%_30%,black,transparent_70%)]" />
      <div className="container-x relative grid gap-12 py-12 lg:grid-cols-[1fr_1.1fr] lg:py-20">
        <div>
          <Breadcrumbs items={[crumb]} />
          <p className="eyebrow mt-6">{eyebrow}</p>
          <h1 className="mt-3 text-[34px] leading-[1.1] font-extrabold text-brand-950 sm:text-[44px]">
            <Highlight text={title} highlight={highlight} className="text-accent-500" />
          </h1>
          <p className="mt-5 max-w-xl text-[16.5px] leading-7 text-body">{intro}</p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-[15px] font-medium text-body">
                <CircleCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-600" />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a href={`mailto:${site.contact.email}`} className="flex items-center gap-3 rounded-xl border border-line bg-white p-4 hover:border-brand-200 sm:col-span-2">
              <Icon name="mail" className="size-5 text-brand-600" />
              <span className="min-w-0">
                <span className="block text-xs text-muted">Email</span>
                <span className="block truncate text-[13px] font-bold text-ink">{site.contact.email}</span>
              </span>
            </a>
            <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 rounded-xl border border-line bg-white p-4 hover:border-brand-200">
              <Icon name="phone" className="size-5 text-brand-600" />
              <span>
                <span className="block text-xs text-muted">Call</span>
                <span className="block text-[13px] font-bold text-ink">{site.contact.phone}</span>
              </span>
            </a>
            <a
              href={`https://wa.me/${site.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-line bg-white p-4 hover:border-brand-200"
            >
              <WhatsAppIcon className="size-5 text-[#25D366]" />
              <span>
                <span className="block text-xs text-muted">WhatsApp</span>
                <span className="block text-[13px] font-bold text-ink">Chat now</span>
              </span>
            </a>
          </div>

          <StatsRow className="mt-10 border-t border-line pt-8" />
        </div>
        <div className="lg:pt-10">
          <LeadForm intent={intent} />
        </div>
      </div>
    </section>
  );
}
