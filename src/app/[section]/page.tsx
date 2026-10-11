import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isSectionKey, sectionKeys, sections } from "@/content";
import { SectionIndex } from "@/components/page/section-index";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return sectionKeys.map((section) => ({ section }));
}

export async function generateMetadata({ params }: PageProps<"/[section]">): Promise<Metadata> {
  const { section } = await params;
  if (!isSectionKey(section)) return {};
  const s = sections[section];
  return buildMetadata({ title: s.metaTitle, description: s.description, path: `/${s.key}` });
}

export default async function SectionPage({ params }: PageProps<"/[section]">) {
  const { section } = await params;
  if (!isSectionKey(section)) notFound();
  return <SectionIndex section={sections[section]} />;
}
