import Link from "next/link";
import { CircleCheck, CirclePlay } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tabs } from "@/components/ui/tabs";
import { ExecutiveDashboard } from "./executive-dashboard";
import { roleDashboards } from "./executive-data";

export function ExecutiveIntelligence() {
  return (
    <section className="relative bg-surface py-20 lg:py-24" aria-labelledby="exec-heading">
      <div aria-hidden="true" className="dot-grid absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent_60%)]" />
      <div className="container-x relative">
        <SectionHeading
          id="exec-heading"
          title="Executive Intelligence for Smarter Decisions"
          highlight="Executive Intelligence"
          subtitle="Real-time insights for Chairmen, Principals, Registrars, Finance Heads and Management."
        />
        <div className="mt-10">
          <Tabs
            label="Executive dashboards by role"
            tabs={roleDashboards.map((d) => ({
              id: d.id,
              label: d.role,
              icon: <Icon name={d.icon} className="size-4" />,
              panel: (
                <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.6fr)]">
                  <div>
                    <h3 className="text-2xl font-extrabold">{d.heading}</h3>
                    <ul className="mt-5 space-y-3">
                      {d.points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-[15px] font-medium text-body">
                          <CircleCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-600" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex flex-col items-start gap-4">
                      <ButtonLink href="/solutions/executive-intelligence-suite" arrow>
                        Explore Executive Intelligence
                      </ButtonLink>
                      <Link
                        href="/resources/videos"
                        className="inline-flex items-center gap-2 text-sm font-bold text-brand-700 hover:text-brand-900"
                      >
                        <CirclePlay aria-hidden="true" className="size-6 text-accent-500" />
                        Watch Video
                      </Link>
                    </div>
                  </div>
                  <ExecutiveDashboard data={d} />
                </div>
              ),
            }))}
          />
        </div>
      </div>
    </section>
  );
}
