import Link from "next/link";
import { CircleCheck } from "lucide-react";
import { LogoMark } from "@/components/brand/logo";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Highlight } from "@/components/ui/section-heading";
import { audience, hubModules, platformHighlights } from "@/content/home";

function Hub() {
  const r = 39;
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden="true">
        <circle cx="50" cy="50" r="17" fill="#f6f3ff" />
        <circle cx="50" cy="50" r="24" fill="none" stroke="#ede8fe" strokeWidth="0.6" />
        {hubModules.map((_, i) => {
          const a = (i / hubModules.length) * Math.PI * 2 - Math.PI / 2;
          const c = Math.cos(a);
          const s = Math.sin(a);
          return (
            <line
              key={i}
              x1={50 + c * 18}
              y1={50 + s * 18}
              x2={50 + c * (r - 9)}
              y2={50 + s * (r - 9)}
              stroke="#c4b2f8"
              strokeWidth="0.45"
              strokeDasharray="1.2 1.2"
            />
          );
        })}
      </svg>
      <div className="absolute top-1/2 left-1/2 grid size-[30%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-center shadow-float ring-8 ring-brand-50">
        <div>
          <LogoMark className="mx-auto size-9 sm:size-11" />
          <p className="mt-1 text-[11px] leading-tight font-extrabold text-brand-950 sm:text-sm">
            CareerBook
            <br />
            <span className="text-brand-600">ERP™</span>
          </p>
        </div>
      </div>
      <ul>
        {hubModules.map((m, i) => {
          const a = (i / hubModules.length) * Math.PI * 2 - Math.PI / 2;
          return (
            <li
              key={m.label}
              className="absolute w-[25%] -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${50 + Math.cos(a) * r}%`, top: `${50 + Math.sin(a) * r}%` }}
            >
              <Link href={m.href} className="group flex flex-col items-center text-center">
                <span className={`grid size-10 place-items-center rounded-full shadow-card ring-4 ring-white transition-transform duration-300 group-hover:-translate-y-0.5 sm:size-12 ${m.tone}`}>
                  <Icon name={m.icon} className="size-5" />
                </span>
                <span className="mt-1.5 text-[10px] leading-tight font-bold text-ink group-hover:text-brand-700 sm:text-[11.5px]">{m.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function CompleteSolution() {
  return (
    <section className="py-16 lg:py-20" aria-labelledby="solution-heading">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[0.95fr_1.35fr_0.7fr]">
        <div>
          <p className="eyebrow">End-to-end Education Operating System</p>
          <h2 id="solution-heading" className="mt-3 text-[30px] leading-tight font-extrabold text-ink sm:text-[34px]">
            <Highlight text="A Complete Solution Across the Institution" highlight="Complete Solution" />
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-body">
            From student recruitment to alumni engagement, CareerBook ERP™ connects every function on a single platform
            with one database.
          </p>
          <ul className="mt-5 space-y-2.5">
            {platformHighlights.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-[14.5px] font-medium text-body">
                <CircleCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 fill-brand-600 text-white" />
                {p}
              </li>
            ))}
          </ul>
          <ButtonLink href="/platform" variant="purple" arrow className="mt-8">
            Explore the Platform
          </ButtonLink>
        </div>

        <Hub />

        <aside className="rounded-2xl border border-line bg-lavender p-5" aria-labelledby="audience-heading">
          <h3 id="audience-heading" className="text-[17px] leading-snug font-extrabold text-brand-700">
            One Platform.
            <br />
            Multiple Stakeholders.
          </h3>
          <ul className="mt-4 space-y-3.5">
            {audience.map((a) => (
              <li key={a.role} className="flex items-center gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-brand-600 shadow-card">
                  <Icon name={a.icon} className="size-4" />
                </span>
                <span className="leading-tight">
                  <span className="block text-[13px] font-bold text-ink">{a.role}</span>
                  <span className="block text-[11.5px] text-muted">{a.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
