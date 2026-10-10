import type { ElementType } from "react";

export function Highlight({ text, highlight, className = "text-brand-600" }: { text: string; highlight?: string; className?: string }) {
  if (!highlight || !text.includes(highlight)) return <>{text}</>;
  const i = text.indexOf(highlight);
  return (
    <>
      {text.slice(0, i)}
      <span className={className}>{highlight}</span>
      {text.slice(i + highlight.length)}
    </>
  );
}

export function SectionHeading({
  title,
  highlight,
  subtitle,
  eyebrow,
  align = "center",
  as: Tag = "h2",
  className = "",
}: {
  title: string;
  highlight?: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "center" | "left";
  as?: ElementType;
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <Tag className="text-3xl leading-tight font-extrabold sm:text-[38px]">
        <Highlight text={title} highlight={highlight} />
      </Tag>
      {subtitle && <p className="mt-3 text-base leading-7 text-muted sm:text-[17px]">{subtitle}</p>}
    </div>
  );
}
