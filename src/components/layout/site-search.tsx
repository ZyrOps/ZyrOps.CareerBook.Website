"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

export type SearchItem = { label: string; href: string; group: string };

export function SiteSearch({ items }: { items: SearchItem[] }) {
  const router = useRouter();
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = q ? items.filter((i) => `${i.label} ${i.group}`.toLowerCase().includes(q)) : items.slice(0, 8);
    return list.slice(0, 10);
  }, [items, query]);

  const open = () => {
    setQuery("");
    setCursor(0);
    dialog.current?.showModal();
    requestAnimationFrame(() => input.current?.focus());
  };
  const close = () => dialog.current?.close();
  const go = (href: string) => {
    close();
    router.push(href);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        open();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label="Search the site"
        className="grid size-10 place-items-center rounded-lg text-ink transition-colors hover:bg-brand-50 hover:text-brand-700"
      >
        <Search className="size-[18px]" aria-hidden="true" />
      </button>
      <dialog
        ref={dialog}
        aria-label="Search"
        onClick={(e) => e.target === dialog.current && close()}
        className="m-auto mt-[12vh] w-[min(640px,calc(100%-2rem))] rounded-2xl bg-white p-0 shadow-float backdrop:bg-brand-950/40 backdrop:backdrop-blur-sm"
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <Search className="size-5 text-muted" aria-hidden="true" />
          <input
            ref={input}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setCursor(0);
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setCursor((c) => Math.min(c + 1, results.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setCursor((c) => Math.max(c - 1, 0));
              } else if (e.key === "Enter" && results[cursor]) {
                go(results[cursor].href);
              }
            }}
            placeholder="Search solutions, industries, resources…"
            aria-label="Search"
            className="h-14 flex-1 bg-transparent text-[15px] text-ink outline-none placeholder:text-muted"
          />
          <button type="button" onClick={close} aria-label="Close search" className="grid size-8 place-items-center rounded-md text-muted hover:bg-brand-50">
            <X className="size-4" />
          </button>
        </div>
        <ul className="max-h-[55vh] overflow-y-auto p-2">
          {results.length === 0 && <li className="px-3 py-6 text-center text-sm text-muted">No results for “{query}”</li>}
          {results.map((r, i) => (
            <li key={r.href}>
              <button
                type="button"
                onMouseEnter={() => setCursor(i)}
                onClick={() => go(r.href)}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left ${i === cursor ? "bg-brand-50" : ""}`}
              >
                <span>
                  <span className="block text-sm font-semibold text-ink">{r.label}</span>
                  <span className="block text-xs text-muted">{r.group}</span>
                </span>
                <ArrowRight className={`size-4 text-brand-600 ${i === cursor ? "opacity-100" : "opacity-0"}`} aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      </dialog>
    </>
  );
}
