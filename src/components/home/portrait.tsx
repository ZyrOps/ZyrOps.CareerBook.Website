import Image from "next/image";
import { Icon, type IconKey } from "@/components/ui/icon";

const tones = [
  "from-brand-100 to-brand-200 text-brand-700",
  "from-accent-50 to-accent-200 text-accent-700",
  "from-sky-50 to-sky-200 text-sky-700",
  "from-emerald-50 to-emerald-200 text-emerald-700",
];

export function Portrait({
  name,
  image,
  icon,
  initials,
  index = 0,
  className = "size-16",
}: {
  name: string;
  image?: string;
  icon?: IconKey;
  initials?: string;
  index?: number;
  className?: string;
}) {
  return (
    <span className={`relative block shrink-0 overflow-hidden rounded-full ring-4 ring-white shadow-card ${className}`}>
      {image ? (
        <Image src={image} alt={name} fill sizes="96px" className="object-cover" />
      ) : (
        <span className={`grid size-full place-items-center bg-gradient-to-br ${tones[index % tones.length]}`} role="img" aria-label={name}>
          {icon ? <Icon name={icon} className="size-[42%]" /> : <span className="text-lg font-extrabold">{initials}</span>}
        </span>
      )}
    </span>
  );
}
