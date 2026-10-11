"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";

export type PinKind = "hq" | "current" | "expansion";

export type MapPin = {
  id: string;
  x: number;
  y: number;
  kind: PinKind;
  name?: string;
  href?: string;
  flag?: ReactNode;
};

const dot: Record<PinKind, string> = {
  hq: "size-3.5 bg-accent-500",
  current: "size-2.5 bg-brand-600",
  expansion: "size-2.5 bg-brand-300",
};
const ping: Record<PinKind, string> = { hq: "bg-accent-500", current: "bg-brand-600", expansion: "bg-brand-400" };

export function WorldMap({ pins, aspect, showList = true }: { pins: MapPin[]; aspect: number; showList?: boolean }) {
  const [active, setActive] = useState<string | null>(null);
  const named = pins.filter((p) => p.name);

  const bind = (id: string) => ({
    onMouseEnter: () => setActive(id),
    onMouseLeave: () => setActive(null),
    onFocus: () => setActive(id),
    onBlur: () => setActive(null),
  });

  const map = (
    <div className="relative w-full" style={{ aspectRatio: aspect }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/maps/world-dots.svg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        draggable={false}
        className="absolute inset-0 size-full select-none"
      />
      {pins.map((p) => {
        const isActive = active === p.id;
        const marker = (
          <>
            <span className={`absolute inset-0 rounded-full ${ping[p.kind]} ${isActive || p.kind === "hq" ? "animate-ping-slow" : "opacity-0"}`} />
            <span className={`relative block rounded-full ring-2 ring-white transition-transform duration-200 ${dot[p.kind]} ${isActive ? "scale-150" : ""}`} />
            {p.name && (
              <span
                className={`pointer-events-none absolute bottom-full left-1/2 mb-2 flex -translate-x-1/2 items-center gap-1.5 rounded-md bg-ink px-2 py-1 text-[11px] font-semibold whitespace-nowrap text-white shadow-lg transition-all duration-150 ${
                  isActive ? "visible opacity-100" : "invisible translate-y-1 opacity-0"
                }`}
              >
                {p.flag}
                {p.name}
              </span>
            )}
          </>
        );
        const style = { left: `${p.x}%`, top: `${p.y}%` };
        const cls = `absolute -translate-x-1/2 -translate-y-1/2 ${isActive ? "z-20" : "z-10"}`;
        return p.href ? (
          <Link key={p.id} href={p.href} style={style} className={cls} aria-label={`CareerBook ERP™ in ${p.name}`} {...bind(p.id)}>
            {marker}
          </Link>
        ) : (
          <span key={p.id} style={style} className={cls} aria-hidden="true">
            {marker}
          </span>
        );
      })}
    </div>
  );

  if (!showList) return map;

  return (
    <div className="grid items-center gap-6 md:grid-cols-[1fr_190px]">
      {map}
      <div className="rounded-2xl border border-line bg-white p-5 shadow-card">
        <h3 className="text-[15px] font-extrabold text-brand-700">Key Markets</h3>
        <ul className="mt-3 space-y-0.5">
          {named.map((p) => (
            <li key={p.id}>
              <Link
                href={p.href ?? "/countries"}
                {...bind(p.id)}
                className={`flex items-center gap-2.5 rounded-md px-2 py-1.5 text-[13.5px] font-semibold transition-colors ${
                  active === p.id ? "bg-brand-50 text-brand-700" : "text-ink"
                }`}
              >
                {p.flag}
                {p.name}
              </Link>
            </li>
          ))}
          <li className="px-2 pt-1 text-[13px] font-medium text-muted">and more…</li>
        </ul>
      </div>
    </div>
  );
}
