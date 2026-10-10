"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, type ReactNode } from "react";

export type MapPin = {
  id: string;
  x: number;
  y: number;
  name?: string;
  href?: string;
  live?: boolean;
  flag?: ReactNode;
};

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
        const isNamed = Boolean(p.name);
        const isActive = active === p.id;
        const marker = (
          <>
            {isNamed && (
              <span
                className={`absolute inset-0 rounded-full ${p.live ? "bg-accent-500" : "bg-brand-500"} ${
                  isActive ? "animate-ping-slow" : "opacity-0"
                }`}
              />
            )}
            <span
              className={`relative block rounded-full ring-2 ring-white transition-transform duration-200 ${
                isNamed ? (p.live ? "size-3 bg-accent-500" : "size-2.5 bg-brand-600") : "size-2 bg-brand-500/70"
              } ${isActive ? "scale-150" : ""}`}
            />
            {isNamed && (
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
    <div className="grid items-center gap-8 lg:grid-cols-[1fr_260px]">
      {map}
      <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
        <h3 className="text-lg font-extrabold text-brand-700">Our Global Presence</h3>
        <p className="mt-1.5 text-[13px] leading-5 text-muted">
          Empowering institutions across Asia, the Middle East and beyond.
        </p>
        <ul className="mt-4 space-y-0.5">
          {named.map((p) => (
            <li key={p.id}>
              <Link
                href={p.href ?? "/countries"}
                {...bind(p.id)}
                className={`flex items-center gap-3 rounded-md px-2 py-1.5 text-sm font-semibold transition-colors ${
                  active === p.id ? "bg-brand-50 text-brand-700" : "text-ink"
                }`}
              >
                {p.flag}
                <span className="flex-1">{p.name}</span>
                {!p.live && <span className="text-[10px] font-bold tracking-wide text-muted uppercase">Expanding</span>}
              </Link>
            </li>
          ))}
          <li className="px-2 pt-1 text-sm font-medium text-muted">and more…</li>
        </ul>
        <Link
          href="/countries"
          className="group mt-5 flex h-10 items-center justify-center gap-2 rounded-lg border border-brand-600 text-[13px] font-bold text-brand-700 transition-colors hover:bg-brand-50"
        >
          View Our Global Presence
          <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
