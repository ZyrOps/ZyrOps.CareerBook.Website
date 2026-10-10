import { AE, BH, IN, KW, OM, QA, SA } from "country-flag-icons/react/3x2";
import type { CountryMeta } from "@/content/countries";

const flags = { IN, SA, AE, BH, QA, KW, OM };

export function Flag({ code, className = "h-3.5 w-[21px]" }: { code: CountryMeta["code"]; className?: string }) {
  const F = flags[code];
  return <F title="" aria-hidden="true" className={`${className} shrink-0 rounded-[2px] shadow-[0_0_0_1px_rgb(0_0_0/0.06)]`} />;
}
