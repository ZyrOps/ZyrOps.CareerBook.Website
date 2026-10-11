type SceneKind = "campus" | "college" | "dome" | "people" | "stadium" | "tower";

function Windows({ x, y, cols, rows, w = 6, h = 7, gap = 5 }: { x: number; y: number; cols: number; rows: number; w?: number; h?: number; gap?: number }) {
  return (
    <>
      {Array.from({ length: rows * cols }, (_, i) => (
        <rect key={i} x={x + (i % cols) * (w + gap)} y={y + Math.floor(i / cols) * (h + gap)} width={w} height={h} rx="1" fill="#fff" opacity="0.75" />
      ))}
    </>
  );
}

const trees = (xs: number[]) =>
  xs.map((x) => (
    <g key={x}>
      <rect x={x - 1.5} y="98" width="3" height="10" fill="#7c5a3a" />
      <circle cx={x} cy="94" r="9" fill="#4d9b5b" />
    </g>
  ));

export function Scene({ kind, className = "" }: { kind: SceneKind; className?: string }) {
  return (
    <svg viewBox="0 0 240 120" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`sky-${kind}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={kind === "stadium" ? "#fcd9b8" : "#cfe3fb"} />
          <stop offset="1" stopColor={kind === "stadium" ? "#fdf0e4" : "#eef4fd"} />
        </linearGradient>
      </defs>
      <rect width="240" height="120" fill={`url(#sky-${kind})`} />
      {kind === "campus" && (
        <>
          <rect x="40" y="48" width="160" height="60" fill="#b5654a" />
          <polygon points="30,50 120,22 210,50" fill="#8e4a36" />
          <rect x="105" y="70" width="30" height="38" fill="#6b3527" />
          <Windows x={50} y={58} cols={4} rows={2} />
          <Windows x={146} y={58} cols={4} rows={2} />
          {trees([18, 224])}
        </>
      )}
      {kind === "college" && (
        <>
          <rect x="20" y="56" width="200" height="52" fill="#c2735a" />
          <rect x="95" y="30" width="50" height="78" fill="#a95c45" />
          <polygon points="90,32 120,14 150,32" fill="#7e3f2f" />
          <Windows x={28} y={64} cols={5} rows={3} />
          <Windows x={154} y={64} cols={5} rows={3} />
          <Windows x={104} y={42} cols={3} rows={4} />
          <rect x="0" y="104" width="240" height="16" fill="#86b46e" />
        </>
      )}
      {kind === "dome" && (
        <>
          <rect x="30" y="62" width="180" height="46" fill="#e9dcc4" />
          <rect x="85" y="44" width="70" height="20" fill="#dccdb1" />
          <path d="M92 46a28 28 0 0 1 56 0Z" fill="#c9b48c" />
          <rect x="118" y="10" width="4" height="10" fill="#a58a5d" />
          {Array.from({ length: 9 }, (_, i) => (
            <rect key={i} x={40 + i * 19} y="68" width="6" height="36" fill="#fff" opacity="0.85" />
          ))}
          <rect x="0" y="106" width="240" height="14" fill="#9cc58a" />
        </>
      )}
      {kind === "people" && (
        <>
          <rect width="240" height="120" fill="#e8e2f7" />
          {[30, 70, 110, 150, 190].map((x, i) => (
            <g key={x}>
              <circle cx={x + 10} cy={46 + (i % 2) * 4} r="11" fill="#c9926c" />
              <path d={`M${x - 8} 120 Q${x + 10} ${62 + (i % 2) * 4} ${x + 28} 120Z`} fill={i % 2 ? "#5b21b6" : "#1f2937"} />
              <rect x={x + 6} y={68 + (i % 2) * 4} width="8" height="14" fill="#fff" />
            </g>
          ))}
        </>
      )}
      {kind === "stadium" && (
        <>
          <ellipse cx="120" cy="104" rx="140" ry="30" fill="#5aa152" />
          <ellipse cx="120" cy="106" rx="96" ry="16" fill="#6fb764" stroke="#fff" strokeWidth="1.5" />
          <path d="M0 70 Q120 40 240 70 L240 84 Q120 58 0 84Z" fill="#7a4f8f" />
          {[20, 220].map((x) => (
            <g key={x}>
              <rect x={x} y="20" width="3" height="50" fill="#6b7280" />
              <rect x={x - 6} y="14" width="15" height="7" fill="#fff7d6" />
            </g>
          ))}
        </>
      )}
      {kind === "tower" && (
        <>
          <rect x="20" y="40" width="70" height="68" fill="#9fb3c8" />
          <rect x="95" y="18" width="60" height="90" fill="#7d93ab" />
          <rect x="160" y="52" width="60" height="56" fill="#b3c3d4" />
          <Windows x={28} y={48} cols={5} rows={5} w={7} h={6} gap={5} />
          <Windows x={103} y={26} cols={4} rows={7} w={7} h={6} gap={5} />
          <Windows x={168} y={60} cols={4} rows={4} w={7} h={6} gap={5} />
          <rect x="0" y="106" width="240" height="14" fill="#a3c493" />
        </>
      )}
    </svg>
  );
}
