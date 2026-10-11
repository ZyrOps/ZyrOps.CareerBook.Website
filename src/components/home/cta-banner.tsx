import { ButtonLink } from "@/components/ui/button";

export function CtaBanner({
  title = "Ready to Transform Your Institution?",
  text = "Join leading educational institutions that trust CareerBook ERP™ to drive efficiency, transparency and growth.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="pb-16 lg:pb-20" aria-labelledby="cta-heading">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-800 via-brand-600 to-brand-700 px-6 py-10 sm:px-12 sm:py-12">
          <div aria-hidden="true" className="absolute -top-24 -right-16 size-72 rounded-full bg-white/10 blur-2xl" />
          <div aria-hidden="true" className="absolute -bottom-28 left-1/3 size-72 rounded-full bg-accent-500/20 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <p className="text-[12px] font-bold tracking-[0.16em] text-accent-200 uppercase">Let&apos;s build a smarter education ecosystem</p>
              <h2 id="cta-heading" className="mt-2 text-2xl font-extrabold text-white sm:text-[32px]">
                {title}
              </h2>
              <p className="mt-2 text-[15px] leading-7 text-white/80">{text}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/request-demo" arrow>
                Request a Demo
              </ButtonLink>
              <ButtonLink href="/contact" variant="outlineLight">
                Schedule a Consultation
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
