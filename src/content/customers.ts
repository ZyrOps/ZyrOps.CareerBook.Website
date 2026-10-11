export interface Customer {
  name: string;
  /** Short wordmark used until an approved logo file is supplied. */
  mark: string;
  sub?: string;
  /** Path under /public, e.g. "/clients/amity.svg". */
  logo?: string;
  style: "serif" | "sans" | "caps";
  color: string;
}

export const customers: Customer[] = [
  { name: "Amity University", mark: "AMITY", sub: "UNIVERSITY", style: "serif", color: "#1e3a8a" },
  { name: "Manipal Academy of Higher Education", mark: "MANIPAL", sub: "HIGHER EDUCATION", style: "serif", color: "#9a3412" },
  { name: "Christ University", mark: "CHRIST", sub: "UNIVERSITY", style: "serif", color: "#a16207" },
  { name: "Vellore Institute of Technology", mark: "VIT", sub: "INSTITUTE OF TECHNOLOGY", style: "serif", color: "#1e3a8a" },
  { name: "GEMS Education", mark: "GEMS", sub: "EDUCATION", style: "caps", color: "#1d4ed8" },
  { name: "Nord Anglia Education", mark: "NORD ANGLIA", sub: "EDUCATION", style: "caps", color: "#111827" },
  { name: "Ryan International Group of Institutions", mark: "Ryan", sub: "INTERNATIONAL GROUP", style: "sans", color: "#4338ca" },
];
