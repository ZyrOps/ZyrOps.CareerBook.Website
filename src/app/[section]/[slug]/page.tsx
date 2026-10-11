import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPages, getPage, pageHref } from "@/content";
import { ContentPageView } from "@/components/page/content-page";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return allPages.map((p) => ({ section: p.section, slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[section]/[slug]">): Promise<Metadata> {
  const { section, slug } = await params;
  const page = getPage(section, slug);
  if (!page) return {};
  return buildMetadata({ title: page.metaTitle, description: page.description, path: pageHref(page) });
}

export default async function ContentRoute({ params }: PageProps<"/[section]/[slug]">) {
  const { section, slug } = await params;
  const page = getPage(section, slug);
  if (!page) notFound();
  return <ContentPageView page={page} />;
}
