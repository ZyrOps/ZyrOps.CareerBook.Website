import type { Metadata } from "next";
import { CtaBanner } from "@/components/home/cta-banner";
import { ExecutiveIntelligence } from "@/components/home/executive-intelligence";
import { GlobalPresence } from "@/components/home/global-presence";
import { Hero } from "@/components/home/hero";
import { SolutionSuites } from "@/components/home/solution-suites";
import { StudentLifecycle } from "@/components/home/student-lifecycle";
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
      <GlobalPresence />
      <ExecutiveIntelligence />
      <StudentLifecycle />
      <SolutionSuites />
      <TrustedBy />
      <CtaBanner />
      <JsonLd data={softwareSchema} />
    </>
  );
}
