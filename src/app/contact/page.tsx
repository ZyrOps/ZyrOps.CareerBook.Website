import type { Metadata } from "next";
import { LeadPage } from "@/components/page/lead-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | Sales, Consultation & Partnerships",
  description:
    "Contact CareerBook ERP™ for sales enquiries, consultations, partnerships and support across India, Saudi Arabia, UAE and the GCC.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <LeadPage
      intent="contact"
      crumb={{ name: "Contact Us", path: "/contact" }}
      eyebrow="Contact Us"
      title="Let's Talk About Your Institution"
      highlight="Your Institution"
      intro="Whether you run a single campus or a national education group, our team will help you plan your journey to an Enterprise Education Operating System."
      points={[
        "Schedule a strategic consultation with our experts",
        "Discuss multi-campus and GCC requirements",
        "Explore partnership and integration opportunities",
      ]}
    />
  );
}
