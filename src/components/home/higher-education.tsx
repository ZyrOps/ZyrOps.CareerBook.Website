import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Highlight } from "@/components/ui/section-heading";
import { higherEdModules } from "@/content/home";

type Mock = (typeof higherEdModules)[number]["mock"];

function MiniMock({ kind }: { kind: Mock }) {
  if (kind === "bars") {
    return (
      <div className="flex h-full items-end gap-1.5 px-3 pb-3">
        {[40, 62, 50, 78, 66, 88].map((h, i) => (
          <span key={i} className={`flex-1 rounded-t ${i === 5 ? "bg-brand-600" : "bg-brand-200"}`} style={{ height: `${h}%` }} />
        ))}
      </div>
    );
  }
  if (kind === "table") {
    return (
      <div className="space-y-1.5 p-3">
        {[0, 1, 2, 3].map((r) => (
          <div key={r} className="flex items-center gap-1.5">
            <span className={`h-1.5 w-1/3 rounded-full ${r ? "bg-slate-200" : "bg-sky-300"}`} />
            <span className="h-1.5 flex-1 rounded-full bg-slate-100" />
            <span className={`h-1.5 w-4 rounded-full ${r % 2 ? "bg-emerald-300" : "bg-sky-200"}`} />
          </div>
        ))}
      </div>
    );
  }
  if (kind === "donut") {
    return (
      <div className="flex h-full items-center gap-3 px-3">
        <svg viewBox="0 0 36 36" className="size-14 shrink-0 -rotate-90">
          <circle cx="18" cy="18" r="14" fill="none" stroke="#ffedd5" strokeWidth="6" />
          <circle cx="18" cy="18" r="14" fill="none" stroke="#f97316" strokeWidth="6" strokeDasharray="62 88" />
          <circle cx="18" cy="18" r="14" fill="none" stroke="#5b21b6" strokeWidth="6" strokeDasharray="14 88" strokeDashoffset="-62" />
        </svg>
        <div className="flex-1 space-y-1.5">
          {[80, 60, 40].map((w) => (
            <span key={w} className="block h-1.5 rounded-full bg-slate-200" style={{ width: `${w}%` }} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="grid h-full grid-cols-4 gap-1.5 p-3">
      {Array.from({ length: 8 }, (_, i) => (
        <span key={i} className={`rounded ${[1, 6].includes(i) ? "bg-brand-300" : "bg-brand-100"}`} />
      ))}
    </div>
  );
}

export function HigherEducation() {
  return (
    <section className="bg-lavender py-16 lg:py-20" aria-labelledby="higher-ed-heading">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[0.8fr_2fr]">
        <div>
          <p className="eyebrow">Higher Education Excellence</p>
          <h2 id="higher-ed-heading" className="mt-3 text-[30px] leading-tight font-extrabold text-ink sm:text-[34px]">
            <Highlight text="Designed for Today's Higher Education Needs" highlight="Higher Education" />
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-body">
            Purpose-built modules for colleges and universities to manage accreditation, examinations, research and
            academic governance.
          </p>
          <ButtonLink href="/industries/universities" arrow className="mt-7">
            Explore Higher Education Solutions
          </ButtonLink>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {higherEdModules.map((m) => (
            <li key={m.title}>
              <Link
                href={m.href}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div aria-hidden="true" className="h-24 rounded-xl border border-line bg-surface">
                  <MiniMock kind={m.mock} />
                </div>
                <span className={`relative -mt-5 ml-3 grid size-10 place-items-center rounded-full text-white ring-4 ring-white ${m.tone}`}>
                  <Icon name={m.icon} className="size-5" />
                </span>
                <h3 className="mt-2 px-1 text-[15px] font-bold text-ink group-hover:text-brand-700">{m.title}</h3>
                <p className="mt-1 px-1 pb-1 text-[12.5px] leading-5 text-muted">{m.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
