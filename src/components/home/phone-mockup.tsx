import { LogoMark } from "@/components/brand/logo";
import { Icon, type IconKey } from "@/components/ui/icon";

const items: { label: string; meta: string; icon: IconKey; tone: string }[] = [
  { label: "Attendance", meta: "96% this week", icon: "calendar", tone: "bg-brand-50 text-brand-600" },
  { label: "Timetable", meta: "Next: Physics", icon: "clock", tone: "bg-accent-50 text-accent-600" },
  { label: "Fee Payment", meta: "Due 15 Oct", icon: "wallet", tone: "bg-emerald-50 text-emerald-600" },
  { label: "Results", meta: "Term 1 published", icon: "award", tone: "bg-sky-50 text-sky-600" },
];

export function PhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`w-[132px] rounded-[22px] border-[5px] border-ink bg-white p-2 shadow-float ${className}`}>
      <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-ink/80" />
      <div className="flex items-center gap-1">
        <LogoMark className="size-4" />
        <span className="text-[8px] font-extrabold text-brand-950">CareerBook</span>
      </div>
      <p className="mt-2 text-[8px] font-bold text-ink">Hi, Aarav 👋</p>
      <ul className="mt-1.5 space-y-1">
        {items.map((i) => (
          <li key={i.label} className="flex items-center gap-1.5 rounded-md border border-line p-1">
            <span className={`grid size-5 place-items-center rounded ${i.tone}`}>
              <Icon name={i.icon} className="size-3" />
            </span>
            <span className="leading-tight">
              <span className="block text-[7.5px] font-bold text-ink">{i.label}</span>
              <span className="block text-[6.5px] text-muted">{i.meta}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
