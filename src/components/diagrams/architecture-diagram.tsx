const layers = [
  {
    name: "Experience Layer",
    tone: "bg-white border-line text-ink",
    chip: "bg-brand-50 text-brand-700",
    items: ["Web Portal", "Student App", "Parent App", "Faculty App", "Leadership App", "Public APIs"],
  },
  {
    name: "CareerBook Intelligence™",
    tone: "bg-gradient-to-r from-accent-500 to-accent-600 border-transparent text-white",
    chip: "bg-white/15 text-white",
    items: ["Predictive Analytics", "Ask CareerBook AI", "Early Warnings", "Executive Dashboards"],
  },
  {
    name: "Solution Suites",
    tone: "bg-gradient-to-r from-brand-600 to-brand-800 border-transparent text-white",
    chip: "bg-white/12 text-white",
    items: ["Executive", "Financial", "Governance", "Accreditation", "Admissions CRM", "Academics", "Examinations", "Communication"],
  },
  {
    name: "Platform Services",
    tone: "bg-brand-50 border-brand-100 text-ink",
    chip: "bg-white text-brand-700",
    items: ["Workflow Engine", "Policy Rules", "Notifications", "Documents", "Integration Hub", "Reporting"],
  },
  {
    name: "Unified Data Layer",
    tone: "bg-white border-line text-ink",
    chip: "bg-surface text-body",
    items: ["Students", "Staff", "Academics", "Finance", "Assets", "Audit Logs"],
  },
  {
    name: "Security & Cloud Infrastructure",
    tone: "bg-brand-950 border-transparent text-white",
    chip: "bg-white/10 text-white/90",
    items: ["AES-256 Encryption", "SSO & MFA", "Role-based Access", "Backup & DR", "Regional Hosting"],
  },
];

export function ArchitectureDiagram() {
  return (
    <figure className="rounded-2xl border border-line bg-white p-4 shadow-float sm:p-5">
      <figcaption className="mb-3 flex items-center justify-between text-xs font-bold text-muted">
        <span>CareerBook ERP™ Product Architecture</span>
        <span className="rounded-full bg-brand-50 px-2 py-0.5 text-brand-700">EEOS</span>
      </figcaption>
      <ol className="space-y-2">
        {layers.map((l) => (
          <li key={l.name} className={`rounded-xl border p-3 ${l.tone}`}>
            <p className="text-[11px] font-extrabold tracking-wide uppercase opacity-90">{l.name}</p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {l.items.map((i) => (
                <li key={i} className={`rounded-md px-2 py-1 text-[11px] font-semibold ${l.chip}`}>
                  {i}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </figure>
  );
}
