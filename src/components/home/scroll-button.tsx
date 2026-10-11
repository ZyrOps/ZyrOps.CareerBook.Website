"use client";

import { ChevronRight } from "lucide-react";

export function ScrollButton({ targetId, label }: { targetId: string; label: string }) {
  const scroll = () => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + el.clientWidth * 0.6, behavior: "smooth" });
  };
  return (
    <button
      type="button"
      onClick={scroll}
      aria-label={label}
      aria-controls={targetId}
      className="grid size-10 shrink-0 place-items-center rounded-full border border-line bg-white text-brand-700 shadow-card transition-colors hover:bg-brand-600 hover:text-white"
    >
      <ChevronRight aria-hidden="true" className="size-5" />
    </button>
  );
}
