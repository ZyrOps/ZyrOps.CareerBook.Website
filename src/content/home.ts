import type { IconKey } from "@/components/ui/icon";

/** Optional `image` paths point under /public; an illustrated placeholder renders until a photo is supplied. */

export const stakeholders: { role: string; focus: string; icon: IconKey; image?: string }[] = [
  { role: "Chairman", focus: "Group Overview", icon: "building" },
  { role: "Principal", focus: "Institution Performance", icon: "school" },
  { role: "Finance Head", focus: "Financial Intelligence", icon: "wallet" },
  { role: "Registrar", focus: "Academic & Exam Insights", icon: "idCard" },
  { role: "Parent", focus: "Student Progress", icon: "heart" },
  { role: "Student", focus: "Learning & Engagement", icon: "graduation" },
];

export const institutionTypes: { title: string; text: string; icon: IconKey; href: string; image?: string; scene: "campus" | "college" | "dome" | "people" | "stadium" | "tower" }[] = [
  { title: "Schools", text: "K-12 and higher secondary schools", icon: "school", href: "/industries/schools", scene: "campus" },
  { title: "Colleges", text: "Arts, Science, Professional and Autonomous Colleges", icon: "graduation", href: "/industries/colleges", scene: "college" },
  { title: "Universities", text: "State, Private and Deemed Universities", icon: "university", href: "/industries/universities", scene: "dome" },
  { title: "Training Institutions", text: "Skill development and vocational training centres", icon: "target", href: "/industries/training-academies", scene: "people" },
  { title: "Sports Academies", text: "Sports and wellness institutions", icon: "trophy", href: "/industries/sports-academies", scene: "stadium" },
  { title: "Educational Groups", text: "Multi-campus institutions and trusts", icon: "building", href: "/industries/educational-groups", scene: "tower" },
];

export const hubModules: { label: string; icon: IconKey; tone: string; href: string }[] = [
  { label: "Admissions & CRM", icon: "userPlus", tone: "bg-pink-50 text-pink-600", href: "/solutions/student-recruitment-admission-crm" },
  { label: "Academics & Learning", icon: "book", tone: "bg-accent-50 text-accent-600", href: "/solutions/academics-learning-management" },
  { label: "Examinations & Digital Evaluation", icon: "clipboard", tone: "bg-sky-50 text-sky-600", href: "/solutions/examination-digital-evaluation" },
  { label: "Accreditation & Governance", icon: "shield", tone: "bg-rose-50 text-rose-600", href: "/solutions/accreditation-governance-suite" },
  { label: "Finance & Accounts with Budgeting", icon: "wallet", tone: "bg-emerald-50 text-emerald-600", href: "/solutions/financial-intelligence-suite" },
  { label: "HR & Payroll (Group & Multi-Campus)", icon: "users", tone: "bg-indigo-50 text-indigo-600", href: "/solutions/multi-campus-governance-platform" },
  { label: "Communication & Engagement", icon: "messages", tone: "bg-amber-50 text-amber-600", href: "/solutions/communication-engagement" },
  { label: "Reports & Executive Intelligence", icon: "chartColumn", tone: "bg-brand-50 text-brand-600", href: "/solutions/executive-intelligence-suite" },
];

export const platformHighlights = [
  "Student Lifecycle Management",
  "Academic and Examination Management",
  "Financial and Administrative Control",
  "Accreditation and Compliance",
  "Multi-Campus Governance",
  "AI-powered Insights and Analytics",
];

export const audience: { role: string; text: string; icon: IconKey }[] = [
  { role: "Management", text: "Strategic decision making", icon: "briefcase" },
  { role: "Principal", text: "Institution operations", icon: "school" },
  { role: "Faculty", text: "Teaching and evaluation", icon: "penTool" },
  { role: "Students", text: "Learning and growth", icon: "graduation" },
  { role: "Parents", text: "Engagement and transparency", icon: "heart" },
  { role: "Alumni", text: "Continued association", icon: "users" },
];

export const higherEdModules: { title: string; text: string; icon: IconKey; tone: string; mock: "bars" | "table" | "donut" | "grid"; href: string }[] = [
  { title: "Accreditation & Compliance", text: "NAAC/NBA readiness with evidence management", icon: "badge", tone: "bg-brand-700", mock: "bars", href: "/solutions/accreditation-governance-suite" },
  { title: "Examination Management", text: "Question paper creation, moderation and evaluation", icon: "clipboard", tone: "bg-sky-500", mock: "table", href: "/solutions/examination-digital-evaluation" },
  { title: "Academic Governance", text: "Curriculum, outcome tracking and academic audit", icon: "fileText", tone: "bg-accent-500", mock: "donut", href: "/solutions/academics-learning-management" },
  { title: "Research & PhD Management", text: "Guide allocation, progress tracking and compliance", icon: "search", tone: "bg-brand-400", mock: "grid", href: "/industries/universities" },
];

export const operations: { title: string; text: string; icon: IconKey; tone: string; href: string }[] = [
  { title: "Financial Intelligence", text: "Accounts, budgeting, consolidated reports", icon: "landmark", tone: "bg-accent-50 text-accent-600", href: "/solutions/financial-intelligence-suite" },
  { title: "Centralized Purchase", text: "Group procurement and vendor management", icon: "receipt", tone: "bg-rose-50 text-rose-600", href: "/solutions/multi-campus-governance-platform" },
  { title: "Asset Management", text: "Track and manage institutional assets", icon: "boxes", tone: "bg-emerald-50 text-emerald-600", href: "/platform/product-overview" },
  { title: "HR & Payroll", text: "Staff management for single and multi-campus", icon: "users", tone: "bg-brand-50 text-brand-600", href: "/solutions/multi-campus-governance-platform" },
  { title: "Multi-Campus Governance", text: "Centralized control and consolidated reports", icon: "network", tone: "bg-red-50 text-red-600", href: "/solutions/multi-campus-governance-platform" },
];

/** Credentials as shown in the client design — each must be verified by CareerBook ERP™ before launch. */
export const credentials: { title: string; text: string; icon: IconKey; tone: string }[] = [
  { title: "5 Major Banks", text: "Empanelled across India", icon: "landmark", tone: "text-brand-700" },
  { title: "Audited by Big 4", text: "Companies annually", icon: "chartColumn", tone: "text-brand-600" },
  { title: "ISO Certified", text: "Information security & quality standards", icon: "badge", tone: "text-sky-600" },
  { title: "DPIIT Recognised", text: "Startup · Govt. of India", icon: "award", tone: "text-amber-600" },
  { title: "GeM Registered", text: "Government e-Marketplace", icon: "shield", tone: "text-emerald-600" },
  { title: "Startup India", text: "Recognised startup", icon: "sparkles", tone: "text-accent-600" },
  { title: "Kerala Startup Mission", text: "Registered", icon: "network", tone: "text-sky-500" },
];

/** Testimonials as shown in the client design — replace with approved quotes before launch. */
export const testimonials = [
  {
    quote:
      "CareerBook ERP™ has simplified our campuses onto a single platform. The executive dashboards and financial consolidation have changed the way we manage our institutions.",
    name: "Dr. Joseph Thomas",
    role: "Group Director",
  },
  {
    quote:
      "The examination and accreditation modules have significantly improved our efficiency and compliance. The support team has been outstanding.",
    name: "Dr. Anitha Nair",
    role: "Principal, Autonomous College",
  },
  {
    quote:
      "A scalable solution that supports our academic growth across multiple campuses, with excellent customization and support.",
    name: "Fr. Mathew George",
    role: "Manager, Educational Trust",
  },
];
