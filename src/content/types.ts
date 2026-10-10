import type { IconKey } from "@/components/ui/icon";

export type SectionKey =
  | "platform"
  | "solutions"
  | "industries"
  | "countries"
  | "resources"
  | "company"
  | "trust";

export type VisualKey =
  | "architecture"
  | "lifecycle"
  | "governance"
  | "dashboard"
  | "financial"
  | "map";

export interface Feature {
  icon: IconKey;
  title: string;
  text: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface LegalBlock {
  heading: string;
  body: string[];
  bullets?: string[];
}

export interface ResourceItem {
  type: string;
  title: string;
  summary: string;
  meta: string;
}

export interface ContentPage {
  slug: string;
  section: SectionKey;
  navLabel: string;
  /** Plain-text H1, also used for breadcrumbs and structured data. */
  title: string;
  /** Substring of `title` rendered in the brand colour. */
  highlight?: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  icon: IconKey;
  visual?: VisualKey;
  featuresTitle?: string;
  features?: Feature[];
  outcomes?: string[];
  metrics?: { value: string; label: string }[];
  faqs?: Faq[];
  status?: "live" | "expanding";
  legal?: LegalBlock[];
  lastUpdated?: string;
  resources?: ResourceItem[];
  /** References in the form `section/slug`. */
  related?: string[];
}

export interface Section {
  key: SectionKey;
  label: string;
  title: string;
  highlight: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
}
