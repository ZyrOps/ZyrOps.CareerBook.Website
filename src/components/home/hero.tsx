import { ButtonLink } from "@/components/ui/button";
import { Icon, type IconKey } from "@/components/ui/icon";
import { stakeholders } from "@/content/home";
import { stats } from "@/lib/site";
import { HeroDashboard } from "./hero-dashboard";
import { PhoneMockup } from "./phone-mockup";
import { Portrait } from "./portrait";

const statIcons: Record<string, IconKey> = { school: "landmark", globe: "globe", users: "users", layers: "layers" };

export function StatsRow({ className = "" }: { className?: string }) {
  return (
    <ul className={`grid grid-cols-2 gap-y-6 sm:grid-cols-[0.9fr_0.8fr_1.4fr_1fr] ${className}`}>
      {stats.map((s) => (
        <li key={s.label} className="flex flex-col items-start px-1 sm:items-center sm:text-center">
          <Icon name={statIcons[s.icon] ?? (s.icon as IconKey)} className="size-8 text-brand-600" />
          <p className="mt-2 text-2xl font-extrabold tracking-tight whitespace-nowrap text-brand-700">{s.value}</p>
          <p className="mt-0.5 text-[12.5px] leading-snug font-medium text-muted">{s.label}</p>
        </li>
      ))}
    </ul>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-lavender via-white to-white">
      <div aria-hidden="true" className="dot-grid absolute inset-y-0 right-0 w-1/2 [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]" />
      <div aria-hidden="true" className="absolute -top-40 right-[-10%] size-[620px] rounded-full bg-brand-200/40 blur-3xl" />

      <div className="container-x relative grid items-center gap-12 pt-12 pb-16 lg:grid-cols-[1fr_1.12fr] lg:pt-16 lg:pb-20">
        <div className="animate-rise">
          <p className="eyebrow">Global Education Technology Platform</p>
          <h1 className="mt-4 text-[38px] leading-[1.08] font-extrabold text-brand-700 sm:text-5xl lg:text-[54px]">
            One Intelligent Platform for <span className="text-accent-500">Every Education Institution</span>
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-7 text-body">
            CareerBook ERP™ is the Enterprise Education Operating System (EEOS) empowering schools, colleges,
            universities, training institutions and educational groups to manage admissions, academics,
            examinations, finance, accreditation, governance and communication through one unified platform.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/request-demo" arrow>
              Request a Demo
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              Schedule a Consultation
            </ButtonLink>
          </div>
          <StatsRow className="mt-12" />
        </div>

        <div className="animate-rise [animation-delay:150ms]">
          <div className="relative lg:-mr-4">
            <p
              aria-hidden="true"
              className="pointer-events-none absolute -top-12 right-24 hidden rotate-[-6deg] font-hand text-xl leading-5 text-brand-600 lg:block"
            >
              Real-time insights
              <br />
              for all stakeholders
              <svg viewBox="0 0 60 40" className="absolute top-6 -left-14 h-10 w-14 text-accent-500" fill="none">
                <path d="M56 6C34 4 14 12 8 34" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M2 26l6 9 7-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </p>
            <div className="sm:pr-16">
              <HeroDashboard />
            </div>
            <PhoneMockup className="absolute -right-2 bottom-6 hidden sm:block" />
          </div>

          <ul className="mt-8 grid grid-cols-3 gap-y-5 sm:grid-cols-6" aria-label="Stakeholder dashboards">
            {stakeholders.map((s, i) => (
              <li key={s.role} className="flex flex-col items-center text-center">
                <Portrait name={s.role} image={s.image} icon={s.icon} index={i} className="size-14" />
                <p className="mt-2 text-[12.5px] font-bold text-ink">{s.role}</p>
                <p className="text-[10.5px] leading-tight text-muted">{s.focus}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
