export const roles = [
  "Chairman",
  "CEO",
  "Secretary / Trustee",
  "Principal",
  "Registrar",
  "Finance Director",
  "Academic Director",
  "IT Head",
  "Other",
] as const;

export const institutionTypes = [
  "School",
  "College",
  "University",
  "Training Academy",
  "Sports Academy",
  "Educational Group / Trust",
] as const;

export const leadCountries = ["India", "Saudi Arabia", "UAE", "Bahrain", "Qatar", "Kuwait", "Oman", "Other"] as const;

export const studentRanges = ["Under 1,000", "1,000 – 5,000", "5,000 – 20,000", "20,000 – 50,000", "50,000+"] as const;

export type Lead = {
  intent: "demo" | "contact";
  name: string;
  email: string;
  phone: string;
  institution: string;
  role: string;
  institutionType: string;
  country: string;
  students?: string;
  message?: string;
  consent: boolean;
  page?: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+\d][\d\s()-]{6,19}$/;

export function validateLead(input: Record<string, unknown>): { lead?: Lead; errors: Record<string, string> } {
  const s = (k: string, max = 200) => String(input[k] ?? "").trim().slice(0, max);
  const lead: Lead = {
    intent: input.intent === "contact" ? "contact" : "demo",
    name: s("name", 120),
    email: s("email", 160).toLowerCase(),
    phone: s("phone", 24),
    institution: s("institution", 160),
    role: s("role", 60),
    institutionType: s("institutionType", 60),
    country: s("country", 60),
    students: s("students", 40) || undefined,
    message: s("message", 2000) || undefined,
    consent: input.consent === true || input.consent === "on" || input.consent === "true",
    page: s("page", 300) || undefined,
  };
  const errors: Record<string, string> = {};
  if (lead.name.length < 2) errors.name = "Please enter your full name.";
  if (!EMAIL.test(lead.email)) errors.email = "Please enter a valid work email.";
  if (!PHONE.test(lead.phone)) errors.phone = "Please enter a valid phone number.";
  if (lead.institution.length < 2) errors.institution = "Please enter your institution name.";
  if (!lead.role) errors.role = "Please select your role.";
  if (!lead.institutionType) errors.institutionType = "Please select an institution type.";
  if (!lead.country) errors.country = "Please select your country.";
  if (!lead.consent) errors.consent = "Please accept to be contacted.";
  return Object.keys(errors).length ? { errors } : { lead, errors };
}
