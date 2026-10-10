"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Group = {
  label: string;
  href: string;
  panel: ReactNode;
  links: { label: string; href: string }[];
};

export function HeaderClient({ logo, groups }: { logo: ReactNode; groups: Group[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [lastPath, setLastPath] = useState(pathname);

  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const show = (label: string) => {
    clearTimeout(closeTimer.current);
    setOpen(label);
  };
  const hide = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 120);
  };

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_var(--color-line),0_8px_24px_-16px_rgb(28_20_51/0.25)]" : "shadow-[0_1px_0_var(--color-line)]"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        {logo}

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {groups.map((g) => (
              <li key={g.label} className="relative" onMouseEnter={() => show(g.label)} onMouseLeave={hide}>
                <button
                  type="button"
                  aria-expanded={open === g.label}
                  aria-haspopup="true"
                  onClick={() => setOpen(open === g.label ? null : g.label)}
                  className={`flex items-center gap-1 rounded-md px-3 py-2 text-[13.5px] font-semibold transition-colors ${
                    isActive(g.href) || open === g.label ? "text-brand-700" : "text-ink hover:text-brand-700"
                  }`}
                >
                  {g.label}
                  <ChevronDown
                    aria-hidden="true"
                    className={`size-3.5 transition-transform duration-200 ${open === g.label ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                    open === g.label ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                  }`}
                  onClick={(e) => {
                    if ((e.target as HTMLElement).closest("[data-nav-link]")) setOpen(null);
                  }}
                >
                  <div className="rounded-2xl border border-line bg-white p-4 shadow-float">{g.panel}</div>
                </div>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/request-demo"
            className="group hidden h-10 items-center gap-2 rounded-lg bg-accent-500 px-5 text-[13px] font-bold text-white shadow-[0_8px_20px_-8px_rgb(249_115_22/0.7)] transition-colors hover:bg-accent-600 sm:inline-flex"
          >
            Request a Demo
            <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-lg text-ink hover:bg-brand-50 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`fixed inset-x-0 top-[72px] bottom-0 overflow-y-auto bg-white transition-opacity duration-200 lg:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="container-x py-4">
          {groups.map((g) => (
            <details key={g.label} className="group border-b border-line py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-base font-bold text-ink [&::-webkit-details-marker]:hidden">
                {g.label}
                <ChevronDown aria-hidden="true" className="size-4 transition-transform group-open:rotate-180" />
              </summary>
              <ul className="grid gap-1 pb-3">
                <li>
                  <Link href={g.href} className="block rounded-md px-3 py-2 text-sm font-semibold text-brand-700">
                    {g.label} overview
                  </Link>
                </li>
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="block rounded-md px-3 py-2 text-sm text-body hover:bg-brand-50">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
          <div className="mt-6 grid gap-3">
            <Link href="/request-demo" className="flex h-12 items-center justify-center rounded-lg bg-accent-500 font-bold text-white">
              Request a Demo
            </Link>
            <Link href="/contact" className="flex h-12 items-center justify-center rounded-lg border border-brand-600 font-bold text-brand-700">
              Contact Sales
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
