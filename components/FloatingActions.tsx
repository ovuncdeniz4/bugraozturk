import { InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import { chatIsWhatsapp, site, whatsappUrl } from "@/lib/site";

/** Sağ alt sabit Instagram ve sohbet (WhatsApp veya Instagram DM) düğmeleri. */
export function FloatingActions() {
  const chatHref = whatsappUrl();
  const chatLabel = chatIsWhatsapp()
    ? "WhatsApp ile yazın"
    : "Instagram’dan mesaj gönderin";

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
      <a
        href={site.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sage-dark text-cream shadow-lg transition-transform hover:scale-105"
        aria-label="Instagram profilini aç"
      >
        <InstagramIcon className="h-5 w-5" />
      </a>
      <a
        href={chatHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
        aria-label={chatLabel}
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
