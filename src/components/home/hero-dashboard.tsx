import { AreaChart, Donut } from "@/components/charts/charts";
import { LogoMark } from "@/components/brand/logo";
import { Icon, type IconKey } from "@/components/ui/icon";

const nav: { label: string; icon: IconKey }[] = [
  { label: "Dashboard", icon: "dashboard" },
  { label: "Admissions", icon: "userPlus" },
  { label: "Academics", icon: "book" },
  { label: "Examinations", icon: "clipboard" },
  { label: "Finance", icon: "wallet" },
  { label: "HR & Payroll", icon: "users" },
  { label: "Communication", icon: "messages" },
  { label: "Reports", icon: "chartColumn" },
  { label: "Intelligence", icon: "brain" },
  { label: "Settings", icon: "settings" },
];

const kpis = [
  { label: "Total Students", value: "12,850", delta: "4.6%", icon: "graduation" as const },
  { label: "Total Staff", value: "1,240", delta: "2.1%", icon: "users" as const },
  { label: "Attendance", value: "96%", delta: "1.2%", icon: "calendar" as const },
  { label: "Active Courses", value: "320", delta: "3.4%", icon: "book" as const },
];

const actions: { label: string; icon: IconKey }[] = [
  { label: "Add Student", icon: "userPlus" },
  { label: "Collect Fee", icon: "receipt" },
  { label: "Send Notice", icon: "megaphone" },
  { label: "Generate Report", icon: "fileText" },
];

export function HeroDashboard() {
  return (
    <figure className="relative">
      <figcaption className="sr-only">
        CareerBook ERP™ principal dashboard showing students, staff, attendance, enrolment trend and fee collection.
      </figcaption>
      <div
        aria-hidden="true"
        className="grid grid-cols-[132px_1fr] overflow-hidden rounded-2xl border border-line bg-white shadow-float max-sm:grid-cols-1"
      >
        <aside className="border-r border-line bg-surface p-3 max-sm:hidden">
          <div className="mb-4 flex items-center gap-1.5 px-1">
            <LogoMark className="size-6" />
            <span className="text-[10px] font-extrabold text-brand-950">
              CareerBook<span className="text-brand-600"> ERP</span>
            </span>
          </div>
          <ul className="space-y-0.5">
            {nav.map((n, i) => (
              <li
                key={n.label}
                className={`flex items-center gap-2 rounded-md px-2 py-[7px] text-[10px] font-semibold ${
                  i === 0 ? "bg-brand-600 text-white" : "text-muted"
                }`}
              >
                <Icon name={n.icon} className="size-3.5" />
                {n.label}
              </li>
            ))}
          </ul>
        </aside>

        <div className="min-w-0 p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[13px] font-extrabold text-ink">Good Morning, Principal</p>
              <p className="text-[9.5px] text-muted">Here&apos;s what&apos;s happening at your institution today.</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative grid size-7 place-items-center rounded-full bg-surface text-muted">
                <Icon name="bell" className="size-3.5" />
                <span className="absolute top-1 right-1.5 size-1.5 rounded-full bg-accent-500" />
              </span>
              <span className="grid size-7 place-items-center rounded-full bg-brand-100 text-[9px] font-bold text-brand-700">PR</span>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-4 gap-2 max-sm:grid-cols-2">
            {kpis.map((k) => (
              <div key={k.label} className="rounded-lg border border-line p-2.5">
                <div className="flex items-center justify-between">
                  <p className="text-[8.5px] font-semibold text-muted">{k.label}</p>
                  <Icon name={k.icon} className="size-3 text-brand-500" />
                </div>
                <p className="mt-1 text-[15px] leading-none font-extrabold text-ink">{k.value}</p>
                <p className="mt-1 text-[8px] font-bold text-emerald-600">▲ {k.delta}</p>
              </div>
            ))}
          </div>

          <div className="mt-2.5 grid grid-cols-[1.7fr_1fr] gap-2">
            <div className="rounded-lg border border-line p-2.5">
              <p className="text-[9.5px] font-bold text-ink">Student Enrollment Trend</p>
              <AreaChart
                id="hero-enrol"
                values={[8200, 8900, 8700, 9800, 10400, 10100, 11300, 12100, 12850]}
                labels={["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"]}
                className="mt-1 h-[92px]"
              />
            </div>
            <div className="rounded-lg border border-line p-2.5">
              <p className="text-[9.5px] font-bold text-ink">Fee Collection</p>
              <Donut value={78} label="Collected" className="mx-auto mt-2 size-[78px]" />
              <div className="mt-2 flex justify-center gap-2.5 text-[7.5px] font-semibold text-muted">
                <span className="flex items-center gap-1"><i className="size-1.5 rounded-full bg-brand-600" />Collected</span>
                <span className="flex items-center gap-1"><i className="size-1.5 rounded-full bg-accent-200" />Pending</span>
              </div>
            </div>
          </div>

          <div className="mt-2.5">
            <p className="text-[9.5px] font-bold text-ink">Quick Actions</p>
            <div className="mt-1.5 grid grid-cols-4 gap-2">
              {actions.map((a) => (
                <div key={a.label} className="flex flex-col items-center gap-1 rounded-lg border border-line py-2">
                  <Icon name={a.icon} className="size-4 text-brand-600" />
                  <span className="text-[8px] font-semibold text-body">{a.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
