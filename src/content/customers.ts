export interface Customer {
  name: string;
  /** Short wordmark used until an approved logo file is supplied. */
  mark: string;
  sub?: string;
  /** Path under /public, e.g. "/clients/gems.svg". */
  logo?: string;
  style: "serif" | "sans" | "caps";
}

export const customers: Customer[] = [
  { name: "GEMS Education", mark: "GEMS", sub: "EDUCATION", style: "caps" },
  { name: "Nord Anglia Education", mark: "NORD ANGLIA", sub: "EDUCATION", style: "serif" },
  { name: "Global Indian International School", mark: "GLOBAL", sub: "SCHOOLS", style: "sans" },
  { name: "Manipal", mark: "MANIPAL", sub: "EDUCATION", style: "serif" },
  { name: "Amity University", mark: "AMITY", sub: "UNIVERSITY", style: "caps" },
  { name: "Delhi Public School", mark: "DPS", sub: "SCHOOLS", style: "sans" },
];
