import { AppointmentLink } from "@/components/AppointmentLink";
import { InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import { site } from "@/lib/site";

/** Sağ alt Instagram + WhatsApp; mobilde sticky randevu barının üstünde. */
export function FloatingActions() {
  return (
    <>
      <div className="fixed right-4 bottom-20 z-50 flex flex-col gap-3 md:bottom-5">
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
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sand bg-cream/95 p-3 backdrop-blur-md md:hidden">
        <AppointmentLink className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 text-sm font-semibold text-white">
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp’tan Randevu Al
        </AppointmentLink>
      </div>
    </>
  );
}
