import { ChevronRight } from "lucide-react";
import { AreaChart, Donut } from "@/components/charts/charts";
import { Icon, type IconKey } from "@/components/ui/icon";

const flow: { label: string; icon: IconKey; detail: string }[] = [
  { label: "Fee Plans", icon: "receipt", detail: "Structures, instalments, concessions" },
  { label: "Collections", icon: "banknote", detail: "Gateways, bank, POS, wallets" },
  { label: "Ledger", icon: "fileText", detail: "Auto-posting & reconciliation" },
  { label: "Intelligence", icon: "chartPie", detail: "Forecasts & group P&L" },
];

export function FinancialDiagram() {
  return (
    <figure className="rounded-2xl border border-line bg-white p-4 shadow-float sm:p-5">
      <figcaption className="text-xs font-bold text-muted">Financial Intelligence Flow</figcaption>
      <ol className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {flow.map((f, i) => (
          <li key={f.label} className="relative rounded-xl border border-line bg-surface p-3">
            <span className={`grid size-8 place-items-center rounded-lg ${i === 3 ? "bg-accent-500 text-white" : "bg-brand-600 text-white"}`}>
              <Icon name={f.icon} className="size-4" />
            </span>
            <p className="mt-2 text-xs font-extrabold text-ink">{f.label}</p>
            <p className="mt-0.5 text-[10px] leading-snug text-muted">{f.detail}</p>
            {i < flow.length - 1 && (
              <ChevronRight aria-hidden="true" className="absolute top-1/2 -right-2.5 z-10 hidden size-4 -translate-y-1/2 rounded-full bg-white text-brand-500 sm:block" />
            )}
          </li>
        ))}
      </ol>
      <div className="mt-3 grid grid-cols-[1fr_auto] gap-3 rounded-xl border border-line p-3">
        <div>
          <p className="text-xs font-bold text-ink">Collections vs Forecast (₹ Cr)</p>
          <AreaChart id="fin-flow" values={[3.2, 4.4, 4.1, 5.6, 5.1, 6.2, 6.8, 6.4, 7.4]} className="mt-2 h-28" />
        </div>
        <div className="flex flex-col items-center justify-center border-l border-line pl-3">
          <Donut value={89} label="Collected" className="size-24" />
          <p className="mt-2 text-[10px] font-semibold text-muted">Collection rate</p>
        </div>
      </div>
    </figure>
  );
}
