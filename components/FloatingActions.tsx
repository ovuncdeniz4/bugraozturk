import { AppointmentLink } from "@/components/AppointmentLink";
import { InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import { site } from "@/lib/site";

/** Sağ alt Instagram ve WhatsApp kısayolları. */
export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-5 z-50 flex flex-col gap-3">
      <a
        href={site.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sage-dark text-cream shadow-lg"
        aria-label="Instagram profilini aç"
      >
        <InstagramIcon className="h-5 w-5" />
      </a>
      <AppointmentLink
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
        aria-label="WhatsApp’tan randevu al"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </AppointmentLink>
    </div>
  );
}
