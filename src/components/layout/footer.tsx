import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { FacebookIcon, InstagramIcon, LinkedInIcon, XIcon, YouTubeIcon } from "@/components/brand/social-icons";
import { site } from "@/lib/site";

const columns = [
  {
    title: "Platform",
    links: [
      ["Product Overview", "/platform/product-overview"],
      ["Architecture", "/platform/product-architecture"],
      ["Integrations", "/platform/integrations"],
      ["Security", "/platform/security"],
      ["Mobile Apps", "/platform/mobile-apps"],
    ],
  },
  {
    title: "Solutions",
    links: [
      ["Executive Intelligence", "/solutions/executive-intelligence-suite"],
      ["Financial Intelligence", "/solutions/financial-intelligence-suite"],
      ["Multi-Campus Governance", "/solutions/multi-campus-governance-platform"],
      ["Accreditation & Governance", "/solutions/accreditation-governance-suite"],
      ["Admissions CRM", "/solutions/student-recruitment-admission-crm"],
    ],
  },
  {
    title: "Industries",
    links: [
      ["Schools", "/industries/schools"],
      ["Colleges", "/industries/colleges"],
      ["Universities", "/industries/universities"],
      ["Training Institutions", "/industries/training-academies"],
      ["Sports Academies", "/industries/sports-academies"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Blogs", "/resources/blogs"],
      ["Case Studies", "/resources/case-studies"],
      ["Whitepapers", "/resources/whitepapers"],
      ["Videos", "/resources/videos"],
      ["Brochures", "/resources/brochures"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Us", "/company/about-us"],
      ["Leadership", "/company/leadership"],
      ["Partners", "/company/partners"],
      ["Careers", "/company/careers"],
      ["Contact Us", "/contact"],
    ],
  },
] as const;

const socials = [
  { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedInIcon },
  { label: "YouTube", href: site.social.youtube, Icon: YouTubeIcon },
  { label: "X", href: site.social.x, Icon: XIcon },
  { label: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: site.social.facebook, Icon: FacebookIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(5,1fr)]">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
            The Enterprise Education Operating System trusted by 1,500+ institutions across 18 countries.
          </p>
          <ul className="mt-5 flex gap-2.5">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`CareerBook ERP™ on ${label}`}
                  className="grid size-9 place-items-center rounded-full bg-brand-50 text-brand-700 transition-colors hover:bg-brand-600 hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="text-sm font-bold text-ink">{col.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {col.links.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-[13.5px] text-muted transition-colors hover:text-brand-700">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-[13px] text-muted md:flex-row">
          <p>© {site.copyrightYear} CareerBook ERP™. All rights reserved. {site.initiative}.</p>
          <div className="flex items-center gap-5">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
              <li><Link href="/trust/privacy-policy" className="hover:text-brand-700">Privacy Policy</Link></li>
              <li><Link href="/trust/terms-and-conditions" className="hover:text-brand-700">Terms &amp; Conditions</Link></li>
              <li><Link href="/trust" className="hover:text-brand-700">Security</Link></li>
              <li><a href="/sitemap.xml" className="hover:text-brand-700">Sitemap</a></li>
            </ul>
            <a
              href="#top"
              aria-label="Back to top"
              className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-600 text-white transition-colors hover:bg-brand-700"
            >
              <ArrowUp aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
