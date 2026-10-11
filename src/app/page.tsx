import type { Metadata } from "next";
import { CompleteSolution } from "@/components/home/complete-solution";
import { Credentials } from "@/components/home/credentials";
import { CtaBanner } from "@/components/home/cta-banner";
import { GlobalPresence } from "@/components/home/global-presence";
import { Hero } from "@/components/home/hero";
import { HigherEducation } from "@/components/home/higher-education";
import { InstitutionTypes } from "@/components/home/institution-types";
import { SmarterOperations } from "@/components/home/smarter-operations";
import { Testimonials } from "@/components/home/testimonials";
import { TrustedBy } from "@/components/home/trusted-by";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, softwareSchema } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: `${site.name} | Enterprise Education Operating System (EEOS)`,
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <InstitutionTypes />
      <CompleteSolution />
      <GlobalPresence />
      <HigherEducation />
      <SmarterOperations />
      <Credentials />
      <TrustedBy />
      <Testimonials />
      <CtaBanner />
      <JsonLd data={softwareSchema} />
    </>
  );
}
