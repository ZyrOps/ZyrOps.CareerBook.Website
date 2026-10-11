import type { Metadata } from "next";
import { LeadPage } from "@/components/page/lead-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Request a Demo | See the Enterprise Education Operating System",
  description:
    "Book a personalised CareerBook ERP™ demo. See executive dashboards, financial intelligence, multi-campus governance and the complete student lifecycle in action.",
  path: "/request-demo",
});

export default function RequestDemoPage() {
  return (
    <LeadPage
      intent="demo"
      crumb={{ name: "Request a Demo", path: "/request-demo" }}
      eyebrow="Book a Demo"
      title="See CareerBook ERP™ in Action"
      highlight="in Action"
      intro="Get a personalised walkthrough of the Enterprise Education Operating System, tailored to your institution, role and country."
      points={[
        "Live executive dashboards for your leadership team",
        "Configured for your board, university or GCC regulator",
        "Implementation roadmap and pricing guidance",
        "No obligation — 45 minutes with a solution expert",
      ]}
    />
  );
}
