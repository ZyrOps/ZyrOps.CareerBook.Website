import { AreaChart, BarChart } from "@/components/charts/charts";
import type { RoleDashboard } from "./executive-data";

export function ExecutiveDashboard({ data }: { data: RoleDashboard }) {
  return (
    <figure className="rounded-2xl border border-line bg-white p-4 shadow-float sm:p-5">
      <figcaption className="sr-only">{data.role} dashboard in CareerBook ERP™ Executive Intelligence</figcaption>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {data.kpis.map((k) => (
          <div key={k.label} className="rounded-xl border border-line p-3">
            <p className="text-[11px] font-semibold text-muted">{k.label}</p>
            <p className="mt-1 text-lg leading-tight font-extrabold text-ink sm:text-xl">{k.value}</p>
            <p className="mt-1 text-[10.5px] font-bold text-emerald-600">▲ {k.delta}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-line p-3">
          <p className="text-xs font-bold text-ink">{data.bars.title}</p>
          <BarChart values={data.bars.values} labels={data.bars.labels} className="mt-3 h-36" />
        </div>
        <div className="rounded-xl border border-line p-3">
          <p className="text-xs font-bold text-ink">{data.trend.title}</p>
          <AreaChart id={`trend-${data.id}`} values={data.trend.values} labels={data.trend.labels} className="mt-3 h-36" />
        </div>
      </div>
    </figure>
  );
}
