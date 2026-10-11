import { BarChart, Donut } from "@/components/charts/charts";
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
  { label: "Total Students", value: "12,850", delta: "12%", icon: "graduation" as const },
  { label: "Total Revenue", value: "₹32.4 Cr", delta: "18%", icon: "banknote" as const },
  { label: "Fee Collection", value: "96%", delta: "8%", icon: "wallet" as const },
  { label: "Active Staff", value: "1,240", delta: "6%", icon: "users" as const },
];

const actions: { label: string; icon: IconKey }[] = [
  { label: "Add Student", icon: "userPlus" },
  { label: "Generate Fee", icon: "receipt" },
  { label: "Create Question Paper", icon: "fileText" },
  { label: "View Reports", icon: "chartColumn" },
  { label: "Send Communication", icon: "megaphone" },
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
            <span className="text-[9.5px] font-extrabold whitespace-nowrap text-brand-950">
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
            <span className="flex items-center gap-1.5 shrink-0 rounded-md border border-line px-2 py-1 text-[8.5px] font-semibold whitespace-nowrap text-body">
              Academic Year 2025-26
              <Icon name="calendar" className="size-3 text-muted" />
            </span>
          </div>

          <div className="mt-3 grid grid-cols-4 gap-2 max-sm:grid-cols-2">
            {kpis.map((k) => (
              <div key={k.label} className="rounded-lg border border-line p-2.5">
                <div className="flex items-center justify-between">
                  <p className="text-[8.5px] font-semibold text-muted">{k.label}</p>
                  <Icon name={k.icon} className="size-3 text-brand-500" />
                </div>
                <p className="mt-1 text-[15px] leading-none font-extrabold whitespace-nowrap text-ink max-xl:text-[13px]">{k.value}</p>
                <p className="mt-1 text-[8px] font-bold text-emerald-600">▲ {k.delta}</p>
              </div>
            ))}
          </div>

          <div className="mt-2.5 grid grid-cols-[1.7fr_1fr] gap-2">
            <div className="rounded-lg border border-line p-2.5">
              <p className="text-[9.5px] font-bold text-ink">Admission Trend</p>
              <BarChart
                values={[420, 560, 610, 540, 720, 860, 940]}
                labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]}
                className="mt-2 h-[92px]"
              />
            </div>
            <div className="rounded-lg border border-line p-2.5">
              <p className="text-[9.5px] font-bold text-ink">Fee Collection</p>
              <Donut value={82} label="Collected" className="mx-auto mt-2 size-[78px]" />
              <div className="mt-2 flex justify-center gap-2.5 text-[7.5px] font-semibold text-muted">
                <span className="flex items-center gap-1"><i className="size-1.5 rounded-full bg-brand-600" />Collected</span>
                <span className="flex items-center gap-1"><i className="size-1.5 rounded-full bg-accent-200" />Pending</span>
              </div>
            </div>
          </div>

          <div className="mt-2.5">
            <p className="text-[9.5px] font-bold text-ink">Quick Actions</p>
            <div className="mt-1.5 grid grid-cols-5 gap-1.5 max-sm:grid-cols-3">
              {actions.map((a) => (
                <div key={a.label} className="flex flex-col items-center gap-1 rounded-lg border border-line px-1 py-2 text-center">
                  <Icon name={a.icon} className="size-4 text-brand-600" />
                  <span className="text-[7.5px] leading-tight font-semibold text-body">{a.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
