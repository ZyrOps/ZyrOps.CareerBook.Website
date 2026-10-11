import mapData from "@/content/map-pins.json";
import { countryMeta, countryPages } from "@/content/countries";
import { ButtonLink } from "@/components/ui/button";
import { Flag } from "./flag";
import { WorldMap, type MapPin, type PinKind } from "./world-map";

export function getMapPins(): MapPin[] {
  return mapData.pins.map((pin): MapPin => {
    const meta = countryMeta.find((c) => c.code === pin.id);
    if (!meta) return { ...pin, kind: "current" };
    const page = countryPages.find((p) => p.slug === meta.slug);
    const kind: PinKind = meta.code === "IN" ? "hq" : page?.status === "live" ? "current" : "expansion";
    return {
      ...pin,
      kind,
      name: meta.name,
      href: `/countries/${meta.slug}`,
      flag: <Flag code={meta.code} />,
    };
  });
}

export function GlobalMap({ showList = true }: { showList?: boolean }) {
  return <WorldMap pins={getMapPins()} aspect={mapData.aspect} showList={showList} />;
}

const legend = [
  { label: "Head Office (India)", cls: "bg-accent-500" },
  { label: "Current Presence", cls: "bg-brand-600" },
  { label: "Expansion Markets", cls: "bg-brand-300" },
];

export function GlobalPresence() {
  return (
    <section className="py-16 lg:py-20" aria-labelledby="global-heading">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[0.9fr_2fr]">
        <div>
          <p className="eyebrow">Global Footprint</p>
          <h2 id="global-heading" className="mt-3 text-[30px] leading-tight font-extrabold text-ink sm:text-[34px]">
            <span className="text-brand-600">Powering Education</span>
            <br />
            Across <span className="text-accent-500">18</span> Countries
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-body">
            Trusted by educational institutions across Asia, Middle East and beyond. With a strong presence in India,
            Saudi Arabia and UAE, and expanding globally.
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {legend.map((l) => (
              <li key={l.label} className="flex items-center gap-2 text-[12.5px] font-medium text-body">
                <span className={`size-2.5 rounded-full ${l.cls}`} />
                {l.label}
              </li>
            ))}
          </ul>
          <ButtonLink href="/countries" variant="purple" arrow className="mt-7">
            View Our Global Presence
          </ButtonLink>
        </div>
        <GlobalMap />
      </div>
    </section>
  );
}
