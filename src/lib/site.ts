export const site = {
  name: "CareerBook ERP™",
  shortName: "CareerBook ERP",
  legalName: "CareerBook ERP",
  tagline: "Enterprise Education Operating System (EEOS)",
  initiative: "An Initiative by d'Katia",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.careerbookerp.com").replace(/\/$/, ""),
  description:
    "CareerBook ERP™ is the Enterprise Education Operating System (EEOS) empowering 1,500+ institutions across 18 countries through admissions, academics, examinations, finance, accreditation, governance and communication on a single platform.",
  logo: "/brand/careerbook-erp-logo.jpeg",
  copyrightYear: 2026,
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "sales@careerbookerp.com",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+91 00000 00000",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "910000000000",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/careerbook-erp",
    facebook: "https://www.facebook.com/careerbookerp",
    x: "https://x.com/careerbookerp",
    youtube: "https://www.youtube.com/@careerbookerp",
  },
  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID,
    googleVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
} as const;

export const stats = [
  { value: "1,500+", label: "Institutions", long: "Educational Institutions", icon: "school" },
  { value: "18", label: "Countries", long: "Countries", icon: "globe" },
  { value: "2.2 Million", label: "Students, Educators & Administrators", long: "Students, Educators & Administrators", icon: "users" },
  { value: "150+", label: "Integrated Modules", long: "Integrated Modules", icon: "layers" },
] as const;

export function absoluteUrl(path = "/") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
