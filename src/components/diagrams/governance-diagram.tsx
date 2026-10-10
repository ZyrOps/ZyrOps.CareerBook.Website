import { Icon, type IconKey } from "@/components/ui/icon";

const nodes: { label: string; sub: string; icon: IconKey }[] = [
  { label: "K-12 Schools", sub: "18 campuses", icon: "school" },
  { label: "Colleges", sub: "6 campuses", icon: "graduation" },
  { label: "University", sub: "4 faculties", icon: "university" },
  { label: "International", sub: "GCC campuses", icon: "globe" },
  { label: "Academies", sub: "Training & sports", icon: "trophy" },
  { label: "Shared Services", sub: "Finance · HR · Admissions", icon: "workflow" },
];

export function GovernanceDiagram() {
  const r = 38;
  return (
    <figure className="rounded-2xl border border-line bg-white p-4 shadow-float sm:p-6">
      <figcaption className="text-xs font-bold text-muted">Multi-Campus Governance Model</figcaption>
      <div className="relative mx-auto mt-2 aspect-square max-w-[460px]">
        <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden="true">
          <circle cx="50" cy="50" r={r} fill="none" stroke="#ede8fe" strokeWidth="0.6" strokeDasharray="1.5 1.5" />
          {nodes.map((_, i) => {
            const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
            return (
              <line
                key={i}
                x1="50"
                y1="50"
                x2={50 + Math.cos(a) * r}
                y2={50 + Math.sin(a) * r}
                stroke="#c4b2f8"
                strokeWidth="0.5"
                strokeDasharray="1 1.2"
              />
            );
          })}
        </svg>
        <div className="absolute top-1/2 left-1/2 grid size-[34%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-brand-900 p-3 text-center text-white shadow-float">
          <div>
            <Icon name="landmark" className="mx-auto size-6" />
            <p className="mt-1 text-[12px] leading-tight font-extrabold sm:text-sm">Group / Trust HQ</p>
            <p className="mt-0.5 text-[9px] text-white/70 sm:text-[10px]">Policies · Finance · Oversight</p>
          </div>
        </div>
        {nodes.map((n, i) => {
          const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
          return (
            <div
              key={n.label}
              className="absolute w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-line bg-white p-2 text-center shadow-card"
              style={{ left: `${50 + Math.cos(a) * r}%`, top: `${50 + Math.sin(a) * r}%` }}
            >
              <span className={`mx-auto grid size-7 place-items-center rounded-lg ${i % 2 ? "bg-accent-50 text-accent-600" : "bg-brand-50 text-brand-600"}`}>
                <Icon name={n.icon} className="size-4" />
              </span>
              <p className="mt-1 text-[10.5px] leading-tight font-bold text-ink sm:text-xs">{n.label}</p>
              <p className="text-[9px] leading-tight text-muted">{n.sub}</p>
            </div>
          );
        })}
      </div>
    </figure>
  );
}
