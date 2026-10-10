import { WhatsAppIcon } from "@/components/brand/social-icons";
import { site } from "@/lib/site";

export function WhatsAppButton() {
  const text = encodeURIComponent("Hello CareerBook ERP™ team, I'd like to know more about the platform.");
  return (
    <a
      href={`https://wa.me/${site.contact.whatsapp}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with CareerBook ERP™ on WhatsApp"
      className="fixed right-5 bottom-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgb(37_211_102/0.7)] transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
