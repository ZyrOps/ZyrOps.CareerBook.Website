import type { ContentPage, Feature } from "./types";

export interface CountryMeta {
  slug: string;
  name: string;
  /** ISO 3166-1 alpha-2, used for flags and hreflang. */
  code: "IN" | "SA" | "AE" | "BH" | "QA" | "KW" | "OM";
  lat: number;
  lng: number;
}

export const countryMeta: CountryMeta[] = [
  { slug: "india", name: "India", code: "IN", lat: 21, lng: 78.5 },
  { slug: "saudi-arabia", name: "Saudi Arabia", code: "SA", lat: 24.2, lng: 45 },
  { slug: "uae", name: "UAE", code: "AE", lat: 24.4, lng: 54.4 },
  { slug: "bahrain", name: "Bahrain", code: "BH", lat: 26.1, lng: 50.6 },
  { slug: "qatar", name: "Qatar", code: "QA", lat: 25.3, lng: 51.2 },
  { slug: "kuwait", name: "Kuwait", code: "KW", lat: 29.3, lng: 47.8 },
  { slug: "oman", name: "Oman", code: "OM", lat: 21.5, lng: 57 },
];

const gccFeatures = (country: string): Feature[] => [
  { icon: "languages", title: "Arabic & English", text: `Fully bilingual interface with right-to-left support for ${country} institutions.` },
  { icon: "receipt", title: "VAT-compliant finance", text: "VAT invoicing, multi-currency collections and local payment gateways." },
  { icon: "landmark", title: "Ministry reporting", text: `Configurable reporting aligned to ${country} ministry and regulator requirements.` },
  { icon: "calendar", title: "Hijri & Gregorian calendars", text: "Dual-calendar academic planning, attendance and reporting." },
];

export const countryPages: ContentPage[] = [
  {
    slug: "india",
    section: "countries",
    navLabel: "India",
    title: "Powering Education Across India",
    highlight: "India",
    metaTitle: "Education ERP for India | CBSE, NEP 2020, NAAC & UDISE+ Ready",
    description:
      "CareerBook ERP™ serves schools, colleges and universities across India with NEP 2020, CBSE, NAAC, NIRF, UDISE+, APAAR and GST-ready capabilities.",
    eyebrow: "India",
    intro:
      "India is CareerBook ERP™'s home market. Institutions across the country trust us to deliver NEP 2020-aligned academics, statutory compliance and regional language support at national scale.",
    icon: "globe",
    status: "live",
    visual: "map",
    features: [
      { icon: "book", title: "NEP 2020 aligned", text: "Multidisciplinary programmes, academic bank of credits and holistic report cards." },
      { icon: "badge", title: "NAAC, NBA & NIRF", text: "Accreditation and ranking data captured from everyday operations." },
      { icon: "landmark", title: "Government integrations", text: "UDISE+, APAAR/ABC, DigiLocker, AISHE and scholarship portals." },
      { icon: "languages", title: "Regional languages", text: "Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi and more." },
    ],
    related: ["industries/schools", "industries/colleges", "solutions/accreditation-governance-suite"],
  },
  {
    slug: "saudi-arabia",
    section: "countries",
    navLabel: "Saudi Arabia",
    title: "Education Technology for Saudi Arabia",
    highlight: "Saudi Arabia",
    metaTitle: "Education ERP for Saudi Arabia | Vision 2030 Ready School & University Platform",
    description:
      "CareerBook ERP™ supports Saudi Arabia's Vision 2030 with Arabic-first, PDPL-compliant school and university management, NCAAA accreditation and in-Kingdom hosting.",
    eyebrow: "Saudi Arabia",
    intro:
      "Supporting the Kingdom's Vision 2030 education transformation, CareerBook ERP™ delivers an Arabic-first platform for international schools, private schools and universities.",
    icon: "globe",
    status: "live",
    visual: "map",
    features: [
      ...gccFeatures("Saudi"),
      { icon: "badge", title: "NCAAA accreditation", text: "Evidence management and reporting aligned to NCAAA standards." },
      { icon: "shield", title: "PDPL & data residency", text: "Saudi PDPL-aligned controls with in-Kingdom hosting options." },
    ],
    related: ["countries/uae", "industries/universities", "solutions/accreditation-governance-suite"],
  },
  {
    slug: "uae",
    section: "countries",
    navLabel: "UAE",
    title: "Education Technology for the United Arab Emirates",
    highlight: "United Arab Emirates",
    metaTitle: "Education ERP for UAE | KHDA, ADEK & MOE Compliant School Platform",
    description:
      "CareerBook ERP™ helps UAE schools and universities meet KHDA, ADEK, SPEA and MOE requirements with bilingual, VAT-ready, cloud-based education management.",
    eyebrow: "United Arab Emirates",
    intro:
      "From Dubai to Abu Dhabi, CareerBook ERP™ supports the UAE's multi-curriculum private school sector with inspection-ready data, bilingual experiences and premium parent engagement.",
    icon: "globe",
    status: "live",
    visual: "map",
    features: [
      ...gccFeatures("UAE"),
      { icon: "clipboard", title: "KHDA & ADEK inspections", text: "Inspection frameworks, wellbeing data and improvement plans in one place." },
      { icon: "book", title: "Multi-curriculum", text: "British, American, IB, Indian and MOE curricula on a single platform." },
    ],
    related: ["countries/saudi-arabia", "industries/schools", "industries/educational-groups"],
  },
  ...(["bahrain", "qatar", "kuwait", "oman"] as const).map((slug): ContentPage => {
    const meta = countryMeta.find((c) => c.slug === slug)!;
    return {
      slug,
      section: "countries",
      navLabel: meta.name,
      title: `Education Technology for ${meta.name}`,
      highlight: meta.name,
      metaTitle: `Education ERP for ${meta.name} | School & University Management Platform`,
      description: `CareerBook ERP™ is expanding across the GCC. Bring an Arabic-first, VAT-ready Enterprise Education Operating System to schools and universities in ${meta.name}.`,
      eyebrow: `${meta.name} · GCC Expansion`,
      intro: `As part of our GCC expansion, CareerBook ERP™ is partnering with forward-thinking institutions in ${meta.name}. Join our early-adopter programme for priority onboarding and local configuration.`,
      icon: "globe",
      status: "expanding",
      visual: "map",
      features: gccFeatures(meta.name),
      related: ["countries/saudi-arabia", "countries/uae", "company/partners"],
    };
  }),
];
