import { ButtonLink } from "@/components/ui/button";
import { Icon, type IconKey } from "@/components/ui/icon";
import { stats } from "@/lib/site";
import { HeroDashboard } from "./hero-dashboard";

export function StatsRow({ className = "" }: { className?: string }) {
  return (
    <ul className={`grid grid-cols-2 gap-y-6 sm:grid-cols-[0.9fr_0.8fr_1.4fr_1fr] ${className}`}>
      {stats.map((s, i) => (
        <li key={s.label} className={`px-1 sm:px-4 ${i > 0 ? "sm:border-l sm:border-line" : "sm:pl-0"}`}>
          <Icon name={s.icon as IconKey} className="size-7 text-brand-600" />
          <p className="mt-2 text-2xl font-extrabold tracking-tight whitespace-nowrap text-ink">{s.value}</p>
          <p className="mt-0.5 text-[12.5px] leading-snug font-medium text-muted">{s.label}</p>
        </li>
      ))}
    </ul>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 via-white to-white">
      <div aria-hidden="true" className="dot-grid absolute inset-y-0 right-0 w-1/2 [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]" />
      <div aria-hidden="true" className="absolute -top-40 right-[-10%] size-[620px] rounded-full bg-brand-200/40 blur-3xl" />

      <div className="container-x relative grid items-center gap-12 pt-14 pb-16 lg:grid-cols-[1fr_1.08fr] lg:pt-20 lg:pb-24">
        <div className="animate-rise">
          <p className="eyebrow">Global Education Technology Platform</p>
          <h1 className="mt-4 text-[40px] leading-[1.06] font-extrabold text-brand-950 sm:text-5xl lg:text-[56px]">
            Run Your Entire Institution from a <span className="text-accent-500">Single Platform</span>
          </h1>
          <p className="mt-6 max-w-xl text-[16.5px] leading-7 text-body">
            CareerBook ERP™ is the Enterprise Education Operating System (EEOS) empowering educational institutions
            through admissions, academics, examinations, finance, accreditation, governance and communication.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/request-demo" arrow>
              Request a Demo
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              Schedule Consultation
            </ButtonLink>
          </div>
          <StatsRow className="mt-12" />
        </div>

        <div className="animate-rise [animation-delay:150ms] lg:-mr-6">
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}
