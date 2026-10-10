function toPath(values: number[], w: number, h: number, pad = 4) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const step = (w - pad * 2) / (values.length - 1);
  const pts = values.map((v, i) => [pad + i * step, h - pad - ((v - min) / range) * (h - pad * 2)] as const);
  const line = pts
    .map(([x, y], i) => {
      if (i === 0) return `M${x.toFixed(1)} ${y.toFixed(1)}`;
      const [px, py] = pts[i - 1];
      const cx = (px + x) / 2;
      return `C${cx.toFixed(1)} ${py.toFixed(1)} ${cx.toFixed(1)} ${y.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join("");
  const area = `${line}L${pts.at(-1)![0].toFixed(1)} ${h}L${pts[0][0].toFixed(1)} ${h}Z`;
  return { line, area, pts };
}

export function AreaChart({
  values,
  labels,
  id,
  className = "",
  color = "#5b21b6",
  dots = true,
}: {
  values: number[];
  labels?: string[];
  id: string;
  className?: string;
  color?: string;
  dots?: boolean;
}) {
  const w = 300;
  const h = 110;
  const { line, area, pts } = toPath(values, w, h, 8);
  return (
    <div className={className}>
      <svg viewBox={`0 0 ${w} ${h}`} className="h-full w-full overflow-visible" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id={`g-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={color} stopOpacity="0.28" />
            <stop offset="1" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((f) => (
          <line key={f} x1="0" x2={w} y1={h * f} y2={h * f} stroke="#ece8f4" strokeDasharray="3 4" vectorEffect="non-scaling-stroke" />
        ))}
        <path d={area} fill={`url(#g-${id})`} />
        <path d={line} fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        {dots &&
          pts.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2.6" fill="#fff" stroke={color} strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
          ))}
      </svg>
      {labels && (
        <div className="mt-1 flex justify-between px-1 text-[8px] font-medium text-muted">
          {labels.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export function BarChart({
  values,
  labels,
  className = "",
}: {
  values: number[];
  labels?: string[];
  className?: string;
}) {
  const max = Math.max(...values);
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="relative flex flex-1 items-end gap-[8%] border-b border-line px-1">
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="border-t border-dashed border-line" />
          ))}
        </div>
        {values.map((v, i) => (
          <span
            key={i}
            className="relative flex-1 rounded-t-[3px] bg-gradient-to-t from-brand-600 to-brand-400"
            style={{ height: `${(v / max) * 100}%`, opacity: i % 2 ? 0.55 : 1 }}
          />
        ))}
      </div>
      {labels && (
        <div className="mt-1 flex gap-[8%] px-1 text-center text-[7.5px] leading-tight font-medium text-muted">
          {labels.map((l) => (
            <span key={l} className="flex-1 truncate">
              {l}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function Donut({
  value,
  className = "",
  label,
}: {
  value: number;
  className?: string;
  label?: string;
}) {
  const r = 15.9155;
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 36 36" className="size-full -rotate-90" aria-hidden="true">
        <circle cx="18" cy="18" r={r} fill="none" stroke="#fde3cf" strokeWidth="4.2" />
        <circle
          cx="18"
          cy="18"
          r={r}
          fill="none"
          stroke="url(#donut-g)"
          strokeWidth="4.2"
          strokeDasharray={`${value} ${100 - value}`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="donut-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7c4ae0" />
            <stop offset="1" stopColor="#4c1d95" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <p className="text-[13px] leading-none font-extrabold text-ink">{value}%</p>
          {label && <p className="mt-0.5 text-[7px] font-semibold text-muted">{label}</p>}
        </div>
      </div>
    </div>
  );
}
