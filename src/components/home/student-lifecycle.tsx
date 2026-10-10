import Link from "next/link";
import { Icon, type IconKey } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";

const steps: { label: string; icon: IconKey; href: string }[] = [
  { label: "Lead Management", icon: "funnel", href: "/solutions/student-recruitment-admission-crm" },
  { label: "Admission & Enrollment", icon: "userPlus", href: "/solutions/student-recruitment-admission-crm" },
  { label: "Student Information", icon: "idCard", href: "/solutions/student-information-system" },
  { label: "Academics & Learning", icon: "book", href: "/solutions/academics-learning-management" },
  { label: "Examination & Evaluation", icon: "clipboard", href: "/solutions/examination-digital-evaluation" },
  { label: "Finance & Fee Management", icon: "wallet", href: "/solutions/financial-intelligence-suite" },
  { label: "Alumni & Engagement", icon: "heart", href: "/solutions/communication-engagement" },
];

export function LifecycleDiagram({ compact = false }: { compact?: boolean }) {
  return (
    <ol className={`relative grid gap-6 ${compact ? "sm:grid-cols-2" : "sm:grid-cols-4 lg:grid-cols-7 lg:gap-2"}`}>
      {!compact && (
        <span
          aria-hidden="true"
          className="absolute top-8 right-[7%] left-[7%] hidden border-t-2 border-dashed border-brand-200 lg:block"
        />
      )}
      {steps.map((s, i) => {
        const orange = i % 2 === 1;
        return (
          <li key={s.label} className="relative">
            <Link
              href={s.href}
              className={`group flex flex-row items-center gap-4 ${compact ? "" : "sm:flex-col sm:gap-0 sm:text-center"}`}
            >
              <span
                className={`relative grid size-16 shrink-0 place-items-center rounded-full border-4 border-white shadow-card transition-transform duration-300 group-hover:-translate-y-1 ${
                  orange ? "bg-accent-50 text-accent-600" : "bg-brand-50 text-brand-600"
                }`}
              >
                <Icon name={s.icon} className="size-7" />
                <span className="absolute -top-1 -right-1 grid size-5 place-items-center rounded-full bg-ink text-[10px] font-bold text-white">
                  {i + 1}
                </span>
              </span>
              <span className="text-sm leading-snug font-bold text-ink transition-colors group-hover:text-brand-700 sm:mt-4 sm:max-w-[9rem]">
                {s.label}
              </span>
            </Link>
            {i < steps.length - 1 && (
              <span aria-hidden="true" className="absolute top-[26px] -right-2 hidden text-brand-300 lg:block">
                ›
              </span>
            )}
          </li>
        );
      })}
    </ol>
  );
}

export function StudentLifecycle() {
  return (
    <section className="py-20 lg:py-24" aria-labelledby="lifecycle-heading">
      <div className="container-x">
        <SectionHeading
          id="lifecycle-heading"
          title="The Complete Student Lifecycle"
          highlight="Student Lifecycle"
          subtitle="From enquiry to alumni — manage every stage on a single platform."
        />
        <div className="mt-14">
          <LifecycleDiagram />
        </div>
      </div>
    </section>
  );
}
