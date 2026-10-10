import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon, type IconKey } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";

const suites: { title: string; text: string; icon: IconKey; href: string }[] = [
  { title: "Executive Intelligence", text: "Real-time dashboards for smarter decisions", icon: "dashboard", href: "/solutions/executive-intelligence-suite" },
  { title: "Financial Intelligence", text: "Complete financial visibility and control", icon: "chartPie", href: "/solutions/financial-intelligence-suite" },
  { title: "Multi-Campus Governance", text: "Manage multiple institutions with centralised control", icon: "network", href: "/solutions/multi-campus-governance-platform" },
  { title: "Accreditation & Governance", text: "Simplify compliance and quality assurance", icon: "badge", href: "/solutions/accreditation-governance-suite" },
  { title: "Admissions CRM", text: "Attract, engage and convert more students", icon: "userPlus", href: "/solutions/student-recruitment-admission-crm" },
  { title: "Academics & Learning", text: "Manage curriculum, classes and outcomes", icon: "book", href: "/solutions/academics-learning-management" },
  { title: "Examination & Evaluation", text: "Flexible and secure assessment management", icon: "clipboard", href: "/solutions/examination-digital-evaluation" },
  { title: "Communication & Engagement", text: "Stay connected with students, parents and staff", icon: "messages", href: "/solutions/communication-engagement" },
];

export function SolutionSuites() {
  return (
    <section className="bg-surface py-20 lg:py-24" aria-labelledby="suites-heading">
      <div className="container-x">
        <SectionHeading
          id="suites-heading"
          title="Powerful Solution Suites for Every Need"
          highlight="Solution Suites"
          subtitle="Comprehensive, integrated and industry-specific solutions."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {suites.map((s, i) => (
            <li key={s.title}>
              <Link
                href={s.href}
                className="group relative flex h-full gap-4 rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card"
              >
                <span
                  className={`grid size-12 shrink-0 place-items-center rounded-xl ${
                    i % 2 ? "bg-accent-50 text-accent-600" : "bg-brand-50 text-brand-600"
                  }`}
                >
                  <Icon name={s.icon} className="size-6" />
                </span>
                <span>
                  <span className="block text-[15px] leading-snug font-bold text-ink">{s.title}</span>
                  <span className="mt-1.5 block text-[13px] leading-5 text-muted">{s.text}</span>
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="absolute top-4 right-4 size-4 text-brand-400 opacity-0 transition-opacity group-hover:opacity-100"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
