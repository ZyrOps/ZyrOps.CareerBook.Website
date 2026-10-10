"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

export function Tabs({
  tabs,
  label,
}: {
  label: string;
  tabs: { id: string; label: string; icon?: ReactNode; panel: ReactNode }[];
}) {
  const [active, setActive] = useState(0);
  const uid = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (active + dir + tabs.length) % tabs.length;
    setActive(next);
    refs.current[next]?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label={label} onKeyDown={onKey} className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            type="button"
            id={`${uid}-tab-${t.id}`}
            aria-selected={active === i}
            aria-controls={`${uid}-panel-${t.id}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            className={`flex h-12 items-center justify-center gap-2 rounded-lg border text-sm font-bold transition-all duration-200 ${
              active === i
                ? "border-accent-500 bg-accent-500 text-white shadow-[0_10px_24px_-10px_rgb(249_115_22/0.8)]"
                : "border-line bg-white text-ink hover:border-brand-300 hover:text-brand-700"
            }`}
          >
            {t.icon}
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`${uid}-panel-${t.id}`}
          aria-labelledby={`${uid}-tab-${t.id}`}
          hidden={active !== i}
          className="mt-8 animate-rise"
        >
          {t.panel}
        </div>
      ))}
    </div>
  );
}
