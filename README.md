# CareerBook ERP™ Website

Marketing website for **CareerBook ERP™ — Enterprise Education Operating System (EEOS)**.

Built with Next.js 16 (App Router, Cache Components), React 19, TypeScript and Tailwind CSS v4. Every content page is statically prerendered for speed and SEO.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in values
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Local development |
| `npm run build` | Production build (prerenders all pages) |
| `npm run lint` / `npm run typecheck` | Quality checks |
| `npm run generate:map` | Regenerates `public/maps/world-dots.svg` and `src/content/map-pins.json` |

## Environment variables

See `.env.example`. Key values:

- `NEXT_PUBLIC_SITE_URL` – production domain; drives canonical URLs, sitemap, Open Graph and schema.
- `NEXT_PUBLIC_GA_ID` – Google Analytics 4. Script loads only when set; lead submissions fire a `generate_lead` event.
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` – Search Console HTML-tag token.
- `NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_CONTACT_PHONE` – contact details.
- `CRM_WEBHOOK_URL` (+ optional `CRM_WEBHOOK_TOKEN`) – lead forms POST JSON here (HubSpot, Zoho, Salesforce, LeadSquared, Zapier, Make, n8n…).

## Project structure

```
src/
  app/
    page.tsx                 Homepage
    [section]/page.tsx       Section landing pages (/platform, /solutions, …)
    [section]/[slug]/        All content pages, generated from src/content
    contact/, request-demo/  Lead capture pages
    api/lead/route.ts        Lead endpoint (validation, honeypot, CRM forwarding)
    sitemap.ts, robots.ts, manifest.ts, opengraph-image.tsx, icon.svg
  content/                   All website copy (CMS-ready, typed)
  components/
    home/                    Homepage sections
    diagrams/                Architecture, governance, financial diagrams
    page/                    Inner page templates
    layout/                  Header (mega menu), footer, WhatsApp button
    seo/                     JSON-LD + Google Analytics
  lib/                       Site config, SEO helpers, lead validation
  proxy.ts                   Returns hard 404s for unknown content URLs
```

## Editing content

All copy lives in `src/content/*.ts`. To add a page, append an entry to the relevant file (for example `solutions.ts`). The route, navigation menu, sitemap, breadcrumbs and schema markup update automatically.

- `section` + `slug` define the URL (`/solutions/my-new-suite`).
- `visual` attaches a diagram: `architecture`, `lifecycle`, `governance`, `dashboard`, `financial` or `map`.
- `faqs` render an accordion and FAQPage schema.
- Customer logos: put approved files in `public/clients/` and set `logo` in `src/content/customers.ts`.

The content model is plain, serialisable data, so it can be moved to a headless CMS (Sanity, Strapi, Payload, Contentful) by replacing the imports in `src/content/index.ts` with CMS queries.

## SEO

- Unique title, description, canonical, Open Graph and Twitter tags per page
- Schema.org: Organization, WebSite, SoftwareApplication, BreadcrumbList, FAQPage, WebPage, ItemList
- XML sitemap, robots.txt, web manifest, generated Open Graph image
- Semantic HTML, a single H1 per page, accessible navigation, skip link
- Security headers (HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy)

## Multi-language and GCC readiness

The root layout sets `lang` and `dir`. Country pages carry ISO codes. To add Arabic, introduce a `[locale]` segment above the routes, localise `src/content`, set `dir="rtl"` for `ar`, and add `alternates.languages` (hreflang) in `src/lib/seo.ts`.

## Items to confirm with CareerBook before launch

- Customer logos and permission to show them (placeholders currently show names as text)
- Full list of the 18 countries (only India and the GCC markets are named on the map)
- Leadership profiles, certification status (ISO), social profile URLs, phone, email and WhatsApp
- Legal and Trust Center copy must be reviewed by legal counsel
- Production domain (`NEXT_PUBLIC_SITE_URL`)
