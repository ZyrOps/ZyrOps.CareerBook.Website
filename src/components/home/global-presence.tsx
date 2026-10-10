import mapData from "@/content/map-pins.json";
import { countryMeta, countryPages } from "@/content/countries";
import { SectionHeading } from "@/components/ui/section-heading";
import { Flag } from "./flag";
import { WorldMap, type MapPin } from "./world-map";

export function getMapPins(): MapPin[] {
  return mapData.pins.map((pin) => {
    const meta = countryMeta.find((c) => c.code === pin.id);
    if (!meta) return pin;
    const page = countryPages.find((p) => p.slug === meta.slug);
    return {
      ...pin,
      name: meta.name,
      href: `/countries/${meta.slug}`,
      live: page?.status === "live",
      flag: <Flag code={meta.code} />,
    };
  });
}

export function GlobalMap({ showList = true }: { showList?: boolean }) {
  return <WorldMap pins={getMapPins()} aspect={mapData.aspect} showList={showList} />;
}

export function GlobalPresence() {
  return (
    <section className="py-20 lg:py-24" aria-labelledby="global-heading">
      <div className="container-x">
        <SectionHeading
          id="global-heading"
          title="A Global Partner in Education"
          highlight="Global Partner"
          subtitle="Trusted by 1,500+ educational institutions across 18 countries"
        />
        <div className="mt-12">
          <GlobalMap />
        </div>
      </div>
    </section>
  );
}
