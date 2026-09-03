import { AppointmentLink } from "@/components/AppointmentLink";
import { WhatsAppIcon } from "@/components/Icons";

/** Mobilde alt bar, masaüstünde köşe düğmesi — tek randevu aksiyonu. */
export function FloatingActions() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-sand bg-cream/95 p-3 backdrop-blur-md md:hidden">
        <AppointmentLink className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 text-sm font-semibold text-white">
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp’tan Randevu Al
        </AppointmentLink>
      </div>
      <AppointmentLink
        className="fixed right-5 bottom-5 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg md:inline-flex"
        aria-label="WhatsApp’tan randevu al"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </AppointmentLink>
    </>
  );
}
