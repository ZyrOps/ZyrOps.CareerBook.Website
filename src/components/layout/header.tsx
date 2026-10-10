import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { mainNav, sections, type NavGroup } from "@/content";
import { Logo } from "@/components/brand/logo";
import { Icon } from "@/components/ui/icon";
import { HeaderClient } from "./header-client";

function MegaPanel({ group }: { group: NavGroup }) {
  const key = group.href.slice(1) as keyof typeof sections;
  const section = sections[key];
  const wide = group.items.length > 5;
  return (
    <div className={`grid gap-6 ${wide ? "w-[760px] grid-cols-[1fr_220px]" : "w-[560px] grid-cols-[1fr_200px]"}`}>
      <ul className={`grid gap-1 ${wide ? "grid-cols-2" : "grid-cols-1"}`}>
        {group.items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              data-nav-link
              className="group/item flex items-center gap-3 rounded-lg p-2.5 transition-colors hover:bg-brand-50"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover/item:bg-white">
                <Icon name={item.icon} className="size-[18px]" />
              </span>
              <span className="text-[13.5px] font-semibold text-ink">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-col justify-between rounded-xl bg-gradient-to-br from-brand-700 to-brand-900 p-5 text-white">
        <div>
          <p className="text-[11px] font-bold tracking-[0.14em] text-white/60 uppercase">{section?.eyebrow}</p>
          <p className="mt-2 text-sm leading-6 font-medium text-white/90">{section?.intro}</p>
        </div>
        <Link href={group.href} data-nav-link className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-accent-200 hover:text-white">
          Explore {group.label} <ArrowRight className="size-3.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

export function Header() {
  const groups = mainNav.map((group) => ({
    label: group.label,
    href: group.href,
    panel: <MegaPanel group={group} />,
    links: group.items.map(({ label, href }) => ({ label, href })),
  }));
  return <HeaderClient logo={<Logo />} groups={groups} />;
}
