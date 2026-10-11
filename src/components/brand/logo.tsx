import Link from "next/link";

export function LogoMark({ className = "size-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="cb-page" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6d28d9" />
          <stop offset="1" stopColor="#3b1677" />
        </linearGradient>
        <linearGradient id="cb-edge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c026d3" />
          <stop offset="1" stopColor="#9333ea" />
        </linearGradient>
      </defs>
      <path d="M27.5 59C22 46 13 36.5 3 31l1.2-5 5.2 1.4C17.5 34.5 25 45 27.5 59Z" fill="url(#cb-edge)" />
      <path d="M36.5 59C42 46 51 36.5 61 31l-1.2-5-5.2 1.4C46.5 34.5 39 45 36.5 59Z" fill="url(#cb-edge)" />
      <path d="M31 56C26.5 44 18.5 32.5 8.5 24.5L20 18.5c6.5 8 10.5 18 11 30Z" fill="url(#cb-page)" />
      <path d="M33 56c4.5-12 12.5-23.5 22.5-31.5L44 18.5c-6.5 8-10.5 18-11 30Z" fill="url(#cb-page)" />
      <path d="M28.6 3.5h6.8l-1.5 6.2h-3.8Z" fill="#4c1d95" />
      <path d="M30 10.6h4l3.2 13.2L32 30.5l-5.2-6.7Z" fill="#5b21b6" />
      <path d="m29.4 15 5.6-1.6M28.6 19.4l7.2-2M28.2 23.8l8.4-2.4" stroke="#a78bfa" strokeWidth="0.9" opacity="0.7" />
    </svg>
  );
}

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="CareerBook ERP™ home">
      <LogoMark className="size-10 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5" />
      <span className="flex flex-col leading-none">
        <span className={`text-[19px] font-extrabold tracking-tight ${light ? "text-white" : "text-brand-950"}`}>
          CareerBook<span className="text-brand-600"> ERP</span>
          <sup className="ml-0.5 text-[9px] font-bold text-brand-600">™</sup>
        </span>
        <span className={`mt-1 text-[9.5px] font-semibold tracking-wide whitespace-nowrap ${light ? "text-white/70" : "text-muted"}`}>
          Enterprise Education Operating System
        </span>
      </span>
    </Link>
  );
}
