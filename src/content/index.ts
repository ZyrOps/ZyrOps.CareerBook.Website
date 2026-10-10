import type { IconKey } from "@/components/ui/icon";
import { companyPages } from "./company";
import { countryPages } from "./countries";
import { industryPages } from "./industries";
import { platformPages } from "./platform";
import { resourcePages } from "./resources";
import { solutionPages } from "./solutions";
import { trustPages } from "./trust";
import type { ContentPage, Section, SectionKey } from "./types";

export const sections: Record<SectionKey, Section> = {
  platform: {
    key: "platform",
    label: "Platform",
    title: "The CareerBook ERP™ Platform",
    highlight: "Platform",
    metaTitle: "Platform | Enterprise Education Operating System",
    description:
      "Explore the CareerBook ERP™ platform: product architecture, integrations, security, mobile apps, analytics and CareerBook Intelligence™.",
    eyebrow: "Platform",
    intro:
      "A cloud-native Enterprise Education Operating System with 150+ integrated modules, an AI intelligence layer and enterprise-grade security.",
  },
  solutions: {
    key: "solutions",
    label: "Solutions",
    title: "Solution Suites for Every Need",
    highlight: "Solution Suites",
    metaTitle: "Solutions | Executive, Financial, Governance & Student Lifecycle Suites",
    description:
      "Comprehensive solution suites for executive intelligence, financial intelligence, multi-campus governance, accreditation, admissions, examinations and communication.",
    eyebrow: "Solutions",
    intro: "Comprehensive, integrated and industry-specific solution suites — each powerful alone, transformational together.",
  },
  industries: {
    key: "industries",
    label: "Industries",
    title: "Built for Every Kind of Institution",
    highlight: "Every Kind of Institution",
    metaTitle: "Industries | Schools, Colleges, Universities & Education Groups",
    description:
      "CareerBook ERP™ serves schools, colleges, universities, training academies, sports academies and educational groups.",
    eyebrow: "Industries",
    intro: "Purpose-built editions for schools, colleges, universities, academies and multi-campus educational groups.",
  },
  countries: {
    key: "countries",
    label: "Countries",
    title: "A Global Partner in Education",
    highlight: "Global Partner",
    metaTitle: "Global Presence | CareerBook ERP™ in India, Saudi Arabia, UAE & GCC",
    description:
      "CareerBook ERP™ serves institutions across 18 countries including India, Saudi Arabia and the UAE, with expansion across Bahrain, Qatar, Kuwait and Oman.",
    eyebrow: "Countries",
    intro: "Trusted by 1,500+ educational institutions across 18 countries, with localised editions for India and the GCC.",
  },
  resources: {
    key: "resources",
    label: "Resources",
    title: "Resource Center",
    highlight: "Resource Center",
    metaTitle: "Resource Center | Blogs, Whitepapers, Case Studies & Videos",
    description:
      "Blogs, news, whitepapers, brochures, videos and case studies for education leaders from CareerBook ERP™.",
    eyebrow: "Resources",
    intro: "Insights, research and success stories to help you lead your institution's transformation.",
  },
  company: {
    key: "company",
    label: "Company",
    title: "About CareerBook ERP™",
    highlight: "CareerBook ERP™",
    metaTitle: "Company | About CareerBook ERP™",
    description: "Learn about CareerBook ERP™, our leadership, careers, partner programme and certifications.",
    eyebrow: "Company",
    intro: "We are building the operating system for global education.",
  },
  trust: {
    key: "trust",
    label: "Security & Compliance",
    title: "Security & Compliance",
    highlight: "Compliance",
    metaTitle: "Trust Center | Security, Privacy & Compliance",
    description:
      "CareerBook ERP™ Trust Center: data security, privacy policy, terms, DPA summary, SLA, backup policy and disaster recovery.",
    eyebrow: "Trust Center",
    intro: "Transparency about how we protect, process and keep available the data institutions entrust to us.",
  },
};

export const allPages: ContentPage[] = [
  ...platformPages,
  ...solutionPages,
  ...industryPages,
  ...countryPages,
  ...resourcePages,
  ...companyPages,
  ...trustPages,
];

export const sectionKeys = Object.keys(sections) as SectionKey[];

export function isSectionKey(value: string): value is SectionKey {
  return value in sections;
}

export function pagesIn(section: SectionKey) {
  return allPages.filter((p) => p.section === section);
}

export function getPage(section: string, slug: string) {
  return allPages.find((p) => p.section === section && p.slug === slug);
}

export function pageHref(page: Pick<ContentPage, "section" | "slug">) {
  return `/${page.section}/${page.slug}`;
}

export function getRef(ref: string) {
  const [section, slug] = ref.split("/");
  return getPage(section, slug);
}

export type NavItem = { label: string; href: string; icon: IconKey };
export type NavGroup = { label: string; href: string; items: NavItem[] };

const toNav = (section: SectionKey): NavItem[] =>
  pagesIn(section).map((p) => ({ label: p.navLabel, href: pageHref(p), icon: p.icon }));

export const mainNav: NavGroup[] = [
  { label: "Platform", href: "/platform", items: toNav("platform") },
  { label: "Solutions", href: "/solutions", items: toNav("solutions") },
  { label: "Industries", href: "/industries", items: toNav("industries") },
  { label: "Countries", href: "/countries", items: toNav("countries") },
  { label: "Resources", href: "/resources", items: toNav("resources") },
  {
    label: "Company",
    href: "/company",
    items: [...toNav("company"), { label: "Contact Us", href: "/contact", icon: "mail" }],
  },
];

export type { ContentPage, Section, SectionKey } from "./types";
