import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";

export function CtaBanner({
  title = "Ready to Transform Your Institution?",
  text = "Discover how CareerBook ERP™ can help you achieve greater efficiency, transparency and growth.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="pb-20 lg:pb-24" aria-labelledby="cta-heading">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-50 via-brand-100/70 to-brand-50 px-6 py-10 sm:px-12 sm:py-12">
          <div aria-hidden="true" className="dot-grid absolute inset-y-0 right-0 w-1/2 opacity-70 [mask-image:linear-gradient(to_left,black,transparent)]" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h2 id="cta-heading" className="text-2xl font-extrabold text-brand-950 sm:text-3xl">
                {title}
              </h2>
              <p className="mt-2 text-[15px] leading-7 text-body">{text}</p>
            </div>
            <div className="flex flex-col items-start gap-3 sm:items-center">
              <ButtonLink href="/request-demo" arrow className="min-w-56">
                Request a Demo
              </ButtonLink>
              <p className="text-sm text-muted">
                or{" "}
                <Link href="/contact" className="font-bold text-accent-600 underline-offset-4 hover:underline">
                  Contact Sales
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
