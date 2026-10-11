"use client";

import { Check, ChevronDown, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const languages = [
  { code: "EN", label: "English", available: true },
  { code: "AR", label: "العربية", available: false },
];

export function LanguageMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 items-center gap-1.5 rounded-lg px-2.5 text-[13px] font-semibold text-ink transition-colors hover:bg-brand-50 hover:text-brand-700"
      >
        <Globe className="size-[18px]" aria-hidden="true" />
        EN
        <ChevronDown className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      {open && (
        <ul role="listbox" aria-label="Language" className="absolute top-full right-0 mt-2 w-48 rounded-xl border border-line bg-white p-1.5 shadow-float">
          {languages.map((l) => (
            <li
              key={l.code}
              role="option"
              aria-selected={l.code === "EN"}
              aria-disabled={!l.available}
              className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm ${l.available ? "font-semibold text-ink" : "text-muted"}`}
            >
              <span>{l.label}</span>
              {l.available ? <Check className="size-4 text-brand-600" aria-hidden="true" /> : <span className="text-[10px] font-bold uppercase">Coming soon</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
